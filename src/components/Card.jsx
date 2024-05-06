import React from "react";

const Card = ({ title, desc, img }) => {
  return (
    <div className="bg-white lg:min-w-3/12 h-fit p-10 shadow-md rounded mx-5 lg:m-0 hover:text-orange-600 lg:hover:-translate-y-5 transition-all duration-300 cursor-pointer">
      <div style={{ color: "#EA580C", fontSize: "36px" }}>
        {img}
      </div>

      <h1 className="lg:text-2xl text-xl font-semibold my-2">{title}</h1>
      <p className="lg:text-base text-sm my-3 text-zinc-700">
        {desc}
      </p>
    </div>
  );
};

export default Card;
