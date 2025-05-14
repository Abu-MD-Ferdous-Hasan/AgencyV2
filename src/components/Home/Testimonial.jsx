import { StarIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const transformStyles = [
  "translate-y-[61px]", // top-left
  "", // top-middle - empty for no transform
  "p-2.5", // top-right
  "translate-x-40 p-1.5", // middle-left
  "translate-x-48", // center
  "translate-x-34 -translate-y-28 p-2.5", // middle-right
  "-translate-y-12 translate-x-8", // bottom-left - slightly down and right
  "translate-x-12", // bottom-middle
  "translate-x-10 -translate-y-4 p-1", // bottom-right
];

const getImages = async () => {
  const serverUrl = import.meta.env.VITE_server;
  const res = await fetch(`${serverUrl}/testimonials`);
  const testimonialData = await res.json();

  return testimonialData?.map((testimonial, index) => ({
    ...testimonial,
    transform: transformStyles[index],
  }));
};

export default function Testimonial() {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonialsHome"],
    queryFn: getImages,
  });

  if (isLoading) return <div>Loading...</div>;

  const SingleTestimonial = ({ image, title, details, name, position }) => {
    return (
      <div className="relative w-full px-4 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h2 className="font-primary text-secondary font-semibold text-3xl sm:text-4xl lg:text-5xl">
              Meet Client Satisfaction <br className="hidden sm:block" /> After
              Working With Us
            </h2>
            <h4 className="font-primary text-xl sm:text-2xl mt-3 sm:mt-4 text-primary">
              {title}
            </h4>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="text-amber-400 h-4 w-4 sm:h-5 sm:w-5"
                />
              ))}
            </div>
          </div>

          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-black/50">
            {details}
          </p>

          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover"
              src={image}
              alt={name}
            />
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-primary">
                {name}
              </h4>
              <p className="text-sm sm:text-base text-black/50">{position}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="hidden md:block w-full py-16 sm:py-24 lg:py-32">
      <h1 className="text-center mb-16 sm:mb-24 lg:mb-32">
        <span className="font-primary text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary relative">
          <span className="text-primary absolute -left-6">❛❛</span>
          Testimonial
          <span className="text-primary absolute -right-6">❜❜</span>
        </span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 ">
        <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative w-full max-w-[600px] mx-auto">
            {testimonials?.slice(0, 9).map((testimonial, index) => (
              <div
                key={testimonial._id}
                className={`transform transition-all duration-300 ${transformStyles[index]}`}
              >
                <img
                  src={testimonial.image}
                  alt={`Client ${index + 1}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex items-center">
          <SingleTestimonial
            image={testimonials[0].image}
            details={testimonials[0].feedback}
            name={testimonials[0].name}
            position={testimonials[0].designation}
            title="Doesn't feel like an agency"
          />
        </div>
      </div>
    </section>
  );
}
