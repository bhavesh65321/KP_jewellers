import React from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const FloatingSocial = () => {
  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: "https://wa.me/",
      label: "WhatsApp",
      color: "text-white",
      bg: "bg-[#25D366]",
      shadow: "shadow-green-500/30",
    },
    {
      icon: FaPhone,
      href: "tel:+91XXXXXXXXXX",
      label: "Call Us",
      color: "text-white",
      bg: "bg-amber-500",
      shadow: "shadow-amber-500/30",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/",
      label: "Instagram",
      color: "text-white",
      bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      shadow: "shadow-pink-500/30",
    },
    {
      icon: FaFacebookF,
      href: "https://facebook.com/",
      label: "Facebook",
      color: "text-white",
      bg: "bg-[#1877F2]",
      shadow: "shadow-blue-500/30",
    },
    {
      icon: FaEnvelope,
      href: "mailto:info@kpjewellers.com",
      label: "Email Us",
      color: "text-white",
      bg: "bg-gray-700",
      shadow: "shadow-gray-500/30",
    },
  ];

  return (
    <>
      {/* Desktop Floating Sidebar */}
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
                {/* Arrow */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-gray-900"></span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Floating Buttons - Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-white via-white to-transparent">
        <div className="flex items-center justify-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30 font-medium text-sm hover:scale-105 transition-transform"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>
          
          {/* Call */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center gap-2 px-5 py-3 bg-amber-500 text-white rounded-full shadow-lg shadow-amber-500/30 font-medium text-sm hover:scale-105 transition-transform"
          >
            <FaPhone size={16} />
            Call Now
          </a>
        </div>
      </div>

      {/* Add padding to body for mobile bottom bar */}
      <div className="md:hidden h-20"></div>
    </>
  );
};

export default FloatingSocial;
