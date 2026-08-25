import React from 'react';
import styles from './PortraitComposition.module.css';

export function PortraitComposition({ photoUrl }) {
  return (
    <div className={styles.portraitContainer}>
      <div className={styles.frameRing} aria-hidden="true" />
      <div className={styles.avatarWrapper}>
        {photoUrl ? (
          <img 
            src={photoUrl} 
            alt="Ailex Denzel Estrada portrait" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.target.style.display = 'none';
              if (e.target.nextSibling) {
                e.target.nextSibling.style.display = 'flex';
              }
            }}
          />
        ) : null}
        <div className={styles.placeholderAvatar} style={{ display: 'none' }}>
          <span className={styles.placeholderIcon}>👤</span>
          <small>Portrait Photo</small>
        </div>
      </div>
    </div>
  );
}