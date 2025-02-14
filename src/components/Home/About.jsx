import React from "react";
import { RoundedButton } from "../RoundedButton";

export default function About() {
  return (
    <section className="h-[100vh] pt-[15%]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:items-center md:gap-10">
          <img
            src="https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-xl"
            alt=""
          />

          <div className="md:max-w-none">
            <h2 className="font-inter text-2xl font-semibold text-gray-900 sm:text-5xl">
              Designed and built <br /> by an astonishing <br /> creative team.
            </h2>

            <RoundedButton
              text={"About Us"}
              bgColor={"primary"}
              customStyle={"mt-[175px]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
