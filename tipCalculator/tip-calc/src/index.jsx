import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const useroot = document.getElementById("root");

if (useroot) {
  const root = ReactDOM.createRoot(useroot);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
