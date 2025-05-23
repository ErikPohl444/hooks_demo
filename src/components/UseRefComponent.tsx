import React, { useRef } from 'react';

export function UseRefComponent() {
  const inputRef = useRef(document.createElement('button'));

  const handleClick = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}