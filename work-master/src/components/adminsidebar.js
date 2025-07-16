import React from "react";
import { BiHome, BiTable, BiGrid } from "react-icons/bi"; // Example icons from react-icons
import "./sidebars.css";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "285px" }}
      >
        <Link
          to="/admin"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          {/* Replace with your custom logo */}
          {/* <BiBootstrap className="bi me-2" size={40} /> */}
          <span
            style={{ fontFamily: "Garamond, serif", fontWeight: "bold" }}
            className="fs-3"
          >
            Welcome ,<br></br>Project Coordinator !
          </span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/Admin" className="nav-link active" aria-current="page">
              <BiHome className="bi me-2" size={16} />
              Home
            </Link>
          </li>
          <li>
            <Link to={"addstudent"} className="nav-link link-dark">
              {console.log(window.location.pathname + "/addstudent")}
              <BiTable className="bi me-2" size={16} />
              {/* <BiSpeedometer2 className="bi me-2" size={16} /> */}
              Add Student
            </Link>
          </li>
          <li>
            <Link to={"addteacher"} className="nav-link link-dark">
              <BiTable className="bi me-2" size={16} />
              Add GUIDES
            </Link>
          </li>
          <li>
            <Link to={"allstudents"} className="nav-link link-dark">
              <BiGrid className="bi me-2" size={16} />
              Get All Students
            </Link>
          </li>
          <li>
            <Link to={"allteachers"} className="nav-link link-dark">
              {/* <BiPeopleCircle className="bi me-2" size={16} /> */}
              <BiTable className="bi me-2" size={16} />
              Get All Teachers
            </Link>
          </li>
          <li>
            <Link to={"allocateproject"} className="nav-link link-dark">
              {/* <BiPeopleCircle className="bi me-2" size={16} /> */}
              Allocate Project
            </Link>
          </li>
          <li>
            <Link to={"allproject"} className="nav-link link-dark">
              {/* <BiPeopleCircle className="bi me-2" size={16} /> */}
              Get All Project
            </Link>
          </li>
          <li>
            <Link to={"project-schedule"} className="nav-link link-dark">
              {/* <BiPeopleCircle className="bi me-2" size={16} /> */}
              View Schedule
            </Link>
          </li>
          <li>
            <Link to={"addschedule"} className="nav-link link-dark">
              {/* <BiPeopleCircle className="bi me-2" size={16} /> */}
              Add Schedule
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

export default AdminSidebar;
