'use client';

import { useEffect, useRef } from 'react';

const projects = [
  {
    num: '01',
    title: 'Personal Portfolio Website',
    desc: 'Responsive portfolio with smooth animations, dark/light mode, lazy loading, and SEO-focused page structure.',
    tags: ['React', 'Next.js', 'CSS3'],
    g1: 'rgba(76,201,255,0.45)',
    g2: 'rgba(124,58,237,0.55)',
    icon: (
      <svg width="96" height="96" viewBox="0 0 100 100" fill="none">
        <rect x="12" y="20" width="76" height="56" rx="6" stroke="white" strokeWidth="2" />
        <circle cx="20" cy="28" r="2" fill="white" />
        <circle cx="28" cy="28" r="2" fill="white" />
        <circle cx="36" cy="28" r="2" fill="white" />
        <rect x="20" y="40" width="40" height="6" rx="2" fill="rgba(76,201,255,0.8)" />
        <rect x="20" y="52" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.4)" />
        <rect x="20" y="60" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.4)" />
      </svg>
    ),
    demo: '#',
  },
  {
    num: '02',
    title: 'Bohora Sunchadi Pasal',
    desc: 'Full-stack luxury jewelry e-commerce platform for gold & silver products, built for a Kathmandu-based retailer with product listings, cart, and responsive storefront.',
    tags: ['Next.js', 'React', 'E-Commerce'],
    g1: 'rgba(234,179,8,0.4)',
    g2: 'rgba(124,58,237,0.5)',
    icon: (
      <svg width="96" height="96" viewBox="0 0 100 100" fill="none">
        {/* shop front */}
        <rect x="18" y="38" width="64" height="40" rx="4" stroke="white" strokeWidth="2" fill="rgba(234,179,8,0.1)" />
        <path d="M18 38 Q50 20 82 38" stroke="white" strokeWidth="2" fill="none" />
        {/* door */}
        <rect x="42" y="56" width="16" height="22" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="rgba(234,179,8,0.15)" />
        {/* gem / diamond */}
        <polygon points="50,10 58,18 50,26 42,18" stroke="rgba(234,179,8,0.9)" strokeWidth="1.5" fill="rgba(234,179,8,0.25)" />
        <line x1="42" y1="18" x2="58" y2="18" stroke="rgba(234,179,8,0.6)" strokeWidth="1" />
        <line x1="50" y1="10" x2="42" y2="18" stroke="rgba(234,179,8,0.6)" strokeWidth="1" />
        <line x1="50" y1="10" x2="58" y2="18" stroke="rgba(234,179,8,0.6)" strokeWidth="1" />
        {/* windows */}
        <rect x="24" y="46" width="12" height="10" rx="1" fill="rgba(234,179,8,0.3)" />
        <rect x="64" y="46" width="12" height="10" rx="1" fill="rgba(234,179,8,0.3)" />
      </svg>
    ),
    demo: 'https://bohora-sunchadi-pasal.vercel.app/',
  },
  {
    num: '03',
    title: '3D Arcade Game',
    desc: 'Arcade-style game with interactive scoring, responsive controls, and polished game physics built in Unity.',
    tags: ['Unity', 'C#', '3D'],
    g1: 'rgba(6,182,212,0.45)',
    g2: 'rgba(76,201,255,0.5)',
    icon: (
      <svg width="96" height="96" viewBox="0 0 100 100" fill="none">
        <path d="M22 38h56a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8V46a8 8 0 0 1 8-8z" stroke="white" strokeWidth="2" fill="rgba(76,201,255,0.15)" />
        <circle cx="34" cy="56" r="6" stroke="white" strokeWidth="2" />
        <circle cx="66" cy="56" r="6" stroke="white" strokeWidth="2" />
        <path d="M30 56h8M34 52v8" stroke="white" strokeWidth="2" />
        <circle cx="64" cy="52" r="2" fill="rgba(217,70,239,0.9)" />
        <circle cx="70" cy="60" r="2" fill="rgba(76,201,255,0.9)" />
      </svg>
    ),
    demo: '#',
  },
  {
    num: '04',
    title: 'Swift Ridge Law Website',
    desc: 'Professional law firm website with a modern, responsive UI, animated sections, and an integrated contact form — built for a US-based legal practice.',
    tags: ['Next.js', 'Tailwind CSS', 'Resend'],
    g1: 'rgba(148,163,184,0.35)',
    g2: 'rgba(124,58,237,0.5)',
    icon: (
      <svg width="96" height="96" viewBox="0 0 100 100" fill="none">
        {/* scales of justice */}
        <line x1="50" y1="18" x2="50" y2="78" stroke="white" strokeWidth="2" />
        <line x1="26" y1="30" x2="74" y2="30" stroke="white" strokeWidth="2" />
        {/* left pan */}
        <path d="M26 30 L18 50 Q26 56 34 50 Z" stroke="rgba(148,163,184,0.8)" strokeWidth="1.5" fill="rgba(148,163,184,0.15)" />
        {/* right pan */}
        <path d="M74 30 L66 50 Q74 56 82 50 Z" stroke="rgba(167,139,250,0.8)" strokeWidth="1.5" fill="rgba(167,139,250,0.15)" />
        {/* base */}
        <rect x="38" y="76" width="24" height="4" rx="2" fill="rgba(255,255,255,0.5)" />
        {/* top knob */}
        <circle cx="50" cy="18" r="3" fill="rgba(167,139,250,0.9)" />
        {/* chain lines */}
        <line x1="26" y1="30" x2="18" y2="50" stroke="rgba(148,163,184,0.5)" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="26" y1="30" x2="34" y2="50" stroke="rgba(148,163,184,0.5)" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="74" y1="30" x2="66" y2="50" stroke="rgba(167,139,250,0.5)" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="74" y1="30" x2="82" y2="50" stroke="rgba(167,139,250,0.5)" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    ),
    demo: 'https://swift-ridge-2kd3q9mis-sarthakbohora10s-projects.vercel.app/',
  },
  {
    num: '05',
    title: 'Gym Management System',
    desc: 'Desktop application for managing memberships, tracking subscriptions, and generating operational reports.',
    tags: ['Java', 'MySQL', 'Desktop'],
    g1: 'rgba(217,70,239,0.45)',
    g2: 'rgba(124,58,237,0.55)',
    icon: (
      <svg width="96" height="96" viewBox="0 0 100 100" fill="none">
        <rect x="14" y="44" width="8" height="12" rx="2" fill="rgba(76,201,255,0.8)" />
        <rect x="78" y="44" width="8" height="12" rx="2" fill="rgba(76,201,255,0.8)" />
        <rect x="22" y="40" width="6" height="20" rx="2" fill="rgba(124,58,237,0.8)" />
        <rect x="72" y="40" width="6" height="20" rx="2" fill="rgba(124,58,237,0.8)" />
        <rect x="28" y="48" width="44" height="4" rx="2" fill="white" />
      </svg>
    ),
    demo: '#',
  },
  {
    num: '06',
    title: 'Machine Learning App',
    desc: 'Prediction prototype using ML algorithms and NumPy-based data processing for practical insights.',
    tags: ['Python', 'NumPy', 'ML'],
    g1: 'rgba(59,130,246,0.45)',
    g2: 'rgba(167,139,250,0.5)',
    icon: (
      <svg width="96" height="96" viewBox="0 0 100 100" fill="none">
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
    demo: '#',
  },
];

