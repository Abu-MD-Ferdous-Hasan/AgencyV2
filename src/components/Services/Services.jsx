import React from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import ProductCardPlaceholder from "./ProductCardPlaceholder";
import { apiService } from "../../utilities/apiService";

export default function Services() {
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold">
          Services we provide
        </h1>
        <h5 className="font-medium font-primary text-base sm:text-lg text-black/80 mt-2 sm:mt-2.5 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          illum sed eaque voluptatibus dolor!
        </h5>
      </div>
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-16 sm:mb-24 md:mb-32 lg:mb-64 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 place-items-center">
        {isFetching
          ? [...Array(4)].map((e, idx) => <ProductCardPlaceholder key={idx} />)
          : products?.map(({ icon, productName, productDetails }, idx) => (
              <ProductCard
                key={idx}
                productIcon={icon}
                productName={productName}
                productDetails={productDetails}
              />
            ))}
      </div>
    </section>
  );
}
