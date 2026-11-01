import React from 'react';
import { Reveal } from '../../ui/Reveal/Reveal';
import { Shuffle } from '../../ui/Shuffle/Shuffle';
import { TextType } from '../../ui/TextType/TextType';
import { DriftWall } from '../../showcase/DriftWall/DriftWall';
import { FocusCards } from '../../ui/FocusCards/FocusCards';
import { FeyCards } from '../../ui/FeyCards/FeyCards';
import { ThreeDCard } from '../../ui/ThreeDCard/ThreeDCard';
import { FlipCard } from '../../ui/FlipCard/FlipCard';
import { CometCard } from '../../ui/CometCard/CometCard';
import { FloatingAuthForm } from '../../ui/FloatingAuthForm/FloatingAuthForm';
import { FlipAuthForm } from '../../ui/FlipAuthForm/FlipAuthForm';
import { CometAuthForm } from '../../ui/CometAuthForm/CometAuthForm';
import { ButtonShowcase } from '../../showcase/ButtonShowcase/ButtonShowcase';
import styles from './ShowcaseSection.module.css';

const DRIFT_ITEMS = [
  { image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80', title: 'Generative Glass UI' },
  { image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80', title: '3D Spatial Geometry' },
  { image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80', title: 'Full-Stack Codebase' },
  { image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80', title: 'Figma UI/UX Systems' },
  { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80', title: 'Analytics Dashboard' },
  { image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80', title: 'React Architecture' },
  { image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80', title: 'System Security & Crypto' },
  { image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=80', title: 'Modern Dev Workflows' },
  { image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&auto=format&fit=crop&q=80', title: 'Design Tokens & Grids' },
  { image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80', title: 'Cloud Web APIs' },
  { image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80', title: 'Interactive Web Apps' },
  { image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=600&auto=format&fit=crop&q=80', title: 'Terminal Environments' },
  { image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80', title: 'Near-Future Tech' },
  { image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80', title: 'Engineering Workspace' },
  { image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80', title: 'Collaborative Interface' }
];

const FOCUS_CARDS = [
  {
    title: 'Forest Adventure',
    src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop',
  },
  {
    title: 'Valley of Life',
    src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop',
  },
  {
    title: 'Flowing Waters',
    src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop',
  },
  {
    title: 'Mountain Expedition',
    src: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop',
  },
  {
    title: 'The Road Not Taken',
    src: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop',
  },
  {
    title: 'The First Rule',
    src: 'https://assets.aceternity.com/the-first-rule.png',
  },
];

export function ShowcaseSection() {
  return (
    <section id="showcase" className={styles.showcaseSection} aria-label="Components Catalog Showcase">
      <div className={`container ${styles.showcaseContainer}`}>
        
        {/* Section Header with Pixel Shuffle Title & Typewriter Subtitle */}
        <Reveal direction="left" delay={100}>
          <div className={styles.catalogHeader}>
            <span className={styles.catalogTag}>COMPONENTS CATALOG</span>
            
            <div className={styles.headingWrapper}>
              <span className={styles.numberTag}>04 / SHOWCASE</span>
              
              <h2 className={styles.title}>
                <Shuffle
                  text="UI/UX & Frontend Laboratory"
                  className={styles.showcaseShuffleTitle}
                  shuffleDirection="right"
                  duration={0.35}
                  stagger={0.02}
                  animationMode="evenodd"
                  loop={false}
                  triggerOnHover={true}
                  textAlign="left"
                />
              </h2>

              <TextType
                text="A curated catalog of interactive component experiences demonstrating state management, accessibility, micro-interactions, and design systems."
                typingSpeed={16}
                initialDelay={300}
                loop={false}
                showCursor={true}
                cursorCharacter="▍"
                className={styles.subtitle}
              />
            </div>
          </div>
        </Reveal>

        {/* 6 Long Horizontal Row Cards */}
        <div className={styles.catalogGrid}>
          {/* HORIZONTAL ROW 1: 3D DRIFT WALL */}
          <Reveal direction="up" delay={200}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>1. 3D Spatial Drift Wall</h3>
                  <p className={styles.rowSubtitle}>
                    A real-time drifting 3D perspective gallery demonstrating spatial layout, parallax damping, and interactive depth.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <div className={styles.driftWallWrapper}>
                <DriftWall
                  items={DRIFT_ITEMS}
                  columns={7}
                  tileWidth={220}
                  tileHeight={145}
                  gap={20}
                  tilt={14}
                  turn={-12}
                  perspective={1200}
                  depth={100}
                  speed={38}
                  direction="up"
                  variance={0.45}
                  parallax={0.55}
                  lift={64}
                  fade={0.7}
                  dim={0.65}
                  overlayColor="#060010"
                  radius={14}
                  roll={0}
                  pauseOnHover={false}
                  grayscale={false}
                />
              </div>
            </div>
          </Reveal>

          {/* HORIZONTAL ROW 2: FOCUS CARDS */}
          <Reveal direction="right" delay={200}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>2. Interactive Focus Cards</h3>
                  <p className={styles.rowSubtitle}>
                    Selective focus and depth-of-field hover interaction highlighting active elements while softly blurring ambient siblings.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <FocusCards cards={FOCUS_CARDS} />
            </div>
          </Reveal>

          {/* HORIZONTAL ROW 3: FEY CARDS DECK */}
          <Reveal direction="left" delay={200}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>3. Layered Card Deck & Hover Shift</h3>
                  <p className={styles.rowSubtitle}>
                    Interactive horizontal card stacking with spring physics, layered offsets, and active state transitions.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <FeyCards shiftDistance={72} swapDuration={0.5} />
            </div>
          </Reveal>

          {/* HORIZONTAL ROW 4: 3D SPATIAL & PERSPECTIVE CARDS */}
          <Reveal direction="right" delay={200}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>4. 3D Spatial & Perspective Cards</h3>
                  <p className={styles.rowSubtitle}>
                    A trio of advanced card behaviors: multi-layer 3D parallax tilt, dual-sided flip transforms, and sweeping comet border effects.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <div className={styles.cardsShowcaseGrid}>
                <ThreeDCard />
                <FlipCard />
                <CometCard />
              </div>
            </div>
          </Reveal>

          {/* HORIZONTAL ROW 5: 3D AUTHENTICATION & LOGIN SYSTEMS */}
          <Reveal direction="left" delay={200}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>5. 3D Authentication & Access Systems</h3>
                  <p className={styles.rowSubtitle}>
                    Interactive authentication experiences: 3D floating parallax login, dual-sided 3D flip Sign-In / Sign-Up card, and radiant vault access.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <div className={styles.cardsShowcaseGrid}>
                <FloatingAuthForm />
                <FlipAuthForm />
                <CometAuthForm />
              </div>
            </div>
          </Reveal>

          {/* HORIZONTAL ROW 6: INTERACTIVE BUTTON DESIGN SYSTEMS */}
          <Reveal direction="up" delay={200}>
            <div className={styles.horizontalCard}>
              <div className={styles.rowMeta}>
                <div>
                  <h3 className={styles.rowTitle}>6. Interactive Button Systems</h3>
                  <p className={styles.rowSubtitle}>
                    A catalog of 9 distinct button micro-interactions, gradient borders, 3D brutalist pop, and state animations with dotted glow cards.
                  </p>
                </div>
                <span className={styles.arrowIndicator}>›</span>
              </div>

              <ButtonShowcase />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;