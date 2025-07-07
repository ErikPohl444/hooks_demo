import React, { useState, useMemo } from 'react';

interface UseMemoComponentProps {
  a: string | number;
  b: string | number;
}

export function UseMemoComponent({ a, b }: UseMemoComponentProps) {
  const result = useMemo(() => {
    console.log('Calculating...');
    return Number(a) * Number(b);
  }, [a, b]);
  alert(`a: ${a}, b: ${b}`);

  return <p>Result: {result}</p>;
}