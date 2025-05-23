import { useState, useEffect, useDebugValue } from 'react';

export function UseDebugValueComponent(url: string) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  useDebugValue(data ? `Data loaded: ${data.length} items` : 'Loading...');

  return data;
}