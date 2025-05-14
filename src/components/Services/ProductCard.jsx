import React from "react";
import { RoundedButton } from "../RoundedButton";
import { RiServiceFill } from "react-icons/ri";
import DynamicIconRender from "../../utilities/DynamicIconRender";
import { useNavigate } from "react-router-dom";
export default function ProductCard({
  productIcon,
  productName,
  productDetails,
}) {
  const IconComponent = DynamicIconRender({ productIcon });

  const navigate = useNavigate();
  return (
    <div className="flex px-6 sm:px-8 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 rounded-[20px] duration-150 bg-white hover:shadow-2xl cursor-pointer shadow-2xs flex-col justify-baseline items-start gap-3 sm:gap-4">
      <div className="text-3xl sm:text-4xl text-primary p-5 sm:p-6 md:p-7 rounded-full bg-bgColor grid place-items-center">
        {IconComponent ? (
          <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
        ) : (
          <RiServiceFill />
        )}
      </div>
      <h1 className="text-black font-primary font-semibold text-xl sm:text-2xl text-left">
        {productName}
      </h1>
      <p className="text-black/50 font-medium text-base sm:text-lg text-left">
        {productDetails}
      </p>
      <div className="flex gap-2 sm:gap-3.5 flex-wrap">
        <RoundedButton
          text={"Connect Now"}
          bgColor={"primary"}
          customStyle={"text-white"}
        />
        <RoundedButton
          text={"Our Works"}
          bgColor={"white"}
          customStyle={"text-primary border border-primary"}
          clickHandler={() => navigate("/portfolio")}
        />
      </div>
    </div>
  );
}
