import React, { useEffect } from "react";
import CtaButton from "./CtaButton";
import VideoBtn from "./VideoBtn";
import img from "../img/about-img.svg";
import { BsPeople } from "react-icons/bs";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <div>
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-[#7A6960]"
      >
        About Us
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

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
              Upskilling Edtech
            </h1>
            <p className="text-lg mt-5 text-gray-600 primary-font">
              Edtech platform offering expert mentorship with our
              tech-powered courses in various languages of India.
            </p>
          </div>

          {/* 1st template */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div
              className="bg-orange-600 w-fit p-2 md:p-5 rounded"
              style={{ color: "white" }}
            >
              <BsPeople size={"28px"} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">
                The Vernacular Upskilling Edtech
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                Explore Our Courses | Bharat ka Career Launchpad
              </p>
            </div>
          </div>

          {/* 2nd template */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div
              className="bg-orange-600 w-fit p-2 md:p-5 rounded"
              style={{ color: "white" }}
            >
              <BsPeople size={"28px"} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">
                Build Your Career, Your Way
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                Our Learners Work at Global Companies & Startups
              </p>
            </div>
          </div>

          {/* para */}
          <p
            data-aos="zoom-in"
            className="text-lg mt-5 text-gray-600 primary-font"
          >
            Master industry-relevant skills with our vernacular online courses.
            Choose your program, get certified, and open doors to lucrative
            career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
            <CtaButton name={"Get Started"} />
            <VideoBtn name={"Watch Video"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
