import React, { useState, useRef } from "react";
import { FaGem, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

/**
 * Featured Video Component
 * 
 * Autoplays video in loop with full width/height
 * 
 * To add your video:
 * 1. Place your video file in: public/videos/
 * 2. Update the VIDEO_PATH below with your filename
 */

// Path to your video file (relative to public folder)
const VIDEO_PATH = "/videos/kp.mp4";

const FeaturedVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative bg-gray-900">
      {/* Section Header - Overlay on video */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-6 md:pt-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/40 backdrop-blur-sm text-amber-400 text-sm font-medium rounded-full mb-3 border border-amber-500/30">
            <FaGem className="text-xs" />
            Watch Our Story
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white drop-shadow-lg">
            Experience <span className="text-amber-400">KP Jewellers</span>
          </h2>
        </div>
      </div>

      {/* Full Width/Height Video Container */}
      <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {/* Video Element - Autoplay, Loop, Muted */}
        <video
          ref={videoRef}
          src={VIDEO_PATH}
          muted={isMuted}
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none" />

        {/* Mute/Unmute Button - Bottom Right */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 w-12 h-12 md:w-14 md:h-14 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20 hover:border-amber-400/50 hover:scale-110"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
        </button>

        {/* Sound hint for muted state */}
        {isMuted && (
          <div className="absolute bottom-4 right-20 md:bottom-6 md:right-24 z-20 bg-black/50 backdrop-blur-sm text-white text-xs md:text-sm px-3 py-1.5 rounded-full border border-white/20 animate-pulse">
            🔊 Click to unmute
          </div>
        )}

        {/* Corner Decorations */}
        <div className="absolute top-20 md:top-24 left-4 w-12 h-12 border-l-2 border-t-2 border-amber-400/50 rounded-tl-lg pointer-events-none" />
        <div className="absolute bottom-4 right-20 md:right-24 w-12 h-12 border-r-2 border-b-2 border-amber-400/50 rounded-br-lg pointer-events-none" />

        {/* Bottom Caption */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
          <p className="text-white/80 text-xs md:text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
            ✨ Discover our craftsmanship and heritage
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideo;
