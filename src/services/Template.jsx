import React from "react";
import CtaButton from "../components/CtaButton";
import { useNavigate } from "react-router-dom";

const Template = ({ title, desc, image }) => {


  return (
    <div className="container min-w-full min-h-lvh secondary-font">
      <section className="w-full min-h-screen md:pt-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <div className="flex flex-col md:flex-row gap-10 justify-center bg-[#FEFAF8] items-center md:border md:shadow-xl rounded overflow-hidden md:p-16 p-10">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-[#7A6960] md:text-5xl text-3xl font-semibold">
              {title}
            </h1>
            <p className="text-xl mt-10 text-gray-600 primary-font">{desc}</p>

            <div className="flex flex-col sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
              <a href="Marketing-Website/hire-us" className="">
                <CtaButton name={"Hire Us"} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Template;
