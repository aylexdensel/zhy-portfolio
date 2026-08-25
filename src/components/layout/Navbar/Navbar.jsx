import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../../../data/navigation';
import { smoothScrollTo, SCROLL_DURATION } from '../../../utils/scrollUtils';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (e, link) => {
    setIsMobileMenuOpen(false);

    if (link.id === 'home') {
      e.preventDefault();
      if (location.pathname === '/') {
        smoothScrollTo(0, SCROLL_DURATION);
      } else {
        navigate('/');
        setTimeout(() => smoothScrollTo(0, SCROLL_DURATION), 100);
      }
      return;
    }

    if (link.type === 'section' && location.pathname === '/') {
      e.preventDefault();
      const targetElement = document.getElementById(link.id);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        smoothScrollTo(offsetPosition, SCROLL_DURATION);
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Brand Logo */}
        <Link 
          to="/" 
          className={styles.logo} 
          aria-label="ZHY Portfolio Home"
          onClick={(e) => handleNavClick(e, { id: 'home', type: 'section' })}
        >
          ZHY<span className={styles.logoDot}>.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={`${styles.navList} ${styles.desktopNavList}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.href} 
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actionsGroup}>
            {/* Accessible Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.menuToggleBtn}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </nav>

        {/* Glassmorphism Mobile Navigation Menu */}
        <nav
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
} 