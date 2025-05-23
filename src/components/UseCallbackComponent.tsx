import React, { useState, useCallback } from 'react';

export function UseCallbackComponent({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  }, [onSearch]);

  return (
    <input type="text" value={query} onChange={handleQueryChange} />
  );
}