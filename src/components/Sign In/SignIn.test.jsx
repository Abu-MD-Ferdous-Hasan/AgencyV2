import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignIn from "./SignIn";
import { AuthProvider } from "../../context/AuthContext";
import toast from "react-hot-toast";

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

// Mock @tanstack/react-query useMutation to control isPending
let mockMutationState = { isPending: false };
jest.mock("@tanstack/react-query", () => {
  const actual = jest.requireActual("@tanstack/react-query");
  return {
    ...actual,
    useMutation: (opts) => ({
      mutate: (data) => {
        if (mockMutationState.onMutate) mockMutationState.onMutate();
        if (opts && opts.mutationFn) {
          Promise.resolve(opts.mutationFn(data))
            .then((result) => opts.onSuccess && opts.onSuccess(result))
            .catch((err) => opts.onError && opts.onError(err));
        }
      },
      isPending: mockMutationState.isPending,
    }),
  };
});

// Mock fetch
global.fetch = jest.fn();

const queryClient = new QueryClient();

const renderSignIn = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
};

describe("SignIn Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    mockMutationState = { isPending: false };
  });

  test("renders sign in form", () => {
    renderSignIn();
    expect(screen.getByText(/Sign in to your account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Sign in/i })
    ).toBeInTheDocument();
  });

  test("shows required error for empty email", async () => {
    renderSignIn();
    const emailInput = screen.getByLabelText(/Email address/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "validpassword" } });
    fireEvent.blur(emailInput);
    const submitButton = screen.getByRole("button", { name: /Sign in/i });
    fireEvent.click(submitButton);
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
  });

  test("shows validation error for short password", async () => {
    renderSignIn();
    const passwordInput = screen.getByLabelText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    fireEvent.blur(passwordInput);
    // Submit the form to trigger validation error rendering
    const submitButton = screen.getByRole("button", { name: /Sign in/i });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.getByText(/Password must be at least 6 characters/i)
      ).toBeInTheDocument();
    });
  });

  test("submits form with valid data and handles successful login", async () => {
    const mockResponse = {
      success: true,
      accessToken: "mock-token",
      userId: "123",
      profileImage: "image.jpg",
      message: "Login successful",
    };
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });
    renderSignIn();
    const emailInput = screen.getByLabelText(/Email address/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /Sign in/i });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining("/signin"),
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "test@example.com",
            password: "password123",
          }),
        })
      );
      expect(toast.success).toHaveBeenCalledWith("Login successful");
      expect(localStorage.getItem("profileImage")).toBe("image.jpg");
    });
  });

  test("handles network error during login", async () => {
    global.fetch.mockRejectedValueOnce(new Error("Network error"));
    renderSignIn();
    const emailInput = screen.getByLabelText(/Email address/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /Sign in/i });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Network error");
    });
  });

  test("handles server error response", async () => {
    const errorMessage = "Invalid credentials";
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ success: false, message: errorMessage }),
    });
    renderSignIn();
    const emailInput = screen.getByLabelText(/Email address/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /Sign in/i });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(errorMessage);
    });
  });

  test("disables submit button during login", async () => {
    mockMutationState.isPending = true;
    renderSignIn();
    const emailInput = screen.getByLabelText(/Email address/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /Signing in.../i });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);
    expect(submitButton).toHaveTextContent("Signing in...");
    expect(submitButton).toBeDisabled();
  });

  test("renders forgot password link", () => {
    renderSignIn();
    expect(screen.getByText(/Forgot password\?/i)).toBeInTheDocument();
  });

  test("renders register link", () => {
    renderSignIn();
    expect(screen.getByText(/Register for free!/i)).toBeInTheDocument();
  });
});
