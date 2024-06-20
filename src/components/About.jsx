import React, { useEffect, useState } from "react";
import CtaButton from "./CtaButton";
import VideoBtn from "./VideoBtn";
import img from "../img/about-img.svg";
import { BsPeople } from "react-icons/bs";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// import video
import video from "../img/video/funny.mp4";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  const [show, setShow] = useState(false);

  const videoStartHandler = () => {
    const video = document.querySelector("#video");
    video.currentTime = 0;
    video.load();
    setShow(true);
  };

  const clickHandler = () => {
    const video = document.querySelector("#video");
    video.pause();
    setShow(false);
  };

  return (
    <div className="relative lg:mx-32">
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
              Edtech platform offering expert mentorship with our tech-powered
              courses in various languages of India.
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
          <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
            <div>
              <a href="/Marketing-Website/#contact" className="">
                <CtaButton name={"Get Started"} />
              </a>
            </div>
            {/* <div
              onClick={() => videoStartHandler()}
              className="shadow shadow-zinc-300 hover:shadow-orange-600 hover:shadow px-4 py-2 rounded-3xl"
            >
              <VideoBtn name={"Watch Video"} />
            </div> */}
          </div>

          {/* <div
            className={`${
              show ? "block" : "hidden"
            } absolute right-0 top-0 lg:w-full lg:h-full bg-zinc-500 bg-opacity-50 rounded overflow-hidden flex justify-center items-center shadow-2xl lg:mb-20 transition-all duration-300`}
          >
            <div
              onClick={() => clickHandler()}
              className="absolute right-10 top-6 text-3xl font-light bg-zinc-700 px-3 rounded-full text-white cursor-pointer"
            >
              x
            </div>
            <video
              id="video"
              muted
              controls
              autoPlay
              className="w-[800px] rounded"
              src={video}
            ></video>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
