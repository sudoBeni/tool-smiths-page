import { useEffect, useRef } from 'react';

// Minimal, contained particles for hero. Very low CPU/GPU.
const MiniSpark = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = Math.floor(rect.width);
      canvas.height = Math.floor(rect.height);
    };
    resize();

    const spawn = (count = 10) => {
      const now = Date.now();
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.6,
          vx: (Math.random() - 0.5) * 0.15,
          vy: -0.15 - Math.random() * 0.15,
          life: 2400 + Math.random() * 1600,
          born: now,
          size: 0.8 + Math.random() * 1.2,
          hue: 35 + Math.random() * 12
        });
      }
    };

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
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        grad.addColorStop(0, `hsla(${p.hue}, 100%, 60%, ${0.6 * alpha})`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });
      rafRef.current = requestAnimationFrame(step);
    };

    // initial
    spawn(16);
    rafRef.current = requestAnimationFrame(step);
    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', width: '100%', height: '100%' }}
      aria-hidden
    />
  );
};

export default MiniSpark;





