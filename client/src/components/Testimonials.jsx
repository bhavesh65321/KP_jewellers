import React, { useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaGoogle, FaExternalLinkAlt } from "react-icons/fa";

// Google Maps URL for reviews
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/K+P+jewellers/@24.7525243,71.7754785,17z/data=!3m1!4b1!4m6!3m5!1s0x3944a525ea6a553b:0x64b7e8b9f45b420f!8m2!3d24.7525243!4d71.7754785!16s%2Fg%2F11y3ywskdf";

// Customer testimonials
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Sanchore",
    avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=f59e0b&color=fff",
    rating: 5,
    text: "Absolutely stunning collection! The quality is exceptional and the staff was so helpful!",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Sanchore",
    avatar: "https://ui-avatars.com/api/?name=Rahul+Mehta&background=3b82f6&color=fff",
    rating: 5,
    text: "Impressed with the purity and pricing. The lifetime exchange policy gives complete peace of mind!",
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Barmer",
    avatar: "https://ui-avatars.com/api/?name=Anita+Patel&background=10b981&color=fff",
    rating: 5,
    text: "The diamond pendant is breathtaking! KP Jewellers has earned a customer for life.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jalore",
    avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=8b5cf6&color=fff",
    rating: 5,
    text: "Best jewellery shopping experience! Transparent pricing and BIS hallmark on every piece.",
  },
  {
    id: 5,
    name: "Meera Krishnan",
    location: "Sanchore",
    avatar: "https://ui-avatars.com/api/?name=Meera+Krishnan&background=ec4899&color=fff",
    rating: 5,
    text: "Buying from KP Jewellers for 10 years. Their designs are outstanding!",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 400);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-10 md:py-14 bg-amber-50/50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
            What Our <span className="text-amber-600">Customers</span> Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all"
          >
            <FaChevronRight size={14} />
          </button>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8 mx-6 md:mx-0 border border-gray-100">
            <div className={`transition-all duration-400 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
              {/* Quote & Text */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaQuoteLeft className="text-white text-sm" />
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed italic flex-1">
                  "{activeTestimonial.text}"
                </p>
              </div>

              {/* Customer Info Row */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                      <FaGoogle className="text-white text-[8px]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{activeTestimonial.location}</p>
                  </div>
                </div>
                
                {/* Rating Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${i < activeTestimonial.rating ? "text-amber-400" : "text-gray-200"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAnimating(true);
                  setActiveIndex(idx);
                  setTimeout(() => setIsAnimating(false), 400);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-amber-500 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Review Link */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <FaGoogle className="text-lg text-blue-500" />
            <span className="text-xl font-bold text-gray-900">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-amber-400 text-sm" />
              ))}
            </div>
          </div>
          
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all text-sm"
          >
            <span className="text-gray-700 font-medium hover:text-blue-600">
              Write a Review
            </span>
            <FaExternalLinkAlt className="text-xs text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
