import React, { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

<<<<<<< HEAD
// React Form
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Newsletter = () => {
=======
const Newsletter = () => {

>>>>>>> 95afe5686c02adaf4f9be00ab371def65ee42bae
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

<<<<<<< HEAD
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    toast.success("You Subscribed our newsletter");
    e.target.reset();
  };
=======
>>>>>>> 95afe5686c02adaf4f9be00ab371def65ee42bae

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
<<<<<<< HEAD
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col md:flex-row justify-center items-center gap-3"
      >
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="email@gmail.com"
          className="md:w-1/2 w-11/12 px-6 py-3 rounded-3xl outline-none border border-zinc-300 focus:border-orange-600"
        />
        <button className="px-4 py-[10px] bg-orange-600 hover:bg-orange-500 rounded-3xl text-slate-50 text-lg hover:shadow hover:shadow-orange-500 transition-all duration-300">
          Subscribe
        </button>
=======
      <form className="w-full flex flex-col md:flex-row justify-center items-center gap-3">
        <input type="email" placeholder="email@gmail.com" className="md:w-1/2 w-11/12 px-6 py-3 rounded-3xl outline-none border border-zinc-300 focus:border-orange-600"/>
        <button className="px-4 py-[10px] bg-orange-600 hover:bg-orange-500 rounded-3xl text-slate-50 text-lg hover:shadow hover:shadow-orange-500 transition-all duration-300">Subscribe</button>
>>>>>>> 95afe5686c02adaf4f9be00ab371def65ee42bae
      </form>
    </div>
  );
};

export default Newsletter;
