import React, { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);


  return (
    <div data-aos="fade-down" className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">
        Join Our Newsletter
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 p-3 md:p-0">
        Subscribe to our newsletter and receive the latest news about our
        products and services!
      </p>

      {/* form */}
      <form className="w-full flex flex-col md:flex-row justify-center items-center gap-3">
        <input type="email" placeholder="email@gmail.com" className="md:w-1/2 w-11/12 px-6 py-3 rounded-3xl outline-none border border-zinc-300 focus:border-orange-600"/>
        <button className="px-4 py-[10px] bg-orange-600 hover:bg-orange-500 rounded-3xl text-slate-50 text-lg">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
