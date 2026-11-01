import React from 'react';
import { Reveal } from '../../ui/Reveal/Reveal';
import { Shuffle } from '../../ui/Shuffle/Shuffle';
import { TextType } from '../../ui/TextType/TextType';
import styles from './About.module.css';

const WHY_ICONS = {
  target: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  ),
  architecture: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0 4.179 2.25L12 17.25 6.429 14.25m11.142-4.5 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25" />
    </svg>
  ),
  lightning: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  ),
  growth: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 0 5.814-5.518l2.74-1.22m0 0-3.976-3.977m3.976 3.977-1.22 3.976" />
    </svg>
  )
};

const WHY_WORK_WITH_ME = [
  {
    icon: WHY_ICONS.target,
    title: 'Bridge Between Design & Code',
    description: 'I eliminate developer-designer handoff friction by designing intuitive interfaces in Figma and translating them directly into pixel-perfect, accessible React components.'
  },
  {
    icon: WHY_ICONS.architecture,
    title: 'End-to-End System Thinking',
    description: 'I don’t just build visual interfaces; I understand relational database modeling in MSSQL, RESTful API controllers in C# ASP.NET Core, and dynamic React state management.'
  },
  {
    icon: WHY_ICONS.lightning,
    title: 'Efficiency & Automation Focus',
    description: 'I enjoy identifying manual, paper-based, or repetitive processes (like paper-based election tallying) and digitizing them into fast, reliable software tools.'
  },
  {
    icon: WHY_ICONS.growth,
    title: 'High Initiative & Fast Learner',
    description: 'Driven by self-directed growth, I rapidly adapt to new frameworks, design systems, and team codebase standards—ready to contribute value from day one.'
  }
];

const ROTATING_CARDS = [
  { index: 0, color: '142, 249, 252', image: '/assets/1.png' },
  { index: 1, color: '142, 252, 204', image: '/assets/2.png' },
  { index: 2, color: '142, 252, 157', image: '/assets/3.png' },
  { index: 3, color: '215, 252, 142', image: '/assets/4.png' },
  { index: 4, color: '252, 252, 142', image: '/assets/5.png' },
  { index: 5, color: '252, 208, 142', image: '/assets/6.png' },
  { index: 6, color: '252, 142, 142', image: '/assets/7.png' },
  { index: 7, color: '252, 142, 239', image: '/assets/8.png' },
  { index: 8, color: '204, 142, 252', image: '/assets/9.png' },
  { index: 9, color: '142, 202, 252', image: '/assets/10.png' }
];

export function About() {
  return (
    <section id="about" className={styles.aboutSection} aria-label="About ZHY">
      <div className="container">
        
        {/* Section Heading Split into 2 Stacked Lines */}
        <Reveal direction="left" delay={100}>
          <div className={styles.headingWrapper}>
            <span className={styles.numberTag}>01 / ABOUT</span>
            <h2 className={styles.title}>
              <div className={styles.titleLine}>
                <Shuffle
                  text="Bridging Interface Design"
                  className={styles.aboutShuffleTitle}
                  shuffleDirection="right"
                  duration={0.35}
                  stagger={0.02}
                  animationMode="evenodd"
                  loop={false}
                  triggerOnHover={true}
                  textAlign="left"
                />
              </div>
              <div className={styles.titleLine}>
                <Shuffle
                  text="& Full-Stack Code"
                  className={styles.aboutShuffleTitle}
                  shuffleDirection="right"
                  duration={0.35}
                  stagger={0.02}
                  animationMode="evenodd"
                  loop={false}
                  triggerOnHover={true}
                  textAlign="left"
                />
              </div>
            </h2>
          </div>
        </Reveal>

        <div className={styles.aboutGrid}>
          {/* Left Column: Narrative with Typewriter Engine & Action Buttons */}
          <Reveal direction="left" delay={200}>
            <div className={styles.narrativeCol}>
              <TextType
                text="I am a Manila-based recent graduate and passionate Web, Frontend, and Full-Stack Developer pursuing a career with the meticulous eye of a UI/UX designer. Thriving at the intersection of logic and creativity, I treat design and engineering as two halves of a single process—designing with architecture in mind and coding with user experience at the forefront."
                typingSpeed={14}
                initialDelay={300}
                loop={false}
                showCursor={false}
                className={styles.narrativeParagraph}
              />

              <TextType
                text="Whether bridging the gap between intuitive interfaces and backend systems, transforming complex requirements into clean digital solutions, or independently building modern full-stack applications, my ultimate goal is always to create accessible, performant software that feels completely effortless."
                typingSpeed={14}
                initialDelay={1400}
                loop={false}
                showCursor={true}
                cursorCharacter="▍"
                className={styles.narrativeParagraph}
              />

              {/* Exact Hero-Style Buttons */}
              <div className={styles.aboutButtonsGroup}>
                <a href="/Ailex.Estrada_CV.pdf" download className={styles.gradientBtn}>
                  Download CV ↓
                </a>
                <a href="#projects" className={styles.glassBtn}>
                  View Projects →
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 3D Orbiting Photo Carousel */}
          <Reveal direction="right" delay={300}>
            <div className={styles.carouselWrapper}>
              <div className={styles.inner} style={{ '--quantity': 10 }}>
                {ROTATING_CARDS.map((card) => (
                  <div 
                    key={card.index} 
                    className={styles.card} 
                    style={{ 
                      '--index': card.index, 
                      '--color-card': card.color 
                    }}
                  >
                    <img 
                      src={card.image} 
                      alt={`Ailex Denzel Estrada photo ${card.index + 1}`} 
                      className={styles.img}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Why Work With Me Sub-Section */}
        <div className={styles.whySection}>
          <Reveal direction="right" delay={100}>
            <div className={styles.whyHeader}>
              <span className={styles.whySubtag}>Value Proposition</span>
              <h3 className={styles.whyTitle}>
                <Shuffle
                  text="Why Work With Me?"
                  className={styles.whyShuffleTitle}
                  shuffleDirection="right"
                  duration={0.35}
                  stagger={0.02}
                  animationMode="evenodd"
                  loop={false}
                  triggerOnHover={true}
                  textAlign="left"
                />
              </h3>
            </div>
          </Reveal>

          <div className={styles.whyGrid}>
            {WHY_WORK_WITH_ME.map((card, index) => (
              <Reveal key={index} direction="up" delay={150 + index * 100}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>
                    {card.icon}
                  </div>
                  <h4 className={styles.cardHeading}>{card.title}</h4>
                  <p className={styles.cardText}>{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;