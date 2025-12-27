
import React from "react";
import Slider from "react-slick";
import { heroSectionData, categories } from "../constants/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

// SVG Arrow Components
const ArrowLeft = (props) => (
  <button
    {...props}
    className="absolute z-10 left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
    style={{ ...props.style }}
    aria-label="Previous"
  >
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" stroke="#a78bfa" fill="#fff" />
      <path d="M14 8l-4 4 4 4" stroke="#a78bfa" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const ArrowRight = (props) => (
  <button
    {...props}
    className="absolute z-10 right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
    style={{ ...props.style }}
    aria-label="Next"
  >
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" stroke="#a78bfa" fill="#fff" />
      <path d="M10 8l4 4-4 4" stroke="#a78bfa" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  const collectionSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full">
      {/* Hero Slider */}
      <div className="w-full mb-12 relative">
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

      {/* Discover Our Collections */}
      <div className="px-6 relative">
        <h2 className="text-center text-3xl font-serif font-bold mb-6 text-gray-800">
          Discover Our Collections
        </h2>
        <Slider {...collectionSettings}>
          {categories.map((category, index) => (
            <div key={index} className="text-center flex gap-6 overflow-x-auto">
              <div className="w-42 h-42 rounded-full overflow-hidden shadow-md mx-auto">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-lg font-medium text-gray-800">
                {category.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
