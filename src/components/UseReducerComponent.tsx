import React, { useReducer } from 'react';

export function UseReducerComponent(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(UseReducerComponent, []);

  const addItem = (item) => {
    dispatch({ type: 'add', payload: item });
  }

  const removeItem = (item) => {
    dispatch({ type: 'remove', payload: item });
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ id: 1, name: 'Item 1', price: 9.99 })}>Add Item</button>
    </div>
  );
}