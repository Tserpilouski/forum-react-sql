import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogInOut = (type) => {
    if (type === "login") {
      navigate("/login");
    } else {
      navigate("/");
      logout();
    }
  };
  return (
    <nav className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {!user ? (
        <button onClick={() => handleLogInOut("login")}>Log in</button>
      ) : (
        <button onClick={() => handleLogInOut("logout")}>Log out</button>
      )}
    </nav>
  );
};

export default Navbar;
