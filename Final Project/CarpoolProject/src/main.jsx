import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import { UserAuthContextProvider } from "./Context/UserAuthContext.jsx";
import { UserDataContextProvider } from "./Context/UserDataContext.jsx";
//User Components Import
import UserHomePage from "./Components/User/UserHomePage.jsx";
import SignUp from "./Components/User/SignUp.jsx";
import LogIn from "./Components/User/LogIn.jsx";
import CreateDriverAccount from "./Components/User/Driver/CreateDriverAccount.jsx";
import CreateRide from "./Components/User/Ride/CreateRide.jsx";
import ViewRides from "./Components/User/Ride/ViewRides.jsx";
import UserRides from "./Components/User/Ride/UserRides.jsx";
import BookRide from "./Components/User/Ride/BookRide.jsx";
import PageNotFound from "./Components/User/PageNotFound.jsx";
//Admin Components Import
import AdminLayout from "./Components/Admin/AdminLayout.jsx";
import AdminDashboard from "./Components/Admin/MainContent/AdminDashboard.jsx";
import UserManagement from "./Components/Admin/MainContent/UserManagement/UserManagement.jsx";
import DriverManagement from "./Components/Admin/MainContent/DriverManagement/DriverManagement.jsx";
import LocationManagement from "./Components/Admin/MainContent/Ride/LocationManagment.jsx";
import RidesManagement from "./Components/Admin/MainContent/Ride/RidesManagement.jsx";
import DeleteRide from "./Components/Admin/MainContent/Ride/DeleteRide.jsx";
import DeleteDriver from "./Components/Admin/MainContent/DriverManagement/DeleteDriver.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            {/* user Component Route */}
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" index element={<LogIn></LogIn>}></Route>

            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <UserHomePage />
                </ProtectedRoute>
              }
            ></Route>
            {/* Signup route */}

            <Route path="/signup" element={<SignUp></SignUp>}></Route>

            <Route path="/login" element={<LogIn></LogIn>}></Route>

            <Route
              path="/crate-driver-account"
              element={
                <ProtectedRoute>
                  <CreateDriverAccount></CreateDriverAccount>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/crate-ride"
              element={
                <ProtectedRoute>
                  <CreateRide></CreateRide>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/view-rides"
              element={
                <ProtectedRoute>
                  <ViewRides></ViewRides>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/user-rides"
              element={
                <ProtectedRoute>
                  <UserRides></UserRides>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/book-ride/:id"
              element={
                <ProtectedRoute>
                  <BookRide></BookRide>
                </ProtectedRoute>
              }
            ></Route>

            {/* Admin Routing */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route
                path="/admin/dashboard"
                element={<AdminDashboard></AdminDashboard>}
              ></Route>
              <Route
                path="/admin/dashboard/manage-users"
                element={<UserManagement></UserManagement>}
              ></Route>

              <Route
                path="/admin/dashboard/manage-users/:id"
                element={<UserManagement></UserManagement>}
              ></Route>
              <Route
                path="/admin/dashboard/manage-drivers"
                element={<DriverManagement></DriverManagement>}
              ></Route>
              <Route
                path="/admin/dashboard/manage-drivers/delete-driver/:id"
                element={<DriverManagement></DriverManagement>}
              ></Route>
              <Route
                path="/admin/dashboard/manage-locations"
                element={<LocationManagement></LocationManagement>}
              ></Route>
              <Route
                path="/admin/dashboard/manage-locations/delete-location/:id"
                element={<LocationManagement></LocationManagement>}
              ></Route>

              <Route
                path="/admin/dashboard/manage-rides"
                element={<RidesManagement></RidesManagement>}
              ></Route>
              <Route
                path="/admin/dashboard/manage-rides/delete-ride/:id"
                element={<RidesManagement></RidesManagement>}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </UserAuthContextProvider>
  </StrictMode>
);
