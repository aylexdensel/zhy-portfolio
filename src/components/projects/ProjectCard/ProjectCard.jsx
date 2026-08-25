import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from '../../ui/Tag/Tag';
import { Button } from '../../ui/Button/Button';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageArea}>
        {project.coverImage && !project.coverImage.startsWith('[') ? (
          <img src={project.coverImage} alt={`${project.title} cover`} />
        ) : (
          <div className={styles.placeholderCover}>
            <span className={styles.placeholderIcon}>💻</span>
            <small>[PROJECT_COVER]</small>
          </div>
        )}
      </div>

      <div className={styles.contentArea}>
        <div className={styles.headerMeta}>
          <span className={styles.roleLabel}>{project.role}</span>
          <Tag variant="status">{project.status}</Tag>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>

        <div className={styles.techStack}>
          {project.technologies.slice(0, 4).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {project.technologies.length > 4 && (
            <Tag>+{project.technologies.length - 4}</Tag>
          )}
        </div>

        <div className={styles.actionsArea}>
          <Button href={`/projects/${project.slug}`} variant="outline" style={{ width: '100%' }}>
            View Case Study →
          </Button>
        </div>
      </div>
    </article>
  );
}