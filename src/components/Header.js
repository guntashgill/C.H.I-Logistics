import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleNavClick = (hash) => {
    if (location.pathname === '/') {
      // Smooth scroll to the section if already on the main page
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to the main page with the hash for other pages
      window.location.href = `/#${hash}`;
    }
    setIsNavbarOpen(false); // Close the navbar
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent position-absolute w-100">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white" href="/">
          <img src="/logo.png" alt="Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
        </a>
        <div className="d-flex align-items-center">
          {/*
          <a href="https://www.instagram.com" className="text-white mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" className="text-white mx-2">
            <FaFacebook size={24} />
          </a>
          */}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isNavbarOpen ? 'show custom-navbar' : ''
          } justify-content-end`}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link text-white"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                className="nav-link text-white"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('services');
                }}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link text-white"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <RouterLink
                className="nav-link text-white"
                to="/apply"
                onClick={() => setIsNavbarOpen(false)}
              >
                Drive For C.H.I
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
