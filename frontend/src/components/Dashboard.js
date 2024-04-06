import React from "react";
import { useAuth } from "../hooks/useAuth";

const User = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div>
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

export default User;
