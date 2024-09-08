import React from "react";
import AdminSideBar from "./Sidebar/AdminSideBar";
import AdminHeader from "./Header/AdminHeader";
import AdminDashboard from "./MainContent/AdminDashboard";
import { Outlet } from "react-router-dom";
function AdminLayout() {
  return (
    <>
      <div className="flex">
        <div className="basis-[18%]">
          <AdminSideBar></AdminSideBar>
        </div>
        <div className="bg-gray-300/40 basis-[82%]">
          <AdminHeader></AdminHeader>
        
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
