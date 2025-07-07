import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TextDisplay from './TextDisplay';

// Mock fetch globally
beforeEach(() => {
  global.fetch = jest.fn();
});
afterEach(() => {
  jest.resetAllMocks();
});

describe('TextDisplay', () => {
  it('renders fetched text content', async () => {
    const fakeText = 'Hello, world!';
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      text: async () => fakeText,
    });

    render(<TextDisplay filePath="/fake/path.txt" />);
    expect(screen.getByText(/loading/i)).not.toBeInTheDocument(); // No explicit loading indicator

    // Wait for text to appear
    await waitFor(() => {
      expect(screen.getByText(fakeText)).toBeInTheDocument();
    });
  });

  it('renders error message if fetch fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    render(<TextDisplay filePath="/bad/path.txt" />);
    await waitFor(() => {
      expect(screen.getByText(/Error:/i)).toBeInTheDocument();
      expect(screen.getByText(/Failed to read file/i)).toBeInTheDocument();
    });
  });

  it('renders error message if fetch throws', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

    render(<TextDisplay filePath="/bad/path.txt" />);
    await waitFor(() => {
      expect(screen.getByText(/Error:/i)).toBeInTheDocument();
      expect(screen.getByText(/Failed to read file: Network Error/i)).toBeInTheDocument();
    });
  });
});