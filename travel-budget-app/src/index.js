import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import {BudgetsProvider} from "./CONTEXTS/BudgetContext"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
    </BrowserRouter>
);
