import React, { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaUser,
  FaWhatsapp,
  FaPhone,
  FaChevronDown,
} from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton as MUIIconButton, Divider } from "@mui/material";
import { navItems } from "../constants/data";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        {/* Hamburger Icon for mobile/tablet */}
        <div className="lg:hidden">
          <MUIIconButton
            onClick={() => setIsDrawerOpen(true)}
            className="text-gray-800"
          >
            <MenuIcon />
          </MUIIconButton>
        </div>

        {/* Logo in center for mobile/tablet */}
        <div className="text-2xl font-serif font-bold tracking-wide text-gray-800 flex-grow text-center lg:text-left">
          KP JEWELLERS
        </div>

        {/* Icons for mobile/tablet */}
        <div className="flex items-center space-x-4 lg:hidden">
          <FaSearch className="text-gray-600 cursor-pointer font-normal" />
          <FaWhatsapp className="text-gray-800 cursor-pointer" />
          <FaPhone className="text-gray-800 cursor-pointer" />
        </div>

        {/* Search Bar and Icons for desktop */}
        <div className="hidden lg:flex items-center flex-grow max-w-sm ml-auto mr-4">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-3 py-1.5 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="px-3 py-1.5 bg-gray-800 text-white rounded-r-full">
            <FaSearch />
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <FaWhatsapp className="text-gray-800 cursor-pointer" />
          <FaPhone className="text-gray-800 cursor-pointer" />
          <FaHeart className="text-gray-800 cursor-pointer" />
          <FaUser className="text-gray-800 cursor-pointer" />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden lg:flex bg-gray-100 px-4 py-3 justify-center gap-8">
        {navItems.map((item, idx) => (
          <div key={idx} className="relative group">
            <Link
              to={item.href}
              className="hover:underline hover:text-gray-600 transition duration-300 flex items-center gap-1"
            >
              {item.label}
              {item.children && item.children.length > 0 && (
                <FaChevronDown className="text-xs mt-1" />
              )}
            </Link>
            {item.children && item.children.length > 0 && (
              <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg z-20 min-w-[180px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300">
                {item.children.map((child, cIdx) => (
                  <Link
                    key={cIdx}
                    to={child.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-800"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Drawer for small screens */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="w-80 p-4 flex flex-col space-y-4 bg-gray-50 h-full">
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <div className="text-xl font-serif font-bold tracking-wide text-gray-800">
              KP JEWELLERS
            </div>
            <MUIIconButton onClick={() => setIsDrawerOpen(false)}>
              <CloseIcon />
            </MUIIconButton>
          </div>

          <Divider />

          {/* Navigation Items */}
          <div className="flex flex-col space-y-2 text-gray-800">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <Link
                  to={item.href}
                  className="flex items-center justify-between px-2 py-2 hover:bg-gray-100 rounded transition"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.label}
                  {item.children && item.children.length > 0 && (
                    <FaChevronDown className="text-xs mt-1" />
                  )}
                </Link>
                {item.children && item.children.length > 0 && (
                  <div className="pl-4">
                    {item.children.map((child, cIdx) => (
                      <Link
                        key={cIdx}
                        to={child.href}
                        className="block px-2 py-1 text-sm hover:bg-gray-50 rounded text-gray-800"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        {child.label}
                      </Link>
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
