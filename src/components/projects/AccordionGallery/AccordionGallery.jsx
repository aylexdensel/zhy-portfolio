import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import './AccordionGallery.css';

const DEFAULT_ITEMS = [
  { 
    id: 'e-voting',
    image: 'https://picsum.photos/id/1015/900/1200', 
    label: 'E-Voting System', 
    summary: 'Flagship full-stack election management platform engineered across 4 academic levels.',
    link: '/projects/e-voting',
    liveUrl: null
  },
  { 
    id: 'olms',
    image: 'https://picsum.photos/id/1018/900/1200', 
    label: 'Online Library Management System', 
    summary: 'Full-stack cataloging, borrowing lifecycle & MSSQL relational database inventory.',
    link: '/projects/olms',
    liveUrl: null
  },
  { 
    id: 'ongoing',
    image: 'https://picsum.photos/id/1039/900/1200', 
    label: 'Upcoming Full-Stack Application', 
    summary: 'New full-stack web project currently under active development.',
    link: '#',
    liveUrl: null,
    isOngoing: true
  }
];

export function AccordionGallery({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = '#ffffff',
  overlayColor = '#040508',
  textColor = '#ffffff',
  height = 500,
  gap = 12,
  radius = 20,
  expandRatio = 0.52,
  orientation = 'horizontal',
  duration = 0.65,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 8,
  stagger = 0.08,
  trigger = 'hover',
  showLabels = true,
  grayscale = true,
  className = ''
}) {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const contentRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(380);

  const navigate = useNavigate();
  const vertical = orientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const applyLayout = useCallback(
    animate => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const content = contentRefs.current[i];

        const rot = isActive ? 0 : i < active ? tilt : -tilt;
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              '--ag-dim': isActive ? 0.2 : 0.45,
              duration: dur,
              ease
            },
            0
          );
        }

        // --- Cinematic Jumping / Spring Word & Button Animations ---
        if (showLabels && content) {
          const titleRow = content.querySelector('.ag-panel__title-row');
          const subtext = content.querySelector('.ag-panel__subtext');
          const buttons = content.querySelector('.ag-panel__buttons');

          if (isActive) {
            tl.to(content, { opacity: 1, duration: 0.2 }, 0);
            
            // 1. Title Row jumps up with back.out spring
            if (titleRow) {
              tl.fromTo(
                titleRow, 
                { opacity: 0, y: 40, scale: 0.95 }, 
                { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.8)' }, 
                0.05
              );
            }

            // 2. Subtext description jumps up 100ms later
            if (subtext) {
              tl.fromTo(
                subtext, 
                { opacity: 0, y: 30 }, 
                { opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.5)' }, 
                0.15
              );
            }

            // 3. Buttons pop up with scale bounce 200ms later
            if (buttons) {
              tl.fromTo(
                buttons, 
                { opacity: 0, y: 25, scale: 0.9 }, 
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.6)' }, 
                0.25
              );
            }
          } else {
            tl.to(content, { opacity: 0, y: 20, duration: 0.3, ease: 'power2.in' }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = i => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i, e) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  const handleDetailsClick = (item, e) => {
    e.stopPropagation();
    if (item.link && item.link !== '#') {
      navigate(item.link);
    } else {
      alert('Case study details in progress.');
    }
  };

  const handleLiveDemoClick = (item, e) => {
    e.stopPropagation();
    if (item.liveUrl) {
      window.open(item.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert('Deployment in progress! Live demo link will be available soon.');
    }
  };

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-text': textColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`
      }}
      role="list"
      aria-label="Image accordion gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        return (
          <div
            key={item.id || i}
            ref={el => (panelRefs.current[i] = el)}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            style={{ borderRadius: `${radius}px` }}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            <span className="ag-panel__frame">
              <span className="ag-panel__media" ref={el => (mediaRefs.current[i] = el)}>
                <img src={item.image} alt={item.alt || item.label || ''} draggable="false" />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>

            {/* Active Panel Content */}
            {showLabels && (
              <div 
                className="ag-panel__content" 
                ref={el => (contentRefs.current[i] = el)}
              >
                <div className="ag-panel__title-row">
                  <span className="ag-panel__bar" />
                  <h3 className="ag-panel__title">{item.label}</h3>
                </div>

                <p className="ag-panel__subtext">{item.summary}</p>

                <div className="ag-panel__buttons">
                  <button
                    type="button"
                    className="ag-btn ag-btn--primary"
                    onClick={e => handleDetailsClick(item, e)}
                  >
                    Details →
                  </button>
                  <button
                    type="button"
                    className="ag-btn ag-btn--secondary"
                    onClick={e => handleLiveDemoClick(item, e)}
                  >
                    View Live Demo ↗
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AccordionGallery;