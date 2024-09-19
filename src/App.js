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
      <Routes>
        {/* Main route for the homepage */}
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
            <SectionImage /> {/* Image between About Us and Services */}
            <Services />
            <SectionImage2 /> {/* Image between Services and Contact */}
            <Contact />
          </>
        } />
        {/* Separate route for the Apply page */}
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
