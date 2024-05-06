import React from "react";
import Accordian from "./Accordian";

const Faquestions = () => {
  return (
    // <div className="grid md:grid-cols-2 gap-x-10 md:gap-y-5 gap-y-3 mx-5 lg:mx-0">
    <>
      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={"Top 108 SEO Interview Questions and Answers"}
          answer={
            "Well-curated basic to advanced interview questions on SEO, categorized into freshers and experienced professionals. Also, find tips to fast-track a career in SEO."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"Top 55 JavaScript Interview Questions and Answers"}
          answer={
            "The most detailed and well-structured set of interview questions on JavaScript for Freshers and experienced professionals in the field of web development."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={"Top 60 NodeJS Interview Questions and Answers"}
          answer={
            "A list of top NodeJS interview questions and answers for both freshers & experienced candidates to prepare and boost chances of selection."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"Top 49 Data Structures Interview Questions 2024"}
          answer={
            "Data structures have become integral to every field and business. They are the building blocks of any computer program, making organising..."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0 ">
        <Accordian
          question={"Top 55 Flutter Interview Questions and Answers 2024"}
          answer={
            "Flutter has been gaining immense popularity in recent times, and for a good reason. It is a powerful open-source mobile app development framework created by Google."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"Top 28 Java 8 Interview Questions and Answers 2024"}
          answer={
            "Java is a widely used programming language for various types of development projects, from the web and Android apps to the Internet of Things (IoT). "
          }
        />
        </div>
      </div>
    </>
  );
};

export default Faquestions;
