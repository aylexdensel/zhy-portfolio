import React, { useRef, useEffect, useState } from 'react';
import styles from './Reveal.module.css';

export function Reveal({ 
  children, 
  direction = 'up', // 'up' | 'left' | 'fade'
  delay = 0,        // delay in ms
  className = '',
  width = '100%' 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Continuous triggering: sets visible true when in view, false when out
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12, // Triggers when 12% of element is in viewport
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const directionClass = styles[direction] || styles.up;
  const visibleClass = isVisible ? styles.visible : '';

  return (
    <div
      ref={ref}
      className={`${styles.revealContainer} ${directionClass} ${visibleClass} ${className}`.trim()}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        width: width
      }}
    >
      {children}
    </div>
  );
}