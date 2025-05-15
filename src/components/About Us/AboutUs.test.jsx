import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutUs from "./AboutUs";
import { apiService } from "../../utilities/apiService";

// Mock the apiService
jest.mock("../../utilities/apiService", () => ({
  apiService: {
    get: jest.fn(),
  },
}));

// Mock the RoundedButton component
jest.mock("../RoundedButton", () => ({
  RoundedButton: ({ text }) => <button>{text}</button>,
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderAboutUs = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <AboutUs />
    </QueryClientProvider>
  );
};

describe("AboutUs Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
    // Set default mock response to empty array
    apiService.get.mockResolvedValue([]);
  });

  test("renders about us section with correct content", () => {
    renderAboutUs();

    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("AgencyV2")).toBeInTheDocument();
    expect(
      screen.getByText(/At AgencyV2, we're more than just a digital agency/)
    ).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("renders leadership team section", () => {
    renderAboutUs();

    expect(screen.getByText("Our Leadership Team")).toBeInTheDocument();
    expect(
      screen.getByText(/Meet the talented individuals who drive our success/)
    ).toBeInTheDocument();
  });

  test("renders company section", () => {
    renderAboutUs();

    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Founded with a vision to revolutionize digital experiences/
      )
    ).toBeInTheDocument();
  });

  test("renders team section", () => {
    renderAboutUs();

    expect(screen.getByText("Team")).toBeInTheDocument();
    expect(
      screen.getByText(/Our team is our greatest asset/)
    ).toBeInTheDocument();
  });

  test("shows loading state with placeholders", async () => {
    // Mock the API call to never resolve
    apiService.get.mockImplementation(() => new Promise(() => {}));
    renderAboutUs();

    // Check for placeholder elements
    const placeholders = screen
      .getAllByRole("generic")
      .filter((element) => element.className.includes("animate-pulse"));
    expect(placeholders.length).toBeGreaterThan(0);
  });

  test("shows error message when API call fails", async () => {
    const errorMessage = "Failed to fetch team members";
    apiService.get.mockRejectedValueOnce(new Error(errorMessage));
    renderAboutUs();

    await waitFor(() => {
      expect(
        screen.getByText(`An error has occurred: ${errorMessage}`)
      ).toBeInTheDocument();
    });
  });

  test("displays team members when data is loaded", async () => {
    const mockTeamMembers = [
      {
        memberName: "John Doe",
        memberRole: "CEO",
        memberImg: "john.jpg",
      },
      {
        memberName: "Jane Smith",
        memberRole: "CTO",
        memberImg: "jane.jpg",
      },
    ];

    apiService.get.mockResolvedValueOnce(mockTeamMembers);
    renderAboutUs();

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("CEO")).toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
      expect(screen.getByText("CTO")).toBeInTheDocument();
    });

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute("src", "john.jpg");
    expect(images[1]).toHaveAttribute("src", "jane.jpg");
  });
});
