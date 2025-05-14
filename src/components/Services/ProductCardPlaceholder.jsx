import React from "react";
import { RoundedButton } from "../RoundedButton";

export default function ProductCardPlaceholder() {
  return (
    <div className="flex w-full px-6 sm:px-8 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 rounded-[20px] duration-150 bg-white hover:shadow-2xl cursor-not-allowed shadow-2xs flex-col justify-baseline items-start gap-2 animate-pulse">
      <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full bg-bgColor grid place-items-center mb-3 sm:mb-4" />

      <div className="h-6 sm:h-8 w-32 sm:w-40 bg-black/50 rounded mb-2 sm:mb-3.5" />
      <div className="h-4 w-full bg-bgColor rounded" />
      <div className="h-4 w-full bg-bgColor rounded" />
      <div className="h-4 w-full bg-bgColor rounded" />
      <div className="h-4 w-full bg-bgColor rounded" />
      <div className="h-4 w-1/5 bg-bgColor rounded mb-2 sm:mb-3" />
      <div className="flex gap-2 sm:gap-3.5 flex-wrap">
        <RoundedButton
          text={"Connect Now"}
          bgColor={"primary"}
          customStyle={"text-white cursor-not-allowed"}
        />
        <RoundedButton
          text={"Our Works"}
          bgColor={"white"}
          customStyle={"text-primary border border-primary cursor-not-allowed"}
        />
      </div>
    </div>
  );
}
