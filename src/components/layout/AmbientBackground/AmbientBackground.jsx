import React from 'react';
import styles from './AmbientBackground.module.css';

export function AmbientBackground() {
  return (
    <div className={styles.ambientWrapper} aria-hidden="true">
      <div className={styles.gridPattern} />
      <div className={styles.orbTopLeft} />
      <div className={styles.orbTopRight} />
      <div className={styles.orbBottomLeft} />
      <div className={styles.orbBottomRight} />
    </div>
  );
}