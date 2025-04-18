import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const styles = "w-16 h-16 p-3.5 bg-white/20 rounded-2xl cursor-pointer";

  return (
    <div className=" bg-primary">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-bgColor font-primary font-bold text-3xl md:text-4xl mb-3">
            AgencyV2
          </h3>
          <div className="flex justify-center gap-3 md:gap-10 my-15">
            <RiInstagramFill className={styles} />
            <FaFacebookF className={styles} />
            <FaLinkedinIn className={styles} />
            <FaTwitter className={styles} />
            <FaYoutube className={styles} />
          </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-white/50">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            &copy; AgencyV2 {currentYear}
          </p>
          <div className="order-1 md:order-2">
            <Link to={"/about-us"} className="px-2">
              About us
            </Link>
            <Link to={""} className="px-2 border-l">
              Contact us
            </Link>
            <Link to={""} className="px-2 border-l">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
