import React from "react";
import ReactDOM from "react-dom/client";

// I followed the bootstrap customization at the link below.
// https://react-bootstrap.github.io/getting-started/introduction/#sass
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
