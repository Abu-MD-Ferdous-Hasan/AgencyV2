import React from "react";
import ServiceCard from "./ServiceCard";
import { useQuery } from "@tanstack/react-query";
import ProductCardPlaceholder from "./ServiceCardPLaceholder";
import { apiService } from "../../utilities/apiService";

export default function WeOffer() {
  const {
    isPending,
    error,
    data: products,
    isFetching,
  } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => apiService.get("products"),
  });

  if (error) return "An error has occurred: " + error.message;
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-24 bg-bg mx-auto text-center min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary font-bold">
          Services we provide
        </h1>
        <h5 className="font-medium font-primary text-sm sm:text-base md:text-lg text-black/80 mt-2 sm:mt-2.5 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          illum sed eaque voluptatibus dolor!
        </h5>
      </div>
      <div className="max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-12 lg:mt-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 place-items-center">
        {isFetching
          ? [...Array(4)].map((e, idx) => <ProductCardPlaceholder key={idx} />)
          : products
              ?.slice(0, 6)
              ?.map(({ icon, productName, productDetails }, idx) => (
                <ServiceCard
                  key={idx}
                  icon={icon}
                  serviceName={productName}
                  description={productDetails}
                />
              ))}
      </div>
    </section>
  );
}
