import React, { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'welcome'
  const [wordStage, setWordStage] = useState(0);
  const [isExit, setIsExit] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  // Stage 1: Progress Counter (0% -> 100%)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('welcome'), 400); // Transition to Welcome Phase
          return 100;
        }
        return prev + 2;
      });
    }, 45); // Smooth ~2.2s counter speed

    return () => clearInterval(interval);
  }, []);

  // Stage 2: Staggered Word Reveal when in 'welcome' phase
  useEffect(() => {
    if (phase === 'welcome') {
      const t1 = setTimeout(() => setWordStage(1), 200);  // Top Icons
      const t2 = setTimeout(() => setWordStage(2), 600);  // "Welcome"
      const t3 = setTimeout(() => setWordStage(3), 1000); // "to my"
      const t4 = setTimeout(() => setWordStage(4), 1400); // "Portfolio"
      const t5 = setTimeout(() => setWordStage(5), 1800); // "Website"
      const t6 = setTimeout(() => setWordStage(6), 2200); // Domain Pill
      const tExit = setTimeout(() => setIsExit(true), 3600); // Start Exit Fade
      const tUnmount = setTimeout(() => setIsUnmounted(true), 4800); // Unmount

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(t5);
        clearTimeout(t6);
        clearTimeout(tExit);
        clearTimeout(tUnmount);
      };
    }
  }, [phase]);

  if (isUnmounted) return null;

  return (
    <div className={`${styles.preloaderWrapper} ${isExit ? styles.exitFade : ''}`} aria-hidden="true">
      <div className={styles.centerContainer}>
        {/* Stage 1 View: Progress Bar & Counter */}
        {phase === 'loading' && (
          <div className={styles.loadingBox}>
            <h1 className={styles.brandLogo}>
              ZHY<span className={styles.brandDot}>.</span>
            </h1>

            <p className={styles.subTitle}>FRONTEND DEVELOPER & UI/UX DESIGNER</p>

            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: `${progress}%` }} />
            </div>

            <div className={styles.footerMeta}>
              <span>{progress < 100 ? 'Initializing System...' : 'System Ready ✓'}</span>
              <span className={styles.counter}>{progress}%</span>
            </div>
          </div>
        )}

        {/* Stage 2 View: Welcome Icons, Words & Domain Pill */}
        {phase === 'welcome' && (
          <div className={styles.welcomeBox}>
            {/* Top 3 Circular Icon Badges */}
            <div className={`${styles.iconsRow} ${wordStage >= 1 ? styles.show : ''}`}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" className={styles.svgIcon}>
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" className={styles.svgIcon}>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" className={styles.svgIcon}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                </svg>
              </div>
            </div>

            {/* Word-by-Word Mixed Direction Animated Text */}
            <div className={styles.headingGrid}>
              <div className={styles.wordRow}>
                <span className={`${styles.word} ${styles.fromLeft} ${wordStage >= 2 ? styles.showWord : ''}`}>
                  Welcome
                </span>
                <span className={`${styles.word} ${styles.fromRight} ${wordStage >= 3 ? styles.showWord : ''}`}>
                  to my
                </span>
              </div>

              <div className={styles.wordRow}>
                <span className={`${styles.word} ${styles.fromBottom} ${wordStage >= 4 ? styles.showWord : ''}`}>
                  Portfolio
                </span>
                <span className={`${styles.word} ${styles.fromLeft} ${wordStage >= 5 ? styles.showWord : ''}`}>
                  Website
                </span>
              </div>
            </div>

            {/* Bottom Domain / Name Pill Badge */}
            <div className={`${styles.domainPill} ${wordStage >= 6 ? styles.showPill : ''}`}>
              <span>ZHY • Ailex Denzel Estrada</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}