import React, { useState, useEffect } from "react";

const GSTBadge = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-24 md:bottom-8 right-4 md:right-6 z-40 transition-all duration-500 ${
        isVisible 
          ? "translate-y-0 opacity-100 scale-100" 
          : "translate-y-10 opacity-0 scale-90"
      }`}
    >
      {/* Certified Stamp Design */}
      <div className="group relative cursor-default">
        {/* Main Stamp Circle */}
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          {/* Outer rotating border */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/50 animate-spin" style={{ animationDuration: '20s' }}></div>
          
          {/* Inner circle */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 shadow-lg shadow-emerald-500/30 flex items-center justify-center">
            {/* Center content */}
            <div className="text-center text-white">
              <div className="text-[8px] md:text-[10px] font-bold tracking-wider">GST</div>
              <div className="text-[6px] md:text-[7px] opacity-80">VERIFIED</div>
              <div className="w-4 md:w-5 h-0.5 bg-white/50 mx-auto my-0.5 rounded-full"></div>
              <div className="text-lg md:text-xl">✓</div>
            </div>
          </div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Expanded info on hover */}
        <div className="absolute bottom-full right-0 mb-2 px-4 py-3 bg-gray-900 text-white rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0 min-w-[200px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <div>
              <p className="text-xs text-gray-400">GST Registration Number</p>
              <p className="text-sm font-mono font-bold text-emerald-400">08ABAFK6773F1Z6</p>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-gray-900 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default GSTBadge;
