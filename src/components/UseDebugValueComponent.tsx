import { useState, useEffect, useDebugValue } from 'react';

interface UseDebugValueComponentProps {
  url: string;
}

export function UseDebugValueComponent({ url }: UseDebugValueComponentProps) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  useDebugValue(data ? `Data loaded: ${data.length} items` : 'Loading...');

  return    (
    <ul>
      {data}
    </ul>
  );
}