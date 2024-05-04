import React from "react";

const CtaButton = ({name}) => {
  return (
    <button className="bg-orange-600 text-lg text-slate-50 rounded-3xl px-4 py-1 w-fit">
      {name}
    </button>
  );
};

export default CtaButton;
