import React from "react";
import SvgsObj from "../../utilities/svgs";
import Marquee from "react-fast-marquee";

export default function Brands() {
  return (
    <div
      className="bg-primary text-white w-full px-4 sm:px-6 pt-16 pb-16"
      id="faq"
    >
      <div className="flex flex-col sm:flex-row justify-center items-start mx-4 sm:mx-8 lg:mx-20 mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl w-full sm:w-1/2 leading-tight sm:leading-14 font-bold font-agrandir mb-4 sm:mb-0">
          Trusted by 200+ companies <br />
          around the world
        </h2>
        <p className="font-agrandir-widelight w-full sm:w-1/2 leading-6 tracking-widest top-0 font-extralight max-w-2xl">
          We've built trust with leading companies worldwide, delivering
          exceptional digital solutions that drive growth and innovation. Our
          partnerships span across industries, from tech giants to emerging
          startups.
        </p>
      </div>
      <div className="overflow-hidden">
        <Marquee autoFill={true} direction="left" className="py-4">
          <SvgsObj.Logo5 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo6 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo7 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo8 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo9 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo19 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo18 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo17 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo16 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo15 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
        </Marquee>
        <Marquee autoFill={true} direction="right" className="py-4">
          <SvgsObj.Logo1 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo2 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo3 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo4 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo10 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo11 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo12 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo13 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
          <SvgsObj.Logo14 className="h-20 sm:h-30 w-24 sm:w-36 mx-4 sm:mx-12" />
        </Marquee>
      </div>
    </div>
  );
}
