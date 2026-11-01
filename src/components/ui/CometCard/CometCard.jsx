import React, { useRef, useState } from 'react';
import styles from './CometCard.module.css';

export function CometCard() {
  const cardRef = useRef(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRot({ x: -y * 14, y: x * 14 });
  };

  return (
    <div className={styles.cometWrapper}>
      {/* 3D Tilt Card Shell */}
      <div
        ref={cardRef}
        className={styles.cardContainer}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setRot({ x: 0, y: 0 });
        }}
        style={{
          transform: isHovered
            ? `perspective(800px) rotateX(${rot.x}deg) rotateY(${rot.y}deg) scale(1.02)`
            : 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
        }}
      >
        {/* Sweeping Radiant Comet Beam Border */}
        <div className={styles.cometBeam} aria-hidden="true" />

        {/* Inner Card Content */}
        <div className={styles.innerCard}>
          <div className={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=800&auto=format&fit=crop"
              alt="Cosmic Invite Background"
              className={styles.image}
              loading="lazy"
            />
          </div>

          {/* Mono Meta Footer */}
          <div className={styles.footerRow}>
            <span className={styles.label}>Comet Invitation</span>
            <span className={styles.code}>#F7RA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CometCard;