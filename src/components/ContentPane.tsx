import React from "react";
import "./ContentPane.css";
import { UseStateComponent } from "./UseStateComponent";
import { UseEffectComponent } from "./UseEffectComponent";
import { UseContextComponent } from "./UseContextComponent";
import { UseReducerComponent } from "./UseReducerComponent";
import { UseCallbackComponent } from "./UseCallbackComponent";
import { UseMemoComponent } from "./UseMemoComponent";
import { UseLayoutEffectComponent } from "./UseLayoutEffectComponent";
import { UseRefComponent } from "./UseRefComponent";
import { UseDebugValueComponent } from "./UseDebugValueComponent";
import UseImperativeHandleComponent  from "./UseImperativeHandleComponent";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
interface ContentPaneProps {
  selectedItem: string | null;
}

const ContentPane: React.FC<ContentPaneProps> = ({ selectedItem }) => {
  let content;

  switch (selectedItem) {
    case "Home":
      content = <Home />;
      break;
    case "About":
      content = <About />;
      break;
    case "useState":
      content = <UseStateComponent />;
      break;
    case "useMemo":
      content = <UseMemoComponent a="1" b="2" />;
      break;
    case "useEffect":
      content = <UseEffectComponent />;
      break;
    case "useContext":
      content = <UseContextComponent />;
      break;
    case "useReducer":
      content = <UseReducerComponent />;
      break;
    case "useRef":
      content = <UseRefComponent />;
      break;
    case "useLayoutEffect":
      content = <UseLayoutEffectComponent />;
      break;
    case "useCallback":
      content = (
        <UseCallbackComponent
          onSearch={(query: string) => {
            console.log(query);
          }}
        />
      );
      break;
case "useDebugValue":
<UseDebugValueComponent url="https://jsonplaceholder.typicode.com/todos/1" />
  break;
    case "useImperativeHandle":
      content = <UseImperativeHandleComponent />;
      break;
    case "Contact":
      content = <Contact />;
      break;
    default:
      content = <div>Please select a menu item.</div>;
  }

  return <div className="content-pane">{content}</div>;
};

export default ContentPane;
