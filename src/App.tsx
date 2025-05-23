// App.tsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentPane from './components/ContentPane';
import './App.css';
import TextDisplay from './components/TextDisplay';

// https://medium.com/@AbidKazmi/all-react-hooks-in-one-short-4b0ed4b5a6e4

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="app-container">
      <Sidebar onItemClick={handleItemClick} />
      <ContentPane selectedItem={selectedItem} />
      { selectedItem?.startsWith("use") ? <TextDisplay filePath={`/CodeSamples/${selectedItem}.txt`} /> : <p></p>}
    </div>
  );
};

export default App;
