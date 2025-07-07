import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { UseCallbackComponent } from './UseCallbackComponent';

describe('UseCallbackComponent', () => {
  it('renders input', () => {
    render(<UseCallbackComponent onSearch={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('calls onSearch and updates the input value when typing', () => {
    const onSearchMock = jest.fn();
    render(<UseCallbackComponent onSearch={onSearchMock} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'React' } });

    expect(onSearchMock).toHaveBeenCalledWith('React');
    expect(input).toHaveValue('React');
  });

  it('calls onSearch with each keystroke', () => {
    const onSearchMock = jest.fn();
    render(<UseCallbackComponent onSearch={onSearchMock} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'R' } });
    fireEvent.change(input, { target: { value: 'Re' } });
    fireEvent.change(input, { target: { value: 'Red' } });

    expect(onSearchMock).toHaveBeenCalledTimes(3);
    expect(onSearchMock).toHaveBeenLastCalledWith('Red');
  });
});