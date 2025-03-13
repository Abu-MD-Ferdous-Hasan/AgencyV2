import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RoundedButton } from "../RoundedButton";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { icons } from "../../utilities/svgs";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const registerMutation = useMutation({
    mutationFn: async (userData) => {
      const res = await fetch(`${import.meta.env.VITE_server}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData, services: selectedServices }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Registration failed");
      }

      return res.json();
    },
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userId", data.userId);
      toast.success(data.message || "Registration successful!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const onSubmit = (data) => {
    if (!selectedGender) {
      toast.error("Please select your gender");
      return;
    }

    const formData = {
      ...data,
      gender: selectedGender,
      services: selectedServices,
    };

    console.log(formData);

    // registerMutation.mutate(formData);
  };

  return (
    <section className="py-5 px-24 bg-bg mx-auto text-center min-h-screen">
      <Toaster />
      <div>
        <Link to={"/"} className="inline-block">
          <img
            alt="Company"
            src="public\favicon.png"
            className="h-20 w-auto cursor-pointer"
          />
        </Link>
        <h1 className="font-primary text-center text-5xl font-bold tracking-tight text-secondary">
          Register with us
        </h1>
        <p className="mt-1 text-black/80 text-lg font-medium font-primary tracking-wide">
          Join our community of innovators and start your journey with us today
        </p>
      </div>
      <div className="p-10 mt-3 mb-10 bg-white rounded-4xl flex">
        <div className="h-[660px] w-96 bg-primary rounded-3xl grid grid-cols-5 place-items-center">
          {icons.map((Icon, index) => (
            <Icon
              key={index}
              className="text-4xl text-white -rotate-45 hover:scale-110 hover:text-black/30 transition-all"
            />
          ))}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6 flex-1 mx-14 flex flex-col"
        >
          <div className="grid grid-cols-2 gap-28 w-full">
            <div>
              <label
                htmlFor="firstName"
                className="block text-left font-primary text-lg font-medium text-black"
              >
                First Name
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                })}
                type="text"
                className="mt-1 block w-full border-0 border-b-2 border-black/20 px-3 py-2 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-primary focus:px-0"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm text-left mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-left font-primary text-lg font-medium text-black"
              >
                Last Name
              </label>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters",
                  },
                })}
                type="text"
                className="mt-1 block w-full border-0 border-b-2 border-black/20 px-3 py-2 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-primary focus:px-0"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm text-left mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-28 w-full">
            <div>
              <label
                htmlFor="email"
                className="block text-left font-primary text-lg font-medium text-black"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className="mt-1 block w-full border-0 border-b-2 border-black/20 px-3 py-2 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-primary focus:px-0"
              />
              {errors.email && (
                <p className="text-red-500 text-sm text-left mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-left font-primary text-lg font-medium text-black"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                className="mt-1 block w-full border-0 border-b-2 border-black/20 px-3 py-2 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-primary focus:px-0"
              />
              {errors.password && (
                <p className="text-red-500 text-sm text-left mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-left font-primary text-lg font-medium text-black">
              Gender
            </label>
            <div className="mt-2 flex gap-6">
              {["Male", "Female", "Other"].map((gender) => (
                <div
                  onClick={() => handleGenderSelect(gender.toLowerCase())}
                  key={gender}
                  className="flex justify-start max-w-fit select-none items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={selectedGender === gender.toLowerCase()}
                    className="group size-5 p-1 ease-in duration-150 rounded-full ring-1 ring-[#AEAEAE] data-[checked]:ring-0 ring-inset data-[checked]:bg-primary flex items-center justify-center cursor-pointer"
                  >
                    <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
                  </Checkbox>
                  <span className="text-lg text-black font-medium font-primary">
                    {gender}
                  </span>
                </div>
              ))}
            </div>
            {!selectedGender && errors.gender && (
              <p className="text-red-500 text-sm text-left mt-1">
                Please select your gender
              </p>
            )}
          </div>

          <div>
            <label className="block text-left font-primary text-lg font-medium text-black">
              What service do you need? {" (Optional)"}
            </label>
            <div className="mt-2 grid grid-cols-3 gap-3">
              {[
                "Web Design",
                "App Design",
                "Graphic Design",
                "Digital Marketing",
                "Other",
              ].map((service) => (
                <div
                  onClick={() => toggleService(service)}
                  key={service}
                  className="flex justify-start max-w-fit select-none items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={selectedServices.includes(service)}
                    className="group size-5 p-1 ease-in duration-150 rounded-full ring-1 ring-[#AEAEAE] data-[checked]:ring-0 ring-inset data-[checked]:bg-primary flex items-center justify-center cursor-pointer"
                  >
                    <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
                  </Checkbox>
                  <span className="text-lg text-black font-medium font-primary">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <RoundedButton
              text={registerMutation.isPending ? "Registering..." : "Register"}
              bgColor={"primary"}
              customStyle={"text-white"}
              type="submit"
              disabled={registerMutation.isPending}
            />
          </div>
          <p className="mt-30 text-center text-sm/6 text-gray-500">
            Already a member?{" "}
            <Link
              to="/sign-in"
              className="font-semibold text-primary hover:text-primary/60"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
