// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import ApplyPage from './components/ApplyPage';
import './custom.css';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      {/* These sections are included in the main page, accessible via anchor links */}
      <AboutUs />
      <Services />
      <Contact />\
      {/* Separate route for the apply page */}
      <Routes>
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
