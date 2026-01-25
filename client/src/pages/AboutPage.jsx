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
  { icon: FaUsers, value: "10,000+", label: "Happy Customers" },
  { icon: FaGem, value: "5,000+", label: "Jewellery Pieces" },
  { icon: FaAward, value: "35+", label: "Years of Trust" },
  { icon: FaHeart, value: "99%", label: "Satisfaction Rate" },
];

const AboutPage = () => {
  const { shopName, tagline, established, founders, founderMessage, features, contact, socialLinks } = aboutUsData;

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
          <div className="flex items-center justify-center gap-2 text-amber-400 mb-6">
            <FaGem />
            <span className="text-sm font-medium tracking-wider">
              SERVING WITH EXCELLENCE SINCE {established}
            </span>
            <FaGem />
          </div>

          {/* Partnership Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-xs md:text-sm text-gray-300">Part of</span>
              <span className="text-sm md:text-base font-semibold text-white">KP Developers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm rounded-full border border-amber-400/30">
              <span className="text-xs md:text-sm text-gray-300">Backed by</span>
              <span className="text-sm md:text-base font-semibold text-amber-400">Kisna Jewellers</span>
            </div>
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

      {/* Founders Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-amber-100 text-amber-700 text-xs md:text-sm font-medium rounded-full mb-3 md:mb-4">
              The Visionaries
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900">
              Meet Our <span className="text-amber-600">Founders</span>
            </h2>
          </div>

          {/* Founders Grid */}
          <div className="flex flex-col items-center">
            {/* Founders Photos - Side by Side */}
            <div className="flex justify-center gap-8 md:gap-16 mb-8 md:mb-12">
              {founders.map((founder, idx) => (
                <div key={idx} className="text-center group">
                  {/* Photo Container - Bigger Size */}
                  <div className="relative mb-4 md:mb-5">
                    {/* Decorative ring on hover */}
                    <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-2 border-dashed border-amber-300 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Photo */}
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl shadow-amber-200/50 mx-auto group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name)}&background=f59e0b&color=fff&size=200`;
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Name & Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-gray-900 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-amber-600 font-medium text-sm md:text-base flex items-center justify-center gap-1.5">
                    <FaGem className="text-xs md:text-sm" />
                    {founder.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Established Badge */}
            <div className="mb-6 md:mb-10">
              <div className="inline-flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-lg shadow-amber-300">
                <FaStar className="text-amber-200 text-xs md:text-sm" />
                <span className="text-xs md:text-sm font-semibold">Est. {established}</span>
                <FaStar className="text-amber-200 text-xs md:text-sm" />
              </div>
            </div>

            {/* Message */}
            <div className="max-w-3xl mx-auto text-center">
              <FaQuoteLeft className="text-amber-200 text-3xl md:text-5xl mx-auto mb-4 md:mb-6 opacity-50" />
              <div className="text-gray-600 leading-relaxed text-sm md:text-lg whitespace-pre-line px-4 md:px-8">
                {founderMessage}
              </div>
              
              {/* Signature */}
              <div className="mt-6 md:mt-8 flex items-center justify-center gap-3">
                <div className="w-12 md:w-16 h-0.5 bg-amber-400"></div>
                <span className="font-serif italic text-gray-500 text-sm md:text-base">
                  - {founders.map(f => f.name.split(' ')[0]).join(' & ')}
                </span>
                <div className="w-12 md:w-16 h-0.5 bg-amber-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Decorations - Hidden on mobile */}
        <div className="absolute inset-0 opacity-10 hidden md:block">
          <div className="absolute top-20 left-20 w-40 h-40 border border-amber-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 border border-amber-400 rounded-full"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-amber-500/20 text-amber-400 text-xs md:text-sm font-medium rounded-full mb-3 md:mb-4 border border-amber-500/30">
              Why Choose Us
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2 md:mb-4">
              The KP <span className="text-amber-400">Promise</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-4">
              What sets us apart and why thousands of families trust us
            </p>
          </div>

          {/* Features Grid - 2x2 on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
            {features.map((feature, idx) => {
              const config = featureConfig[feature.title] || { icon: FaCertificate, color: "from-amber-400 to-amber-600", shadow: "shadow-amber-200" };
              const IconComponent = config.icon;

              return (
                <div key={idx} className="group relative">
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-500 h-full text-center">
                    {/* Icon */}
                    <div className={`w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center mx-auto mb-3 md:mb-5 shadow-lg ${config.shadow} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <IconComponent className="text-white text-lg md:text-xl lg:text-2xl" />
                    </div>

                    {/* Content */}
                    <h4 className="text-sm md:text-lg lg:text-xl font-semibold text-white mb-1 md:mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                      {feature.description}
                    </p>

                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 md:h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-b-xl md:rounded-b-2xl group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
        {/* Background Pattern - Hidden on mobile */}
        <div className="absolute inset-0 opacity-30 hidden md:block">
          <div className="absolute top-10 right-10 w-20 h-20 border border-amber-300 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 border border-amber-200 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-amber-100 text-amber-700 text-xs md:text-sm font-medium rounded-full mb-3 md:mb-4">
              Get In Touch
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-2 md:mb-4">
              Visit Our <span className="text-amber-600">Store</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
              Experience our exquisite collection in person.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Contact Info Cards - 2 columns on mobile for some items */}
            <div className="space-y-3 md:space-y-6">
              {/* Address - Full width */}
              <a 
                href={contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-3 md:gap-4 cursor-pointer"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-white text-base md:text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-lg mb-0.5 md:mb-1">Store Address</h4>
                  <p className="text-gray-600 text-xs md:text-base group-hover:text-amber-600 transition-colors">{contact.address}</p>
                  <p className="text-[10px] md:text-xs text-amber-500 mt-1 flex items-center gap-1">
                    <span>📍</span> Click to view on map
                  </p>
                </div>
              </a>

              {/* Phone & WhatsApp - Side by side on mobile */}
              <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-6">
                {/* Phone */}
                <a href={`tel:${contact.phone}`} className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform">
                    <FaPhone className="text-white text-base md:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs md:text-lg mb-0.5">Phone</h4>
                    <p className="text-gray-600 hover:text-amber-600 transition-colors text-xs md:text-base">{contact.phone}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href={`https://wa.me/${contact.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-white text-base md:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs md:text-lg mb-0.5">WhatsApp</h4>
                    <p className="text-gray-600 hover:text-green-600 transition-colors text-xs md:text-base">{contact.whatsapp}</p>
                  </div>
                </a>
              </div>

              {/* Email & Timing - Side by side on mobile */}
              <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-6">
                {/* Email */}
                <a href={`mailto:${contact.email}`} className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-white text-base md:text-xl" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 text-xs md:text-lg mb-0.5">Email</h4>
                    <p className="text-gray-600 hover:text-blue-600 transition-colors text-[10px] md:text-base break-all">{contact.email}</p>
                  </div>
                </a>

                {/* Timing */}
                <div className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 hover:border-purple-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform">
                    <FaClock className="text-white text-base md:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs md:text-lg mb-0.5">Timing</h4>
                    <p className="text-gray-600 text-[10px] md:text-base">{contact.timing}</p>
                  </div>
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
