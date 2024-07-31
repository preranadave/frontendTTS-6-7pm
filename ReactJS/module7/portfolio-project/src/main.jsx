import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//importing routing library
import { Route, BrowserRouter, Routes } from "react-router-dom";
//importing stylesheet and bootstrap

import './scss/custom.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
//User Components

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<App></App>}></Route>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
