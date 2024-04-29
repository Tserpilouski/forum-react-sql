import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/authServices";
import { useAuth } from "../../hooks/useAuth";
import LoginData from "../../models/auth/Login";

import "../../styles/login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loginData, setLoginData] = useState(new LoginData());
  const [loginMutation, { isLoading, isError }] = useLoginMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginMutation({
        email: loginData.email,
        password: loginData.password,
      }).unwrap();
      await login(loginData);
      navigate("/");
    } catch (error) {
      console.error("Error rtk", error);
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
        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log in"}
        </button>
        {isError && <div className="error-message">{isError}</div>}
        <Link to="/signup" className="registration-link">
          Registration
        </Link>
      </form>
    </div>
  );
};

export default Login;
