import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ParticleEffect = ({ trigger, position = { x: 0, y: 0 } }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (trigger) {
      // Create particles
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: position.x,
        y: position.y,
        angle: (i * 30) + Math.random() * 20,
        distance: 60 + Math.random() * 40,
        size: 3 + Math.random() * 4,
        color: ['#ff6b35', '#ff8c42', '#ffa726', '#ffcc02'][Math.floor(Math.random() * 4)]
      }));
      
      setParticles(newParticles);
      
      // Clear particles after animation
      setTimeout(() => {
        setParticles([]);
      }, 800);
    }
  }, [trigger, position]);

  return (
    <AnimatePresence>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            position: 'fixed',
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1000,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 0,
          }}
          animate={{
            x: Math.cos(particle.angle * Math.PI / 180) * particle.distance,
            y: Math.sin(particle.angle * Math.PI / 180) * particle.distance,
            opacity: [1, 0.8, 0.4, 0],
            scale: [0, 1, 1.2, 0],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      ))}
    </AnimatePresence>
  );
};

export default ParticleEffect;
