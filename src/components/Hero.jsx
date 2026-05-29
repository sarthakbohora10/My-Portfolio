'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const idCardRef = useRef(null);
  const liveTimeRef = useRef(null);
  const profilePanelRef = useRef(null);

  // Live clock for ID card
  useEffect(() => {
    const update = () => {
      const el = liveTimeRef.current;
      if (!el) return;
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      el.textContent = `${hh}:${mm} LOCAL`;
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  // 3D tilt for ID card
  useEffect(() => {
    const idCard = idCardRef.current;
    if (!idCard) return;
    const heroRight = idCard.parentElement;

    const onMove = (e) => {
      const rect = idCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = Math.max(-1, Math.min(1, (y - 0.5) * 2)) * -8;
      const tiltY = Math.max(-1, Math.min(1, (x - 0.5) * 2)) * 8;
      idCard.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };
    const onLeave = () => {
      idCard.style.transform = '';
    };

    heroRight.addEventListener('mousemove', onMove);
    heroRight.addEventListener('mouseleave', onLeave);
    return () => {
      heroRight.removeEventListener('mousemove', onMove);
      heroRight.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Tilt for profile panel
  useEffect(() => {
    const el = profilePanelRef.current;
    if (!el) return;
    const max = 8;
    const perspective = 1000;
    const scale = 1.02;
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
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            {/* LEFT: Headline + intro */}
            <div className="hero-left">
              <div className="eyebrow">
                <span className="pill-dot"></span>
                AVAILABLE FOR NEW PROJECTS
              </div>

              <div className="hero-greeting">Hi, I&apos;m —</div>

              <h1>
                <span className="name-line">SARTHAK</span>
                <span className="name-accent">
                  BOHORA<span className="cursor-blink">_</span>
                </span>
              </h1>

              <div className="hero-rotator">
                <span>I craft</span>
                <span className="rotator-words">
                  <span className="rotator-word">interfaces</span>
                  <span className="rotator-word">experiences</span>
                  <span className="rotator-word">products</span>
                  <span className="rotator-word">interactions</span>
                </span>
                <span>that feel alive.</span>
              </div>

              <p className="hero-tagline">
                Frontend developer &amp; UI/UX designer building cinematic, performance-first
                web experiences with React, Next.js, and a deep love for motion design.
              </p>

              <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">
                  View Work
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  View Resume
                </a>
              </div>

              <div className="hero-stack">
                <span className="stack-label">// STACK</span>
                <span>React</span>
                <span className="stack-dot">·</span>
                <span>Next.js</span>
                <span className="stack-dot">·</span>
                <span>TypeScript</span>
                <span className="stack-dot">·</span>
                <span>Three.js</span>
                <span className="stack-dot">·</span>
                <span>Figma</span>
              </div>
            </div>

            {/* RIGHT: Premium cyborg portrait */}
            <div className="hero-right">

              <div className="float-chip float-chip-1">
                <span className="chip-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
                npm run dev
              </div>

              <div className="float-chip float-chip-2">
                <span className="chip-icon" style={{ color: '#4ade80' }}>
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <circle cx="5" cy="5" r="5" fill="currentColor" />
                  </svg>
                </span>
                Available for work
              </div>

              <div className="float-chip float-chip-3">
                <span className="chip-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                Kathmandu, NP
              </div>

              <div className="hero-photo-frame" ref={idCardRef}>
                {/* HUD corner brackets */}
                <div className="hud-corner hud-tl"></div>
                <div className="hud-corner hud-tr"></div>
                <div className="hud-corner hud-bl"></div>
                <div className="hud-corner hud-br"></div>

                {/* Scan line animation */}
                <div className="photo-scan"></div>

                {/* Horizontal data lines */}
                <div className="photo-hud-line photo-hud-line-top">
                  <span className="hud-tag">// DEV.ID — 0001</span>
                  <span className="hud-time" ref={liveTimeRef}>--:--</span>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/me-cyborg.jpeg" alt="Sarthak Bohora" className="cyborg-img" />

                {/* Bottom overlay bar */}
                <div className="photo-info-bar">
                  <div>
                    <div className="photo-name">SARTHAK BOHORA</div>
                    <div className="photo-role">Frontend &amp; UI/UX Developer</div>
                  </div>
                  <div className="photo-status-badge">
                    <span className="status-pulse"></span>
                    OPEN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="line"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="reveal">
            <div className="section-label">About</div>
            <h2 className="section-title">
              Designer who codes,<br />developer who designs.
            </h2>
          </div>

          <div className="about-grid">
            <div className="reveal profile-panel" ref={profilePanelRef}>
              <div className="profile-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/profile.jpg" alt="Sarthak Bohora" loading="lazy" />
              </div>
              <div className="profile-meta">
                <div className="profile-meta-row">
                  <div className="profile-meta-label">// LOCATION</div>
                  <div className="profile-meta-value">Kathmandu, NP</div>
                </div>
                <div className="profile-status">ONLINE</div>
              </div>
            </div>

            <div className="reveal about-content">
              <h3>
                I&apos;m a frontend developer obsessed with building <em>interfaces that feel alive</em> — clean, fluid, and a little bit magical.
              </h3>
              <p>
                With a BSc (Hons) in Computing from Islington College and ongoing experience as a UI/UX &amp; Frontend
                Developer Trainee at ArcLogi, I work across the full design-to-deployment loop. I draft in Figma, ship in
                React and Next.js, and spend perhaps too long obsessing over easing curves and hover states.
              </p>
              <p>
                Outside the editor: Unity hobby projects, mountain trails in the Himalayas, and a steady reading
                list on motion design and human-computer interaction. Always up for a challenging build.
              </p>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-num">4+</div>
                  <div className="stat-label">Years Building</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">15+</div>
                  <div className="stat-label">Projects Shipped</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">100%</div>
                  <div className="stat-label">Pixel Obsessed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
