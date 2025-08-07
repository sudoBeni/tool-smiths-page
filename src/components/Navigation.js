import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, BarChart3, BookOpen, Users, Zap, Hammer, ArrowRight } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Code },
    { path: '/project-showcase', label: 'Showcase', icon: BarChart3 },
    { path: '/technical-deep-dive', label: 'Technical', icon: BookOpen },
    { path: '/results-impact', label: 'Results', icon: Zap },
    { path: '/development-process', label: 'Process', icon: Users },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ display: 'none' }}
    >
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 bg-accent-color rounded-lg flex items-center justify-center">
              <Hammer className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl uppercase tracking-wide">Tool Smiths</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu hidden md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.li key={item.path} whileHover={{ y: -2 }}>
                <Link
                  to={item.path}
                  className={`nav-link flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-accent-color forge'
                      : 'text-text-secondary hover:text-accent-color hover:forge'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium uppercase tracking-wide">{item.label}</span>
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/project-showcase" className="btn-primary px-4 py-2 text-sm inline-flex items-center space-x-2">
            <span>Try Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-btn md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 forge border-t border-forge-border md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-6">
              <div className="grid gap-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-200 ${
                          isActive(item.path)
                            ? 'text-accent-color forge'
                            : 'text-text-secondary hover:text-accent-color hover:forge'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium uppercase tracking-wide">{item.label}</span>
                        {isActive(item.path) && (
                          <motion.div
                            className="ml-auto w-2 h-2 bg-accent-color rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile CTA */}
                <Link to="/project-showcase" className="btn-primary mt-2 inline-flex items-center justify-center space-x-2">
                  <span>Try Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Mobile Menu Footer */}
              <motion.div
                className="mt-8 pt-6 border-t border-forge-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="text-center">
                  <p className="text-text-secondary text-sm mb-4 uppercase tracking-wide">Data Forge System</p>
                  <div className="flex justify-center space-x-3">
                    <div className="w-2 h-2 bg-accent-color rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-success-color rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Blur Effect */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[-1] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation; 