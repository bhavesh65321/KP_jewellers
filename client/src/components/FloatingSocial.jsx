import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

const FloatingSocial = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      icon: FaPhone,
      href: "tel:+917976043673",
      label: "Call Us",
      color: "text-white",
      bg: "bg-amber-500",
      shadow: "shadow-amber-500/30",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/k_p_jewellers_sanchore",
      label: "Instagram",
      color: "text-white",
      bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      shadow: "shadow-pink-500/30",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/1ApZkEZCNn/",
      label: "Facebook",
      color: "text-white",
      bg: "bg-[#1877F2]",
      shadow: "shadow-blue-500/30",
    },
    {
      icon: FaEnvelope,
      href: "mailto:K.P.JEWELLERS1008@GMAIL.COM",
      label: "Email Us",
      color: "text-white",
      bg: "bg-gray-700",
      shadow: "shadow-gray-500/30",
    },
  ];

  return (
    <>
      {/* Desktop - Floating Social Sidebar */}
      <div className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col gap-3 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-xl border border-gray-100">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`group relative p-3 ${social.bg} ${social.color} rounded-full shadow-lg ${social.shadow} hover:scale-110 hover:-translate-x-1 transition-all duration-300`}
            >
              <social.icon size={20} />
              
              {/* Tooltip */}
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg">
                {social.label}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-gray-900"></span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Desktop - Large WhatsApp Button (Bottom Right) */}
      <div className="hidden md:block fixed bottom-6 right-24 z-40">
        <a
          href="https://wa.me/918426808544"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-5 py-3 bg-[#25D366] text-white rounded-full shadow-xl shadow-green-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          {/* Pulse Animation */}
          <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30"></span>
          
          <FaWhatsapp size={24} className="relative z-10" />
          <span className="relative z-10 font-semibold">Chat with us</span>
        </a>

        {/* Tooltip Popup */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 animate-bounce">
            <div className="relative bg-gray-900 text-white px-4 py-2 rounded-xl shadow-xl">
              <button 
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <FaTimes size={8} />
              </button>
              <p className="text-sm font-medium whitespace-nowrap">💬 Need help? Chat now!</p>
              {/* Arrow */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Floating Buttons - Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-gradient-to-t from-white via-white/95 to-transparent">
        <div className="flex items-center justify-center gap-3">
          {/* WhatsApp - Bigger */}
          <a
            href="https://wa.me/918426808544"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30 font-semibold text-sm hover:scale-105 transition-transform"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></span>
            <FaWhatsapp size={20} className="relative" />
            <span className="relative">WhatsApp</span>
          </a>
          
          {/* Call */}
          <a
            href="tel:+917976043673"
            className="flex items-center gap-2 px-5 py-3 bg-amber-500 text-white rounded-full shadow-lg shadow-amber-500/30 font-semibold text-sm hover:scale-105 transition-transform"
          >
            <FaPhone size={16} />
            Call Now
          </a>
        </div>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="md:hidden h-20"></div>
    </>
  );
};

export default FloatingSocial;
