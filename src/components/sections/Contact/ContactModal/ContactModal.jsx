import React, { useState, useEffect } from 'react';
import { Button } from '../../../ui/Button/Button';
import styles from './ContactModal.module.css';

export function ContactModal({ data, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!data) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(data.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className={styles.iconWrapper}>
          <svg className={styles.svgVector} viewBox="0 0 24 24" fill="#ea4335">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08C21.691 2.279 24 3.434 24 5.457z"/>
          </svg>
        </div>

        <div className={styles.headerBlock}>
          <span className={styles.subtag}>{data.type}</span>
          <h3 className={styles.title}>{data.title}</h3>
        </div>

        <div className={styles.valueDisplay}>{data.value}</div>

        {copied && (
          <div className={styles.copiedBadge}>
            ✓ Copied to clipboard!
          </div>
        )}

        <div className={styles.actionsGroup}>
          <Button onClick={handleCopy} variant="primary" style={{ width: '100%' }}>
            {copied ? '✓ Copied!' : 'Copy to Clipboard 📋'}
          </Button>

          {data.gmailUrl && (
            <Button href={data.gmailUrl} variant="secondary" style={{ width: '100%' }} external>
              Open in Gmail Web ✉️
            </Button>
          )}

          {data.mailtoUrl && (
            <Button href={data.mailtoUrl} variant="outline" style={{ width: '100%' }}>
              Open Mail App 📬
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}