import React from 'react';
import styles from './FlipCard.module.css';

export function FlipCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Front Side */}
        <div className={styles.front}>
          <p className={styles.heading}>Front card</p>
          <span className={styles.subtext}>Follow Me For More</span>
          <div className={styles.hintPill}>Hover to Flip ↻</div>
        </div>

        {/* Back Side */}
        <div className={styles.back}>
          <p className={styles.heading}>Back card</p>
          <span className={styles.subtext}>Follow Me For More</span>
          <div className={styles.hintPill}>3D Inverted View ✓</div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;