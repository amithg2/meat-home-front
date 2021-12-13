import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./components-home/Home";
import Admin from "./components-admin/Admin";
import Login from "./components-admin/Login";

function App() {
  return (
    <Routes>
    
      <Route exact path="/" element={<Home />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
