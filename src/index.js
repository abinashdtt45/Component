import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/Navigation";
import "./index.css";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
