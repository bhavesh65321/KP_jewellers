import React from "react";
import { FaLeaf } from "react-icons/fa";

const SectionHeading = ({
  title,
  subtitle,
  icon: Icon = FaLeaf,
  accentColor = "from-yellow-400 to-yellow-500",
}) => {
  return (
    <div className="text-center my-16">
      <h2
        className={`text-4xl py-3 md:text-5xl font-extrabold bg-gradient-to-r ${accentColor} text-transparent bg-clip-text`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-600 mt-2 text-sm md:text-base">{subtitle}</p>
      )}

      <div className="flex items-center justify-center mt-6 space-x-3">
        {/* Left lines with animation */}
        <div className="h-1 w-24 bg-yellow-400 rounded animate-pulse"></div>
        <div className="h-1 w-12 bg-yellow-600 rounded animate-pulse"></div>

        {/* Center Icon with soft glow */}
        <div className="p-2 rounded-full bg-yellow-100 shadow-lg">
          <Icon className="text-yellow-800 w-6 h-6 animate-bounce-slow" />
        </div>

        {/* Right lines with animation */}
        <div className="h-1 w-12 bg-yellow-600 rounded animate-pulse"></div>
        <div className="h-1 w-24 bg-yellow-400 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
