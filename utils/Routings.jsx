import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import AppDevelopment from "../src/pages/AppDevelopment";

const Routings = () => {


  return (
    <div>
        <Routes>
          <Route path="Marketing-Website/" element={<Home />} />
          <Route path="Marketing-Website/app-development" element={<AppDevelopment />} />
        </Routes>
    </div>
  );
};

export default Routings;
