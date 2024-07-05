import React from "react";
// import app3 from "../img/portfolio/app-2.jpg";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CtaButton from "../components/CtaButton";
import { Link, useNavigate } from "react-router-dom";

const Appproducts = ({ img }) => {
  const navigate = useNavigate();

  let date = new Date();
  date =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  return (
    <div>
      <NavBar />
      <section
        id="about"
        className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100"
      >
        <div className="flex md:flex-row flex-col items-start justify-center gap-10">
          <div className="md:w-2/3 p-5 md:p-0">
            <img className="" src={img} alt="" />
          </div>
          <div className="md:w-1/3 flex flex-col gap-10 p-5 md:p-0">
            <div className="shadow-xl border-2 p-8">
              <h1 className="text-3xl font-semibold text-[#7A6960]">
                Project Information
              </h1>
              <div className="h-[1px] mt-3 bg-slate-200"></div>
              <ul className="mt-3">
                <li>
                  <span className="font-semibold ">Category:</span> Software
                </li>
                <li>
                  <span className="font-semibold ">Client:</span> USA
                </li>
                <li>
                  <span className="font-semibold ">Project Date:</span> {date}
                </li>
                <li>
                  <span className="font-semibold ">Project Url:</span>{" "}
                  <span className="text-orange-600">www.example.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-[#7A6960]">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta mollitia, labore deserunt repellat temporibus animi
                pariatur accusamus enim unde rerum id qui beatae neque,
                perferendis maxime facilis nulla quos saepe iste non optio quam
                in! Dolorem hic nulla porro?
              </p>
            </div>
            <div className="flex items-center justify-center mt-3">
              <Link to="/hireus" className="">
                <CtaButton name={"Hire Us"} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newletter & Footer */}
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Newsletter />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Footer />
      </section>
    </div>
  );
};

export default Appproducts;
