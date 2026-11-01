import React, { useEffect, useRef } from 'react';
import styles from './ConstellationCanvas.module.css';

export function ConstellationCanvas({
  nodeColor = '#7fc4ff',
  lineColor = '#7fc4ff',
  maxLinkDistance = 140,
  speed = 0.22
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef(null);
  const nodesRef = useRef([]);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const initNodes = (w, h) => {
      const maxNodes = w < 768 ? 28 : 55;
      const nodes = [];
      for (let i = 0; i < maxNodes; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: Math.random() * 1.5 + 1.2
        });
      }
      nodesRef.current = nodes;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes(width, height);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleMouseMove = (e) => {
      pointerRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      pointerRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const maxLinkSq = maxLinkDistance * maxLinkDistance;

    const animate = () => {
      if (!isVisibleRef.current || prefersReducedMotion) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const pointer = pointerRef.current;
      const len = nodes.length;

      // 1. Draw Links
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.75;

      for (let i = 0; i < len; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < len; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxLinkSq) {
            const alpha = (1 - Math.sqrt(distSq) / maxLinkDistance) * 0.28;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // 2. Update and Draw Nodes
      const now = Date.now() * 0.001;

      for (let i = 0; i < len; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const pdx = node.x - pointer.x;
        const pdy = node.y - pointer.y;
        const pDistSq = pdx * pdx + pdy * pdy;

        if (pDistSq < 25600) {
          node.x -= pdx * 0.004;
          node.y -= pdy * 0.004;
        }

        const pulse = 0.75 + Math.sin(now + node.x * 0.05) * 0.25;

        ctx.fillStyle = nodeColor;
        ctx.globalAlpha = pulse * 0.18;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = pulse * 0.8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    if (!prefersReducedMotion) {
      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [nodeColor, lineColor, maxLinkDistance, speed]);

  return (
    <div ref={containerRef} className={styles.canvasContainer} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}

export default ConstellationCanvas;