import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextDevTool, debugContextDevtool } from "react-context-devtool";

import { BrowserRouter as Router } from "react-router-dom";
import { UiProvider } from "./context/UiContext";
import { StateProvider } from "./context/StateContext";
import AuthProviderWithHistory from "./auth/authWithHistory";

import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <React.StrictMode>
    <UiProvider>
      <StateProvider>
        <ToastProvider>
          <Router>
            <AuthProviderWithHistory>
              <App />
            </AuthProviderWithHistory>
          </Router>
        </ToastProvider>
      </StateProvider>
    </UiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
debugContextDevtool(document.getElementById("root"));
