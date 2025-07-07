import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { UseRefComponent } from "./UseRefComponent";

describe("UseRefComponent", () => {
  it("focuses the input when the button is clicked", () => {
    render(<UseRefComponent />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /focus input/i });

    // Ensure input does not have focus initially
    expect(document.activeElement).not.toBe(input);

    // Click the button
    fireEvent.click(button);

    // Now input should have focus
    expect(document.activeElement).toBe(input);
  });
});