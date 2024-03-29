import React from "react";
import { createRoot } from "react-dom/client";
// import MyComponent from "./components/MyComponent";

import './styles/style.css';
// import CounterApp from "./components/counter-app/CounterApp";
// import ContactApp from "./components/contact-app/ContactApp";
import MyForm from "./components/form-app/MyForm";

const root = createRoot(document.getElementById('root'));
root.render(
    // <div>
    //     <MyComponent name="Azhar" />
    //     <MyComponent name="Zhar" />
    //     <MyComponent name="Zharsuke" />

    // </div>
    // <CounterApp />
    // <ContactApp />
    <MyForm />
);