import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from './components-home/Home'
import Admin from './components-admin/Admin'




function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/admin" element={<Admin />} />
    </Routes>
  );
}


export default App;
