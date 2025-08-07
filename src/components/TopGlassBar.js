import React, { useEffect, useRef, useState } from 'react';
import { Hammer } from 'lucide-react';

const TopGlassBar = () => {
  const lastYRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || 0;
      const goingUp = currentY < lastYRef.current;
      const pastThreshold = currentY > 60;
      setIsVisible(goingUp && pastThreshold);
      lastYRef.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`top-glassbar ${isVisible ? 'show' : ''}`}>
      <div className="brand">
        <span className="w-6 h-6 forge rounded-md flex items-center justify-center">
          <Hammer className="w-3.5 h-3.5 text-accent-color" />
        </span>
        <span>Data Forge</span>
      </div>
    </div>
  );
};

export default TopGlassBar;


