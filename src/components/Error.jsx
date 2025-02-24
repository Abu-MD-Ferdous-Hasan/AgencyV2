import React from "react";
import ErrorPicture from "../assets/imgs/error-404.png";
import { RoundedButton } from "./RoundedButton";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Error() {
  const styles =
    "w-16 h-16 p-4 bg-bgColor rounded-2xl text-primary cursor-pointer";
  return (
    <section className="my-30 h-screen flex flex-col items-center justify-center cur">
      <img src={ErrorPicture} alt="" />
      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-24 mb-7">
          Oops!
        </p>
        <p className="font-primary md:text-2xl xl:text-xl text-gray-500 mt-4">
          We can’t seem to find the page you are looking for
        </p>
        <div className="flex justify-center items-center gap-12 mt-14">
          <RoundedButton
            customStyle={"font-bold text-xl leading-7 text-white"}
            bgColor={"primary"}
            text={<Link to={"/"}>Back to Homepage</Link>}
          />
          <Link className="text-2xl text-primary">Read Blogs</Link>
        </div>
        <div className="my-30 flex flex-col items-center">
          <span className="font-primary text-lg">Follow us on</span>
          <div className="flex justify-center gap-3 md:gap-10 my-15">
            <RiInstagramFill className={styles} />
            <FaFacebookF className={styles} />
            <FaLinkedinIn className={styles} />
            <FaTwitter className={styles} />
            <FaYoutube className={styles} />
          </div>
        </div>
      </div>
    </section>
  );
}
