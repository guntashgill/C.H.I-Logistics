// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import ApplyPage from './components/ApplyPage';
import SectionImage from './components/SectionImage';  // Image between About and Services
import SectionImage2 from './components/SectionImage2'; // New Image Component
import './custom.css';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      {/* Main page sections with images in between */}
      <AboutUs />
      <SectionImage />  {/* Image between About Us and Services */}
      <Services />
      <SectionImage2 />  {/* Image between Services and Contact */}
      <Contact />
      <ApplyPage />
    </Router>
  );
}

export default App;


