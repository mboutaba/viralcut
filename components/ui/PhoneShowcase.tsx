"use client"

import React, { useEffect, useRef } from 'react';

interface PhoneProps {
  videoSrc: string;
  index: number;
  total: number;
}

const PhoneShowcase: React.FC = () => {
  
  const videos = [
    './videos/video_1766860648771.mp4',
    './videos/video_1766860903116.mp4',
    './videos/video_1766860903116.mp4',
    './videos/video_1766860903116.mp4',
    './videos/video_1766860903116.mp4',
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center overflow-hidden relative py-20 px-4">
      
      {/* Section title */}
      <div className="text-center z-20 mb-16">
        <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          Our Creations
        </h2>
        <p className="mt-4 text-purple-200/80 text-lg md:text-xl">
          Explore our stunning nature shorts collection
        </p>
      </div>
      
      {/* Phones display - staggered layout */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center gap-6 flex-wrap lg:flex-nowrap">
        {videos.map((video, index) => (
          <Phone 
            key={`${video}-${index}`}
            videoSrc={video}
            index={index}
            total={videos.length}
          />
        ))}
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

const Phone: React.FC<PhoneProps> = ({ videoSrc, index, total }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked
      });
    }
  }, []);

  // Calculate stagger effect - middle phone is centered, others are slightly offset
  const getTransform = () => {
    const middle = Math.floor(total / 2);
    const offset = index - middle;
    
    // Rotate slightly for depth effect
    const rotation = offset * 3; // degrees
    const yOffset = Math.abs(offset) * 15; // pixels
    
    return {
      transform: `translateY(${yOffset}px) rotate(${rotation}deg)`,
      zIndex: total - Math.abs(offset), // Middle phone has highest z-index
    };
  };

  const transform = getTransform();

  return (
    <div
      className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:z-50"
      style={{
        width: '240px',
        height: '520px',
        ...transform,
      }}
    >
      {/* Phone frame */}
<div className="relative w-full h-full rounded-[3rem] bg-gradient-to-br from-gray-800 via-gray-900 to-black p-3 shadow-2xl overflow-hidden">        {/* Screen bezel */}
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20"></div>
          
          {/* Video content */}
          <div className="relative w-full h-full bg-black overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            
            {/* TikTok/YouTube UI Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Right side icons */}
              <div className="absolute right-3 bottom-24 flex flex-col gap-6">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <span className="text-white text-xs font-semibold">125K</span>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                    </svg>
                  </div>
                  <span className="text-white text-xs font-semibold">8.5K</span>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                    </svg>
                  </div>
                  <span className="text-white text-xs font-semibold">Share</span>
                </div>
              </div>
              
              {/* Bottom info */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
                  <span className="text-white font-semibold text-sm">@natureshorts</span>
                </div>
                <p className="text-white text-sm mb-2">Beautiful nature moments ✨🌿</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/80">#nature #shorts #peaceful</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Side buttons */}
        <div className="absolute right-1 top-24 w-1 h-12 bg-gray-700 rounded-full"></div>
        <div className="absolute right-1 top-40 w-1 h-16 bg-gray-700 rounded-full"></div>
      </div>
      
      {/* Phone glow effect */}
      <div 
        className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-xl -z-10"
      ></div>
    </div>
  );
};

export default PhoneShowcase;