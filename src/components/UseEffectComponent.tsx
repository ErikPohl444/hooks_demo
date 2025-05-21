import React, { useState, useEffect } from 'react';

export function UseEffectComponent() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.coinbase.com/v2/currencies')
      .then(response => response.json())
      .then(data => setData(data['data']));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}