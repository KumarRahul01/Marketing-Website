import React from "react";
import Template from "./Template";
import image from "../img/services.jpg";

const WebDevelopment = () => {
  return (
    <div>
      <Template
        title={"Web Development"}
        desc={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet necessitatibus laborum voluptatem at provident atque labore porro ipsam debitis quam, ad dolorem, corrupti aut praesentium minima sit deserunt maiores fuga?"
        }
        image={image}
      />
    </div>
  );
};

export default WebDevelopment;
