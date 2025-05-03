import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-pink-100 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Discover Elegant Jewelry
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Timeless treasures crafted for you.
      </p>
      <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
        Shop Now
      </button>
    </section>
  );
};

export default HeroSection;
