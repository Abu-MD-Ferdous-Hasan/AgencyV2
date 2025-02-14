import React from "react";
import logoObj from "../../utilities/svgs";
import Marquee from "react-fast-marquee";

export default function Brands() {
  return (
    <div className="bg-primary text-white w-full px-4 pt-16 pb-16" id="faq">
      <div className="flex justify-center items-start mx-20 mb-16">
        <h2 className="text-5xl w-1/2 leading-14 font-bold font-agrandir">
          Trusted by 200+ companies <br />
          around the world
        </h2>
        <p className="font-agrandir-widelight w-1/2 leading-6 tracking-widest top-0 font-extralight max-w-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero saepe
          similique, voluptatum temporibus, soluta minima ex aliquid laudantium
          impedit aut voluptas, nisi odit quas explicabo perferendis dicta. Quo,
          molestias magni!
        </p>
      </div>
      <Marquee autoFill={true} direction="left">
        <logoObj.Logo5 className="h-30 w-36 mx-12 " />

        <logoObj.Logo6 className="h-30 w-36 mx-12" />

        <logoObj.Logo7 className="h-30 w-36 mx-12" />

        <logoObj.Logo8 className="h-30 w-36 mx-12" />
        <logoObj.Logo9 className="h-30 w-36 mx-12" />
      </Marquee>
      <Marquee autoFill={true} direction="right">
        <logoObj.Logo1 className="h-30 w-36 mx-12" />

        <logoObj.Logo2 className="h-30 w-36 mx-12" />

        <logoObj.Logo3 className="h-30 w-36 mx-12" />

        <logoObj.Logo4 className="h-30 w-36 mx-12" />
      </Marquee>
    </div>
  );
}
