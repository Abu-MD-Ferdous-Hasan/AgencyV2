import React from "react";
import { NormalBtn } from "../NormalBtn";
import { LuMouse } from "react-icons/lu";

export default function Hero() {
  return (
    <div className="relative min-h-[100vh] overflow-hidden">
      <div className="absolute bg-white/30 backdrop-blur-2xl z-10 h-[100vh] w-[100vw]"></div>
      <div className="w-40 h-40 bg-red-500 rounded-full absolute top-44 left-[70%]"></div>
      <div className="w-40 h-40 bg-blue-500 rounded-full absolute top-40  left-[20%]"></div>
      <div className="w-40 h-40 bg-yellow-500 rounded-full absolute top-[60%] left-[20%]"></div>
      <div className="w-40 h-40 bg-pink-500 rounded-full absolute top-[55%]  left-[70%]"></div>
      <div className="w-40 h-40 bg-cyan-500 rounded-full absolute top-[40%] left-[40%]"></div>
      <div class="absolute bg-white/30 backdrop-blur-xl z-10 h-[100vh] w-[100vw]"></div>
      <div className="w-5 h-5 bg-red-500 rounded-full absolute top-44 left-[75%] z-[11]"></div>
      <div className="w-3 h-3 bg-sky-500 rounded-full absolute top-24 left-[85%] z-[11]"></div>
      <div className="w-4 h-4 bg-white ring-4 ring-slate-600 rounded-full absolute  top-40  left-[30%] z-[11]"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full absolute  top-[60%] left-[30%] z-[11]"></div>
      <div className="w-5 h-5 bg-green-500 rounded-full absolute top-[55%]  left-[60%] z-[11]"></div>
      <div className="w-2 h-2 bg-black rounded-full absolute top-[20%] left-[55%] z-[11]"></div>
      <h1 className="font-poiret text-7xl leading-[83px] tracking-tight text-black absolute top-1/3 text-center left-1/2 translate-[-50%] z-[11] ">
        Transforming Ideas into Exceptional Experiences
      </h1>
      <p className="font-primary leading-[83px] tracking-tight text-black absolute top-[45%] text-center left-1/2 translate-[-50%] z-[11]">
        We Transform Ideas into Digital Success Stories
      </p>
      <div className="absolute top-[50%] text-center left-1/2 translate-[-50%] z-[11]">
        <NormalBtn
          text={"Get Started"}
          bgColor={"black"}
          customStyle={"font"}
        />
      </div>
      <span className="absolute z-[11] left-1/2 translate-[-50%] top-[60%]">
        <LuMouse className="w-10 h-10" />
      </span>
    </div>
  );
}
