import React from 'react';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { SkillKeyboard } from './SkillKeyboard';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section id="skills" className={styles.skillsSection} aria-label="Skills and Capabilities">
      <div className="container">
        <SectionHeading
          number="02 / SKILLS"
          title="Interactive Tech Stack"
          subtitle="Explore my core development toolkit across frontend design, backend systems, databases, and workflow tools."
          centered={true}
        />

        <div className={styles.keyboardContainer}>
          <SkillKeyboard />
        </div>
      </div>
    </section>
  );
}