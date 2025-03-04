import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaReddit,
  FaTiktok,
  FaAmazon,
  FaDropbox,
  FaSpotify,
  FaDiscord,
  FaTwitch,
  FaStripe,
  FaBitcoin,
  FaGooglePay,
  FaApplePay,
  FaCcVisa,
  FaCloudflare,
  FaAws,
  FaDocker,
  FaUbuntu,
  FaAndroid,
  FaGoogle,
  FaApple,
  FaFacebook,
  FaMicrosoft,
  FaLinkedin,
  FaPaypal,
  FaPinterest,
  FaSnapchat,
  FaTelegram,
  FaWeibo,
  FaLinux,
  FaGoogleDrive,
  FaCcMastercard,
  FaEdge,
} from "react-icons/fa";
import { SiOpera } from "react-icons/si";
import { RoundedButton } from "../RoundedButton";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";

export default function Register() {
  const [selectedServices, setSelectedServices] = useState([]);
  const icons = [
    FaTwitter,
    FaGithub,
    FaInstagram,
    FaReddit,
    FaTiktok,
    FaAmazon,
    FaDropbox,
    FaSpotify,
    FaDiscord,
    FaTwitch,
    FaStripe,
    FaBitcoin,
    FaGooglePay,
    FaApplePay,
    FaCcVisa,
    FaCloudflare,
    FaAws,
    FaDocker,
    FaUbuntu,
    FaAndroid,
    FaGoogle,
    FaApple,
    FaFacebook,
    FaMicrosoft,
    FaLinkedin,
    FaPaypal,
    FaPinterest,
    FaSnapchat,
    FaTelegram,
    FaWeibo,
    FaLinux,
    FaGoogleDrive,
    FaEdge,
    FaCcMastercard,
    SiOpera,
  ];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="py-20 px-24 bg-bg mx-auto text-center min-h-screen">
      <div>
        <Link to={"/"} className="inline-block">
          <img
            alt="Company"
            src="public\favicon.png"
            className="h-20 w-auto cursor-pointer"
          />
        </Link>
        <h1 className="mt-10 font-primary text-center text-5xl font-bold tracking-tight text-secondary">
          Register with us
        </h1>
        <p className="mt-2 text-black/80 text-lg font-medium font-primary tracking-wide">
          Join our community of innovators and start your journey with us today
        </p>
      </div>
      <div className="p-10 my-10 bg-white rounded-4xl flex">
        <div className="h-[660px] w-96 bg-primary rounded-3xl grid grid-cols-5 place-items-center">
          {icons.map((Icon, index) => (
            <Icon
              key={index}
              className="text-4xl text-white -rotate-45 hover:scale-110 hover:text-black/30 transition-all"
            />
          ))}
        </div>
        <form className="mt-8 space-y-6 flex-1 mx-14 flex flex-col">
          <div className="grid grid-cols-2 gap-28 w-full">
            <div>
              <label
                htmlFor="firstName"
                className="block text-left font-primary text-lg  font-medium text-black"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full border-0 border-b-2 border-black/20 px-3 py-2 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-primary focus:px-0"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-left font-primary text-lg font-medium text-black"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full border-0 border-b-2 border-black/20 px-3 py-2 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-primary focus:px-0"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-28 w-full">
            <div>
              <label
                htmlFor="firstName"
                className="block text-left font-primary text-lg  font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-0 border-b-2 border-black/20 px-3 py-2 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-primary focus:px-0"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-left font-primary text-lg font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full border-0 border-b-2 border-black/20 px-3 py-2 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-primary focus:px-0"
                required
              />
            </div>
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
                <div key={service} className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
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
              text={"Register"}
              bgColor={"primary"}
              customStyle={"text-white"}
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
