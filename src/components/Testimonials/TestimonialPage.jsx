import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsPage() {
  const serverUrl = import.meta.env.VITE_server;

  const getTestimonials = async () => {
    const res = await fetch(`${serverUrl}/testimonials`);
    return await res.json();
  };

  const {
    error,
    data: testimonials,
    isFetching,
  } = useQuery({
    queryKey: ["getTestimonials"],
    queryFn: getTestimonials,
  });

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="py-20 px-24 bg-bg mx-auto text-center min-h-screen">
      <div>
        <h1 className="md:text-5xl font-primary font-bold">
          Client Testimonials
        </h1>
        <h5 className="font-medium font-primary text-lg text-black/80 mt-2.5">
          What our clients say about our services and solutions
        </h5>
      </div>

      <div className="mt-20 mb-64 grid grid-cols-3 gap-8">
        {isFetching
          ? [...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-2xs animate-pulse"
              >
                <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-6"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            ))
          : testimonials?.map((testimonial) => (
              <div
                key={testimonial._id}
                className="bg-white p-8 rounded-lg shadow-2xs hover:shadow-2xl transition-shadow duration-300"
              >
                {console.log(testimonial)}
                <FaQuoteLeft className="text-4xl text-primary/20 mx-auto mb-6" />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-primary/10"
                />
                <p className="text-black/70 font-primary mb-6 italic">
                  "{testimonial.feedback}"
                </p>
                <h4 className="text-xl font-semibold text-secondary">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-black/60">
                  {testimonial.designation}
                </p>
              </div>
            ))}
      </div>
    </section>
  );
}
