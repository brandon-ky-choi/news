import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
