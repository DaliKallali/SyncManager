import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(process.env.REACT_APP_SYNC_KEY);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
