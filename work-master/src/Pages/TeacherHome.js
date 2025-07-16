import React from "react";
import Sidebar from "../components/teacher/Teachersidebar";
import { Outlet, Navigate } from "react-router-dom";

const TeacherHome = () => {
  const userRole = localStorage.getItem("userRole");

  // Check if userRole is set to "student"
  if (userRole !== "Teacher") {
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

export default TeacherHome;
