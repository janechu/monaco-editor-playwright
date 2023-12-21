import React from "react";
import { createRoot } from "react-dom/client";

/**
 * Create the root node
 */
const root: HTMLElement = document.getElementById("root");

import Editor from '@monaco-editor/react';

function App() {
  return <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />;
}

/**
 * Primary render function for app. Called on store updates
 */
const reactRoot = createRoot(root);
reactRoot.render(
    <React.Fragment>
        <App />
    </React.Fragment>
);
