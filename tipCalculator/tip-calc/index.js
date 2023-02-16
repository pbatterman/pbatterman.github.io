import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

var useroot = document.getElementById("root");

if (useroot) {
  var root = ReactDOM.createRoot(useroot);
  root.render(
    React.createElement(React.StrictMode, null, React.createElement(App, null))
  );
}
