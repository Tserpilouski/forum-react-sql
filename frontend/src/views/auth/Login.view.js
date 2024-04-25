import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/authServices";
import { useAuth } from "../../hooks/useAuth";
import { loginServ } from "../../services/authServices";
import LoginData from "../../models/auth/Login";

import "../../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(new LoginData());

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await loginServ(loginData);
      console.log(response);
      if (response.success) {
        await login(loginData.email);
        navigate("/");
      } else {
        setError("Incorrect email or password");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            className="input-field"
            type="email"
            name="email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className="input-field"
            type="password"
            name="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, password: e.target.value }))
            }
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
