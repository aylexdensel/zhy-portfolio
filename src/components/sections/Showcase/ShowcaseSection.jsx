import React from 'react';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { Reveal } from '../../ui/Reveal/Reveal';
import { ButtonShowcase } from '../../showcase/ButtonShowcase/ButtonShowcase';
import styles from './ShowcaseSection.module.css';

export function ShowcaseSection() {
  return (
    <section id="showcase" className={styles.showcaseSection} aria-label="Components Catalog Showcase">
      <div className={`container ${styles.showcaseContainer}`}>
        {/* Top Catalog Section Header */}
        <Reveal direction="left" delay={100}>
          <div className={styles.catalogHeader}>
            <span className={styles.catalogTag}>COMPONENTS CATALOG</span>
            <SectionHeading
              number="04 / SHOWCASE"
              title="UI/UX & Frontend Laboratory"
              subtitle="A curated catalog of interactive component experiences demonstrating state management, accessibility, micro-interactions, and design systems."
            />
          </div>
        </Reveal>

        {/* 4 Long Horizontal Row Cards */}
        <div className={styles.catalogGrid}>
          {/* HORIZONTAL ROW 1: BUTTON DESIGN SYSTEM (9 Interactive Buttons across 3 Vertical Cards) */}
          <Reveal direction="up" delay={200}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>1. Interactive Button Systems</h3>
                  <p className={styles.rowSubtitle}>
                    A catalog of 9 distinct button micro-interactions, gradient borders, 3D brutalist pop, and state animations.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              {/* 3 Vertical Cards holding 3 buttons each (9 buttons total) */}
              <ButtonShowcase />
            </div>
          </Reveal>

          {/* HORIZONTAL ROW 2: FORM & SECURITY EXPERIENCES */}
          <Reveal direction="up" delay={250}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>2. Form & Security Experiences</h3>
                  <p className={styles.rowSubtitle}>
                    Input validation, password visibility toggles, real-time error handling, and multi-field step flows.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <div className={styles.placeholderRowContent}>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>🔐</span>
                  <strong>Auth Validation</strong>
                  <small>Real-time email regex & password security check</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>👁️</span>
                  <strong>Password Toggle</strong>
                  <small>Accessible visibility toggle & strength meter</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>📋</span>
                  <strong>Multi-Step Form</strong>
                  <small>Step-by-step state preservation & blur validation</small>
                </div>
              </div>
            </div>
          </Reveal>

          {/* HORIZONTAL ROW 3: CARD COMPONENTS & LAYOUTS */}
          <Reveal direction="up" delay={300}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>3. Card Components & Information Hierarchy</h3>
                  <p className={styles.rowSubtitle}>
                    Modular card composition across profile, project, product, and data-dense informational structures.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <div className={styles.placeholderRowContent}>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>👤</span>
                  <strong>Profile Cards</strong>
                  <small>Compact user identity & social connectivity</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>📦</span>
                  <strong>Product Cards</strong>
                  <small>E-commerce hierarchy & action triggers</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>📄</span>
                  <strong>Content Cards</strong>
                  <small>Article previews & metadata tagging</small>
                </div>
              </div>
            </div>
          </Reveal>

          {/* HORIZONTAL ROW 4: DASHBOARD INTERFACES */}
          <Reveal direction="up" delay={350}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>4. Integrated Dashboard Interfaces</h3>
                  <p className={styles.rowSubtitle}>
                    High-density data visualization, search filters, summary stats, and interactive empty states.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <div className={styles.placeholderRowContent}>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>📊</span>
                  <strong>Summary Stats</strong>
                  <small>Data metric indicators & trend badges</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>🔍</span>
                  <strong>Live Search Filters</strong>
                  <small>Instant client-side filter & query handling</small>
                </div>
                <div className={styles.placeholderCard}>
                  <span className={styles.placeholderIcon}>⚙️</span>
                  <strong>System Settings</strong>
                  <small>Toggle controls, sliders & preference states</small>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;