import React from 'react';
import { Reveal } from '../../ui/Reveal/Reveal';
import { CardSwap, Card, TerminalCard } from './CardSwap/CardSwap';
import styles from './Hero.module.css';

import designIcon from '../../../assets/icons/design.svg';
import fullstackIcon from '../../../assets/icons/fullstack.svg';
import lightbulbIcon from '../../../assets/icons/lightbulb.svg';
import rocketIcon from '../../../assets/icons/rocket.svg';

const STRENGTH_ICONS = {
  synergy: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  foundation: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>
  ),
  mindset: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
    </svg>
  ),
  adaptable: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className={styles.neonPinkIcon}>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 19V9h7.38l.95 1.9c-.21.32-.33.69-.33 1.1 0 1.1.9 2 2 2s2-.9 2-2-.83-1.92-1.88-1.99l-1.23-2.46A1 1 0 0 0 13 7H5V5h14v14z"></path>
      <path d="M10.67 13.1c.21-.32.33-.69.33-1.1 0-1.1-.9-2-2-2s-2 .9-2 2 .83 1.92 1.88 1.99l1.23 2.46A1 1 0 0 0 11 17h8v-2h-7.38z"></path>
    </svg>
  )
};

const HERO_STRENGTHS = [
  {
    icon: STRENGTH_ICONS.synergy,
    title: 'Design & Code Synergy',
    description: 'Bridging UI/UX prototypes in Figma directly into clean, responsive React interfaces.'
  },
  {
    icon: STRENGTH_ICONS.foundation,
    title: 'Full-Stack Foundation',
    description: 'Building end-to-end web apps with React, C# ASP.NET Core, and MSSQL databases.'
  },
  {
    icon: STRENGTH_ICONS.mindset,
    title: 'Problem-Solving Mindset',
    description: 'Passionate about automating repetitive tasks and streamlining manual workflows.'
  },
  {
    icon: STRENGTH_ICONS.adaptable,
    title: 'Independent & Adaptable',
    description: 'Fast learner constantly expanding capabilities across modern web development stacks.'
  }
];

// 6 Small Skill Cards
const QUICK_SKILLS = [
  {
    title: 'Web Dev',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    )
  },
  {
    title: 'Full Stack Dev',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    )
  },
  {
    title: 'Frontend Dev',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    )
  },
  {
    title: 'AI Integration',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    )
  },
  {
    title: 'Git',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    )
  },
  {
    title: 'UI/UX Design',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconSmall}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    )
  }
];

export function Hero() {
  return (
    <section className={styles.heroSection} aria-label="Introduction">
      <div className={`container ${styles.heroContainer}`}>
        {/* Top Hero Grid */}
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <Reveal direction="left" delay={100}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                Available for Frontend & Full-Stack Roles
              </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <div className={styles.nameTitle}>
                <h1 className={styles.brandName}>ZHY</h1>
                <p className={styles.fullName}>Ailex Denzel Estrada</p>
                <p className={styles.professionalRole}>
                  Frontend Developer & Web Developer & UI/UX Designer
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={300}>
              <p className={styles.heroDescription}>
                Turning messy ideas into reliable, interactive web solutions.<br />
                I am a freshly graduated aspiring Frontend Developer and Web Developer based in Manila. I don't just build websites; I engineer complete experiences, blending thoughtful interface design with full-stack technologies to create software that is both visually engaging and highly performant.
              </p>
            </Reveal>

            <Reveal direction="left" delay={350}>
              <div className={styles.locationBadge}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconLocation}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>Sampaloc, Manila, Philippines</span>
              </div>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <div className={styles.actionsGroup}>
                <a href="#projects" className={styles.gradientBtn}>
                  View My Work →
                </a>
                <a href="#contact" className={styles.glassBtn}>
                  Contact Me
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Side 3D GSAP Card Swap Terminal Deck (skewAmount={6} 3D design) */}
          <div className={styles.cardSwapArea}>
            <Reveal direction="fade" delay={300}>
              <CardSwap
                cardDistance={50}
                verticalDistance={60}
                delay={4500}
                pauseOnHover={false}
                skewAmount={6}
                width={340}
                height={200}
              >
                <Card>
                  <TerminalCard title="react-developer.sh" command="zhy-portfolio@latest" />
                </Card>
                <Card>
                  <TerminalCard title="aspnet-api.cs" command="dotnet-run-api" />
                </Card>
                <Card>
                  <TerminalCard title="mssql-database.sql" command="mssql-elections-db" />
                </Card>
              </CardSwap>
            </Reveal>
          </div>
        </div>

        {/* 4 Core Strengths Cards Row */}
        <div className={styles.strengthsWrapper}>
          <Reveal direction="left" delay={100}>
            <h2 className={styles.strengthsHeading}>Core Strengths</h2>
          </Reveal>
          <div className={styles.strengthsGrid}>
            {HERO_STRENGTHS.map((item, index) => (
              <Reveal key={index} direction="left" delay={150 + index * 100}>
                <div className={styles.strengthCard}>
                  <div className={styles.strengthIcon}>
                    {item.icon}
                  </div>
                  <h3 className={styles.strengthTitle}>{item.title}</h3>
                  <p className={styles.strengthText}>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 6 Small Skill Cards Row */}
          <Reveal direction="left" delay={200}>
            <div className={styles.quickSkillsRow}>
              {QUICK_SKILLS.map((skill, index) => (
                <div key={index} className={styles.quickSkillCard}>
                  <span className={styles.quickIcon}>{skill.icon}</span>
                  <span className={styles.quickTitle}>{skill.title}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}