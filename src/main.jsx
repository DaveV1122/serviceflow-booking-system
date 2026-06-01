import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";

import "./styles/global.css";
import "./styles/layout.css";
import "./styles/forms.css";
import "./styles/dashboard.css";
import "./styles/calendar.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
