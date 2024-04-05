import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import User from "./components/User";
import Cards from "./components/home/Card";
import Error from "./components/Error";
import About from "./components/About";
import SharedLayout from "./components/SharedLayout";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cards/:id" element={<Cards />} />
        <Route path="/login" element={<Login setUserr={setUser} />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute user={user}>
              <User user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
