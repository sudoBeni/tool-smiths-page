import { useEffect, useRef } from 'react';

// Lightweight spark particle field optimized for mobile
const SparkField = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvasRef.current = canvas;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const container = document.body;
    Object.assign(canvas.style, {
      position: 'fixed',
      inset: '0',
      pointerEvents: 'none',
      zIndex: 1,
    });
    container.appendChild(canvas);

    const spawn = (count = 4) => {
      const now = Date.now();
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * 120 + canvas.height * 0.15;
        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -0.8 - Math.random() * 0.8,
          life: 900 + Math.random() * 600,
          born: now,
          size: 1 + Math.random() * 1.2,
          hue: 35 + Math.random() * 20,
        });
      }
      // Cap particles
      if (particlesRef.current.length > 90) {
        particlesRef.current.splice(0, particlesRef.current.length - 90);
      }
    };

    const onScroll = () => {
      const curr = window.scrollY || 0;
      const delta = Math.min(60, Math.abs(curr - lastScrollYRef.current));
      if (delta > 8) spawn(5);
      else spawn(2);
      lastScrollYRef.current = curr;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const step = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
      particlesRef.current = particlesRef.current.filter((p) => {
        const t = now - p.born;
        if (t > p.life) return false;
        const alpha = 1 - t / p.life;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.995;
        p.vy *= 0.997;
        ctx.globalAlpha = alpha * 0.6;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        grad.addColorStop(0, `hsla(${p.hue}, 100%, 60%, 1)`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    // initial
    spawn(20);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return null;
};

export default SparkField;


