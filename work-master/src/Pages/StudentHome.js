import React from "react";
import Sidebar from "../components/student/studentsidebar";
import { Outlet, Navigate } from "react-router-dom";

const StudentHome = () => {
  // Retrieve userRole from localStorage
  const userRole = localStorage.getItem("userRole");

  // Check if userRole is set to "student"
  if (userRole !== "Student") {
    // Redirect to the login page if userRole is not "student"
    return <Navigate to="/" />;
  }

  // Render the StudentHome component for students
  return (
    <div className="d-flex flex-row">
      <div>
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default StudentHome;
