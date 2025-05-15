import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./Register";
import { AuthProvider } from "../../context/AuthContext";
import toast from "react-hot-toast";

// Mock SVG imports
jest.mock("../../utilities/svgs", () => ({
  icons: [
    () => <div data-testid="mock-icon-1" />,
    () => <div data-testid="mock-icon-2" />,
    () => <div data-testid="mock-icon-3" />,
    () => <div data-testid="mock-icon-4" />,
    () => <div data-testid="mock-icon-5" />,
  ],
}));

// Mock react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

// Mock react-hot-toast
jest.mock("react-hot-toast", () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
    error: jest.fn(),
  },
  Toaster: () => null,
}));

// Mock @tanstack/react-query useMutation
let mockMutationState = { isPending: false };
jest.mock("@tanstack/react-query", () => {
  const actual = jest.requireActual("@tanstack/react-query");
  return {
    ...actual,
    useMutation: (opts) => ({
      mutate: (data) => {
        if (mockMutationState.onMutate) mockMutationState.onMutate();
        if (opts && opts.mutationFn) {
          return opts
            .mutationFn(data)
            .then((result) => {
              if (opts.onSuccess) {
                opts.onSuccess(result);
              }
              return result;
            })
            .catch((err) => {
              if (opts.onError) {
                opts.onError(err);
              }
              throw err;
            });
        }
        return Promise.resolve();
      },
      isPending: mockMutationState.isPending,
    }),
  };
});

// Mock fetch
global.fetch = jest.fn();

const queryClient = new QueryClient();

const renderRegister = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
};

describe("Register Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    mockMutationState = { isPending: false };
  });

  test("renders registration form", () => {
    renderRegister();
    expect(screen.getByText(/Register with us/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Gender/i, { selector: "label" })
    ).toBeInTheDocument();
    expect(screen.getByText(/What service do you need/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Register/i })
    ).toBeInTheDocument();
  });

  test("shows required error for empty first name", async () => {
    renderRegister();
    const firstNameInput = screen.getByLabelText(/First Name/i);
    fireEvent.change(firstNameInput, { target: { value: "" } });
    fireEvent.blur(firstNameInput);
    const submitButton = screen.getByRole("button", { name: /Register/i });
    fireEvent.click(submitButton);
    expect(
      await screen.findByText(/First name is required/i)
    ).toBeInTheDocument();
  });

  test("shows validation error for short first name", async () => {
    renderRegister();
    const firstNameInput = screen.getByLabelText(/First Name/i);
    fireEvent.change(firstNameInput, { target: { value: "A" } });
    fireEvent.blur(firstNameInput);
    const submitButton = screen.getByRole("button", { name: /Register/i });
    fireEvent.click(submitButton);
    expect(
      await screen.findByText(/First name must be at least 2 characters/i)
    ).toBeInTheDocument();
  });

  test("shows validation error for invalid email", async () => {
    renderRegister();
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.blur(emailInput);
    const submitButton = screen.getByRole("button", { name: /register/i });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText((content) =>
      /Email is required|Invalid email address/i.test(content)
    );

    expect(errorMessage).toBeInTheDocument();
  });

  test("shows validation error for short password", async () => {
    renderRegister();
    const passwordInput = screen.getByLabelText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    fireEvent.blur(passwordInput);
    const submitButton = screen.getByRole("button", { name: /Register/i });
    fireEvent.click(submitButton);
    expect(
      await screen.findByText(/Password must be at least 6 characters/i)
    ).toBeInTheDocument();
  });

  test("shows error when gender is not selected", async () => {
    renderRegister();
    const submitButton = screen.getByRole("button", { name: /Register/i });
    fireEvent.click(submitButton);
    expect(
      await screen.findByText(/Please select your gender/i)
    ).toBeInTheDocument();
  });

  test("submits form with valid data and handles successful registration with custom message", async () => {
    const mockResponse = {
      success: true,
      accessToken: "mock-token",
      userId: "123",
      message: "User registered successfully",
    };

    // Mock fetch to return our response with 201 status
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 201,
      json: () => Promise.resolve(mockResponse),
    });

    // Add spy on toast.success to see what it's called with
    const toastSpy = jest.spyOn(toast, "success");

    renderRegister();

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    // Select gender using checkbox
    const maleCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(maleCheckbox);

    // Select a service
    const serviceCheckbox = screen.getAllByRole("checkbox")[2];
    fireEvent.click(serviceCheckbox);

    // Submit form
    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    // Wait for the fetch call
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining("/register"),
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: expect.stringContaining("John"),
        })
      );
    });

    // Wait for the success message with more detailed debugging
    await waitFor(() => {
      const calls = toastSpy.mock.calls;
      expect(toast.success).toHaveBeenCalledWith(
        "User registered successfully"
      );
    });

    expect(localStorage.getItem("accessToken")).toBe("mock-token");
    expect(localStorage.getItem("userId")).toBe("123");
  });

  //   test("handles registration errors", async () => {
  //     // Mock fetch to return a failed response
  //     global.fetch.mockResolvedValueOnce({
  //       ok: false,
  //       status: 500,
  //       json: () =>
  //         Promise.resolve({
  //           success: false,
  //           message: "Error registering user" || "Registration failed",
  //         }),
  //     });

  //     renderRegister();

  //     // Fill in form fields
  //     fireEvent.change(screen.getByLabelText(/First Name/i), {
  //       target: { value: "John" },
  //     });
  //     fireEvent.change(screen.getByLabelText(/Last Name/i), {
  //       target: { value: "Doe" },
  //     });
  //     fireEvent.change(screen.getByLabelText(/Email/i), {
  //       target: { value: "john@example.com" },
  //     });
  //     fireEvent.change(screen.getByLabelText(/Password/i), {
  //       target: { value: "password123" },
  //     });

  //     // Select gender using checkbox
  //     const maleCheckbox = screen.getAllByRole("checkbox")[0];
  //     fireEvent.click(maleCheckbox);

  //     // Submit form
  //     fireEvent.click(screen.getByRole("button", { name: /Register/i }));

  //     // Wait for error toast
  //     await waitFor(() => {
  //       expect(toast.error).toHaveBeenCalledWith("Error registering user");
  //     });
  //   });

  test("disables submit button during registration", async () => {
    mockMutationState.isPending = true;
    renderRegister();

    const submitButton = screen.getByRole("button", {
      name: /Registering.../i,
    });
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent("Registering...");
  });

  test("allows selecting multiple services", async () => {
    renderRegister();

    // Get all checkboxes after the gender checkboxes
    const serviceCheckboxes = screen.getAllByRole("checkbox").slice(2);
    const webDesignCheckbox = serviceCheckboxes[0];
    const appDesignCheckbox = serviceCheckboxes[1];

    fireEvent.click(webDesignCheckbox);
    fireEvent.click(appDesignCheckbox);

    expect(webDesignCheckbox).toHaveAttribute("aria-checked", "true");
    expect(appDesignCheckbox).toHaveAttribute("aria-checked", "true");
  });

  test("renders sign in link", () => {
    renderRegister();
    expect(screen.getByText(/Already a member/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  test("renders all mock icons", () => {
    renderRegister();
    expect(screen.getByTestId("mock-icon-1")).toBeInTheDocument();
    expect(screen.getByTestId("mock-icon-2")).toBeInTheDocument();
    expect(screen.getByTestId("mock-icon-3")).toBeInTheDocument();
    expect(screen.getByTestId("mock-icon-4")).toBeInTheDocument();
    expect(screen.getByTestId("mock-icon-5")).toBeInTheDocument();
  });
});
