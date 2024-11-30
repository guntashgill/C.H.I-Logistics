// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="about-us py-5">
      {/* Matches navbar href */}
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-center mb-5">
          For over two decades, C.H.I. has been a trusted leader in the transportation industry. 
          We specialize in delivering reliable, efficient, and tailored services to meet the 
          diverse needs of our clients. Our team is dedicated to handling every shipment with 
          exceptional care, professionalism, and commitment to excellence.
        </p>
        <div className="row">
          <div className="col-md-6">
            <p>
              Equipped with a fleet of state-of-the-art trucks and cutting-edge technology, 
              we guarantee timely deliveries, every time. Our services include over-the-road (OTR) 
              transportation, dedicated logistics, expedited shipping, and round-the-clock dispatch support. 
              At C.H.I., reliability and customer satisfaction aren’t just goals—they’re our promise.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Our mission is to be the transportation partner of choice, recognized for our 
              unwavering focus on safety, sustainability, and service excellence. As industry needs evolve, 
              we continuously innovate and adapt to stay ahead. Whether it’s overcoming logistical challenges 
              or embracing new opportunities, our team is ready to deliver. Join us as we redefine standards 
              in the trucking industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
