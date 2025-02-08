import React from "react";
import Header from "./Components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";
import Brands from "./Components/Brands";
import eartch from "./assets/earth.svg";
import dice from "./assets/1.svg";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Reviews from "./Components/Reviews";

const App = () => {
  return (
    <div className=" ">
      <Header />
      <div className="main  py-20 flex flex-col  items-center justify-center ">
        <div className="text-center group hidden md:block  text-[3.2rem] md:text-[7rem] flex   flex-col  leading-[7rem]     text-[#222229]   font-extrabold">
          <p className="group-hover:text-[#2d2d35] ">Scalling Ideas</p>
          <p className="group-hover:text-[#42424d]  ">Powering Growth</p>
        </div>
        <div className="text-center text-7xl group text-[#222229]   block md:hidden  font-extrabold">
          Scalling Ideas
          <br />
          Powering Growth
        </div>
        <div className="max-w-3xl text-xl mx-auto text-center md:text-end mt-10 p-4 md:p-1  text-white/70">
          With a focus on digital marketing, we also offer IT consulting,
          resource management, software development, and cybersecurity services.
          We provide businesses with the strategies and tools they need to
          dominate in today's dynamic, digital environment.
        </div>
      </div>

      <div className="w-[90%] md:w-[70%] mx-auto flex  flex-col md:flex-row md:gap-10   items-center">
        <div className="w-full  relative leading-5">
          <p className="!text-8xl font-extrabold stock">BRAND</p>
          <p className="text-4xl  md:ps-4 md:left-12 relative  -top-16">
            We Are Backed by 150+ <br /> Global Partners
          </p>
        </div>
        <div className="w-full text-xl text-white/50 pb-8  md:p-10">
          With the collaboration of 150+ global partners, we redefine digital
          success. Our collective network fuels innovation, equipping brands
          with innovative strategies to dominate their industry and create
          lasting impact.
        </div>
      </div>
      <div className="border-t w-[90%] md:w-[70%] mx-auto pt-4 border-white/50">
        <Brands />
      </div>
      <div className="flex justify-center items-center  py-10">
        <div className=" max-w-4xl   h-[48rem] overflow-hidden p-10 bg-neutral-800/75 rounded-full">
          <img
            src={eartch}
            alt=""
            className="md:max-w-xs max-w-[15rem] h-full box object-contain"
          />
        </div>
      </div>
      <div className="">
        <div className="  font-extrabold text-center bluestock">
          {" "}
          OUR SERVICES
        </div>
        <div className="flex flex-col md:flex-row mt-5 items-center gap-10 w-[90%] md:w-[80%] mx-auto">
          <div className="w-full text-2xl mb-10 md:mb-0">
            <p>
              We don’t just develop software; we craft intelligent solutions
              that accelerate business growth. From unified IT infrastructure to
              custom software development, we create digital ecosystems that
              adapt, evolve, and scale with you. By combining innovation with
              functionality, you will stay ahead of your competition in an
              ever-changing technological landscape. Let’s shape the future
              together.
            </p>
          </div>
          <div className="w-full group ">
            <div className="  grid grid-cols-2 text-neutral-800  font-semibold">
              <div className="  md:text-2xl  group-hover:text-white group-hover:bg-blue-700 group-hover:border-blue-700 duration-500  -rotate-[15deg] relative -top-6 px-4 py-2 rounded-full border text-center">
                Digital Marketing
              </div>
              <div className="px-4 group-hover:bg-white group-hover:text--blue-700  duration-500  md:text-2xl  py-2 rotate-3 relative right-10 rounded-full border text-center">
                Graphic Design
              </div>
              <div className="px-4 group-hover:bg-white group-hover:text--blue-700  duration-500  md:text-2xl  py-2 -rotate-2 rounded-full border text-center">
                Content Writing
              </div>
              <div className="px-4 group-hover:text-white group-hover:bg-blue-700 group-hover:border-blue-700 duration-500  md:text-2xl   relative top-5 -rotate-3 py-2 rounded-full border text-center">
                Google Ads
              </div>
              <div className="px-4 group-hover:text-white group-hover:bg-blue-700 group-hover:border-blue-700 duration-500  md:text-2xl  py-2 relative top-2 -rotate-6 rounded-full border text-center">
                UI/UX Design
              </div>
              <div className="px-4 group-hover:bg-white group-hover:text--blue-700  duration-500  md:text-2xl  rotate-3 relative top-8 py-2 rounded-full border text-center">
                Video Editing
              </div>
              <div className="px-4  group-hover:bg-white group-hover:text--blue-700  duration-500  md:text-2xl  py-2 relative top-6  rotate-3 rounded-full border text-center">
                Video Animation
              </div>
              <div className="px-4 group-hover:text-white group-hover:bg-blue-700 group-hover:border-blue-700 duration-500  md:text-2xl  py-2 -rotate-3  relative top-10 rounded-full border text-center">
                Development
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20    py-10">
        <div className=" max-w-4xl   h-[48rem] overflow-hidden p-10 bg-neutral-800/75 rounded-full">
          <img
            src={dice}
            alt=""
            className="md:max-w-xs max-w-[15rem] h-full box object-contain"
          />
        </div>
      </div>
      <div className=" py-16">
        <div className="  font-extrabold text-center bluestock">
          {" "}
          OUR PORTFOLIO
        </div>
        <Portfolio />
      </div>
      <div className=" my-20">
        <div className="text-center relative leading-5">
          <p className="stock font-extrabold  ">SAY'S</p>
          <p className="text-3xl font-semibold relative ">
            What Our Clients
            <br />
            Are Saying
          </p>
        </div>
        <Reviews />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
