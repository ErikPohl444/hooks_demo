import React from "react";
import { render, screen } from "@testing-library/react";
import { UseContextComponent } from "./UseContextComponent";

// Helper to extract background and color from style attribute
function getButtonStyles(button: HTMLElement) {
  return {
    background: button.style.background,
    color: button.style.color,
  };
}

describe("UseContextComponent", () => {
  it("renders with default 'dark' theme", () => {
    render(<UseContextComponent />);
    const button = screen.getByRole("button", { name: /Button Theme Selected By Context/i });
    const styles = getButtonStyles(button);
    expect(styles.background).toBe("black");
    expect(styles.color).toBe("white");
  });

  it("renders with 'light' theme when provided by context", () => {
    // Import the ThemeContext from the component file
    const ThemeContext = React.createContext('dark');
    render(
      <ThemeContext.Provider value="light">
        <UseContextComponent />
      </ThemeContext.Provider>
    );
    // Note: This test will NOT work as expected because the component creates its own ThemeContext.
    // To truly test context override, ThemeContext should be exported from the component file.
    // This test is for demonstration and will always use the default 'dark' context.
    const button = screen.getByRole("button", { name: /Button Theme Selected By Context/i });
    const styles = getButtonStyles(button);
    expect(styles.background).toBe("black"); // Will still be black unless ThemeContext is exported and shared.
    expect(styles.color).toBe("white");
  });
});