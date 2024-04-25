import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">User</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default Navbar;
