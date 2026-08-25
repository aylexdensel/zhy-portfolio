import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { AmbientBackground } from '../AmbientBackground/AmbientBackground';
import { Preloader } from '../../ui/Preloader/Preloader';
import styles from './SiteLayout.module.css';

export function SiteLayout() {
  return (
    <div className={styles.layoutWrapper}>
      {/* Animated Welcome Preloader */}
      <Preloader />

      <AmbientBackground />
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}