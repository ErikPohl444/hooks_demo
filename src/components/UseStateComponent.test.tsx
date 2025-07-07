import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { UseStateComponent } from "./UseStateComponent";

describe("UseStateComponent", () => {
  let alertMock: jest.SpyInstance;

  beforeEach(() => {
    alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  it("renders the initial count", () => {
    render(<UseStateComponent />);
    expect(screen.getByText(/Count: 0/)).toBeInTheDocument();
  });

  it("increments the count and triggers alerts", () => {
    render(<UseStateComponent />);
    const incButton = screen.getByRole("button", { name: /increment/i });
    fireEvent.click(incButton);

    expect(screen.getByText(/Count: 1/)).toBeInTheDocument();
    expect(alertMock).toHaveBeenCalledWith(
      "Increment button clicked, activating onClick event in html, which kicked off the increment function"
    );
    expect(alertMock).toHaveBeenCalledWith(
      "setCount function called, which is part of the UseState definition and which updates the count state variable"
    );
  });

  it("decrements the count and triggers alerts", () => {
    render(<UseStateComponent />);
    const decButton = screen.getByRole("button", { name: /decrement/i });
    fireEvent.click(decButton);

    expect(screen.getByText(/Count: -1/)).toBeInTheDocument();
    expect(alertMock).toHaveBeenCalledWith(
      "Decrement button clicked, activating onClick event in html, which kicked off the increment function"
    );
    expect(alertMock).toHaveBeenCalledWith(
      "setCount function called, which is part of the UseState definition and which updates the count state variable"
    );
  });
});