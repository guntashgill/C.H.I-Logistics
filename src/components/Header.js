// src/components/Header.js
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent position-absolute w-100">
      <div className="container d-flex justify-content-center align-items-center">
        <a className="navbar-brand text-white me-5" href="/">
          <img src="/logo.png" alt="Logo" className="img-fluid" style={{ maxHeight: '50px' }} /> {/* Add your logo here */}
        </a>
        <div className="d-flex align-items-center">
          <a href="https://www.instagram.com" className="text-white mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" className="text-white mx-2">
            <FaFacebook size={24} />
          </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About Us</a> {/* Link to About Us section */}
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">Services</a> {/* Link to Services section */}
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact Us</a> {/* Link to Contact Us section */}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/apply">Drive For C.H.I</Link> {/* Link to Apply page */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
