import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaQuoteLeft } from "react-icons/fa";
import { apiService } from "../../utilities/apiService";

export default function TestimonialsPage() {
  const {
    error,
    data = [],
    isFetching,
  } = useQuery({
    queryKey: ["getTestimonials"],
    queryFn: () => apiService.get("testimonials"),
  });

  if (error) return "An error has occurred: " + error.message;

  const testimonials = data || [];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-24 bg-bg mx-auto text-center min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold">
          Client Testimonials
        </h1>
        <h5 className="font-medium font-primary text-base sm:text-lg text-black/80 mt-2 sm:mt-2.5 max-w-2xl mx-auto">
          What our clients say about our services and solutions
        </h5>
      </div>

      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-16 sm:mb-24 md:mb-32 lg:mb-64 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {isFetching
          ? [...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-2xs animate-pulse"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 mx-auto mb-4 sm:mb-6"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            ))
          : testimonials.map((testimonial) => (
              <div
                key={testimonial._id}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-2xs hover:shadow-2xl transition-shadow duration-300"
              >
                <FaQuoteLeft className="text-3xl sm:text-4xl text-primary/20 mx-auto mb-4 sm:mb-6" />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-4 border-primary/10"
                />
                <p className="text-sm sm:text-base text-black/70 font-primary mb-4 sm:mb-6 italic">
                  "{testimonial.feedback}"
                </p>
                <h4 className="text-lg sm:text-xl font-semibold text-secondary">
                  {testimonial.name}
                </h4>
                <p className="text-xs sm:text-sm text-black/60">
                  {testimonial.designation}
                </p>
              </div>
            ))}
      </div>
    </section>
  );
}
