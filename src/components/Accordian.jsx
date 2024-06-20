import React, { useState } from "react";

const Accordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="bg-[#ffffff] cursor-pointer rounded hover:text-orange-600"
      >
        <button
          className={`flex justify-between items-center w-full p-4 ${
            show ? "text-orange-600" : ""
          }`}
        >
          <span>{question}</span>
          <span className="transition-all duration-300">
            {show ? (
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14"
                />
              </svg>
            ) : (
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            )}
          </span>
        </button>
        {/* answer */}
        <div className="text-[#7A6960]">
          {show ? <p className="pb-2 -mt-1 px-5">{answer}</p> : null}
        </div>
      </div>
    </>
  );
};

export default Accordian;
