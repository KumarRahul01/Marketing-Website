import React, { useEffect } from "react";
import app1 from "../img/portfolio/app-1.jpg";
import app2 from "../img/portfolio/app-2.jpg";
import app3 from "../img/portfolio/app-3.jpg";
import product1 from "../img/portfolio/product-1.jpg";
import product3 from "../img/portfolio/product-3.jpg";
import branding1 from "../img/portfolio/branding-1.jpg";
import book1 from "../img/portfolio/books-1.jpg";
import book2 from "../img/portfolio/books-2.jpg";
import book3 from "../img/portfolio/books-3.jpg";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">Portfolio</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* Images */}
      <div className="flex flex-col lg:-gap-6 gap-3 p-5">
        {/* 1st row */}
        <div className="flex lg:-gap-6 gap-3">
          <div className="w-[26rem] overflow-hidden">
            <img
              src={app1}
              className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-60 hover:scale-110"
              alt="phone"
            />
          </div>

          <div className="w-[26rem] overflow-hidden">
            <img
              src={product1}
              className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-60 hover:scale-110"
              alt="phone"
            />
          </div>

          <div className="w-[26rem] overflow-hidden">
            <img
              src={branding1}
              className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-60 hover:scale-110"
              alt="phone"
            />
          </div>
        </div>

        {/* 2nd row */}
        <div className="flex lg:-gap-6 gap-3">
          <div className="w-[26rem] overflow-hidden">
            <img
              src={book1}
              className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-60 hover:scale-110"
              alt="phone"
            />
          </div>

          <div className="w-[26rem] overflow-hidden">
            <img
              src={app2}
              className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-60 hover:scale-110"
              alt="phone"
            />
          </div>

          <div className="w-[26rem] overflow-hidden">
            <img
              src={book3}
              className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-60 hover:scale-110"
              alt="phone"
            />
          </div>
        </div>

        {/* 3rd row */}
        <div className="flex lg:-gap-6 gap-3">
          <div className="w-[26rem] overflow-hidden">
            <img
              src={product3}
              className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-60 hover:scale-110"
              alt="phone"
            />
          </div>

          <div className="w-[26rem] overflow-hidden">
            <img
              src={book2}
              className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-60 hover:scale-110"
              alt="phone"
            />
          </div>

          <div className="w-[26rem] overflow-hidden">
            <img
              src={app3}
              className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-60 hover:scale-110"
              alt="phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
