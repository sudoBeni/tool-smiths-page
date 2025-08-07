import React from 'react';

const AnvilIcon = ({ size = 20, color = '#ff6b35' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="anvilG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4a5568" />
        <stop offset="60%" stopColor="#2d3748" />
        <stop offset="100%" stopColor="#1a202c" />
      </linearGradient>
    </defs>
    <rect x="10" y="34" width="44" height="6" rx="2" fill="url(#anvilG)" />
    <rect x="16" y="40" width="10" height="9" rx="2" fill="url(#anvilG)" />
    <rect x="38" y="40" width="10" height="9" rx="2" fill="url(#anvilG)" />
    <rect x="12" y="49" width="40" height="5" rx="2" fill="#1a202c" />
    <circle cx="32" cy="33" r="3" fill={color} opacity="0.8" />
  </svg>
);

export default AnvilIcon;


