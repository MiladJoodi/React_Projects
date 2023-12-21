import { useState, useContext } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Forms from "./Pages/Forms/Forms";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
