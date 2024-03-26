import React from "react";
import { createRoot } from "react-dom/client";
// import ContactApp from "./components/ContactApp";
import MyComponent from "./components/MyComponent";

import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <MyComponent name="Azhar" />
        <MyComponent name="Zhar" />
        <MyComponent name="Zharsuke" />

    </div>
);