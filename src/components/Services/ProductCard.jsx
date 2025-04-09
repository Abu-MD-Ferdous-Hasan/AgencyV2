import React, { useEffect, useState } from "react";
import { RoundedButton } from "../RoundedButton";
import { RiServiceFill } from "react-icons/ri";
import DynamicIconRender from "../../utilities/DynamicIconRender";

export default function ProductCard({
  productIcon,
  productName,
  productDetails,
}) {
  const IconComponent = DynamicIconRender({ productIcon });

  // useEffect(() => {
  //   if (productIcon) {
  //     import(`@heroicons/react/24/solid`)
  //       .then((module) => {
  //         const ImportedIcon = module[productIcon];
  //         if (ImportedIcon) setIconComponent(() => ImportedIcon);
  //       })
  //       .catch((err) => {
  //         console.error("Icon not found:", err);
  //       });
  //   }
  // }, [productIcon]);

  return (
    <div className="flex px-14 py-10 rounded-[20px] duration-150 bg-white hover:shadow-2xl cursor-pointer shadow-2xs flex-col justify-baseline items-start gap-4">
      <div className="text-4xl text-primary p-7 rounded-full bg-bgColor grid place-items-center">
        {IconComponent ? (
          <IconComponent className="w-10 h-10" />
        ) : (
          <RiServiceFill />
        )}
      </div>
      <h1 className="text-black font-primary font-semibold md:text-2xl">
        {productName}
      </h1>
      <p className="text-black/50 font-medium md:text-lg text-left">
        {productDetails}
      </p>
      <div className="flex  gap-3.5">
        <RoundedButton
          text={"Connect Now"}
          bgColor={"primary"}
          customStyle={"text-white"}
        />
        <RoundedButton
          text={"Our Works"}
          bgColor={"white"}
          customStyle={"text-primary border border-primary"}
        />
      </div>
    </div>
  );
}
