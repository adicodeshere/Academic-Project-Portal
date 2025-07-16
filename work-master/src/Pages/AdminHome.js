import React from "react";
import Sidebar from "../components/adminsidebar";
import { Outlet, Navigate } from "react-router-dom";

const AdminHome = () => {
  const userRole = localStorage.getItem("userRole");

  // Check if userRole is set to "student"
  if (userRole !== "Admin") {
    // Redirect to the login page if userRole is not "student"
    return <Navigate to="/" />;
  }
  return (
    <div className="d-flex flex-row">
      <div>
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default AdminHome;
