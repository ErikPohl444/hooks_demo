import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('displays home page intro message', () => {
    render(<Home />);
    expect(
      screen.getByText(/this is the home page/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/select a menu item from the sidebar/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Each menu item corresponds to a different React hook or page/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Have fun learning React!/i)
    ).toBeInTheDocument();
  });
});