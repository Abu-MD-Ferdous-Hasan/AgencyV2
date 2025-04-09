import { StarIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const transformStyles = [
  "translate-y-[61px]",
  "", // empty for no transform
  "p-2.5",
  "translate-x-40 p-1.5",
  "translate-x-34 -translate-y-4 p-1.5",
  "translate-x-34 -translate-y-28 p-2.5",
  "-translate-y-30",
  "translate-x-12",
  "translate-x-20 -translate-y-30 p-1",
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
  console.log(testimonials);
  if (isLoading) return <div>Loading...</div>;
  const SingleTestimonial = ({ image, title, details, name, position }) => {
    return (
      <div className="relative w-full pb-16 px-32">
        <div className="">
          <div className="relative mb-12 max-w-[310px] md:mb-0 md:max-w-[250px]  lg:max-w-md">
            {/* <img src={image} alt="image" className="w-full" /> */}
            <span className="absolute -left-6 -top-6 z-[-1] hidden sm:block">
              {/* <DotShape /> */}
            </span>
            <span className="absolute -bottom-6 -right-6 z-[-1]"></span>
          </div>
          <div>
            <div>
              <div className="mb-7">
                <h2 className="font-primary text-secondary font-semibold text-2xl md:text-5xl">
                  Meet Client Satisfaction <br /> after working with us
                </h2>
                <h4 className="font-primary font-medium md:text-2xl mt-5 text-primary">
                  {title}
                </h4>
                <div className="flex">
                  {[...Array(5)].map((e, i) => (
                    <StarIcon
                      key={i}
                      className="text-amber-400 h-5 w-5 mt-2.5"
                    />
                  ))}
                </div>
              </div>

              <p className="mb-11 text-base font-normal  leading-[1.81] text-black/50 dark:text-dark-6 sm:text-[22px]">
                {details}
              </p>

              <div className="flex justify-start gap-4 items-center">
                <img
                  className="w-14 h-14 rounded-2xl object-cover"
                  src={image}
                  alt="reviewer"
                />
                <span>
                  <h4 className="mb-2 text-[22px] font-semibold leading-[27px] text-primary">
                    {name}
                  </h4>
                  <p className="text-base text-black/50 dark:text-dark-6">
                    {position}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="w-full my-52">
      <h1 className="font-primary text-secondary relative font-semibold md:text-4xl text-center">
        <span className="text-primary">❛❛ </span>
        Testimonial
        <span className="text-primary absolute translate-x-1.5 top-1/2">
          ❜❜
        </span>
      </h1>
      <div className="h-screen grid grid-cols-2 place-items-center ">
        <div className="relative flex justify-center items-center">
          <div className="grid grid-cols-3 place-items-center gap-20 w-full">
            {testimonials?.map((testimonial, index) => (
              <img
                key={testimonial._id}
                src={testimonial.image}
                alt={`Scattered ${index + 1}`}
                className={`w-32 h-32 rounded-3xl object-cover  transition-transform duration-300 ease-in-out ${testimonial.transform}`}
              />
            ))}
          </div>
        </div>
        <div className="w-full pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px] md:mr-64">
          <div>
            {/* <Swiper slidesPerView={1} ref={sliderRef}>
            <SwiperSlide> */}
            <SingleTestimonial
              image={testimonials[0].image}
              reviewAlt="lineicon"
              details={testimonials[0].feedback}
              name={testimonials[0].name}
              position={testimonials[0].designation}
              title={"Exceeding Expectations"}
            />
            {/* </SwiperSlide> */}
            {/* <SwiperSlide>
              <SingleTestimonial
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                reviewAlt="lineicon"
                details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                name="Larry Diamond"
                position="Chief Executive Officer."
              />
            </SwiperSlide> */}
            {/* <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-5 sm:bottom-0">
            <div
              className="prev-arrow cursor-pointer"

              // onClick={handlePrev}
            >
              <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M17.5 9.5H4.15625L9.46875 4.09375C9.75 3.8125 9.75 3.375 9.46875 3.09375C9.1875 2.8125 8.75 2.8125 8.46875 3.09375L2 9.65625C1.71875 9.9375 1.71875 10.375 2 10.6562L8.46875 17.2188C8.59375 17.3438 8.78125 17.4375 8.96875 17.4375C9.15625 17.4375 9.3125 17.375 9.46875 17.25C9.75 16.9687 9.75 16.5313 9.46875 16.25L4.1875 10.9062H17.5C17.875 10.9062 18.1875 10.5937 18.1875 10.2187C18.1875 9.8125 17.875 9.5 17.5 9.5Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
            <div
              className="next-arrow cursor-pointer"
              // onClick={handleNext}
            >
              <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M18 9.6875L11.5312 3.125C11.25 2.84375 10.8125 2.84375 10.5312 3.125C10.25 3.40625 10.25 3.84375 10.5312 4.125L15.7812 9.46875H2.5C2.125 9.46875 1.8125 9.78125 1.8125 10.1562C1.8125 10.5312 2.125 10.875 2.5 10.875H15.8437L10.5312 16.2813C10.25 16.5625 10.25 17 10.5312 17.2813C10.6562 17.4063 10.8437 17.4688 11.0312 17.4688C11.2187 17.4688 11.4062 17.4062 11.5312 17.25L18 10.6875C18.2812 10.4062 18.2812 9.96875 18 9.6875Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div> */}
            {/* </Swiper> */}
          </div>
        </div>
      </div>
    </section>
  );
}
