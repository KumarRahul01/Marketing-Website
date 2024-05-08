import React from "react";
import { FaLink } from "react-icons/fa6";


const PortfolioProduct = ({image}) => {
  return (
    <div className="w-[26rem] overflow-hidden hover:relative prodImage hover:cursor-pointer hover:text-orange-600">
      <img
        src={image}
        className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-60 hover:scale-110"
        alt="phone"
      />
      <div className="link absolute top-[45%] left-[45%]">
        <FaLink size={"45px"} />
      </div>
    </div>
  );
};

export default PortfolioProduct;
