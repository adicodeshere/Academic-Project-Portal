import React, { useState, useEffect } from "react";
import { BiHome } from "react-icons/bi";
import "./sidebars.css";
import { Link } from "react-router-dom";
import axios from "axios";

const TeacherSideBar = () => {
  const token = localStorage.getItem("token");
  const [student, setStudent] = useState({});

  const fetchData = async () => {
    try {
      const headers = {
        "Auth-token": token,
      };
      const response = await axios.post(
        "http://localhost:8800/api/getteacher",
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
          to="/teacher"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <h2 className="fs-4 font-weight-bold">Welcome, {student.name} !!!</h2>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="/teacher" className="nav-link active" aria-current="page">
              <BiHome className="bi me-2" size={16} />
              Home
            </Link>
          </li>

          <li>
            <Link
              to="viewprojects"
              className="nav-link active"
              aria-current="page"
            >
              <BiHome className="bi me-2" size={16} />
              View Allocated Students
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
            <Link
              to="markproject"
              className="nav-link active"
              aria-current="page"
            >
              <BiHome className="bi me-2" size={16} />
              Evaluate Project
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

export default TeacherSideBar;
