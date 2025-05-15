import React from "react";
import { render, screen } from "@testing-library/react";
import TeamMember from "./TeamMember";

describe("TeamMember Component", () => {
  const mockMember = {
    memberName: "John Doe",
    memberRole: "CEO",
    memberImg: "john.jpg",
  };

  test("renders team member information correctly", () => {
    render(<TeamMember {...mockMember} />);

    // Check if name and role are displayed
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("CEO")).toBeInTheDocument();

    // Check if image is rendered with correct attributes
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "john.jpg");
    expect(image).toHaveAttribute("alt", "photo");
  });

  test("renders with different member information", () => {
    const differentMember = {
      memberName: "Jane Smith",
      memberRole: "CTO",
      memberImg: "jane.jpg",
    };

    render(<TeamMember {...differentMember} />);

    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("CTO")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "jane.jpg");
  });
});
