import React from "react";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import IconButton from "./IconButton";
import { navItems } from "../constants/data";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-yellow-400 border-b border-yellow-200 text-yellow-900">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
        {/* Left - Location & Email */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-yellow-800" />
            <span>Pune, India</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-yellow-800" />
            <span>support@kpjewellers.com</span>
          </div>
        </div>

        {/* Center - Brand */}
        <div className="text-2xl md:text-3xl font-serif font-bold tracking-wide text-yellow-900 text-center">
          KP JEWELLERS
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <div className="hidden md:flex flex-grow max-w-xs">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border bg-amber-200 border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>
          <IconButton icon={FaWhatsapp} label="WhatsApp" />
          <IconButton icon={FaPhone} label="Call" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-amber-50 text-yellow-900 px-4 py-3 flex flex-wrap justify-center gap-8 shadow-sm relative">
        {navItems.map((item, idx) => (
          <div key={idx} className="relative group">
            <a
              href={item.href}
              className="hover:underline hover:italic hover:text-yellow-700 transition duration-300 flex items-center gap-1"
            >
              {item.label}
              {item.children && item.children.length > 0 && (
                <FaChevronDown className="text-xs mt-1" />
              )}
            </a>

            {item.children && item.children.length > 0 && (
              <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg z-20 min-w-[180px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300">
                {item.children.map((child, cIdx) => (
                  <a
                    key={cIdx}
                    href={child.href}
                    className="block px-4 py-2 text-sm hover:rounded-md hover:bg-yellow-100 text-yellow-800"
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
