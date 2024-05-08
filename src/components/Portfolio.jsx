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
import PortfolioProduct from "./PortfolioProduct";

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
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Explore Our Live Courses & Make Bharat ka Career Launchpad
      </p>

      {/* Images */}
      <div className="flex flex-col lg:-gap-6 gap-3 p-5">
        {/* 1st row */}
        <div data-aos="fade-right" className="flex lg:-gap-6 gap-3">
          <PortfolioProduct image={app1} />

          <PortfolioProduct image={product1} />

          <PortfolioProduct image={branding1} />
        </div>

        {/* 2nd row */}
        <div data-aos="fade-left" className="flex lg:-gap-6 gap-3">
          <PortfolioProduct image={book1} />

          <PortfolioProduct image={app2} />

          <PortfolioProduct image={book3} />
        </div>

        {/* 3rd row */}
        <div data-aos="fade-up" className="flex lg:-gap-6 gap-3">
          <PortfolioProduct image={product3} />

          <PortfolioProduct image={book2} />

          <PortfolioProduct image={app3} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;