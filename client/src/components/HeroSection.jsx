import React from "react";
import Slider from "react-slick";
import { heroSectionData } from "../constants/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="w-full">
      <div className="w-full">
        <Slider {...settings}>
          {heroSectionData.map((slide) => (
            <div key={slide.id} className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute bottom-6 right-8 text-white p-4 rounded-lg max-w-sm text-right">
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <p className="text-sm mt-1">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
