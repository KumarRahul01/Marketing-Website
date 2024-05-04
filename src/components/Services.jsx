import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-5" data-aos="fade-up">
        <Card
          img={<HiOutlineChartPie />}
          title={"Setup UI Project"}
          desc={
            "Lorem ipsum, dolor Adipisci ipsam placeat voluptatum fuga omnis tenetur facere!"
          }
        />

        <Card
          img={<HiOutlineChartPie />}
          title={"Setup UI Project"}
          desc={
            "Lorem ipsum, dolor Adipisci ipsam placeat voluptatum fuga omnis tenetur facere!"
          }
        />

        <Card
          img={<HiOutlineChartPie />}
          title={"Setup UI Project"}
          desc={
            "Lorem ipsum, dolor Adipisci ipsam placeat voluptatum fuga omnis tenetur facere!"
          }
        />

        <Card
          img={<HiOutlineChartPie />}
          title={"Setup UI Project"}
          desc={
            "Lorem ipsum, dolor Adipisci ipsam placeat voluptatum fuga omnis tenetur facere!"
          }
        />
      </div>
    </div>
  );
};

export default Services;
