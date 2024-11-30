import React from 'react';

const SectionImage = () => {
  return (
    <div className="section-image parallax" data-aos="fade-in">
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
