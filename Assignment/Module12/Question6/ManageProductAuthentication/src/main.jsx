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
import ProtectedRoute from "../src/Components/ProtectedRoute.jsx";
import { UserAuthContextProvider } from "../src/Context/UserAuthContext.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/home"
            index
            element={
              <ProtectedRoute>
                <ProductManagement />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/create-product"
            element={
              <ProtectedRoute>
                <CreateProduct />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/view-product/:id"
            element={
              <ProtectedRoute>
                <ReadProduct />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/update-product/:id"
            element={
              <ProtectedRoute>
                <UpdateProduct />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/delete-product/:id"
            element={<ProductManagement />}
          ></Route>
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
