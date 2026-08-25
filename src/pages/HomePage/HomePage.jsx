import React from 'react';
import { Hero } from '../../components/sections/Hero/Hero';
import { About } from '../../components/sections/About/About';
import { Skills } from '../../components/sections/Skills/Skills';
import { Projects } from '../../components/sections/Projects/Projects';
import { ShowcaseSection } from '../../components/sections/Showcase/ShowcaseSection';
import { Contact } from '../../components/sections/Contact/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ShowcaseSection />
      <Contact />
    </>
  );
}

export default HomePage;