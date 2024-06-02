import React from 'react'
import image from "../img/portfolio/app-2.jpg";
import Template from './Template';


const Campaign = () => {
  return (
    <div>
    <Template
      title={"Campaign Creation"}
      desc={
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet necessitatibus laborum voluptatem at provident atque labore porro ipsam debitis quam, ad dolorem, corrupti aut praesentium minima sit deserunt maiores fuga?"
      }
      image={image}
    />
  </div>
  )
}

export default Campaign