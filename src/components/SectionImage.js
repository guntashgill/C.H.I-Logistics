/// src/components/SectionImage.js
import React from 'react';

const SectionImage = () => {
  return (
    <div className="section-image">
      <img 
        src="/image2.png" 
        alt="Section Divider" 
        className="img-fluid w-100" 
        style={{ objectFit: 'cover' }} 
      />
    </div>
  );
};

export default SectionImage;

