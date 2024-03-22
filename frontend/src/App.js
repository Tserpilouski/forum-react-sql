import Login from "./view/Login";
import Signup from "./view/Signup";
import Home from "./view/Home";
import Cards from "./view/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cards/:id" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
