import React, { useEffect, useRef } from 'react';

const LoadingHammer = ({
  size = 140,
  text = 'Forging Data into Shape...',
  showText = true
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = size;
    canvas.height = size;

    // Scale hammer position based on canvas size
    const scale = size / 140;
    const hammerX = 130 * scale;
    const hammerY = 65 * scale;

    // Enhanced geometry with handle as pivot point (scaled)
    const pivot = { x: hammerX, y: hammerY };
    const head = { w: 45 * scale, h: 14 * scale };
    const handle = { w: 5 * scale, h: 50 * scale };

    // FIXED ANVIL POSITION - scaled
    const anvil = {
      x: canvas.width/2 - 35 * scale,
      y: canvas.height/2 + 20 * scale,
      w: 70 * scale,
      h: 10 * scale,
      legW: 10 * scale,
      legH: 15 * scale,
      baseW: 80 * scale,
      baseH: 6 * scale
    };

    // Timing
    const swingTime = 400;
    const impactHold = 30;
    const returnTime = 350;
    const restHold = 150;

    // Effects
    let sparks = [];
    let shockwaves = [];
    let glowIntensity = 0;

    // Easing functions
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function easeOutElastic(t) {
      const c4 = (2 * Math.PI) / 3;
      return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    }

    // Animation state
    let phase = 0;
    let tAccum = 0;

    // Enhanced roundRect for older browsers
    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        this.beginPath();
        this.moveTo(x + r, y);
        this.arcTo(x + w, y, x + w, y + h, r);
        this.arcTo(x + w, y + h, x, y + h, r);
        this.arcTo(x, y + h, x, y, r);
        this.arcTo(x, y, x + w, y, r);
        this.closePath();
        return this;
      };
    }

    function loop(dt) {
      tAccum += dt;

      // Phase transitions
      if (phase === 0 && tAccum >= swingTime) {
        tAccum = 0; phase = 1;
        createImpactEffects();
      } else if (phase === 1 && tAccum >= impactHold) {
        tAccum = 0; phase = 2;
      } else if (phase === 2 && tAccum >= returnTime) {
        tAccum = 0; phase = 3;
      } else if (phase === 3 && tAccum >= restHold) {
        tAccum = 0; phase = 0;
        sparks = [];
        shockwaves = [];
      }

      // Calculate hammer angle for 90-degree impact
      let angle = 0;
      if (phase === 0) {
        const p = easeInOutCubic(Math.min(tAccum / swingTime, 1));
        angle = p * (Math.PI / 2);
      } else if (phase === 1) {
        angle = Math.PI / 2;
        glowIntensity = 1;
      } else if (phase === 2) {
        const p = easeOutElastic(Math.min(tAccum / returnTime, 1));
        angle = (1 - p) * (Math.PI / 2);
        glowIntensity = Math.max(0, 1 - (tAccum / returnTime));
      } else {
        glowIntensity = 0;
      }

      updateEffects(dt);
      draw(angle);

      animationRef.current = requestAnimationFrame((t) => {
        const now = performance.now();
        loop(now - (canvas._lastTime || now));
        canvas._lastTime = now;
      });
    }

    function draw(angle) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw shockwaves
      shockwaves.forEach(wave => {
        const alpha = wave.life / wave.maxLife;
        ctx.globalAlpha = alpha * 0.3;
        ctx.strokeStyle = `hsl(45, 100%, ${60 + alpha * 20}%)`;
        ctx.lineWidth = 3 * scale;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;

      drawAnvil();
      drawHammer(angle);
      drawSparks();
    }

    function drawAnvil() {
      if (!ctx || !canvas) return;
      const gradient = ctx.createLinearGradient(anvil.x, anvil.y, anvil.x, anvil.y + anvil.h + anvil.legH);
      gradient.addColorStop(0, '#4a5568');
      gradient.addColorStop(0.5, '#2d3748');
      gradient.addColorStop(1, '#1a202c');

      ctx.fillStyle = gradient;

      // Main body
      ctx.beginPath();
      ctx.roundRect(anvil.x, anvil.y, anvil.w, anvil.h, 4 * scale);
      ctx.fill();

      // Legs
      ctx.beginPath();
      ctx.roundRect(anvil.x + 5 * scale, anvil.y + anvil.h, anvil.legW, anvil.legH, 2 * scale);
      ctx.fill();

      ctx.beginPath();
      ctx.roundRect(anvil.x + anvil.w - anvil.legW - 5 * scale, anvil.y + anvil.h, anvil.legW, anvil.legH, 2 * scale);
      ctx.fill();

      // Base platform
      ctx.fillStyle = '#1a202c';
      ctx.beginPath();
      ctx.roundRect(anvil.x - 5 * scale, anvil.y + anvil.h + anvil.legH, anvil.baseW, anvil.baseH, 3 * scale);
      ctx.fill();

      // Impact glow effect
      if (glowIntensity > 0) {
        ctx.globalAlpha = glowIntensity * 0.6;
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.roundRect(anvil.x - 2 * scale, anvil.y - 2 * scale, anvil.w + 4 * scale, anvil.h + 4 * scale, 6 * scale);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function drawHammer(angle) {
      if (!ctx || !canvas) return;
      ctx.save();
      ctx.translate(pivot.x, pivot.y);
      ctx.rotate(angle + Math.PI/2);

      // Handle with wood-like gradient
      const handleGradient = ctx.createLinearGradient(-handle.w/2, 0, handle.w/2, handle.h);
      handleGradient.addColorStop(0, '#8b4513');
      handleGradient.addColorStop(0.5, '#a0522d');
      handleGradient.addColorStop(1, '#654321');

      ctx.fillStyle = handleGradient;
      ctx.beginPath();
      ctx.roundRect(-handle.w/2, 0, handle.w, handle.h, handle.w/2);
      ctx.fill();

      // Handle grip lines
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.lineWidth = 1 * scale;
      for (let i = 8 * scale; i < handle.h; i += 6 * scale) {
        ctx.beginPath();
        ctx.moveTo(-handle.w/2 + 1 * scale, i);
        ctx.lineTo(handle.w/2 - 1 * scale, i);
        ctx.stroke();
      }

      // Hammer head with metallic gradient
      const headGradient = ctx.createLinearGradient(-head.w/2, handle.h, head.w/2, handle.h + head.h);
      headGradient.addColorStop(0, '#718096');
      headGradient.addColorStop(0.5, '#4a5568');
      headGradient.addColorStop(1, '#2d3748');

      ctx.fillStyle = headGradient;
      ctx.beginPath();
      ctx.roundRect(-head.w/2, handle.h, head.w, head.h, 3 * scale);
      ctx.fill();

      // Head highlight
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.beginPath();
      ctx.roundRect(-head.w/2 + 2 * scale, handle.h + 2 * scale, head.w - 4 * scale, 3 * scale, 1 * scale);
      ctx.fill();

      ctx.restore();
    }

    function drawSparks() {
      if (!ctx || !canvas) return;
      sparks.forEach(spark => {
        const alpha = spark.life / spark.maxLife;
        const sparkSize = spark.size * alpha;

        ctx.globalAlpha = alpha;

        const sparkGradient = ctx.createRadialGradient(
          spark.x, spark.y, 0,
          spark.x, spark.y, sparkSize
        );
        sparkGradient.addColorStop(0, spark.color);
        sparkGradient.addColorStop(1, 'transparent');

        ctx.fillStyle = sparkGradient;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, sparkSize, 0, Math.PI * 2);
        ctx.fill();

        // Spark trail
        if (spark.trail.length > 1) {
          ctx.strokeStyle = spark.color;
          ctx.lineWidth = 2 * alpha * scale;
          ctx.beginPath();
          ctx.moveTo(spark.trail[0].x, spark.trail[0].y);
          for (let i = 1; i < spark.trail.length; i++) {
            ctx.lineTo(spark.trail[i].x, spark.trail[i].y);
          }
          ctx.stroke();
        }
      });
      ctx.globalAlpha = 1;
    }

    function createImpactEffects() {
      const totalAngle = Math.PI / 2 + Math.PI/2;
      const hitPoint = {
        x: anvil.x + anvil.w/2,
        y: anvil.y
      };

      // Create sparks
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 0.8) + (Math.random() * Math.PI * 0.4);
        const speed = (2 + Math.random() * 3) * scale;
        const colors = ['#ffd700', '#ffaa00', '#ff6b35', '#ff4757'];

        sparks.push({
          x: hitPoint.x + (Math.random() - 0.5) * 20 * scale,
          y: hitPoint.y + (Math.random() - 0.5) * 10 * scale,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 400 + Math.random() * 300,
          maxLife: 400 + Math.random() * 300,
          size: (3 + Math.random() * 4) * scale,
          color: colors[Math.floor(Math.random() * colors.length)],
          trail: []
        });
      }

      // Create shockwave
      shockwaves.push({
        x: hitPoint.x,
        y: hitPoint.y,
        radius: 0,
        life: 300,
        maxLife: 300
      });
    }

    function updateEffects(dt) {
      // Update sparks
      sparks = sparks.filter(spark => {
        spark.life -= dt;
        spark.trail.push({ x: spark.x, y: spark.y });
        if (spark.trail.length > 6) spark.trail.shift();

        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vy += 0.1 * scale; // gravity
        spark.vx *= 0.995; // air resistance

        return spark.life > 0;
      });

      // Update shockwaves
      shockwaves = shockwaves.filter(wave => {
        wave.life -= dt;
        wave.radius += dt * 0.2 * scale;
        return wave.life > 0;
      });
    }

    // Start animation
    animationRef.current = requestAnimationFrame((t) => {
      canvas._lastTime = t;
      loop(0);
    });

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [size]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  const textStyle = {
    color: '#cccccc',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: 'var(--font-family)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  return (
    <div style={containerStyle}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block' }}
      />
      {showText && text && (
        <span style={textStyle}>{text}</span>
      )}
    </div>
  );
};

export default LoadingHammer;
