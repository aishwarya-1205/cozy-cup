import React from "react";
import { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/common/Stairs.jsx";
import NavContext from "./context/NavContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Stairs>
        <NavContext>
          <App />
        </NavContext>
      </Stairs>
    </BrowserRouter>
  </React.StrictMode>
);
