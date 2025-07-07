import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UseImperativeHandleComponent from "./UseImperativeHandleComponent";

describe("UseImperativeHandleComponent", () => {
  it("focuses the input when button is clicked", () => {
    render(<UseImperativeHandleComponent />);
    const input = screen.getByPlaceholderText("Type here") as HTMLInputElement;
    const button = screen.getByRole("button", { name: /focus input/i });

    // Ensure input does not have focus initially
    expect(document.activeElement).not.toBe(input);

    // Click the button
    fireEvent.click(button);

    // Now input should have focus
    expect(document.activeElement).toBe(input);
  });
});