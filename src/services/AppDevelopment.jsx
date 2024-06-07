import React from "react";
import Template from "./Template";
import appImage from "../img/portfolio/app-1.jpg";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const AppDevelopment = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"App Development"}
        desc={
          "Lorem doloribus ex quisquam. Nesciunt laborum laboriosam consequuntur, eum id molestias in, Nesciunt laborum laboriosam consequuntur, eum id molestias in."
        }
        image={appImage}
      />

      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Newsletter />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Footer />
      </section>
    </div>
  );
};

export default AppDevelopment;
