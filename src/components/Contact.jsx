import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import CtaButton from "./CtaButton";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {


  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);


  return (
    <div className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">Contact</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      <div className="lg:flex gap-6">
        {/* map */}
        <div data-aos="fade-up" className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600 mb-7 lg:mb-0">
          <div className="flex gap-3 mt-3 mb-12">
            <div
              className="rounded-full h-fit bg-orange-100 p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <IoLocationOutline />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Address
              </h2>
              <p className="text-sm text-slate-800">
                A108 Adam Street, New York, NY 535022
              </p>
            </div>
          </div>

          <div className="flex gap-3 mb-12">
            <div
              className="rounded-full h-fit bg-orange-100 p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <IoCallOutline />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Call Us
              </h2>
              <p className="text-sm text-slate-800">+1 5589 55488 55</p>
            </div>
          </div>

          <div className="flex gap-5 mb-12">
            <div
              className="rounded-full h-fit bg-orange-100 p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <TfiEmail />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Email Us
              </h2>
              <p className="text-sm text-slate-800">info@example.com</p>
            </div>
          </div>

          <div className="lg:w-full lg:h-72">
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446503.2718980982!2d77.06293911143105!3d29.03750514663243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced99fa1a5c27%3A0xaebefe90c0d9c8b5!2sDowntown%20Fitness%20GYM!5e0!3m2!1sen!2sin!4v1714676789211!5m2!1sen!2sin"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* form */}
        <div data-aos="fade-up" data-aos-duration="1600" className="lg:w-[60%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600">
          <form>
            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <div>
                  <h2>Name:</h2>
                  <input
                    type="text" placeholder="John Doe"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
                  />
                </div>
              </div>

              <div className="md:w-[50%]">
                <div>
                  <h2>Your Email:</h2>
                  <input
                    type="text" placeholder="johndoe@gmail.com"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2>Subject</h2>
              <input
                type="text" placeholder="Your subject"
                className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
              />
            </div>

            <div>
              <h2>Message</h2>
              <textarea placeholder="Enter your message" className="w-full h-60 p-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none resize-none"></textarea>
            </div>

            <div className="flex justify-center m-3">
              <CtaButton name={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
