import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="py-20">
      <div className="w-[90%] gap-10  mx-auto bg-neutral-900 rounded-3xl flex flex-col md:flex-row p-10">
        <div className="w-full flex flex-col gap-10">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <p className="max-w-sm">
            With 20+ years of global expertise, we don’t just solve problems; we
            engineer success. We work alongside businesses as an extension of
            their vision, providing end-to-end support for innovation, growth,
            and long-term scalability.
          </p>
        </div>
        <div className="w-full flex flex-col gap-8 md:gap-0 justify-between">
          <ul className="flex flex-col md:flex-row justify-between text-2xl">
            <li>About </li>
            <li>Service </li>
            <li>Work </li>
            <li>Contact </li>
          </ul>
          <div className="flex justify-between flex-col md:flex-row   gap-6 md:gap-0 md:items-center">
            <p className="text-white/65 font-thin">
              @ 2025 7kings code All <br /> Rights Reserved
            </p>
            <div className="flex gap-4 text-3xl">
              <div className=" border rounded-full p-2">
                <FaFacebookF />
              </div>
              <div className=" border rounded-full p-2">
                <FaInstagram />
              </div>
              <div className=" border rounded-full p-2">
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
