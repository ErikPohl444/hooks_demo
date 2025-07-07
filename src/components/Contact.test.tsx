import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact component', () => {
  it('renders without crashing', () => {
    render(<Contact />);
  });

  it('displays the maintainer name', () => {
    render(<Contact />);
    expect(screen.getByText(/Erik Pohl/i)).toBeInTheDocument();
  });

  it('has an email link', () => {
    render(<Contact />);
    const emailLink = screen.getByRole('link', { name: /send email/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:erikpohl.444@gmail.com');
  });

  it('has a phone link', () => {
    render(<Contact />);
    const phoneLink = screen.getByRole('link', { name: /864 354 7721/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+8643547721');
  });

  it('has a substack link', () => {
    render(<Contact />);
    const substackLink = screen.getByRole('link', { name: /substack/i });
    expect(substackLink).toHaveAttribute('href', 'https://erikpohl444.substack.com/');
  });

  it('has a github link', () => {
    render(<Contact />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/ErikPohl444');
  });

  it('has a linkedin link', () => {
    render(<Contact />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/erik-pohl-0792159/');
  });
});