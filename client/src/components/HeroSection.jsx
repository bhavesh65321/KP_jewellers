import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { heroSectionData } from "../constants/data";
import { loadHeroImages } from "../utils/csvLoader";
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
  const [slides, setSlides] = useState(heroSectionData);
  const [loading, setLoading] = useState(true);

  // Load hero images from Google Sheets
  useEffect(() => {
    async function fetchHeroImages() {
      try {
        const googleImages = await loadHeroImages();
        
        if (googleImages && googleImages.length > 0) {
          // Use Google Sheets images
          setSlides(googleImages);
        } else {
          // Fall back to default images
          setSlides(heroSectionData);
        }
      } catch (error) {
        console.error("Error loading hero images:", error);
        setSlides(heroSectionData);
      } finally {
        setLoading(false);
      }
    }

    fetchHeroImages();
  }, []);

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

  return (
    <section className="w-full">
      {/* Hero Slider */}
      <div className="w-full mb-12 relative">
        {loading ? (
          // Loading skeleton
          <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        ) : (
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={slide.id || index} className="relative">
                <img
                  src={slide.image}
                  alt={slide.title || `KP Jewellers Banner ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                  onError={(e) => {
                    // Fallback to default image on error
                    e.target.onerror = null;
                    if (heroSectionData[index]) {
                      e.target.src = heroSectionData[index].image;
                    }
                  }}
                />
                {(slide.title || slide.subtitle) && (
                  <div className="absolute bottom-6 right-8 text-white p-4 rounded-lg max-w-sm text-right bg-black/30 backdrop-blur-sm">
                    {slide.title && <h2 className="text-2xl font-bold">{slide.title}</h2>}
                    {slide.subtitle && <p className="text-sm mt-1">{slide.subtitle}</p>}
                  </div>
                )}
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
