import React, { useRef, useState } from 'react';
import styles from './ThreeDCard.module.css';

export function ThreeDCard() {
  const cardRef = useRef(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRot({ x: -y * 22, y: x * 22 });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRot({ x: 0, y: 0 });
  };

  return (
    <div className={styles.container}>
      <div
        ref={cardRef}
        className={styles.cardBody}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
          transition: isHovered ? 'transform 100ms ease-out' : 'transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        {/* Floating Title Layer */}
        <h4
          className={styles.title}
          style={{ transform: isHovered ? 'translateZ(45px)' : 'translateZ(0)' }}
        >
          Make things float in air
        </h4>

        {/* Floating Subtext Layer */}
        <p
          className={styles.subtext}
          style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)' }}
        >
          Hover over this card to unleash the power of CSS perspective
        </p>

        {/* 3D Elevated Image Layer */}
        <div
          className={styles.imageWrapper}
          style={{
            transform: isHovered
              ? 'translateZ(75px) rotateX(12deg) rotateZ(-6deg)'
              : 'translateZ(0) rotateX(0deg) rotateZ(0deg)'
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop"
            alt="Forest depth thumbnail"
            className={styles.image}
            loading="lazy"
          />
        </div>

        {/* Bottom 3D Actions Bar */}
        <div className={styles.actionsBar}>
          <button
            type="button"
            className={styles.textBtn}
            style={{ transform: isHovered ? 'translateZ(35px) translateX(-6px)' : 'translateZ(0)' }}
          >
            Try now →
          </button>
          <button
            type="button"
            className={styles.ctaBtn}
            style={{ transform: isHovered ? 'translateZ(35px) translateX(6px)' : 'translateZ(0)' }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThreeDCard;