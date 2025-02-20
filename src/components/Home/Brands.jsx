import React from "react";
import SvgsObj from "../../utilities/svgs";
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
        <SvgsObj.Logo5 className="h-30 w-36 mx-12 " />

        <SvgsObj.Logo6 className="h-30 w-36 mx-12" />

        <SvgsObj.Logo7 className="h-30 w-36 mx-12" />

        <SvgsObj.Logo8 className="h-30 w-36 mx-12" />
        <SvgsObj.Logo9 className="h-30 w-36 mx-12" />
        <SvgsObj.Logo19 className="h-30 w-36 mx-12" />
        <SvgsObj.Logo18 className="h-30 w-36 mx-12" />
        <SvgsObj.Logo17 className="h-30 w-36 mx-12" />
        <SvgsObj.Logo16 className="h-30 w-36 mx-12" />
        <SvgsObj.Logo15 className="h-30 w-36 mx-12" />
      </Marquee>
      <Marquee autoFill={true} direction="right">
        <SvgsObj.Logo1 className="h-30 w-36 mx-12" />

        <SvgsObj.Logo2 className="h-30 w-36 mx-12" />

        <SvgsObj.Logo3 className="h-30 w-36 mx-12" />

        <SvgsObj.Logo4 className="h-30 w-36 mx-12" />
        <SvgsObj.Logo10 className="h-30 w-36 mx-12" />
        <SvgsObj.Logo11 className="h-30 w-36 mx-12" />
        <SvgsObj.Logo12 className="h-30 w-36 mx-12" />
        <SvgsObj.Logo13 className="h-30 w-36 mx-12" />
        <SvgsObj.Logo14 className="h-30 w-36 mx-12" />
      </Marquee>
    </div>
  );
}
