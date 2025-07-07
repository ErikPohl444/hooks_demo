import React, { useState, useCallback } from 'react';

interface UseCallbackComponentProps {
  onSearch: (query: string) => void;
}

export function UseCallbackComponent({ onSearch }: UseCallbackComponentProps) {
  const [query, setQuery] = useState('');

  const handleQueryChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  }, [onSearch]);

  return (
    <input type="text" value={query} onChange={handleQueryChange} />
  );
}