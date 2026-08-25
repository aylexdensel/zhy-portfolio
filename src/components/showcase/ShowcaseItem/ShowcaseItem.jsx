import React from 'react';
import { Tag } from '../../ui/Tag/Tag';
import { Button } from '../../ui/Button/Button';
import styles from './ShowcaseItem.module.css';

export function ShowcaseItem({ item, children }) {
  return (
    <article className={styles.showcaseCard}>
      <header className={styles.cardHeader}>
        <div>
          <span className={styles.categoryTag}>{item.category}</span>
          <h3 className={styles.title}>{item.title}</h3>
        </div>
        {item.codeUrl && (
          <Button href={item.codeUrl} variant="outline" external>
            View Code ↗
          </Button>
        )}
      </header>

      <div className={styles.bodyGrid}>
        {/* Coded Interactive Demo Frame */}
        <div className={styles.previewFrame}>
          {children}
        </div>

        {/* Technical Explanation Column */}
        <div className={styles.explanationArea}>
          <div className={styles.sectionBlock}>
            <h4 className={styles.blockTitle}>Scenario / Purpose</h4>
            <p className={styles.text}>{item.description}</p>
          </div>

          <div className={styles.sectionBlock}>
            <h4 className={styles.blockTitle}>UI/UX Decisions</h4>
            <p className={styles.text}>{item.uiDecisions}</p>
          </div>

          <div className={styles.sectionBlock}>
            <h4 className={styles.blockTitle}>Frontend Concepts Demonstrated</h4>
            <div className={styles.tagsWrapper}>
              {item.concepts.map((concept) => (
                <Tag key={concept} variant="accent">{concept}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}