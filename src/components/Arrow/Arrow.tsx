// components/Arrow.tsx

import React from 'react';

interface ArrowProps {
  colors?: string[];
}

const Arrow: React.FC<ArrowProps> = ({ colors }) => {
  // Define default colors
  const defaultColors = ['#FFC107', '#4CAF50', '#2196F3']; // Yellow, Green, Blue

  // Use default colors if no colors provided
  const arrowColors = colors || defaultColors;

  return (
    <div className="fixed inset-0 z-0 flex justify-center items-center pointer-events-none overflow-hidden">
      <div className="relative w-screen h-screen">
        {/* Rainbow lines */}
        {arrowColors.map((color, index) => (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${100 + index * 100}%`,
              height: '15px',
              backgroundColor: color,
              opacity: 1 - index * 0.2 // Adjust opacity
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Arrow;
