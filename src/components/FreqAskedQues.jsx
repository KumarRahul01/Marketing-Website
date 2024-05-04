import React, { useEffect } from "react";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

const FreqAskedQues = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">
        Frequently Asked Questions
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* Accordian */}
      <div></div>
    </div>
  );
};

export default FreqAskedQues;
