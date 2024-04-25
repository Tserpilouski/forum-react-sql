import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authServices";
import "../../styles/login.css";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInput = (event) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await registerUser(user);
      if (response.success) {
        navigate("/");
      } else {
        setError("Something go wrong!");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
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
            name="username"
            value={user.username}
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
            value={user.email}
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
            value={user.password}
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
            value={user.confirmPassword}
            onChange={handleInput}
          />
        </label>
        <br />
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Creating..." : "Create account"}
        </button>
        {error && <div className="error-message">{error}</div>}
        <Link to="/login" className="registration-link">
          Login
        </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
