import React, { useState, useEffect } from "react";
import { BiHome } from "react-icons/bi";
import "./sidebars.css";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentSidebar = () => {
  const token = localStorage.getItem("token");
  const [student, setStudent] = useState({});

  const fetchData = async () => {
    try {
      const headers = {
        "Auth-token": token,
      };
      const response = await axios.post(
        "http://localhost:8800/api/getstudent",
        null,
        { headers }
      );

      setStudent(response.data[0]);
      localStorage.setItem("student", JSON.stringify(response.data[0])); // Store student data as JSON string
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <Link
          to="/student"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <span
            style={{ fontFamily: "Garamond, serif", fontWeight: "bold" }}
            className="fs-2"
          >
            Welcome, {student.name} !
          </span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="/student" className="nav-link active" aria-current="page">
              <BiHome className="bi me-2" size={16} />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="viewproject"
              className="nav-link active"
              aria-current="page"
            >
              <BiHome className="bi me-2" size={16} />
              View Project
            </Link>
          </li>

          <li>
            <Link
              to="project-schedule"
              className="nav-link active"
              aria-current="page"
            >
              <BiHome className="bi me-2" size={16} />
              View Schedule
            </Link>
          </li>
          <li>
            <Link to="logout" className="nav-link active" aria-current="page">
              <BiHome className="bi me-2" size={16} />
              Logout
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default StudentSidebar;
