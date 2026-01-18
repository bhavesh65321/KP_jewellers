import React, { useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaGoogle } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Absolutely stunning collection! I bought my wedding jewellery from KP Jewellers and received countless compliments. The quality is exceptional and the staff was so helpful in customizing pieces to match my outfit.",
    occasion: "Wedding Collection",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Delhi",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Purchased gold coins as an investment and I'm thoroughly impressed with the purity and pricing. The lifetime exchange policy gives me complete peace of mind. Highly recommended!",
    occasion: "Gold Coins",
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Ahmedabad",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "The diamond pendant I bought for my anniversary is breathtaking! The craftsmanship is impeccable and my wife absolutely loves it. KP Jewellers has earned a customer for life.",
    occasion: "Diamond Pendant",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "Best jewellery shopping experience ever! The transparent pricing and BIS hallmark certification on every piece gives you complete confidence. Their designs are unique and elegant.",
    occasion: "Gold Bangles",
  },
  {
    id: 5,
    name: "Meera Krishnan",
    location: "Chennai",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
    rating: 5,
    text: "I've been buying from KP Jewellers for over 10 years. Their traditional designs combined with modern aesthetics make them stand out. The exchange policy is simply the best in the market.",
    occasion: "Traditional Sets",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 border border-amber-300 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 border border-amber-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-amber-100 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4">
            Customer Love
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            What Our <span className="text-amber-600">Customers</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy customers who have made us their trusted jewellery destination
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300"
          >
            <FaChevronRight size={16} />
          </button>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 lg:p-12 mx-8 md:mx-0 border border-gray-100">
            <div className={`transition-all duration-500 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-200">
                  <FaQuoteLeft className="text-white text-xl" />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-center text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-light italic">
                "{activeTestimonial.text}"
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-lg ${i < activeTestimonial.rating ? "text-amber-400" : "text-gray-200"}`}
                  />
                ))}
              </div>

              {/* Customer Info */}
              <div className="flex flex-col items-center">
                <div className="relative mb-3">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-amber-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                    <FaGoogle className="text-white text-xs" />
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                  {activeTestimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{activeTestimonial.location}</p>
                <span className="mt-2 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                  {activeTestimonial.occasion}
                </span>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAnimating(true);
                  setActiveIndex(idx);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-amber-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.slice(0, 3).map((t, idx) => (
            <div
              key={t.id}
              className={`bg-white rounded-xl p-5 border transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "border-amber-400 shadow-lg shadow-amber-100"
                  : "border-gray-100 hover:border-amber-200 hover:shadow-md"
              }`}
              onClick={() => {
                setIsAnimating(true);
                setActiveIndex(idx);
                setTimeout(() => setIsAnimating(false), 500);
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm">{t.name}</h5>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400 text-xs" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">"{t.text}"</p>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
            <FaGoogle className="text-xl text-blue-500" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-amber-400 text-sm" />
              ))}
            </div>
            <span className="text-gray-600 text-sm font-medium">4.9/5 on Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
