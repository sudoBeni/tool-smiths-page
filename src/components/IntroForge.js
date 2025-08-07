import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer } from 'lucide-react';
import LoadingHammer from './LoadingHammer';

const IntroForge = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 480);
    const played = sessionStorage.getItem('introPlayed');
    if (!played) {
      setShow(true);
      const total = setTimeout(() => {
        sessionStorage.setItem('introPlayed', '1');
        setShow(false);
      }, window.innerWidth <= 480 ? 1500 : 2600);
      return () => clearTimeout(total);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-forge-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => setShow(false)}
        >
          {/* Glow pulse circle */}
          <motion.div
            className="intro-glow"
            initial={{ scale: 0.6, opacity: 0.4 }}
            animate={{ scale: [0.6, 1, 1.2, 1], opacity: [0.4, 0.8, 1, 0.7] }}
            transition={{ duration: isMobile ? 1.0 : 2.2, times: [0, 0.4, 0.7, 1], ease: 'easeInOut' }}
          />

          {/* Brand */}
          <motion.div
            className="intro-brand"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="intro-badge">
              <Hammer className="w-4 h-4 text-accent-color" />
              <span>Data Forge</span>
            </span>
            <motion.h1
              className="intro-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              Forge answers
            </motion.h1>
          </motion.div>

          {/* Hammer animation (skip on small screens for perf) */}
          {!isMobile && (
            <motion.div
              className="intro-hammer"
              initial={{ rotate: -35, y: -40, opacity: 0 }}
              animate={{ rotate: [ -35, 0, 12, 0 ], y: [ -40, 0, -6, 0 ], opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55, times: [0, 0.6, 0.85, 1], ease: 'easeOut' }}
            >
              <LoadingHammer size={120} showText={false} />
            </motion.div>
          )}

          {/* Impact flash */}
          <motion.div
            className="intro-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.25, delay: isMobile ? 0.6 : 1.6 }}
          />

          {/* Fade curtain up */
          }
          <motion.div
            className="intro-curtain"
            initial={{ y: 0 }}
            animate={{ y: '-110%' }}
            transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? 0.9 : 2.0, ease: 'easeIn' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroForge;


