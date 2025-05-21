import React, { useState, useEffect } from "react";

interface TextDisplayProps {
  filePath: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ filePath }) => {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const textData = await response.text();
        setText(textData);
        setError(null);
      } catch (e: any) {
        setError(`Failed to read file: ${e.message}`);
        setText("");
      }
    };

    fetchData();
  }, [filePath]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
};

export default TextDisplay;
