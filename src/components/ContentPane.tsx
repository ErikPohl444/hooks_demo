import React from 'react';
import './ContentPane.css';
import { UseStateComponent } from "./UseStateComponent";


interface ContentPaneProps {
    selectedItem: string | null;
}

const ContentPane: React.FC<ContentPaneProps> = ({ selectedItem }) => {
    let content;

    switch (selectedItem) {
        case 'Home':
            content = <div>Home content</div>;
            break;
        case 'About':
            content = <div>About content</div>;
            break;
        case 'useState':
            content = <UseStateComponent />;
            break;
        case 'Contact':
            content = <div>Contact content</div>;
            break;
        default:
            content = <div>Please select a menu item.</div>;
    }

    return (
        <div className="content-pane">
            {content}
        </div>
    );
};

export default ContentPane;