import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/login.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", user.name);
    console.log("Email:", user.email);
    console.log("Password:", user.password);
    console.log("Confirm Password:", user.confirmPassword);
    axios
      .post("http://localhost:8081/signup", user)
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleInput = (event) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.name}
            onChange={handleInput}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInput}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInput}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleInput}
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="login-button">
          Register
        </button>

        <Link to="/" className="registration-link">
          Login
        </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
