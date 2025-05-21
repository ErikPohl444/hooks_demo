import React, { useState } from "react";

export function UseStateComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    alert("Increment button clicked, activating onClick event in html, which kicked off the increment function");
    setCount(count + 1);
    alert("setCount function called, which is part of the UseState definition and which updates the count state variable");
  };
  const decrement = () => {
    alert("Decrement button clicked, activating onClick event in html, which kicked off the increment function");
    setCount(count - 1);
    alert("setCount function called, which is part of the UseState definition and which updates the count state variable");
  };

  return (
    <div className="useStateComponent">
      <p> Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
