import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroForge = ({ durationMs = 3000, playOnce = false, onFinished = () => {} }) => {
  const [show, setShow] = useState(false);
  const [sparks, setSparks] = useState([]);
  const endedRef = useRef(false);
  const timeoutsRef = useRef([]);
  const onFinishedRef = useRef(onFinished);

  useEffect(() => { onFinishedRef.current = onFinished; }, [onFinished]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 480;

    if (playOnce) {
      const played = sessionStorage.getItem('introPlayed');
      if (played) return;
      sessionStorage.setItem('introPlayed', '1');
    }

    setShow(true);

    const end = () => {
      if (endedRef.current) return;
      endedRef.current = true;
      try { onFinishedRef.current(); } catch {}
      setShow(false);
    };

    // Schedule end of overlay and failsafe
    timeoutsRef.current.push(setTimeout(end, durationMs));
    timeoutsRef.current.push(setTimeout(end, durationMs + 1500));

    // Timed pulses (sparks from a single source with pulsing motion)
    const lastPulseDelay = Math.max(0, durationMs - 560);
    const pulseOffsets = isMobile
      ? [900, 1800, lastPulseDelay]
      : [700, 1400, 2100, lastPulseDelay];

    pulseOffsets.forEach((offset, pulseIndex) => {
      const id = setTimeout(() => {
        const count = (pulseIndex === pulseOffsets.length - 1 ? 18 : 10) + Math.floor(Math.random() * 4);
        const newSparks = Array.from({ length: count }).map((_, i) => {
          const angle = Math.random() * Math.PI * 2;
          const distance = 140 + Math.random() * 160; // px outward
          const wobble = (Math.random() - 0.5) * 20;
          return {
            id: `${offset}-${i}-${Math.random()}`,
            size: 2 + Math.random() * 3,
            color: ['#ff6b35', '#ff8c42', '#ffa726', '#ffcc02'][Math.floor(Math.random() * 4)],
            dx: Math.cos(angle) * (distance + wobble),
            dy: Math.sin(angle) * (distance + wobble),
            pulse: pulseIndex,
          };
        });
        setSparks((prev) => [...prev, ...newSparks].slice(-160));

        // Clear this pulse's sparks shortly after
        timeoutsRef.current.push(setTimeout(() => {
          setSparks((prev) => prev.filter((s) => s.pulse !== pulseIndex));
        }, 800));
      }, offset);
      timeoutsRef.current.push(id);
    });

    return () => {
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, [durationMs, playOnce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-forge"
          className="intro-forge-overlay"
          style={{ pointerEvents: 'none' }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Center-out reveal gradient: transparent center expands to reveal content */}
          <motion.div
            className="intro-reveal"
            initial={{ ['--reveal-radius']: '0%' }}
            animate={{ ['--reveal-radius']: '120%' }}
            transition={{ duration: durationMs / 1000, ease: 'easeInOut' }}
          />

          {/* Pulsing sparks from single source (center) */}
          <div className="intro-sparks">
            <AnimatePresence>
              {sparks.map((s) => (
                <motion.span
                  key={s.id}
                  className="intro-spark"
                  style={{ left: '50%', top: '50%', backgroundColor: s.color, width: s.size, height: s.size }}
                  initial={{ opacity: 0.95, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0.95, 0.85, 0.9, 0.6, 0],
                    scale: [0.6, 1.2, 0.95, 0.8, 0.4],
                    x: [0, s.dx * 0.7, s.dx],
                    y: [0, s.dy * 0.7, s.dy]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />)
              )}
            </AnimatePresence>
          </div>

          {/* Backup curtain to ensure overlay goes away */}
          <motion.div
            className="intro-curtain"
            initial={{ y: 0 }}
            animate={{ y: '-110%' }}
            transition={{ duration: 0.6, delay: (durationMs - 600) / 1000, ease: 'easeIn' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroForge;


