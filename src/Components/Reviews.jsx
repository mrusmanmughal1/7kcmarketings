import React from "react";
import Slider from "react-slick";
import dots from "../assets/span.icon.svg";
import right from "../assets/r.svg";
import ltef from "../assets/l.svg";
import chat from "../assets/icon-chat.svg";

const Reviews = () => {
  var vv = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className=" w-[90%] md:w-[70%] mx-auto  reviews relative my-20">
      <div className="relative">
        <img
          src={right}
          alt=""
          className="absolute -left-48 -top-60 hidden md:block"
        />
        <img
          src={ltef}
          alt=""
          className="absolute -right-40 -top-60 hidden md:block"
        />

        <Slider {...vv}>
          <div className="p-10 bg-slate-800">
            <div className="space-y-4">
              <img src={dots} alt="" />
              <p className="pb-8 text-white/50 font-thin text-lg leading-6">
                Reliable, responsive, and results-driven. Whether it’s web
                development, marketing, or IT solutions, they always go above
                and beyond to exceed expectations!
              </p>
            </div>
            <div className="  flex justify-between pt-6 border-t border-white/30">
              <div className="">
                <p className="text-xl font-medium">Sarah Mitchell - FL</p>
                <p className="text-sm text-white/60">CEO & Founder</p>
              </div>
              <div className="">
                <img src={chat} alt="" />
              </div>
            </div>
          </div>
          <div className="p-10 bg-slate-800">
            <div className="space-y-4">
              <img src={dots} alt="" />
              <p className="pb-8 text-white/50 text-lg font-thin leading-6">
                Working with this team felt like having an in-house expert
                squad. Their attention to detail, creativity, and commitment to
                quality set them apart from the rest
              </p>
            </div>
            <div className="  flex justify-between pt-6 border-t border-white/30">
              <div className="">
                <p className="text-xl font-medium">James Anderson</p>
                <p className="text-sm text-white/60">CEO & Founder</p>
              </div>
              <div className="">
                <img src={chat} alt="" />
              </div>
            </div>
          </div>
          <div className="p-10 bg-slate-800">
            <div className="space-y-4">
              <img src={dots} alt="" />
              <p className="pb-8 text-white/50 font-thin text-lg leading-6">
                Reliable, responsive, and results-driven. Whether it’s web
                development, marketing, or IT solutions, they always go above
                and beyond to exceed expectations!
              </p>
            </div>
            <div className="  flex justify-between pt-6 border-t border-white/30">
              <div className="">
                <p className="text-xl font-medium">Sarah Mitchell - FL</p>
                <p className="text-sm text-white/60">CEO & Founder</p>
              </div>
              <div className="">
                <img src={chat} alt="" />
              </div>
            </div>
          </div>
          <div className="p-10 bg-slate-800">
            <div className="space-y-4">
              <img src={dots} alt="" />
              <p className="pb-8 text-white/50 text-lg font-thin leading-6">
                Working with this team felt like having an in-house expert
                squad. Their attention to detail, creativity, and commitment to
                quality set them apart from the rest
              </p>
            </div>
            <div className="  flex justify-between pt-6 border-t border-white/30">
              <div className="">
                <p className="text-xl font-medium">James Anderson</p>
                <p className="text-sm text-white/60">CEO & Founder</p>
              </div>
              <div className="">
                <img src={chat} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
