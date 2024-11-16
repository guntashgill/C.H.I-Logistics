import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent position-absolute w-100">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white" href="/">
          <img src="/logo.png" alt="Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
        </a>
        <div className="d-flex align-items-center">
          <a href="https://www.instagram.com" className="text-white mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" className="text-white mx-2">
            <FaFacebook size={24} />
          </a>
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
          } justify-content-end`} // Opens to the right
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/apply">
                Drive For C.H.I
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
