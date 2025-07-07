import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About component', () => {
  it('renders without crashing', () => {
    render(<About />);
  });

  it('displays learning and teaching philosophy', () => {
    render(<About />);
    expect(
      screen.getByText(/I wrote this app to learn React and its hooks/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/learning by teaching/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/the best way to learn is to teach others/i)
    ).toBeInTheDocument();
  });
});