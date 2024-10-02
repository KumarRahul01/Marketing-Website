import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  });

  // const clickHandler = () => {
  //   navigate("app-development");
  // };
  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Choose from live online courses, classroom training, or self-paced
        online programs.
      </p>
      <div
        className="flex flex-col lg:flex-row items-center gap-5"
        data-aos="fade-up"
      >
        <div onClick={() => navigate("/app-development")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Apps Development"}
            desc={
              "Lorem ipsum, dolor Adipisci ipsam placeat voluptatum fuga omnis tenetur facere!"
            }
          />
        </div>

        <div onClick={() => navigate("/web-development")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Web Development"}
            desc={
              "Lorem ipsum, dolor Adipisci ipsam placeat voluptatum fuga omnis tenetur facere!"
            }
          />
        </div>

        <div onClick={() => navigate("/seo-optimization")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Search Engine Optimization"}
            desc={
              "Lorem ipsum, dolor Adipisci ipsam placeat voluptatum fuga omnis tenetur facere!"
            }
          />
        </div>

        <div onClick={() => navigate("/campagin-creation")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Campaign Creation"}
            desc={
              "Lorem ipsum, dolor Adipisci ipsam placeat voluptatum fuga omnis tenetur facere!"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
