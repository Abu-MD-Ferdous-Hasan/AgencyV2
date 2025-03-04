import React from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import ProductCardPlaceholder from "./ProductCardPlaceholder";

export default function Services() {
  const serverUrl = import.meta.env.VITE_server;
  const getProducts = async () => {
    const res = await fetch(`${serverUrl}/products`);
    return await res.json();
  };
  const {
    isPending,
    error,
    data: products,
    isFetching,
  } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  if (error) return "An error has occurred: " + error.message;
  return (
    <section className="py-20 px-24 bg-bg mx-auto text-center min-h-screen">
      <div>
        <h1 className="md:text-5xl font-primary font-bold">
          Services we provide
        </h1>
        <h5 className="font-medium font-primary text-lg text-black/80 mt-2.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          illum sed eaque voluptatibus dolor!
        </h5>
      </div>
      <div className="mt-20 mb-64 grid grid-cols-2 gap-10 place-items-center">
        {isFetching
          ? [...Array(6)].map((e, idx) => <ProductCardPlaceholder key={idx} />)
          : products.map(({ icon, productName, productDetails }, idx) => (
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
