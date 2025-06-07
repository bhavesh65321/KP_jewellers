import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton as MUIIconButton, Divider } from "@mui/material";
import { navItems } from "../constants/data";
import IconButton from "./IconButton";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-400 border-b border-yellow-200 text-yellow-900">
      {/* Top Bar & Brand */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Hamburger Icon for small screens */}
        <div className="lg:hidden">
          <MUIIconButton
            onClick={() => setIsDrawerOpen(true)}
            className="text-yellow-900"
          >
            <MenuIcon />
          </MUIIconButton>
        </div>

        {/* Left - Location & Email (hidden on small screens) */}
        <div className="hidden lg:flex items-center space-x-6">
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
        <div className="text-2xl md:text-3xl font-serif font-bold tracking-wide text-rose-950 text-center flex-grow">
          KP JEWELLERS
        </div>

        {/* Right - Search & Icons (hidden on small screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex flex-grow max-w-xs">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>
          <IconButton icon={FaWhatsapp} label="WhatsApp" />
          <IconButton icon={FaPhone} label="Call" />
        </div>
      </div>

      {/* Bottom Navigation (hidden on small screens) */}
      <nav className="hidden lg:flex bg-gray-100 text-yellow-900 px-4 py-3 justify-center gap-8 shadow-sm">
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

      {/* MUI Drawer for small screens */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="w-80 p-4 flex flex-col space-y-4 bg-gray-50 h-full">
          {/* Close Button */}
          <div className="flex justify-between items-center">
            {/* Brand */}
            <div className="text-xl font-serif font-bold tracking-wide text-rose-950 text-center">
              KP JEWELLERS
            </div>

            <MUIIconButton onClick={() => setIsDrawerOpen(false)}>
              <CloseIcon />
            </MUIIconButton>
          </div>

          <Divider />

          {/* Top Bar Content */}
          <div className="flex flex-col py-4 text-yellow-900">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-800" />
              <span>Pune, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-800" />
              <span>support@kpjewellers.com</span>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <IconButton icon={FaWhatsapp} label="WhatsApp" />
              <IconButton icon={FaPhone} label="Call" />
            </div>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 mt-2"
            />
          </div>

          <Divider />

          {/* Navigation Items */}
          <div className="flex flex-col space-y-2 text-yellow-900">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <a
                  href={item.href}
                  className="flex items-center justify-between px-2 py-2 hover:bg-yellow-100 rounded transition"
                >
                  {item.label}
                  {item.children && item.children.length > 0 && (
                    <FaChevronDown className="text-xs mt-1" />
                  )}
                </a>
                {item.children && item.children.length > 0 && (
                  <div className="pl-4">
                    {item.children.map((child, cIdx) => (
                      <a
                        key={cIdx}
                        href={child.href}
                        className="block px-2 py-1 text-sm hover:bg-yellow-50 rounded text-yellow-800"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
