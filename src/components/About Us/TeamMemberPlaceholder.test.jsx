import React from "react";
import { render, screen } from "@testing-library/react";
import TeamMemberPlaceholder from "./TeamMemberPlaceholder";

describe("TeamMemberPlaceholder Component", () => {
  test("renders placeholder elements", () => {
    render(<TeamMemberPlaceholder />);

    // Check if the placeholder elements are rendered
    const placeholderElements = screen.getAllByRole("generic");
    expect(placeholderElements).toHaveLength(5); // Main div, image placeholder div, and text placeholder divs

    // Check if the image placeholder has the correct classes
    const imagePlaceholder = placeholderElements[3]; // The actual image placeholder div
    expect(imagePlaceholder).toHaveClass(
      "bg-black/20",
      "rounded-full",
      "animate-pulse"
    );

    // Check if the text placeholders have the correct classes
    const textPlaceholders = placeholderElements[4].querySelectorAll("p");
    expect(textPlaceholders).toHaveLength(2);
    textPlaceholders.forEach((placeholder) => {
      expect(placeholder).toHaveClass("animate-pulse");
    });
  });
});
