import React, { useContext } from 'react';

const ThemeContext = React.createContext('dark');

export function UseContextComponent() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
      Button Theme Selected By Context  
    </button>
  );
}