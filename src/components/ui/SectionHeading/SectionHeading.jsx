import React from 'react';
import styles from './SectionHeading.module.css';

export function SectionHeading({ number, title, subtitle, centered = false }) {
  return (
    <div className={`${styles.headingWrapper} ${centered ? styles.centered : ''}`}>
      {number && <span className={styles.numberTag}>{number}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}