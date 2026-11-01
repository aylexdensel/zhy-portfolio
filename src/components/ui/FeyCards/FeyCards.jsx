import React, { useState } from 'react';
import styles from './FeyCards.module.css';

const HERO_CARDS = [
  {
    activeSrc: 'https://assets.aceternity.com/labs/1.webp',
    left: 38,
  },
  {
    activeSrc: 'https://assets.aceternity.com/labs/2.webp',
    left: 77,
  },
  {
    activeSrc: 'https://assets.aceternity.com/labs/3.webp',
    left: 115,
  },
  {
    activeSrc: 'https://assets.aceternity.com/labs/4.webp',
    left: 154,
  },
  {
    activeSrc: 'https://assets.aceternity.com/labs/5.webp',
    left: 192,
    showIdleSwap: false,
    className: styles.lastCard,
  },
];

export function FeyCards({
  shiftDistance = 72,
  swapDuration = 0.5,
  title = 'Inspired by the pros. Made for you.'
}) {  
  const [activeIndex, setActiveIndex] = useState(null);
  const isHovered = activeIndex !== null;

  return (
    <div className={styles.container}>
      <div className={styles.stage}>
        {/* Dual Layer Title with Dynamic Text Shimmer */}
        <h3 className={`${styles.headline} ${styles.solidTitle} ${isHovered ? styles.titleVisible : ''}`}>
          {title}
        </h3>
        <h3 className={`${styles.headline} ${styles.gradientTitle} ${isHovered ? styles.titleHidden : ''}`}>
          {title}
        </h3>

        {/* Card Deck Wrapper (+20% Scale: 408px Width × 480px Height) */}
        <div className={styles.deckWrapper}>
          {/* Base Anchor Card */}
          <img
            src="https://assets.aceternity.com/labs/main.webp"
            alt="Main Hero"
            className={styles.mainCard}
            loading="lazy"
          />

          {/* Interactive Layered Deck Cards */}
          {HERO_CARDS.map((card, index) => {
            const shouldShift = activeIndex !== null && index > activeIndex;
            const isActive = activeIndex === index;

            return (
              <div
                key={card.activeSrc}
                className={`${styles.cardSlot} ${card.className ?? ''}`}
                style={{
                  left: `${card.left}px`,
                  zIndex: 20 + index
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex((current) => (current === index ? null : index))}
              >
                <div
                  className={styles.cardInner}
                  style={{
                    transform: `translateX(${shouldShift ? shiftDistance : 0}px)`
                  }}
                >
                  {card.showIdleSwap !== false ? (
                    <>
                      {/* Active Preview Image */}
                      <img
                        src={card.activeSrc}
                        alt="Hero Active"
                        style={{ transitionDuration: `${swapDuration}s` }}
                        className={`${styles.cardImage} ${styles.activeImage} ${isActive ? styles.forceActive : ''}`}
                        loading="lazy"
                      />

                      {/* Idle Overlay Image */}
                      <img
                        src="https://assets.aceternity.com/labs/idle.webp"
                        alt="Hero Idle"
                        style={{ transitionDuration: `${swapDuration}s` }}
                        className={`${styles.cardImage} ${styles.idleImage} ${isActive ? styles.forceIdleHidden : ''}`}
                        loading="lazy"
                      />

                      {/* Depth Shadow Separator */}
                      <div className={styles.edgeBlurShadow} />
                    </>
                  ) : (
                    <img
                      src={card.activeSrc}
                      alt="Hero Active End"
                      style={{ transitionDuration: `${swapDuration}s` }}
                      className={styles.cardImage}
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeyCards;