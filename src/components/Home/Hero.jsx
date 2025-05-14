import React from "react";
import { NormalBtn } from "../NormalBtn";
import { LuMouse } from "react-icons/lu";

export default function Hero() {
  return (
    <div className="relative min-h-[100vh] overflow-hidden">
      {/* big circles section */}
      <div
        id="blur"
        className="absolute bg-white/30 backdrop-blur-3xl z-10 h-[100vh] w-[100vw]"
      />
      <div
        id="faded-blue-circle"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 bg-[#B9CEEA] rounded-full absolute top-30 left-[70%]"
      />
      <div
        id="blue-circle"
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-blue-500 rounded-full absolute top-40 left-[20%]"
      />
      <div
        id="yellow-circle"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 bg-yellow-500 rounded-full absolute top-[60%] left-[20%]"
      />
      <div
        id="faded-red-circle"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 bg-[#FAB7B8] rounded-full absolute top-[55%] left-[70%]"
      />
      <div
        id="faded-purple-circle"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 bg-[#B9CEEA] -translate-1/2 rounded-full absolute top-1/2 left-1/2"
      />
      {/* small circles section */}
      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-red-500 rounded-full absolute top-44 left-[75%] z-[11]" />
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-sky-500 rounded-full absolute top-24 left-[85%] z-[11]" />
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white ring-2 sm:ring-3 md:ring-4 ring-slate-600 rounded-full absolute top-40 left-[30%] z-[11]" />
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-blue-500 rounded-full absolute top-[60%] left-[30%] z-[11]" />
      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-500 rounded-full absolute top-[55%] left-[60%] z-[11]" />
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full absolute top-[20%] left-[55%] z-[11]" />
      <h1 className="font-poiret text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[83px] tracking-tight text-black absolute top-1/3 text-center left-1/2 translate-[-50%] z-[11] px-4 sm:px-6 md:px-8">
        {/* hero title */}
        Transforming Ideas into Exceptional Experiences
      </h1>
      <p className="font-primary text-lg sm:text-xl md:text-2xl tracking-tight text-black absolute top-[45%] sm:top-[55%] md:top-[60%] lg:top-[65%] xl:top-[55%] 2xl:top-[50%] text-center left-1/2 translate-[-50%] z-[11] px-4 sm:px-6 md:px-8 max-w-3xl mx-auto">
        We Transform Ideas into Digital Success Stories
      </p>
      <div className="absolute top-[55%] sm:top-[65%] md:top-[70%] lg:top-[75%] xl:top-[60%] 2xl:top-[60%] text-center left-1/2 translate-[-50%] z-[11] px-4 sm:px-6 md:px-8">
        <NormalBtn
          text={"Get Started"}
          bgColor={"black"}
          customStyle={"font"}
        />
      </div>
      <span className="absolute z-[11] left-1/2 translate-[-50%] top-[60%] sm:top-[70%] md:top-[75%] lg:top-[80%] xl:top-[65%] 2xl:top-[65%]">
        <LuMouse className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
      </span>
    </div>
  );
}
