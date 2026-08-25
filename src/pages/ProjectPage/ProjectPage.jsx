import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Tag } from '../../components/ui/Tag/Tag';
import { Button } from '../../components/ui/Button/Button';
import styles from './ProjectPage.module.css';

export function ProjectPage() {
  const { slug } = useParams();
  
  // Derive project from route slug
  const project = projects.find((p) => p.slug === slug);

  // Redirect to 404 if project doesn't exist
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <article className={styles.projectPage}>
      <div className="container">
        {/* Back Link */}
        <Link to="/#projects" className={styles.backLink}>
          ← Back to All Projects
        </Link>

        {/* Hero Header */}
        <header className={styles.headerGrid}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Tag variant="accent">{project.role}</Tag>
            <Tag variant="status">{project.status}</Tag>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
        </header>

        {/* Metadata Grid */}
        <div className={styles.metaGrid}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>{project.role}</span>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Status</span>
            <span className={styles.metaValue}>{project.status}</span>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Tech Stack</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '0.25rem' }}>
              {project.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>

        {/* Main Cover Area */}
        <div className={styles.mainCoverArea}>
          {project.coverImage && !project.coverImage.startsWith('[') ? (
            <img src={project.coverImage} alt={project.title} />
          ) : (
            <div className={styles.coverPlaceholder}>
              <span className={styles.coverIcon}>💻</span>
              <h3>[{project.title.toUpperCase()}_MAIN_COVER]</h3>
              <p>System Mockup & Interface Screenshots in Progress</p>
            </div>
          )}
        </div>

        {/* Problem Statement */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>The Problem & Context</h2>
          <p className={styles.bodyText}>{project.problem}</p>
        </section>

        {/* Solution & Responsibilities */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>The Solution & Solo Responsibilities</h2>
          <p className={styles.bodyText} style={{ marginBottom: '1.5rem' }}>{project.solution}</p>
          <div className={styles.listGrid}>
            {project.responsibilities.map((resp, idx) => (
              <div key={idx} className={styles.featureCard}>
                <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓ Step {idx + 1}</span>
                <p style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{resp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Key Application Features</h2>
          <div className={styles.listGrid}>
            {project.features.map((feat, idx) => (
              <div key={idx} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>❖ {feat.title}</h3>
                <p className={styles.bodyText} style={{ fontSize: '0.95rem' }}>{feat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Challenges */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Engineering Challenges & Solutions</h2>
          {project.challenges.map((chal, idx) => (
            <div key={idx} className={styles.challengeCard}>
              <h3 className={styles.challengeTitle}>Challenge {idx + 1}: {chal.title}</h3>
              <p className={styles.bodyText}>{chal.description}</p>
              <div className={styles.solutionBox}>
                <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.25rem' }}>💡 How It Was Solved:</strong>
                <p className={styles.bodyText} style={{ fontSize: '0.95rem' }}>{chal.solution}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Screenshot Gallery Placeholders */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Interface Gallery</h2>
          <div className={styles.galleryGrid}>
            {project.screenshots.map((shot, idx) => (
              <div key={idx} className={styles.galleryItem}>
                <small>{shot}</small>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons Learned */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Lessons Learned</h2>
          <p className={styles.bodyText}>{project.lessons}</p>
        </section>

        {/* Action CTAs — Only render links if real URLs exist */}
        <footer className={styles.actionsBar}>
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="primary" external>
              View Live Project ↗
            </Button>
          )}
          {project.repositoryUrl && (
            <Button href={project.repositoryUrl} variant="secondary" external>
              GitHub Repository ↗
            </Button>
          )}
          {!project.liveUrl && !project.repositoryUrl && (
            <Tag variant="status">🔒 Deployment in progress — Live link will appear when available</Tag>
          )}
        </footer>
      </div>
    </article>
  );
}

export default ProjectPage;