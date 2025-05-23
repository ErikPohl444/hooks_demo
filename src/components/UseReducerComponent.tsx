import React, { useReducer } from 'react';

type ItemType = {
  id: number;
  name: string;
  price: number;
};

type Action =
  | { type: 'add'; payload: ItemType }
  | { type: 'remove'; payload: ItemType };


function cartReducer(state: ItemType[], action: Action): ItemType[] {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}

export function UseReducerComponent() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (item: ItemType) => {
    dispatch({ type: 'add', payload: item });
  }

  const removeItem = (item: ItemType) => {
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