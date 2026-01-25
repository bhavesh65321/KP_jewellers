import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaGem, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

/**
 * Featured Video Component
 * 
 * To add your video:
 * 1. Place your video file in: public/videos/
 * 2. Update the VIDEO_PATH below with your filename
 * 
 * Supported formats: .mp4, .webm, .ogg
 * Recommended: MP4 (H.264) for best browser compatibility
 */

// Path to your video file (relative to public folder)
const VIDEO_PATH = "/videos/kp.mp4";

// Optional: Path to video thumbnail/poster image
const POSTER_PATH = "/images/products/logo.jpeg";

const FeaturedVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full mb-4 border border-amber-500/30">
            <FaGem className="text-xs" />
            Watch Our Story
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white">
            Experience <span className="text-amber-400">KP Jewellers</span>
          </h2>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black group">
          {/* Video Element */}
          <video
            ref={videoRef}
            src={VIDEO_PATH}
            poster={POSTER_PATH}
            muted={isMuted}
            playsInline
            onEnded={handleVideoEnd}
            onClick={togglePlay}
            className="w-full aspect-video object-cover cursor-pointer"
          />
          
          {/* Play/Pause Overlay */}
          <div 
            className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
            onClick={togglePlay}
          >
            <button
              className="w-16 h-16 md:w-20 md:h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? (
                <FaPause className="text-amber-600 text-xl md:text-2xl" />
              ) : (
                <FaPlay className="text-amber-600 text-xl md:text-2xl ml-1" />
              )}
            </button>
          </div>

          {/* Controls Bar */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}>
            <div className="flex items-center justify-between">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
              </button>

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
              </button>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-amber-400/50 rounded-tl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-amber-400/50 rounded-br-lg pointer-events-none" />
        </div>

        {/* Caption */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Discover our craftsmanship and heritage
        </p>
      </div>
    </section>
  );
};

export default FeaturedVideo;
