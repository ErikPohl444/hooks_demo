import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  it('renders all menu items', () => {
    render(<Sidebar onItemClick={() => {}} />);
    const menuItems = [
      "Home", "About", "useState", "useEffect", "useContext", "useRef",
      "useReducer", "useCallback", "useMemo", "useLayoutEffect",
      "useImperativeHandle", "useDebugValue", "Contact"
    ];
    menuItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('calls onItemClick when a menu item is clicked', () => {
    const handleClick = jest.fn();
    render(<Sidebar onItemClick={handleClick} />);
    const menuItem = screen.getByText('About');
    fireEvent.click(menuItem);
    expect(handleClick).toHaveBeenCalledWith('About');
  });
});