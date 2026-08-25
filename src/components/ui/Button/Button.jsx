import React from 'react';
import styles from './Button.module.css';

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  download, 
  external, 
  type = 'button',
  className = '' 
}) {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        onClick={onClick}
        download={download}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}