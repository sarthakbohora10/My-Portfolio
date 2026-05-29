'use client';

import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    desc: 'Responsive portfolio with smooth animations, dark/light mode, lazy loading, and SEO-focused page structure.',
    tags: ['React', 'Next.js', 'CSS3'],
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <rect x="12" y="20" width="76" height="56" rx="6" stroke="white" strokeWidth="2" />
        <circle cx="20" cy="28" r="2" fill="white" />
        <circle cx="28" cy="28" r="2" fill="white" />
        <circle cx="36" cy="28" r="2" fill="white" />
        <rect x="20" y="40" width="40" height="6" rx="2" fill="rgba(76,201,255,0.7)" />
        <rect x="20" y="52" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.4)" />
        <rect x="20" y="60" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.4)" />
      </svg>
    ),
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'E-Commerce Product UI Clone',
    desc: 'Storefront UI with pixel-focused components, product listings, filters, cart state, and mock REST integration.',
    tags: ['React', 'REST API', 'Figma'],
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path d="M20 30h60l-6 36a4 4 0 0 1-4 3H30a4 4 0 0 1-4-3z" stroke="white" strokeWidth="2" fill="rgba(124,58,237,0.2)" />
        <path d="M35 30v-6a15 15 0 0 1 30 0v6" stroke="white" strokeWidth="2" />
        <circle cx="40" cy="76" r="4" fill="rgba(76,201,255,0.9)" />
        <circle cx="64" cy="76" r="4" fill="rgba(76,201,255,0.9)" />
      </svg>
    ),
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: '3D Arcade Game',
    desc: 'Arcade-style game with interactive scoring, responsive controls, and polished game physics built in Unity.',
    tags: ['Unity', 'C#', '3D'],
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path d="M22 38h56a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8V46a8 8 0 0 1 8-8z" stroke="white" strokeWidth="2" fill="rgba(76,201,255,0.15)" />
        <circle cx="34" cy="56" r="6" stroke="white" strokeWidth="2" />
        <circle cx="66" cy="56" r="6" stroke="white" strokeWidth="2" />
        <path d="M30 56h8M34 52v8" stroke="white" strokeWidth="2" />
        <circle cx="64" cy="52" r="2" fill="rgba(217,70,239,0.9)" />
        <circle cx="70" cy="60" r="2" fill="rgba(76,201,255,0.9)" />
      </svg>
    ),
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Sports Center Booking System',
    desc: 'Web-based booking and scheduling platform for sports facilities with availability management and reservation flow.',
    tags: ['Python', 'Web', 'Flask'],
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <rect x="18" y="22" width="64" height="58" rx="6" stroke="white" strokeWidth="2" />
        <path d="M18 36h64" stroke="white" strokeWidth="2" />
        <path d="M30 22v8M70 22v8" stroke="white" strokeWidth="2" />
        <rect x="28" y="46" width="10" height="8" rx="1" fill="rgba(124,58,237,0.6)" />
        <rect x="44" y="46" width="10" height="8" rx="1" fill="rgba(76,201,255,0.6)" />
        <rect x="60" y="46" width="10" height="8" rx="1" fill="rgba(255,255,255,0.2)" />
        <rect x="28" y="60" width="10" height="8" rx="1" fill="rgba(255,255,255,0.2)" />
        <rect x="44" y="60" width="10" height="8" rx="1" fill="rgba(217,70,239,0.6)" />
      </svg>
    ),
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Gym Management System',
    desc: 'Desktop application for managing memberships, tracking subscriptions, and generating operational reports.',
    tags: ['Java', 'MySQL', 'Desktop'],
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <rect x="14" y="44" width="8" height="12" rx="2" fill="rgba(76,201,255,0.7)" />
        <rect x="78" y="44" width="8" height="12" rx="2" fill="rgba(76,201,255,0.7)" />
        <rect x="22" y="40" width="6" height="20" rx="2" fill="rgba(124,58,237,0.7)" />
        <rect x="72" y="40" width="6" height="20" rx="2" fill="rgba(124,58,237,0.7)" />
        <rect x="28" y="48" width="44" height="4" rx="2" fill="white" />
      </svg>
    ),
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Machine Learning App',
    desc: 'Prediction prototype using ML algorithms and NumPy-based data processing for practical insights.',
    tags: ['Python', 'NumPy', 'ML'],
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="30" cy="30" r="6" fill="rgba(76,201,255,0.8)" />
        <circle cx="50" cy="22" r="6" fill="rgba(124,58,237,0.8)" />
        <circle cx="70" cy="34" r="6" fill="rgba(217,70,239,0.8)" />
        <circle cx="30" cy="58" r="6" fill="rgba(124,58,237,0.8)" />
        <circle cx="50" cy="50" r="8" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.05)" />
        <circle cx="70" cy="62" r="6" fill="rgba(76,201,255,0.8)" />
        <circle cx="30" cy="80" r="6" fill="rgba(217,70,239,0.8)" />
        <circle cx="70" cy="80" r="6" fill="rgba(124,58,237,0.8)" />
        <line x1="30" y1="30" x2="50" y2="50" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="50" y1="22" x2="50" y2="50" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="70" y1="34" x2="50" y2="50" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="30" y1="58" x2="50" y2="50" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="70" y1="62" x2="50" y2="50" stroke="white" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    github: 'https://github.com',
    demo: '#',
  },
];

export default function Projects() {
  const gridRef = useRef(null);

  // 3D tilt on project cards
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll('.project-card');
    const cleanups = [];

    cards.forEach((el) => {
      const max = 6;
      const perspective = 1000;
      const scale = 1.015;
      el.style.transformStyle = 'preserve-3d';

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const tiltX = (y - 0.5) * -max * 2;
        const tiltY = (x - 0.5) * max * 2;
        el.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
      };
      const onLeave = () => {
        el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">Recent projects.</h2>
          <p className="section-intro">
            A glimpse at what I&apos;ve been building — from full-stack web apps to game prototypes
            and machine learning experiments.
          </p>
        </div>

        <div className="projects-grid" id="projectsGrid" ref={gridRef}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="project-card reveal"
              style={{ transitionDelay: i * 60 + 'ms' }}
            >
              <div className="project-visual">{p.icon}</div>
              <div className="project-body">
                <div className="project-meta">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-actions">
                  <a className="project-link" href={p.github} target="_blank" rel="noopener noreferrer">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    GitHub
                  </a>
                  <a className="project-link primary" href={p.demo} target="_blank" rel="noopener noreferrer">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
