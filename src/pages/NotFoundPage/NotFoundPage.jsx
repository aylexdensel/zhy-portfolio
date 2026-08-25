import React from 'react';
import { Button } from '../../components/ui/Button/Button';
import { SEO } from '../../components/layout/SEO/SEO';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <>
      <SEO title="404 Page Not Found" description="The requested page could not be found." />
      <div className={styles.container}>
        <span className={styles.errorCode}>404</span>
        <h1 className={styles.title}>System Signal Lost</h1>
        <p className={styles.subtext}>
          The page or case study route you are attempting to access does not exist or has been relocated.
        </p>
        <Button href="/" variant="primary">
          Return to Homepage →
        </Button>
      </div>
    </>
  );
}

export default NotFoundPage;