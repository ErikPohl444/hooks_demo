import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onItemClick }) => {
  const menuItems = [
    "Home",
    "About",
    "useState",
    "useEffect",
    "useContext",
    "useRef",
    "useReducer",
    "useCallback",
    "useMemo",
    "useLayoutEffect",
    "useImperativeHandle",
    "useDebugValue",
    "Contact",
  ];

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li key={item} onClick={() => onItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
