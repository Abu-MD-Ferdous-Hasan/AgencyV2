import React from "react";

export const NormalBtn = ({ text, bgColor, customStyle }) => {
  return (
    <button
      className={`ml-3 align-middle select-none font-medium text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-2 px-6 bg-${bgColor} text-white shadow-md shadow-secondary/10 hover:shadow-lg hover:shadow-secondary/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-md ${customStyle} font-sans`}
      type="button"
    >
      {text}
    </button>
  );
};
