import React from "react";
import { RoundedButton } from "../RoundedButton";

export default function ProductCardPlaceholder() {
  return (
    <div className="flex w-full px-14 py-10 rounded-[20px] duration-150 bg-white hover:shadow-2xl cursor-not-allowed shadow-2xs flex-col justify-baseline items-start gap-2 animate-pulse">
      <div className="h-24 w-24 rounded-full bg-bgColor grid place-items-center mb-4" />

      <div className="h-8 w-xs bg-black/50 rounded mb-3.5" />
      <div class="h-4 w-full bg-bgColor rounded " />
      <div class="h-4 w-full bg-bgColor rounded" />
      <div class="h-4 w-full bg-bgColor rounded" />
      <div class="h-4 w-full bg-bgColor rounded" />
      <div class="h-4 w-1/5 bg-bgColor rounded mb-3" />
      <div className="flex  gap-3.5">
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
