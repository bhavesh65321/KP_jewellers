import { Link } from "react-router-dom";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaCode,
  FaHeart,
} from "react-icons/fa";
import { navItems } from "../constants/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
        {/* Main Grid - 3 columns on tablet/desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/images/products/logo.jpeg" 
                alt="KP Jewellers" 
                className="h-20 md:h-24 w-auto object-contain brightness-0 invert mx-auto md:mx-0"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted destination for exquisite gold, silver, and platinum jewellery. 
              Quality craftsmanship since generations.
            </p>
            
            {/* Partnership Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-700/50 rounded-full border border-gray-600 text-xs">
                <span className="text-gray-400">Part of</span>
                <span className="text-white font-medium">KP Developers</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 rounded-full border border-amber-500/30 text-xs">
                <span className="text-gray-400">Backed by</span>
                <span className="text-amber-400 font-medium">Kisna Jewellers</span>
              </span>
            </div>
          </div>

          {/* Quick Links & Get in Touch - 2 columns on mobile, separate on tablet/desktop */}
          <div className="grid grid-cols-2 md:contents gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 border-b-2 border-yellow-400 inline-block pb-1">
                Quick Links
              </h3>
              <ul className="mt-2 md:mt-4 space-y-1.5 md:space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-yellow-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-yellow-400 transition">
                    All Jewellery
                  </Link>
                </li>
                <li>
                  <Link to="/shop?material=gold" className="hover:text-yellow-400 transition">
                    Gold
                  </Link>
                </li>
                <li>
                  <Link to="/shop?material=silver" className="hover:text-yellow-400 transition">
                    Silver
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-400 transition">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 border-b-2 border-yellow-400 inline-block pb-1">
                Get in Touch
              </h3>
              <ul className="mt-2 md:mt-4 space-y-2 md:space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <FaPhone className="text-yellow-400 text-sm flex-shrink-0" /> 
                  <a href="tel:+917976043673" className="hover:text-yellow-400 transition text-xs md:text-sm">+91 79760 43673</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaWhatsapp className="text-yellow-400 text-sm flex-shrink-0" /> 
                  <a href="https://wa.me/918426808544" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition text-xs md:text-sm">+91 84268 08544</a>
                </li>
                <li className="flex items-start gap-2">
                  <FaEnvelope className="text-yellow-400 mt-0.5 flex-shrink-0 text-sm" /> 
                  <a href="mailto:K.P.JEWELLERS1008@GMAIL.COM" className="hover:text-yellow-400 transition text-[10px] md:text-xs break-all leading-tight">K.P.JEWELLERS1008@GMAIL.COM</a>
                </li>
                <li className="flex items-center gap-3 mt-3">
                  <a href="https://www.facebook.com/share/1ApZkEZCNn/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                    <FaFacebook size={18} />
                  </a>
                  <a href="https://www.instagram.com/k_p_jewellers_sanchore" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                    <FaInstagram size={18} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-sm py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Copyright */}
          <p className="text-gray-300 text-center md:text-left">
            Copyright © {currentYear}{" "}
            <span className="text-yellow-400 font-semibold">KP Jewellers</span>
            . All rights reserved.
          </p>
          
          {/* Developer Credit */}
          <a
            href="https://wa.me/918003675919"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full border border-gray-600 hover:border-emerald-500/50 hover:from-gray-700 hover:to-gray-600 transition-all duration-300"
          >
            <FaCode className="text-emerald-400 text-xs group-hover:animate-pulse" />
            <span className="text-gray-400 text-xs">
              Developed with <FaHeart className="inline text-red-500 text-[10px] mx-0.5 animate-pulse" /> by
            </span>
            <span className="text-emerald-400 font-semibold text-xs group-hover:text-emerald-300 transition-colors">
              Soni Developers
            </span>
            <FaWhatsapp className="text-green-500 text-sm group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
