import React, { useState, useMemo } from 'react';

export function UseMemoComponent({ a, b }: { a: string; b: string }) {
  const result = useMemo(() => {
    console.log('Calculating...');
    return Number(a) * Number(b);
  }, [a, b]);
  alert(`a: ${a}, b: ${b}`);

  return <p>Result: {result}</p>;
}