import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8081/login", user)
      .then((res) => {
        if (res.data === "Success") {
          navigate("/home");
          console.log(res);
        } else {
          console.log(res);
          alert("dupa");
        }
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
    <div className="login-container">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            onChange={handleInput}
            // type="email"
            name="email"
            value={user.email}
            className="input-field"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={handleInput}
            // type="password"
            name="password"
            value={user.password}
            className="input-field"
          />
        </div>
        <button type="submit" className="login-button">
          Log in
        </button>
        <Link to="/signup" className="registration-link">
          Registration
        </Link>
      </form>
    </div>
  );
};

export default Login;
