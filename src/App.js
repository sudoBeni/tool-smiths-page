import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ProjectShowcase from './pages/ProjectShowcase';
import TechnicalDeepDive from './pages/TechnicalDeepDive';
import ResultsImpact from './pages/ResultsImpact';
import DevelopmentProcess from './pages/DevelopmentProcess';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project-showcase" element={<ProjectShowcase />} />
            <Route path="/technical-deep-dive" element={<TechnicalDeepDive />} />
            <Route path="/results-impact" element={<ResultsImpact />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 