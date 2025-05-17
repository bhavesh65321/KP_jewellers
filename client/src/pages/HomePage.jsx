import React from "react";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import BestSellerProducts from "../components/BestSellerProducts";
import WhyBuyFromUs from "../components/WhyBuyFromUs";

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800 flex flex-col gap-8">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories */}
      <Categories />

      {/* Best Seller Products */}
      <BestSellerProducts />

      {/* Why Buy From Us */}
      <WhyBuyFromUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
