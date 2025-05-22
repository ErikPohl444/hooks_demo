import React, { useRef, useImperativeHandle } from 'react';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    value: inputRef.current.value
  }));

  return (
    <input
      type="text"
      ref={inputRef}
      placeholder={props.placeholder}
    />
  );
});

function UseImperativeHandleComponent() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Input ref={inputRef} placeholder="Type here" />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}

export default UseImperativeHandleComponent;