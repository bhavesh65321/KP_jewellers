import React from "react";
import { navItems } from "../constants/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-600 tracking-wide">
          KP <span className="text-gray-800">Jewellers</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-pink-600 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow max-w-xs">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="relative group hover:cursor-pointer">
            <span role="img" aria-label="cart">
              🛍️
            </span>
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-1 rounded-full">
              2
            </span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-pink-600 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white hover:cursor-pointer transition">
            <span role="img" aria-label="user">
              👤
            </span>
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
