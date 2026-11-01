import React from 'react';
import { Reveal } from '../../ui/Reveal/Reveal';
import { Shuffle } from '../../ui/Shuffle/Shuffle';
import { TextType } from '../../ui/TextType/TextType';
import { SkillKeyboard } from './SkillKeyboard';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section id="skills" className={styles.skillsSection} aria-label="Skills and Capabilities">
      <div className="container">
        
        {/* Section Header with Pixel Shuffle Title & Typewriter Subtitle */}
        <Reveal direction="left" delay={100}>
          <div className={styles.headingWrapper}>
            <span className={styles.numberTag}>02 / SKILLS</span>
            
            <h2 className={styles.title}>
              <Shuffle
                text="Interactive Tech Stack"
                className={styles.skillsShuffleTitle}
                shuffleDirection="right"
                duration={0.35}
                stagger={0.02}
                animationMode="evenodd"
                loop={false}
                triggerOnHover={true}
                textAlign="center"
              />
            </h2>

            <TextType
              text="Explore my core development toolkit across frontend design, backend systems, databases, and workflow tools."
              typingSpeed={16}
              initialDelay={300}
              loop={false}
              showCursor={true}
              cursorCharacter="▍"
              className={styles.subtitle}
            />
          </div>
        </Reveal>

        {/* 3D Isometric Skill Keyboard (100% Preserved) */}
        <Reveal direction="up" delay={200}>
          <div className={styles.keyboardContainer}>
            <SkillKeyboard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;