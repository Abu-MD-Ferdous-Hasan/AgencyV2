import React from "react";

export const RoundedButton = ({ text }) => {
  return (
    <button
      class="ml-3 align-middle select-none font-primary font-medium text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-2 px-6 bg-primary text-white shadow-md shadow-secondary/10 hover:shadow-lg hover:shadow-secondary/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
      type="button"
    >
      {text}
    </button>
  );
};
