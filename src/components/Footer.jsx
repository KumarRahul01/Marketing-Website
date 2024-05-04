import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div className="md:grid grid-cols-4 p-5 md:p-0">
      <div>
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
      <div className="mt-10 md:mt-0">
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
      <div className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">
          Our Services
        </h1>
        <ul>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Web Design
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Web Development
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Product Management
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Marketing
            </a>
          </li>
        </ul>
      </div>

      {/* Follow Us */}
      <div className="mt-10 md:mt-0">
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
