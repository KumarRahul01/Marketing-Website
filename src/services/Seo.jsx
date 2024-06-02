import React from 'react'
import Template from './Template'
import image from "../img/portfolio/app-1.jpg";


const Seo = () => {
  return (
    <div>
    <Template
      title={"SEO Optimization"}
      desc={
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet necessitatibus laborum voluptatem at provident atque labore porro ipsam debitis quam, ad dolorem, corrupti aut praesentium minima sit deserunt maiores fuga?"
      }
      image={image}
    />
  </div>
  )
}

export default Seo