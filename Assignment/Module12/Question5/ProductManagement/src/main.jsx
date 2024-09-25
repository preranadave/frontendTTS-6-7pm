import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProductManagement from "./Components/ProductManagement.jsx";
import CreateProduct from "./Components/CreateProduct.jsx";
import ReadProduct from "./Components/ReadProduct.jsx";
import UpdateProduct from "./Components/UpdateProduct.jsx";
import DeleteProduct from "./Components/DeleteProduct.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<ProductManagement />}></Route>

        <Route path="/create-product" element={<CreateProduct />}></Route>

        <Route path="/view-product/:id" element={<ReadProduct />}></Route>
        
        <Route path="/update-product/:id" element={<UpdateProduct />}></Route>
        
        <Route path="/delete-product/:id" element={<ProductManagement />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
