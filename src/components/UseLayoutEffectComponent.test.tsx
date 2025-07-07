import React from "react";
import { render, screen } from "@testing-library/react";
import { UseLayoutEffectComponent } from "./UseLayoutEffectComponent";

describe("UseLayoutEffectComponent", () => {
  beforeEach(() => {
    // Mock clientWidth/clientHeight on the div element
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      get() {
        return 200; // mock width
      }
    });
    Object.defineProperty(HTMLElement.prototype, "clientHeight", {
      configurable: true,
      get() {
        return 150; // mock height
      }
    });
  });

  afterEach(() => {
    // Restore mocks
    jest.restoreAllMocks();
  });

  it("renders the box with correct width and height", () => {
    render(<UseLayoutEffectComponent />);
    expect(screen.getByText(/Width: 200px/)).toBeInTheDocument();
    expect(screen.getByText(/Height: 150px/)).toBeInTheDocument();
  });
});