import Login from "./views/auth/Login.view";
import Signup from "./views/auth/Registration.view";
import Home from "./views/Home.view";
import Article from "./views/Article.view";
import Dashboard from "./views/Dashboard.view";
import Error from "./views/Error.view";
import SharedLayout from "./components/SharedLayout";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/cards/:id" element={<Article />} />
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
