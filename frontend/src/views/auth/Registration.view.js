import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../../services/authServices";
import RegistrationData from "../../models/auth/Registration";

import "../../styles/login.scss";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [registrationData, setRegistrationData] = useState(
    new RegistrationData()
  );
  const [registrationMutation, { isError, isLoading }] =
    useRegistrationMutation();

  const handleInput = (event) => {
    setRegistrationData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await registrationMutation(registrationData).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            className="input-field"
            type="text"
            name="userName"
            value={registrationData.userName}
            onChange={handleInput}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            className="input-field"
            type="email"
            name="email"
            value={registrationData.email}
            onChange={handleInput}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            className="input-field"
            type="password"
            name="password"
            value={registrationData.password}
            onChange={handleInput}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            className="input-field"
            type="password"
            name="confirmPassword"
            value={registrationData.confirmPassword}
            onChange={handleInput}
          />
        </label>
        <br />
        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create account"}
        </button>
        {isError && <div className="error-message">{isError}</div>}
        <Link to="/login" className="registration-link">
          Login
        </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
