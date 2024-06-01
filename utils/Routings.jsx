import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../src/components/About";
import Home from "../src/components/Home";
import NavBar from "../src/components/NavBar";
import TeamMemberTemplate from "../src/components/TeamMemberTemplate";
import AppDevelopment from "../src/components/AppDevelopment";

const Routings = () => {

  const getData = (data) => {
    console.log(data);
  };

  return (
    <div>
        <Routes>
          <Route path="/Marketing-Website/" element={<Home />} />
          <Route path={`/Marketing-Website/team/${name}`} element={<TeamMemberTemplate getData={getData} />} />
          <Route path={`/Marketing-Website/app-development`} element={<AppDevelopment />} />
        </Routes>
    </div>
  );
};

export default Routings;
