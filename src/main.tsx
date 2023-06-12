import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";

import { appStore } from "./app/store";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={appStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
