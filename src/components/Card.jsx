import React from "react";
import { useNavigate } from "react-router-dom";



const Card = ({ title, desc, img, url }) => {

  const name = {title}

  const clickHandler = (e) => {
    console.log(e.title);
    if(e.title === "App Development"){
      console.log(`Welcome to ${e.title}`);
    }else if(e.title === "Web Development"){
      console.log(`Welcome to ${e.title}`);
    }else if(e.title === "Search Engine Optimization"){
      console.log(`Welcome to ${e.title}`);
    }else{
      console.log(`Welcome to Campaign Creation`);
    }
  }


  return (
    <a href={url}>
    <div className="bg-white lg:min-w-3/12 lg:min-h-[280px] h-fit p-10 shadow-md rounded mx-5 lg:m-0 hover:text-orange-600 lg:hover:-translate-y-5 transition-all duration-300 cursor-pointer"  onClick={()=> clickHandler(name)}>
      <div style={{ color: "#EA580C", fontSize: "36px" }}>
        {img}
      </div>

      <h1 className="lg:text-2xl text-lg font-semibold mt-3 mb-5">{title}</h1>
      <p className="lg:text-base text-sm text-zinc-700">
        {desc}
      </p>



    </div>
    </a>
  );
};

export default Card;
