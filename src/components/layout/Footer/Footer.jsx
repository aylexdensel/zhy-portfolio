import React from 'react';
import { socialLinks } from '../../../data/socialLinks';
import { smoothScrollTo, SCROLL_DURATION } from '../../../utils/scrollUtils';
import styles from './Footer.module.css';

export function Footer() {
  const scrollToTop = () => {
    smoothScrollTo(0, SCROLL_DURATION);
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandInfo}>
          <span className={styles.logo}>ZHY.</span>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ZHY (Ailex Denzel Estrada). All rights reserved.
          </p>
        </div>

        <div className={styles.linksGroup}>
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.external ? '_blank' : '_self'}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={styles.socialLink}
            >
              {item.label}
            </a>
          ))}
          <button onClick={scrollToTop} className={styles.backToTopBtn} aria-label="Back to top of page">
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}