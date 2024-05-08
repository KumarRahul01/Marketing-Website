import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../src/components/About";
import Home from "../src/components/Home";
import NavBar from "../src/components/NavBar";

const Routings = () => {
  return (
    <div>
        <Routes>
          <Route path="/Marketing-Website/" element={<Home />} />
          {/* <Route path="/Marketing-Website/dashboard" element={<About />} /> */}
        </Routes>
    </div>
  );
};

export default Routings;
