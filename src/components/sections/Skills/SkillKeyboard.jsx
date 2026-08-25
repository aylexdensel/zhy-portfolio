import React, { useState, useEffect } from 'react';
import { skills } from '../../../data/skills';
import styles from './SkillKeyboard.module.css';

export function SkillKeyboard() {
  const [activeSkill, setActiveSkill] = useState(skills[3]); // Description state
  const [hoveredSkillId, setHoveredSkillId] = useState(null); // Active mouse hover state
  const [pressedSkillId, setPressedSkillId] = useState(null); // Typing shortcut state

  // Physical keyboard typing shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      const pressedChar = e.key.toUpperCase();
      const matchedSkill = skills.find(s => s.keyChar === pressedChar);
      
      if (matchedSkill) {
        setActiveSkill(matchedSkill);
        setPressedSkillId(matchedSkill.id);

        setTimeout(() => {
          setPressedSkillId(null);
        }, 220);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnterKey = (skill) => {
    setActiveSkill(skill);
    setHoveredSkillId(skill.id);
  };

  const handleMouseLeavePlate = () => {
    // Unclick all keys when mouse exits the keyboard board
    setHoveredSkillId(null);
  };

  return (
    <div className={styles.keyboardSectionWrapper}>
      {/* Popout Skill Description Card above Keyboard */}
      <div className={styles.popoutCard}>
        <div className={styles.popoutIconWrapper}>
          <img src={activeSkill.icon} alt={activeSkill.name} className={styles.svgLogo} />
        </div>
        <div className={styles.popoutContent}>
          <div className={styles.popoutHeader}>
            <h3 className={styles.popoutName}>{activeSkill.name}</h3>
            <span className={styles.popoutBadge}>{activeSkill.category}</span>
          </div>
          <p className={styles.popoutTagline}>{activeSkill.tagline}</p>
        </div>
      </div>

      <p className={styles.hintText}>💡 Hover over or click any key to inspect skill details</p>

      {/* 3D Isometric Viewport */}
      <div className={styles.perspectiveViewport}>
        <div 
          className={styles.keyboardPlate} 
          role="toolbar" 
          aria-label="Interactive Skill Keycaps"
          onMouseLeave={handleMouseLeavePlate}
        >
          {skills.map((skill) => {
            // Key is ONLY pressed down if currently hovered OR triggered by physical keypress
            const isCurrentlyPressed = hoveredSkillId === skill.id || pressedSkillId === skill.id;

            return (
              <button
                key={skill.id}
                className={`${styles.keycap} ${isCurrentlyPressed ? styles.keycapPressed : ''}`}
                onMouseEnter={() => handleMouseEnterKey(skill)}
                onClick={() => handleMouseEnterKey(skill)}
                onFocus={() => handleMouseEnterKey(skill)}
                aria-label={`Skill: ${skill.name}`}
              >
                {/* Stable inner face */}
                <div className={styles.keycapFace}>
                  <span className={styles.keyShortcut}>{skill.keyChar}</span>
                  <div className={styles.iconContainer}>
                    <img src={skill.icon} alt={skill.name} className={styles.svgLogo} />
                  </div>
                  <span className={styles.keyName}>{skill.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}