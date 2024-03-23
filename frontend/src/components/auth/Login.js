import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../services/authServices";

import "../../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await login(user);
      if (response.success) {
        navigate("/home");
      } else {
        setError("Incorrect email or password");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (event) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className="login-container">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            onChange={handleInput}
            name="email"
            value={user.email}
            className="input-field"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={handleInput}
            name="password"
            value={user.password}
            className="input-field"
          />
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </button>
        {error && <div className="error-message">{error}</div>}
        <Link to="/signup" className="registration-link">
          Registration
        </Link>
      </form>
    </div>
  );
};

export default Login;
