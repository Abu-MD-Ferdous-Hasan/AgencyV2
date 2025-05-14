import React from "react";
import { RoundedButton } from "../RoundedButton";

export default function About() {
  return (
    <section className="min-h-screen pt-16 sm:pt-24 lg:pt-[15%]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-auto md:h-[500px] object-cover rounded-xl"
              alt="About Us"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-inter text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-900">
              Crafting Digital Excellence <br className="hidden md:block" />{" "}
              with a Team of <br className="hidden md:block" /> Visionary
              Creators.
            </h2>

            <div className="mt-8 md:mt-[175px]">
              <RoundedButton
                text={"About Us"}
                bgColor={"primary"}
                customStyle={"text-white"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
