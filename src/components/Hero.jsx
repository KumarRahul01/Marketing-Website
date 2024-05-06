import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CtaButton from "./CtaButton";
import VideoBtn from "./VideoBtn";
import img from "../img/hero-img.svg";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// import video 
import video from "../img/video/funny.mp4";

const Hero = () => {
  const myElement = useRef(null);

  useEffect(() => {
    gsap.to(myElement.current, {
      duration: 2,
      y: -100,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    AOS.init();
  });

  // const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-10 secondary-font relative">
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0"
      >
        <h1 className="text-[#7A6960] md:text-5xl text-3xl font-semibold">
          Fueling Skills, Igniting Careers
        </h1>
        <p className="text-xl mt-5 text-gray-600 primary-font">
          Master industry-relevant skills with our vernacular online courses. Choose your program, get certified, & open doors to lucrative career opportunities.
        </p>
        <div className="flex flex-col sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
          <CtaButton name={"Get Started"} />
          <VideoBtn name={"Watch Video"} />
        </div>
      </div>

      <div className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0">
        <img ref={myElement} className="w-full animate" src={img} alt="img" />
      </div>


      {/* Adding video */}

      {/* <div className={`${show ? "block" : "hidden"} absolute left-52 w-fit bg-red-500 p-10 rounded overflow-hidden`}>
        <video autoPlay className="w-[800px] rounded shadow-2xl" src={video}></video>
      </div> */}
    </div>
  );
};

export default Hero;
