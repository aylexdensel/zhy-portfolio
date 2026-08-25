import React from 'react';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { Tag } from '../../ui/Tag/Tag';
import styles from './Education.module.css';

export function Education() {
  return (
    <section id="education" className={styles.educationSection} aria-label="Education and Background">
      <div className="container">
        <SectionHeading
          number="04 / EDUCATION"
          title="Academic Foundation & Continuous Learning"
          subtitle="Combining formal IT degree education with active, self-directed web software development."
        />

        <div className={styles.educationGrid}>
          {/* Main Degree Card */}
          <div className={styles.degreeCard}>
            <div className={styles.degreeHeader}>
              <Tag variant="accent">Formal Degree</Tag>
              <h3 className={styles.degreeTitle}>Bachelor's Degree in Information Technology</h3>
              <p className={styles.institution}>UST Angelicum College</p>
            </div>

            <div className={styles.metaRow}>
              <span>📅 Graduated June 2026</span>
              <span>📍 Manila, Philippines</span>
            </div>

            <p className={styles.description}>
              Formally educated in information technology fundamentals, object-oriented programming, database management systems, networking, software engineering principles, and web application architecture.
            </p>
          </div>

          {/* Self-Directed Learning Card */}
          <div className={styles.selfLearningCard}>
            <h3 className={styles.cardTitle}>Self-Directed Technical Growth</h3>
            <p className={styles.description}>
              Complemented formal academic coursework with independent full-stack learning—mastering modern React component architecture, REST API design in ASP.NET Core, relational database modeling in MSSQL, and modern responsive CSS design systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}