import React from "react";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className="container">
      User email
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
