import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { UseDebugValueComponent } from "./UseDebugValueComponent";

// Mock fetch globally
beforeEach(() => {
  global.fetch = jest.fn();
});
afterEach(() => {
  jest.resetAllMocks();
});

describe("UseDebugValueComponent", () => {
  it("renders fetched data in the list", async () => {
    // Simulate data as a string, since setData expects a string (could be JSON.stringify)
    const mockData = "<li>Item 1</li><li>Item 2</li>";
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockData,
    });

    render(<UseDebugValueComponent url="/fake/api" />);

    // Wait for data to be rendered
    await waitFor(() => {
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
    });
  });

  it("renders nothing if no data is loaded", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => "",
    });

    render(<UseDebugValueComponent url="/fake/api" />);
    await waitFor(() => {
      // Should not find any <li> since data is empty
      expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });
  });
});