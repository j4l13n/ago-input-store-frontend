// components/Rainbow.tsx

import React from 'react';

interface RainbowProps {
  colors?: string[];
}

const Rainbow: React.FC<RainbowProps> = ({ colors }) => {
  // Define default colors
  const defaultColors = ['#a9c5dc', '#9aab88', '#0D9214']; // Yellow, Green, Blue

  // Use default colors if no colors provided
  const rainbowColors = colors || defaultColors;

  // Generate unique IDs for gradient stops
  const gradientId = 'rainbowGradient';
  const gradientStops = rainbowColors.map((color, index) => (
    <stop key={index} offset={`${index * (100 / (rainbowColors.length - 1))}%`} stopColor={color} />
  ));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      className="fixed inset-0 z-0 pointer-events-none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          {gradientStops}
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill={`url(#${gradientId})`} />
      {rainbowColors.map((color, index) => (
        <path
          key={index}
          d={`M 0 ${index * 100} Q 500 ${index * 100 + 50} 1000 ${index * 100} Z`}
          fill={color}
          opacity={(index + 1) / rainbowColors.length}
        />
      ))}
    </svg>
  );
};

export default Rainbow;
