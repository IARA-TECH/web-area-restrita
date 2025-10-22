import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Renderiza o App dentro da div #root (que está no index.html)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
