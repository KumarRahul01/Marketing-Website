import React, {useEffect} from "react";
import team1 from "../img/team/team-1.jpg";
import team2 from "../img/team/team-2.jpg";
import team3 from "../img/team/team-3.jpg";
import team4 from "../img/team/team-4.jpg";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);


  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">Team</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      <div className="flex flex-col xs:flex-row gap-6 p-5 lg:p-0 items-center">
        <div className="lg:w-[25rem] w-72">
          <img className="w-fit h-fit object-cover" src={team1} alt="team1" />
        </div>

        <div className="lg:w-[25rem] w-72">
          <img className="w-fit h-fit object-cover" src={team2} alt="team2" />
        </div>

        <div className="lg:w-[25rem] w-72">
          <img className="w-fit h-fit object-cover" src={team3} alt="team3" />
        </div>

        <div className="lg:w-[25rem] w-72">
          <img className="w-fit h-fit object-cover" src={team4} alt="team4" />
        </div>
      </div>
    </div>
  );
};

export default Team;
