import React from "react";
import Slider from "react-slick";
import brand1 from "../assets/sliders/1.png";
import brand2 from "../assets/sliders/2.png";
import brand3 from "../assets/sliders/3.png";
import brand4 from "../assets/sliders/4.png";
import brand5 from "../assets/sliders/5.png";

const Portfolio = () => {
  const arr = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
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
    <div>
      <div className="slider w-[95%] mx-auto ">
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

export default Portfolio;