export default function Projects() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll('.project-card');
    const cleanups = [];

    cards.forEach((el) => {
      const max = 5;
      const perspective = 1000;
      const scale = 1.012;
      el.style.transformStyle = 'preserve-3d';

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const tiltX = (y - 0.5) * -max * 2;
        const tiltY = (x - 0.5) * max * 2;
        el.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
        el.style.setProperty('--mx', x * 100 + '%');
        el.style.setProperty('--my', y * 100 + '%');
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
              style={{ transitionDelay: i * 60 + 'ms', '--mx': '50%', '--my': '50%' }}
            >
              {/* Spotlight overlay */}
              <div className="project-spotlight" />

              {/* Visual */}
              <div
                className="project-visual"
                style={{
                  background: `radial-gradient(ellipse at 30% 40%, ${p.g1}, transparent 60%),
                               radial-gradient(ellipse at 75% 70%, ${p.g2}, transparent 55%),
                               linear-gradient(160deg, #120820 0%, #060310 100%)`,
                }}
              >
                <div className="project-mesh" />
                <span className="project-num">{p.num}</span>
                <div className="project-pulse-dot" />
                <div className="project-visual-icon">{p.icon}</div>
              </div>

              {/* Body */}
              <div className="project-body">
                <div className="project-meta">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>

                <a className="project-cta" href={p.demo} target="_blank" rel="noopener noreferrer">
                  <span>View Project</span>
                  <span className="project-cta-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
