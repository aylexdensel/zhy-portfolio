import React from 'react';
import { ConstellationCanvas } from '../../ui/ConstellationCanvas/ConstellationCanvas';
import styles from './AmbientBackground.module.css';

export function AmbientBackground() {
  return (
    <div className={styles.ambientWrapper} aria-hidden="true">
      <div className={styles.gridPattern} />
      <div className={styles.orbTopLeft} />
      <div className={styles.orbTopRight} />
      <div className={styles.orbBottomLeft} />
      <div className={styles.orbBottomRight} />
      
      {/* 1 Single Global Constellation Canvas Layer */}
      <ConstellationCanvas
        nodeColor="#7fc4ff"
        lineColor="#7fc4ff"
        maxLinkDistance={140}
        speed={0.22}
      />
    </div>
  );
}

export default AmbientBackground;