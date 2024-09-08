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
//Admin Imports
import AdminDashboard from "./Components/Admin/AdminDashboard.jsx";
import AdminHome from "./Components/Admin/AdminHome.jsx";
import AdminLogin from "./Components/Admin/AdminLogin.jsx";
import ManageAbstract from "./Components/Admin/ManageAbstract.jsx";
import DeletAbstract from "./Components/Admin/DeletAbstract.jsx";
import ManageContact from "./Components/Admin/ManageContact.jsx";
//User Components

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<App></App>}></Route>
      {/* Admin Routing */}
      
      <Route path="/admin"  element={<AdminLogin></AdminLogin>}></Route>
      
      <Route path="/admin-dashboard" element={<AdminDashboard></AdminDashboard>}></Route>
      <Route path="/manage-abstract" element={<ManageAbstract></ManageAbstract>}></Route>
      <Route path="/manage-contacts" element={<ManageContact></ManageContact>}></Route>
      
      <Route path="/delete-abstract/:id" element={<DeletAbstract></DeletAbstract>}></Route>
    
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
