import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { UseReducerComponent } from "./UseReducerComponent";

describe("UseReducerComponent", () => {
  it("renders shopping cart heading and initially empty cart", () => {
    render(<UseReducerComponent />);
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
    // The cart list should be empty at first
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  it("adds an item to the cart when 'Add Item' is clicked", () => {
    render(<UseReducerComponent />);
    const addButton = screen.getByRole("button", { name: /add item/i });
    fireEvent.click(addButton);

    expect(screen.getByText("Item 1 - $9.99")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /remove/i })).toBeInTheDocument();
  });

  it("removes an item from the cart when 'Remove' is clicked", () => {
    render(<UseReducerComponent />);
    const addButton = screen.getByRole("button", { name: /add item/i });
    fireEvent.click(addButton);

    const removeButton = screen.getByRole("button", { name: /remove/i });
    fireEvent.click(removeButton);

    expect(screen.queryByText("Item 1 - $9.99")).not.toBeInTheDocument();
  });
});