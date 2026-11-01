import React, { useState, memo } from 'react';
import styles from './FocusCards.module.css';

export const Card = memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={`${styles.card} ${
      hovered !== null && hovered !== index ? styles.blurred : ''
    }`}
  >
    <img
      src={card.src}
      alt={card.title}
      className={styles.image}
      loading="lazy"
    />
    <div
      className={`${styles.overlay} ${
        hovered === index ? styles.overlayVisible : ''
      }`}
    >
      <div className={styles.title}>{card.title}</div>
    </div>
  </div>
));

Card.displayName = 'FocusCard';

export function FocusCards({ cards = [] }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <Card
          key={card.title + index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

export default FocusCards;