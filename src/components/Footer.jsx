import React, {useEffect } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {


  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="md:grid grid-cols-4 p-5 md:p-0">
      <div data-aos="fade-right" >
        <h1 className="text-xl font-light mb-3">BrandName</h1>
        <p className="mb-1">A108 Adam Street</p>
        <p className="mb-5">New York, NY 535022</p>

        <div>
          <p className="font-medium">
            Phone: <span className="font-normal ml-1">+1 5589 55488 55</span>
          </p>
          <p className="font-medium">
            Email: <span className="font-normal ml-1">info@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Useful links */}
      <div data-aos="fade-right" data-aos-delay="300" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">
          Useful Links
        </h1>
        <ul>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Home
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              About Us
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Service
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Terms Of Service
            </a>
          </li>
        </ul>
      </div>

      {/* Our Services */}
      <div data-aos="fade-right" data-aos-delay="500" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">
          Our Services
        </h1>
        <ul>
          <li className="mb-2 arrow">
            <Link to="/app-development" className="text-zinc-700">
              App Development
            </Link>
          </li>
          <li className="mb-2 arrow">
          <Link to="/web-development" className="text-zinc-700">
              Web Development
            </Link>
          </li>
          <li className="mb-2 arrow">
          <Link to="/seo-optimization" className="text-zinc-700">
          SEO Optimization
            </Link>
          </li>
          <li className="mb-2 arrow">
          <Link to="/campagin-creation" className="text-zinc-700">
          Campagin Creation
            </Link>
          </li>
          <li className="mb-2 arrow">
          <Link to="/hireus" className="text-zinc-700">
          Hire Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Follow Us */}
      <div data-aos="fade-right" data-aos-delay="700" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">Follow Us</h1>
        <p className="text-sm">
          Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
          valies
        </p>
        <div className="flex justify-between pr-5 mt-5">
          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <IoLogoTwitter size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <IoLogoFacebook size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <IoLogoInstagram size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <IoLogoLinkedin size={"26px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
