// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div 
      className="hero" 
      style={{ 
        backgroundImage: `url(/IMG_6666.JPG)`, // Use the path of your image from the public folder
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh', // Full viewport height
        width: '100%', 
        position: 'relative',
        zIndex: '-1',
      }}
    >
      {/* Empty container to maintain layout structure, remove text and button */}
    </div>
  );
};

export default Hero;
