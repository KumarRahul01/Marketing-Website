import React, { useEffect } from "react";
import CtaButton from "./CtaButton";
import VideoBtn from "./VideoBtn";
import img from "../img/about-img.svg";
import { BsPeople } from "react-icons/bs";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const HeroReverse = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
      <div
        data-aos="fade-up"
        className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0"
      >
        <img className="w-full" src={img} alt="img" />
      </div>
      <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
        <div data-aos="fade-left">
          <h1 className="text-[#7A6960] md:text-3xl font-semibold">
            Voluptatem dignissimos provident quasi assumenda.
          </h1>
          <p className="text-lg mt-5 text-gray-600 primary-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* 1st template */}
        <div data-aos="zoom-in" className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5">
          <div
            className="bg-orange-600 w-fit p-2 md:p-5 rounded"
            style={{ color: "white" }}
          >
            <BsPeople size={"28px"} />
          </div>
          <div>
            <h2 className="text-[#7A6960] text-xl font-medium">
              Ullamco laboris nisi ut aliquip consequat
            </h2>
            <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
              Magni facilis facilis repellendus cum excepturi quaerat
              praesentium libre trade
            </p>
          </div>
        </div>

        {/* 2nd template */}
        <div data-aos="zoom-in" className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5">
          <div
            className="bg-orange-600 w-fit p-2 md:p-5 rounded"
            style={{ color: "white" }}
          >
            <BsPeople size={"28px"} />
          </div>
          <div>
            <h2 className="text-[#7A6960] text-xl font-medium">
              Ullamco laboris nisi ut aliquip consequat
            </h2>
            <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
              Magni facilis facilis repellendus cum excepturi quaerat
              praesentium libre trade
            </p>
          </div>
        </div>

        {/* para */}
        <p data-aos="fade-left" className="text-lg mt-5 text-gray-600 primary-font">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div className="flex flex-col sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
          <CtaButton name={"Get Started"} />
          <VideoBtn name={"Watch Video"} />
        </div>
      </div>
    </div>
  );
};

export default HeroReverse;
