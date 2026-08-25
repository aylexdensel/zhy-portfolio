import React from 'react';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { Reveal } from '../../ui/Reveal/Reveal';
import { AccordionGallery } from '../../projects/AccordionGallery/AccordionGallery';
import styles from './Projects.module.css';

const GALLERY_PROJECTS = [
  {
    id: 'e-voting',
    tile: '🗳️ Flagship • E-Voting System',
    image: 'https://picsum.photos/id/1015/900/1200',
    label: 'E-Voting System',
    summary: 'Flagship full-stack election management platform engineered across 4 academic levels.',
    link: '/projects/e-voting',
    liveUrl: null
  },
  {
    id: 'olms',
    tile: '📚 Full-Stack • Library System (OLMS)',
    image: 'https://picsum.photos/id/1018/900/1200',
    label: 'Online Library Management System',
    summary: 'Full-stack cataloging, borrowing lifecycle & MSSQL relational database inventory.',
    link: '/projects/olms',
    liveUrl: null
  },
  {
    id: 'ongoing',
    tile: '⚡ Ongoing • Upcoming Project',
    image: 'https://picsum.photos/id/1039/900/1200',
    label: 'Upcoming Full-Stack Application',
    summary: 'New full-stack web project currently under active development.',
    link: '#',
    liveUrl: null,
    isOngoing: true
  }
];

export function Projects() {
  return (
    <section id="projects" className={styles.projectsSection} aria-label="Featured Projects">
      <div className="container">
        <Reveal direction="left" delay={100}>
          <SectionHeading
            number="03 / PROJECTS"
            title="Featured Work & Full-Stack Case Studies"
            subtitle="Substantial applications designed and built independently. Hover over any project panel below to inspect details and live demo options."
          />
        </Reveal>

        <div className={styles.projectsContainer}>
          <Reveal direction="up" delay={200}>
            <AccordionGallery 
              items={GALLERY_PROJECTS} 
              defaultIndex={0} 
              height={480} 
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}