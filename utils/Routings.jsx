import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import AppDevelopment from "../src/services/AppDevelopment";
import WebDevelopment from "../src/services/WebDevelopment";
import Seo from "../src/services/Seo";
import Campaign from "../src/services/Campaign";


const Routings = () => {


  return (
    <div>
        <Routes>
          <Route path="Marketing-Website/" element={<Home />} />
          <Route path="Marketing-Website/app-development" element={<AppDevelopment />} />
          <Route path="Marketing-Website/web-development" element={<WebDevelopment />} />
          <Route path="Marketing-Website/seo-optimization" element={<Seo />} />
          <Route path="Marketing-Website/campagin-creation" element={<Campaign />} />
        </Routes>
    </div>
  );
};

export default Routings;
