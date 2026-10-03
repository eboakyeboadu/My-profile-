import React from 'react';

export const HBSLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <div className={`relative flex items-center justify-center rounded-2xl bg-[#a51c30]/15 border border-[#a51c30]/40 p-2 shadow-inner ${className}`}>
    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Harvard Shield Outline */}
      <path d="M50 5C78 5 95 18 95 48C95 86 50 115 50 115C50 115 5 86 5 48C5 18 22 5 50 5Z" fill="#A51C30" stroke="#FFDAD9" strokeWidth="3" />
      {/* 3 Books Layout */}
      {/* Book 1: Top Left */}
      <rect x="22" y="26" width="22" height="18" rx="2" fill="#FFFFFF" stroke="#680015" strokeWidth="1.5" />
      <text x="25" y="39" fontFamily="serif" fontSize="10" fontWeight="bold" fill="#680015">VE</text>
      {/* Book 2: Top Right */}
      <rect x="56" y="26" width="22" height="18" rx="2" fill="#FFFFFF" stroke="#680015" strokeWidth="1.5" />
      <text x="60" y="39" fontFamily="serif" fontSize="10" fontWeight="bold" fill="#680015">RI</text>
      {/* Book 3: Bottom Center */}
      <rect x="39" y="58" width="22" height="18" rx="2" fill="#FFFFFF" stroke="#680015" strokeWidth="1.5" />
      <text x="42" y="71" fontFamily="serif" fontSize="10" fontWeight="bold" fill="#680015">TAS</text>
    </svg>
  </div>
);

export const HSELogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <div className={`relative flex items-center justify-center rounded-2xl bg-[#004b87]/20 border border-[#4d97ff]/40 p-2 shadow-inner ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* HSE Blue Circle Crest */}
      <circle cx="50" cy="50" r="45" fill="#003366" stroke="#4D97FF" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" stroke="#E9C349" strokeWidth="1.5" strokeDasharray="4 2" />
      {/* HSE Monogram / Crow Emblem */}
      <path d="M36 32V68M36 50H64M64 32V68" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="22" r="4" fill="#E9C349" />
      <path d="M26 78C34 83 66 83 74 78" stroke="#E9C349" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </div>
);

export const KNUSTLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <div className={`relative flex items-center justify-center rounded-2xl bg-[#e9c349]/15 border border-[#e9c349]/40 p-2 shadow-inner ${className}`}>
    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* KNUST Crest */}
      <path d="M50 5C78 5 95 18 95 50C95 85 50 112 50 112C50 112 5 85 5 50C5 18 22 5 50 5Z" fill="#1C2026" stroke="#E9C349" strokeWidth="3.5" />
      {/* Gold & Maroon Inner Shield */}
      <path d="M50 15C72 15 85 25 85 50C85 78 50 100 50 100C50 100 15 78 15 50C15 25 28 15 50 15Z" fill="#A51C30" />
      {/* Torch of Knowledge */}
      <path d="M50 30L45 55H55L50 30Z" fill="#E9C349" />
      <circle cx="50" cy="27" r="6" fill="#FFA500" />
      {/* Cog / Gear for Technology */}
      <circle cx="50" cy="70" r="14" fill="#E9C349" stroke="#1C2026" strokeWidth="2" />
      <circle cx="50" cy="70" r="6" fill="#A51C30" />
    </svg>
  </div>
);
