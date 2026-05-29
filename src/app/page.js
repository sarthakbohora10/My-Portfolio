'use client';

import Preloader from '@/components/Preloader';
import ThreeBackground from '@/components/ThreeBackground';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Home() {
  // Reveal-on-scroll observer (shared across all sections that use .reveal)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            const fill = e.target.querySelector?.('.skill-bar-fill');
            if (fill) fill.style.width = fill.dataset.level + '%';
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    // Smooth scroll for nav anchors
    const links = document.querySelectorAll('.nav-links a');
    const handler = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    links.forEach((l) => l.addEventListener('click', handler));

    return () => {
      io.disconnect();
      links.forEach((l) => l.removeEventListener('click', handler));
    };
  }, []);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <ThreeBackground />

      {/* Atmospheric overlays */}
      <div className="atmosphere"></div>
      <div className="grain"></div>

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
