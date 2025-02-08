import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className="">
      <div className="hidden md:block">
        <div className="w-[80%] mx-auto   text-xl 2xl:text-2xl  p-10 flex justify-between items-center">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <ul className="flex gap-6">
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="">
            <button className="bg-blue-500 px-6  text-lg py-1 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="p-4 flex justify-between  items-center py-6">
          <img src={logo} alt="" />
          <button className="  text-2xl" onClick={() => setnav(!nav)}>
            {nav ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
        </div>
        {nav && (
          <div className="bg-white absolute w-full text-black p-4 text-center text-xl ">
            <ul className="space-y-4">
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Testimonials</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
