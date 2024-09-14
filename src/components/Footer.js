// src/components/Footer.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <FaMapMarkerAlt /> 4616 S Cedar Ave, Fresno, CA 93725
          </div>
          <div className="col-md-4 mb-3">
            <FaPhoneAlt /> (559) 497-1301
          </div>
          <div className="col-md-4 mb-3">
            <FaEnvelope /> info@t.com
          </div>
        </div>
        <p className="mt-3">&copy; 2024 C.H.I Logistics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
