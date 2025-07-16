import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import "./login.css"; // Import the CSS file

const initialState = {
  email: "",
  pass: "",
  role: "",
  msg: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const role = localStorage.getItem("userRole");
  switch (role) {
    case "Admin":
      return <Navigate to="/admin" />;
      break;
    case "Student":
      return <Navigate to="/student" />;
      break;
    case "Teacher":
      return <Navigate to="/teacher" />;
      break;
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { email, pass } = values;

    if (!email || !pass) {
      console.log("Invalid inputs");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8800/api/auth", {
        email: email,
        pass: pass,
      });

      setValues({
        ...values,
        msg: response.data[0].msg,
        role: response.data[0].role,
      });

      if (response.data[0].msg === "0") {
        localStorage.setItem("token", response.data[0].authToken);
        navigateToRole(response.data[0].role);
      } else {
        alert(response.data[0].msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToRole = (role) => {
    localStorage.setItem("userRole", role);
    if (role === "Student") {
      navigate("/student");
    } else if (role === "Teacher") {
      navigate("/teacher");
    } else if (role === "Admin") {
      navigate("/admin");
    }
  };

  return (
    <div className="login-container">
      <div className="center-content">
        <form className="login-form">
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="form-control"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="pass"
              onChange={handleChange}
              className="form-control"
              id="password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
