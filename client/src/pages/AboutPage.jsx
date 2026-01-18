import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCertificate,
  FaExchangeAlt,
  FaPencilRuler,
  FaHandHoldingUsd,
  FaGem,
  FaQuoteLeft,
  FaArrowRight,
  FaStar,
  FaAward,
  FaUsers,
  FaHeart,
} from "react-icons/fa";
import { aboutUsData } from "../constants/data";

// Icon and color mapping for features
const featureConfig = {
  "100% Certified": { icon: FaCertificate, color: "from-amber-400 to-amber-600", shadow: "shadow-amber-200" },
  "Lifetime Exchange": { icon: FaExchangeAlt, color: "from-emerald-400 to-emerald-600", shadow: "shadow-emerald-200" },
  "Custom Designs": { icon: FaPencilRuler, color: "from-blue-400 to-blue-600", shadow: "shadow-blue-200" },
  "Transparent Pricing": { icon: FaHandHoldingUsd, color: "from-purple-400 to-purple-600", shadow: "shadow-purple-200" },
};

// Stats data
const stats = [
  { icon: FaUsers, value: "50,000+", label: "Happy Customers" },
  { icon: FaGem, value: "10,000+", label: "Jewellery Pieces" },
  { icon: FaAward, value: "35+", label: "Years of Trust" },
  { icon: FaHeart, value: "99%", label: "Satisfaction Rate" },
];

const AboutPage = () => {
  const { shopName, tagline, established, ownerName, ownerTitle, ownerImage, ownerMessage, features, contact, socialLinks } = aboutUsData;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-amber-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 border border-amber-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-amber-400/50 rounded-full"></div>
        </div>
        
        {/* Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full mb-6 border border-amber-500/30">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            {shopName}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-4">
            {tagline}
          </p>
          <div className="flex items-center justify-center gap-2 text-amber-400">
            <FaGem />
            <span className="text-sm font-medium tracking-wider">
              SERVING WITH EXCELLENCE SINCE {established}
            </span>
            <FaGem />
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 transition-all duration-300">
                <stat.icon className="text-amber-400 text-2xl md:text-3xl mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner / Founder Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4">
              The Visionary
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900">
              Meet Our <span className="text-amber-600">Founder</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Owner Image */}
            <div className="flex justify-center order-1 lg:order-1">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 border-2 border-dashed border-amber-300 rounded-full scale-110 animate-spin-slow"></div>
                <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 border border-amber-200 rounded-full scale-125"></div>
                
                {/* Main image */}
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl shadow-amber-200/50 mx-auto">
                  <img
                    src={ownerImage}
                    alt={ownerName}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-lg shadow-amber-300">
                  <p className="text-sm font-semibold whitespace-nowrap flex items-center gap-2">
                    <FaStar className="text-amber-200" />
                    Est. {established}
                    <FaStar className="text-amber-200" />
                  </p>
                </div>
              </div>
            </div>

            {/* Owner Info */}
            <div className="order-2 lg:order-2">
              <div className="relative">
                <FaQuoteLeft className="absolute -top-4 -left-2 text-amber-200 text-5xl opacity-50" />
                
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
                  {ownerName}
                </h3>
                <p className="text-amber-600 font-medium text-lg mb-6 flex items-center gap-2">
                  <FaGem className="text-sm" />
                  {ownerTitle}
                </p>
                
                <div className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-line pl-4 border-l-4 border-amber-400">
                  {ownerMessage}
                </div>

                {/* Signature Style */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-16 h-0.5 bg-amber-400"></div>
                  <span className="font-serif italic text-gray-500">- {ownerName.split(' ')[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-amber-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 border border-amber-400 rounded-full"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full mb-4 border border-amber-500/30">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              The KP <span className="text-amber-400">Promise</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What sets us apart and why thousands of families trust us with their precious moments
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, idx) => {
              const config = featureConfig[feature.title] || { icon: FaCertificate, color: "from-amber-400 to-amber-600", shadow: "shadow-amber-200" };
              const IconComponent = config.icon;

              return (
                <div key={idx} className="group relative">
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-500 h-full text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center mx-auto mb-5 shadow-lg ${config.shadow} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <IconComponent className="text-white text-2xl" />
                    </div>

                    {/* Content */}
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-b-2xl group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-20 h-20 border border-amber-300 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 border border-amber-200 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Visit Our <span className="text-amber-600">Store</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience our exquisite collection in person. We'd love to help you find the perfect piece.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Info Cards */}
            <div className="space-y-4 md:space-y-6">
              {/* Address */}
              <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Store Address</h4>
                  <p className="text-gray-600">{contact.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform">
                  <FaPhone className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Phone</h4>
                  <a href={`tel:${contact.phone}`} className="text-gray-600 hover:text-amber-600 transition-colors">{contact.phone}</a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">WhatsApp</h4>
                  <a href={`https://wa.me/${contact.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">{contact.whatsapp}</a>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Email</h4>
                  <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">{contact.email}</a>
                </div>
              </div>

              {/* Timing */}
              <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform">
                  <FaClock className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Store Timing</h4>
                  <p className="text-gray-600">{contact.timing}</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="flex flex-col">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 text-center flex-1 flex flex-col justify-center relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30">
                    <FaGem className="text-white text-2xl" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                    Ready to Find Your Perfect Piece?
                  </h3>
                  <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                    Visit our store or browse our collection online. We're here to help you celebrate every precious moment.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/shop"
                      className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 group"
                    >
                      Browse Collection
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={`https://wa.me/${contact.whatsapp?.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp className="text-lg" />
                      Chat Now
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mt-10">
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 border border-white/10 hover:border-blue-600"
                    >
                      <FaFacebook className="text-lg" />
                    </a>
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-300 border border-white/10 hover:border-pink-500"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-sky-500 transition-all duration-300 border border-white/10 hover:border-sky-500"
                    >
                      <FaTwitter className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
