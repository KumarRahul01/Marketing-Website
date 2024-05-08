import React from "react";
<<<<<<< HEAD
import Routings from "../utils/Routings";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="">
      <Routings />
      <ToastContainer />
=======
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeroReverse from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import FreqAskedQues from "./components/FreqAskedQues";
import Team from "./components/Team";
import Clients from "./components/Clients";
import Conatact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container min-w-full min-h-lvh secondary-font">
      <NavBar />
      <section className="w-full max-h-fit pt-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Hero />
      </section>
      <section id="about" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <HeroReverse />
      </section>
      <section id="services" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Services />
      </section>
      <section id="portfolio" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Portfolio />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <FreqAskedQues />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Team />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Clients />
      </section>
      <section id="contact" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Conatact />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Newsletter />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Footer />
      </section>
>>>>>>> 95afe5686c02adaf4f9be00ab371def65ee42bae
    </div>
  );
};

export default App;
