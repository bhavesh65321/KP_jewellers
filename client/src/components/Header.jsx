import React, { useState, useEffect, useCallback } from "react";
import {
  FaSearch,
  FaWhatsapp,
  FaPhone,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaMicrophone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Drawer } from "@mui/material";
import { navItems } from "../constants/data";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [showVoiceHint, setShowVoiceHint] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const navigate = useNavigate();

  // Toggle menu expand/collapse
  const toggleMenu = (idx) => {
    setExpandedMenus(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Check for voice support and show hint on first visit
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const isSupported = !!SpeechRecognition;
    setVoiceSupported(isSupported);

    // Show voice hint tooltip for first-time visitors
    if (isSupported) {
      const hasSeenHint = sessionStorage.getItem('voiceHintShown');
      if (!hasSeenHint) {
        // Delay showing the hint to let the page load
        const showTimer = setTimeout(() => {
          setShowVoiceHint(true);
        }, 1500);

        // Auto-hide after 3 seconds
        const hideTimer = setTimeout(() => {
          setShowVoiceHint(false);
          sessionStorage.setItem('voiceHintShown', 'true');
        }, 4500);

        return () => {
          clearTimeout(showTimer);
          clearTimeout(hideTimer);
        };
      }
    }
  }, []);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileSearchOpen(false);
      setIsDrawerOpen(false);
    }
  };

  // Dismiss voice hint when clicking anywhere or using voice
  const dismissVoiceHint = () => {
    setShowVoiceHint(false);
    sessionStorage.setItem('voiceHintShown', 'true');
  };

  // Voice search handler
  const startVoiceSearch = useCallback(() => {
    dismissVoiceHint();
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setIsListening(false);
      // Auto search after voice input
      setTimeout(() => {
        if (transcript.trim()) {
          navigate(`/shop?search=${encodeURIComponent(transcript.trim())}`);
          setSearchQuery("");
        }
      }, 500);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  }, [navigate]);

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Top Announcement Bar - Hidden on mobile */}
        <div className="hidden md:block bg-gray-900 text-white text-center py-2 text-sm">
          <span className="text-amber-400">✨</span> Free Shipping on Orders Above ₹50,000 | 
          <span className="text-amber-400 ml-1">Lifetime Exchange Available</span>
        </div>

        {/* Main Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-2 lg:px-4">
            <div className="flex items-center justify-between py-3">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="lg:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                <FaBars size={22} />
              </button>

              {/* Logo - Aligned Left */}
              <Link to="/" className="flex-shrink-0 -ml-2 lg:-ml-4">
                <img 
                  src="/images/products/logo.jpeg" 
                  alt="KP Jewellers" 
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                />
              </Link>

              {/* Desktop Search Bar with Voice */}
              <form onSubmit={handleSearch} className="hidden lg:flex items-center flex-1 max-w-lg ml-auto mr-3">
                <div className="relative flex-1 flex items-center">
                  <input
                    type="text"
                    placeholder="Search for jewellery..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-l-full focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                  {/* Voice Search Button with Hint Tooltip */}
                  {voiceSupported && (
                    <div className="absolute right-2">
                      <button
                        type="button"
                        onClick={startVoiceSearch}
                        className={`relative p-2 rounded-full transition-all ${
                          isListening 
                            ? "bg-red-500 text-white animate-pulse" 
                            : showVoiceHint
                              ? "bg-amber-500 text-white animate-bounce"
                              : "text-gray-400 hover:text-amber-500 hover:bg-amber-50"
                        }`}
                        title="Search by voice"
                      >
                        <FaMicrophone size={14} />
                      </button>
                      
                      {/* Voice Hint Tooltip */}
                      {showVoiceHint && (
                        <div 
                          className="absolute top-full right-0 mt-3 z-50 animate-fadeIn"
                          onClick={dismissVoiceHint}
                        >
                          {/* Arrow */}
                          <div className="absolute -top-2 right-4 w-4 h-4 bg-gray-900 rotate-45"></div>
                          
                          {/* Tooltip Content */}
                          <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl min-w-[200px]">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                                <FaMicrophone size={14} />
                              </div>
                              <div>
                                <p className="font-medium text-sm">Voice Search</p>
                                <p className="text-gray-400 text-xs mt-0.5">
                                  Click the mic & speak to search
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <button 
                  type="submit"
                  className="px-5 py-2.5 bg-gray-800 text-white rounded-r-full hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <FaSearch size={14} />
                </button>
              </form>

              {/* Right Icons */}
              <div className="flex items-center gap-3 md:gap-4 flex-shrink-0 -mr-2 lg:-mr-4">
                {/* Mobile Search Toggle */}
                <button
                  onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                  className="lg:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors"
                >
                  <FaSearch size={18} />
                </button>

                {/* Call Icon */}
                <a
                  href="tel:+917976043673"
                  className="hidden md:flex p-2 bg-amber-50 rounded-full text-amber-600 hover:bg-amber-100 transition-colors"
                  title="Call Us: +91 7976043673"
                >
                  <FaPhone size={16} />
                </a>

                {/* WhatsApp Icon */}
                <a
                  href="https://wa.me/918426808544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-50 rounded-full text-green-600 hover:bg-green-100 transition-colors"
                  title="WhatsApp: +91 8426808544"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="lg:hidden bg-white border-b px-4 py-3">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for jewellery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-amber-400"
                />
                {/* Voice Button for Mobile */}
                {voiceSupported && (
                  <button
                    type="button"
                    onClick={startVoiceSearch}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all ${
                      isListening 
                        ? "bg-red-500 text-white animate-pulse" 
                        : "text-gray-400 hover:text-amber-500"
                    }`}
                  >
                    <FaMicrophone size={14} />
                  </button>
                )}
              </div>
              <button 
                type="submit"
                className="p-2.5 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                <FaSearch size={14} />
              </button>
            </form>
          </div>
        )}

        {/* Navigation Bar */}
        <nav className="hidden lg:block bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center justify-center">
              {navItems.map((item, idx) => (
                <li key={idx} className="relative group">
                  <Link
                    to={item.href}
                    className="flex items-center gap-1.5 px-5 py-4 text-gray-200 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide uppercase"
                  >
                    {item.label}
                    {item.children && item.children.length > 0 && (
                      <FaChevronDown className="text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                  </Link>
                  
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-400 group-hover:w-3/4 transition-all duration-300"></span>
                  
                  {item.children && item.children.length > 0 && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px] overflow-hidden">
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                        {item.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            to={child.href}
                            className="flex items-center px-5 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors text-sm group/item"
                          >
                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
            setExpandedMenus({});
          }}
        >
          <div className="w-80 h-full flex flex-col bg-white">
            {/* Drawer Header */}
            <div className="p-5 bg-gradient-to-r from-gray-800 to-gray-900">
              <div className="flex justify-between items-center">
                <Link 
                  to="/" 
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-white"
                >
                  <h2 className="text-xl font-serif font-bold">
                    KP <span className="text-amber-400">JEWELLERS</span>
                  </h2>
                  <p className="text-[10px] text-gray-400 tracking-wider">SINCE 1985</p>
                </Link>
                <button 
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Search in Drawer with Voice */}
              <form onSubmit={handleSearch} className="mt-4 flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-3 pr-8 py-2 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  />
                  {voiceSupported && (
                    <button
                      type="button"
                      onClick={startVoiceSearch}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full transition-all ${
                        isListening ? "text-red-400 animate-pulse" : "text-gray-400 hover:text-amber-400"
                      }`}
                    >
                      <FaMicrophone size={12} />
                    </button>
                  )}
                </div>
                <button 
                  type="submit"
                  className="p-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
                >
                  <FaSearch size={14} />
                </button>
              </form>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto py-4">
              {navItems.map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 last:border-b-0">
                  {item.children && item.children.length > 0 ? (
                    <>
                      {/* Menu item with children - toggle button */}
                      <button
                        onClick={() => toggleMenu(idx)}
                        className="w-full flex items-center justify-between px-5 py-4 text-gray-800 hover:bg-amber-50 hover:text-amber-700 transition-colors font-medium"
                      >
                        <span>{item.label}</span>
                        <FaChevronDown 
                          className={`text-xs text-gray-400 transition-transform duration-300 ${
                            expandedMenus[idx] ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Collapsible children */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedMenus[idx] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="bg-gray-50 py-2">
                          {/* Link to main category page */}
                          <Link
                            to={item.href}
                            className="flex items-center px-8 py-2.5 text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors"
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span>
                            View All {item.label}
                          </Link>
                          {item.children.map((child, cIdx) => (
                            <Link
                              key={cIdx}
                              to={child.href}
                              className="flex items-center px-8 py-2.5 text-gray-600 hover:text-amber-700 text-sm transition-colors"
                              onClick={() => setIsDrawerOpen(false)}
                            >
                              <span className="w-1 h-1 bg-amber-400 rounded-full mr-3"></span>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Menu item without children - direct link */
                    <Link
                      to={item.href}
                      className="flex items-center justify-between px-5 py-4 text-gray-800 hover:bg-amber-50 hover:text-amber-700 transition-colors font-medium"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="p-4 bg-gray-50 border-t space-y-3">
              {/* Store Location Button */}
              <a
                href="https://www.google.com/maps/place/K+P+jewellers/@24.7525243,71.7754785,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full p-3 bg-white border border-gray-200 rounded-xl hover:border-amber-400 hover:shadow-md transition-all"
                onClick={() => setIsDrawerOpen(false)}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">Visit Our Store</p>
                  <p className="text-xs text-gray-500">Sanchore, Rajasthan</p>
                </div>
                <FaChevronDown className="text-gray-400 -rotate-90 text-xs" />
              </a>

              {/* Call & WhatsApp Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="tel:+917976043673"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-500 text-white rounded-xl text-sm font-semibold hover:bg-amber-600 transition-colors shadow-md shadow-amber-200"
                >
                  <FaPhone size={14} /> Call Now
                </a>
                <a
                  href="https://wa.me/918426808544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors shadow-md shadow-green-200"
                >
                  <FaWhatsapp size={16} /> WhatsApp
                </a>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                <p className="text-xs text-gray-500 font-medium">
                  Trusted Jewellers Since 1985
                </p>
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </Drawer>
      </header>

      {/* Voice Search Overlay */}
      {isListening && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center">
          <div className="text-center">
            {/* Animated Microphone */}
            <div className="relative">
              <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center animate-pulse">
                <FaMicrophone className="text-white text-4xl" />
              </div>
              {/* Ripple Effects */}
              <div className="absolute inset-0 w-24 h-24 bg-amber-500/50 rounded-full animate-ping"></div>
              <div className="absolute -inset-4 w-32 h-32 bg-amber-500/30 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute -inset-8 w-40 h-40 bg-amber-500/20 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
            </div>
            
            <p className="text-white text-xl font-medium mt-8">Listening...</p>
            <p className="text-gray-400 text-sm mt-2">Say what you're looking for</p>
            <p className="text-amber-400 text-sm mt-1">e.g., "Gold rings" or "Diamond earrings"</p>
            
            <button
              onClick={() => setIsListening(false)}
              className="mt-8 px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
