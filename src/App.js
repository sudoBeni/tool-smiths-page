import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useSmoothScroll from './hooks/useSmoothScroll';
// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import TopGlassBar from './components/TopGlassBar';
import IntroForge from './components/IntroForge';

// Pages
// Home kept for legacy route content; not used on root anymore
import Home from './pages/Home';
import Landing from './pages/Landing';
import ProjectShowcase from './pages/ProjectShowcase';
import TechnicalDeepDive from './pages/TechnicalDeepDive';
import ResultsImpact from './pages/ResultsImpact';
import DevelopmentProcess from './pages/DevelopmentProcess';
import AgentsDeepDive from './pages/AgentsDeepDive';

function App() {
  // Initialize smooth scroll for journey-like experience
  useSmoothScroll();

  return (
    <Router>
      <div className="App">
        <IntroForge />
        <Navigation />
        <TopGlassBar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/project-showcase" element={<ProjectShowcase />} />
            <Route path="/technical-deep-dive" element={<TechnicalDeepDive />} />
            <Route path="/results-impact" element={<ResultsImpact />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/agents-deep-dive" element={<AgentsDeepDive />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <MobileNav />
      </div>
    </Router>
  );
}

export default App; 