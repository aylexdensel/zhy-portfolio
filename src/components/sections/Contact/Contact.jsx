import React, { useState } from 'react';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { ContactForm } from './ContactForm';
import { ContactModal } from './ContactModal/ContactModal';
import { Reveal } from '../../ui/Reveal/Reveal';
import { Tag } from '../../ui/Tag/Tag';
import styles from './Contact.module.css';

export function Contact() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenEmailModal = () => {
    setActiveModal({
      type: 'Direct Email',
      title: 'Send an Email',
      value: 'estradaailexdenzel@gmail.com',
      gmailUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=estradaailexdenzel@gmail.com',
      mailtoUrl: 'mailto:estradaailexdenzel@gmail.com'
    });
  };

  return (
    <section id="contact" className={styles.contactSection} aria-label="Contact ZHY">
      <div className="container">
        <Reveal direction="left" delay={100}>
          <SectionHeading
            number="05 / CONTACT"
            title="Let's Build Something Together"
            subtitle="Open for entry-level and junior development roles across Frontend, Web, Full-Stack, and UI/UX engineering."
          />
        </Reveal>

        {/* 3-Column Layout: Left (Form) | Middle (Education Cards) | Right (4-Quadrant Grid) */}
        <div className={styles.contactGrid}>
          
          {/* LEFT COLUMN: Centered101 Expandable Profile Form */}
          <div className={styles.leftCol}>
            <Reveal direction="left" delay={200}>
              <ContactForm onOpenModal={handleOpenEmailModal} />
            </Reveal>
          </div>

          {/* MIDDLE COLUMN: 2 Stacked Education Cards with Neon Pink SVGs */}
          <div className={styles.middleCol}>
            <Reveal direction="up" delay={250}>
              <div className={styles.educationStack}>
                {/* Degree Card */}
                <div className={styles.degreeCard}>
                  <div className={styles.degreeHeader}>
                    
                    <h3 className={styles.degreeTitle}>Bachelor's Degree in IT</h3>
                    <p className={styles.institution}>UST Angelicum College</p>
                  </div>

                  {/* Neon Pink Graduation & Pin SVG Meta Row */}
                  <div className={styles.metaRow}>
                    <div className={styles.metaItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconEdu}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 14.625l7.74-4.478M12 3.375l7.74 4.478-7.74 4.478-7.74-4.478L12 3.375zM4.26 10.147v5.728a2.25 2.25 0 001.125 1.948l5.625 3.248a2.25 2.25 0 002.25 0l5.625-3.248a2.25 2.25 0 001.125-1.948v-5.728" />
                      </svg>
                      <span>Graduated June 2026</span>
                    </div>

                    <div className={styles.metaItem}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconEdu}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <span>Manila, Philippines</span>
                    </div>
                  </div>

                  <p className={styles.eduDescription}>
                    Formally educated in information technology fundamentals, OOP, database systems, networking, and web app architecture.
                  </p>
                </div>

                {/* Self-Learning Card */}
                <div className={styles.selfLearningCard}>
                  <h3 className={styles.cardTitle}>Self-Directed Growth</h3>
                  <p className={styles.eduDescription}>
                    Mastered modern React component architecture, REST APIs in C# ASP.NET Core, MSSQL relational databases, and responsive CSS design systems.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Uiverse.io 4-Quadrant Social Grid */}
          <div className={styles.rightCol}>
            <Reveal direction="left" delay={300}>
              <div className={styles.socialSideCol}>
                <div className={styles.main}>
                  <div className={styles.up}>
                    {/* Card 1: LinkedIn (Top-Left) */}
                    <a
                      href="https://www.linkedin.com/in/ailex-denzel-estrada-a70563387/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.card1}
                      aria-label="LinkedIn Profile"
                    >
                      <svg className={styles.svgIcon} viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.81a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                      </svg>
                    </a>

                    {/* Card 2: GitHub (Top-Right) */}
                    <a
                      href="https://github.com/aylexdensel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.card2}
                      aria-label="GitHub Profile"
                    >
                      <svg className={styles.svgIcon} viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.921.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>

                  <div className={styles.down}>
                    {/* Card 3: Facebook (Bottom-Left) */}
                    <a
                      href="https://www.facebook.com/zhy.privv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.card3}
                      aria-label="Facebook Profile"
                    >
                      <svg className={styles.svgIcon} viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C20.212 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    {/* Card 4: Gmail (Bottom-Right) */}
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=estradaailexdenzel@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.card4}
                      aria-label="Send Gmail"
                    >
                      <svg className={styles.svgIcon} viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08C21.691 2.279 24 3.434 24 5.457z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Location Badge */}
                <div className={styles.locationBadge}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.neonPinkIconLocation}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>Sampaloc, Manila, Philippines • 09629110684</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Interactive Contact Modal */}
      <ContactModal data={activeModal} onClose={() => setActiveModal(null)} />
    </section>
  );
}