import React from "react";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import BestSellerProducts from "../components/BestSellerProducts";
import WhyBuyFromUs from "../components/WhyBuyFromUs";
import FeaturedVideo from "../components/FeaturedVideo";

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800 flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories */}
      <Categories />

      {/* Best Seller Products */}
      <BestSellerProducts />

      {/* Why Buy From Us */}
      <WhyBuyFromUs />

      {/* Featured Video */}
      <FeaturedVideo />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default HomePage;
