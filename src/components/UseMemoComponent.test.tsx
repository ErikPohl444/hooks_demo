import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { UseMemoComponent } from "./UseMemoComponent";

describe("UseMemoComponent", () => {
  let alertMock: jest.SpyInstance;
  let logMock: jest.SpyInstance;

  beforeEach(() => {
    alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    logMock = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    alertMock.mockRestore();
    logMock.mockRestore();
  });

  it("renders the correct multiplication result", () => {
    render(<UseMemoComponent a="3" b="4" />);
    expect(screen.getByText("Result: 12")).toBeInTheDocument();
    expect(alertMock).toHaveBeenCalledWith("a: 3, b: 4");
    expect(logMock).toHaveBeenCalledWith("Calculating...");
  });

  it("updates result when props change", () => {
    const { rerender } = render(<UseMemoComponent a="2" b="5" />);
    expect(screen.getByText("Result: 10")).toBeInTheDocument();
    rerender(<UseMemoComponent a="6" b="7" />);
    expect(screen.getByText("Result: 42")).toBeInTheDocument();
    // "Calculating..." should be called each time props change
    expect(logMock).toHaveBeenCalledTimes(2);
  });

  it("does not recalculate if props do not change", () => {
    const { rerender } = render(<UseMemoComponent a="2" b="5" />);
    rerender(<UseMemoComponent a="2" b="5" />);
    expect(logMock).toHaveBeenCalledTimes(1); // Only initial calculation
  });
});