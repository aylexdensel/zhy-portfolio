import React from 'react';
import { Tag } from '../../ui/Tag/Tag';
import { Button } from '../../ui/Button/Button';
import styles from './FeaturedProject.module.css';

export function FeaturedProject({ project }) {
  return (
    <article className={styles.featuredCard}>
      <div className={styles.infoArea}>
        <div className={styles.badgeHeader}>
          <span className={styles.flagshipBadge}>⭐ Flagship Project</span>
          <Tag variant="status">{project.status}</Tag>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.summary}</p>

        {project.academicGroups && (
          <div>
            <p className={styles.tiersLabel}>Academic Levels Supported:</p>
            <div className={styles.tiersList}>
              {project.academicGroups.map((group) => (
                <Tag key={group} variant="accent">{group}</Tag>
              ))}
            </div>
          </div>
        )}

        <div className={styles.techStack}>
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className={styles.actionsGroup}>
          <Button href={`/projects/${project.slug}`} variant="primary">
            Explore Full Case Study →
          </Button>
        </div>
      </div>

      <div className={styles.mediaArea}>
        {project.coverImage && !project.coverImage.startsWith('[') ? (
          <img src={project.coverImage} alt={`${project.title} screenshot`} />
        ) : (
          <div className={styles.placeholderCover}>
            <span className={styles.placeholderIcon}>🗳️</span>
            <strong>[E_VOTING_FLAGSHIP_MOCKUP]</strong>
            <small>Deployment & Screenshots in Progress</small>
          </div>
        )}
      </div>
    </article>
  );
}