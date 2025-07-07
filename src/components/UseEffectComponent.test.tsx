import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { UseEffectComponent } from "./UseEffectComponent";

// Mock fetch globally
beforeEach(() => {
  global.fetch = jest.fn();
});
afterEach(() => {
  jest.resetAllMocks();
});

describe("UseEffectComponent", () => {
  it("renders fetched currency names as list items", async () => {
    const mockData = {
      data: [
        { id: "BTC", name: "Bitcoin" },
        { id: "ETH", name: "Ethereum" },
      ],
    };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockData,
    });

    render(<UseEffectComponent />);

    // Wait for items to appear
    await waitFor(() => {
      expect(screen.getByText("Bitcoin")).toBeInTheDocument();
      expect(screen.getByText("Ethereum")).toBeInTheDocument();
    });
  });

  it("renders no items if fetch returns empty data", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ data: [] }),
    });

    render(<UseEffectComponent />);
    await waitFor(() => {
      expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    });
  });
});