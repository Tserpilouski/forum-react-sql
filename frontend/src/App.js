import Login from "./views/auth/Login.view";
import Signup from "./views/auth/Registration.view";
import Home from "./views/home/Home";
import Dashboard from "./views/Dashboard";
import Cards from "./views/home/Card";
import Error from "./components/Error";
import SharedLayout from "./components/SharedLayout";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/cards/:id" element={<Cards />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
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
