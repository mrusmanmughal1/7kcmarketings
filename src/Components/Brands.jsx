import React from "react";
import Slider from "react-slick";
import brand1 from "../assets/Brand/1.png";
import brand2 from "../assets/Brand/2.png";
import brand3 from "../assets/Brand/3.png";
import brand4 from "../assets/Brand/4.png";
import brand5 from "../assets/Brand/5.png";
import brand6 from "../assets/Brand/6.png";
import leftArrow from "../assets/btn1.png";
import right from "../assets/btn2.png";

const Brands = () => {
  const arr = [brand1, brand2, brand3, brand4, brand5, brand6];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: (
      <div className="custom-arrow prev-arrow">
        <img src={right} alt="Previous" className="w-28" />
      </div>
    ),
    nextArrow: (
      <div className="custom-arrow next-arrow">
        <img src={leftArrow} alt="Next"  className="w-28"  />
      </div>
    ),
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
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div>
      <div className="brand">
        <Slider {...settings}>
          {arr.map((a, i) => {
            return (
              <div className="" key={i}>
                <img src={a} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
