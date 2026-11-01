import React, { useEffect, useRef } from 'react';
import './DottedGlowBackground.css';

export function DottedGlowBackground({
  className = '',
  gap = 14,
  radius = 1.6,
  color = 'rgba(255, 255, 255, 0.12)',
  darkColor = 'rgba(255, 255, 255, 0.12)',
  glowColor = 'rgba(168, 85, 247, 0.85)',
  darkGlowColor = 'rgba(168, 85, 247, 0.85)',
  colorLightVar,
  colorDarkVar,
  glowColorLightVar,
  glowColorDarkVar,
  opacity = 1,
  backgroundOpacity = 0,
  speedMin = 0.3,
  speedMax = 1.4,
  speedScale = 1,
  style = {}
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const isVisibleRef = useRef(true);

  const resolveColor = (explicitColor, varName, fallback) => {
    if (varName && typeof window !== 'undefined') {
      const computed = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      if (computed) return computed;
    }
    return explicitColor || fallback;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initDots = (width, height) => {
      const cols = Math.ceil(width / gap);
      const rows = Math.ceil(height / gap);
      const dots = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * gap + gap / 2;
          const y = r * gap + gap / 2;
          const speed = speedMin + Math.random() * (speedMax - speedMin);
          const phase = Math.random() * Math.PI * 2;
          dots.push({ x, y, speed, phase });
        }
      }
      dotsRef.current = dots;
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = rect.width;
      const height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initDots(width, height);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';
    const dotColor = isDarkMode 
      ? resolveColor(darkColor, colorDarkVar, 'rgba(255, 255, 255, 0.12)')
      : resolveColor(color, colorLightVar, 'rgba(0, 0, 0, 0.15)');

    const dotGlow = isDarkMode
      ? resolveColor(darkGlowColor, glowColorDarkVar, 'rgba(168, 85, 247, 0.85)')
      : resolveColor(glowColor, glowColorLightVar, 'rgba(168, 85, 247, 0.7)');

    const draw = (now) => {
      if (!isVisibleRef.current || prefersReducedMotion) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      if (lastTimeRef.current === null) lastTimeRef.current = now;
      const dt = Math.min(0.05, (now - lastTimeRef.current) / 1000);
      lastTimeRef.current = now;

      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      if (backgroundOpacity > 0) {
        ctx.fillStyle = `rgba(0, 0, 0, ${backgroundOpacity})`;
        ctx.fillRect(0, 0, rect.width, rect.height);
      }

      const dots = dotsRef.current;
      const len = dots.length;

      for (let i = 0; i < len; i++) {
        const dot = dots[i];
        dot.phase += dot.speed * dt * speedScale;

        const intensity = (Math.sin(dot.phase) + 1) / 2;
        const isGlow = intensity > 0.75;

        if (isGlow) {
          ctx.fillStyle = dotGlow;
          ctx.globalAlpha = Math.min(1, opacity * (0.5 + intensity * 0.5));
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, radius * 1.35, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = dotColor;
          ctx.globalAlpha = opacity * (0.2 + intensity * 0.35);
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    if (!prefersReducedMotion) {
      rafRef.current = requestAnimationFrame(draw);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      observer.disconnect();
    };
  }, [
    gap,
    radius,
    color,
    darkColor,
    glowColor,
    darkGlowColor,
    colorLightVar,
    colorDarkVar,
    glowColorLightVar,
    glowColorDarkVar,
    opacity,
    backgroundOpacity,
    speedMin,
    speedMax,
    speedScale
  ]);

  return (
    <div
      ref={containerRef}
      className={`dotted-glow-bg-wrapper ${className}`.trim()}
      style={style}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="dotted-glow-canvas" />
    </div>
  );
}

export default DottedGlowBackground;