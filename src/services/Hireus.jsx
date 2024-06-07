import React, { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// React Form
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import CtaButton from "../components/CtaButton";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Hireus = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    toast.success("Message sent Successfully");
    e.target.reset();
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="">
      <NavBar />
        <h1 className="text-center text-[#7A6960] md:text-5xl text-3xl font-semibold my-10 p-5 md:p-0">Share your idea & we will <br /> turn it into reality!</h1>
      <div className="w-full min-h-screen flex justify-center">
        {/* form */}
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          className="lg:w-[60%] h-fit px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600 bg-white"
        >
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
                  />
                </div>
              </div>

              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                {...register("subject", { required: true })}
                type="text"
                id="subject"
                placeholder="Your subject"
                className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                placeholder="Enter your message"
                className="w-full h-60 p-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center m-3">
              <CtaButton name={"Send Message"} />
            </div>
          </form>
        </div>
        
      </div>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100 mt-20 md:mt-0">
        <Newsletter />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Footer />
      </section>
    </div>
  );
};

export default Hireus;
