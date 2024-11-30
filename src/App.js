import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import ApplyPage from './components/ApplyPage';
import SectionImage from './components/SectionImage';  // Image between About and Services
import SectionImage2 from './components/SectionImage2'; // New Image Component
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import './custom.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Main route for the homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero data-aos="fade-in" />
              <AboutUs data-aos="slide-up" />
              <SectionImage data-aos="fade-in" /> {/* Add animation to image */}
              <Services data-aos="fade-right" />
              <SectionImage2 data-aos="fade-up" /> {/* Add animation to second image */}
              <Contact data-aos="zoom-in" />
            </>
          }
        />
        {/* Separate route for the Apply page */}
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
