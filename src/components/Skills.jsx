'use client';

import { useEffect, useRef } from 'react';
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiHtml5, SiCss3, SiFigma, SiPython,
  SiPostgresql, SiMysql, SiUnity, SiCsharp,
} from 'react-icons/si';
import { FaJava, FaExchangeAlt } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

const skills = [
  { name: 'React', cat: 'Frontend', Icon: SiReact, color: '#61DAFB', level: 92 },
  { name: 'Next.js', cat: 'Framework', Icon: SiNextdotjs, color: '#ffffff', level: 88 },
  { name: 'JavaScript', cat: 'Language', Icon: SiJavascript, color: '#F7DF1E', level: 90 },
  { name: 'TypeScript', cat: 'Language', Icon: SiTypescript, color: '#3178C6', level: 78 },
  { name: 'HTML5 / CSS3', cat: 'Markup & Style', Icon: SiHtml5, color: '#E34F26', level: 95 },
  { name: 'Figma', cat: 'Design', Icon: SiFigma, color: '#F24E1E', level: 88 },
  { name: 'UI / UX Design', cat: 'Discipline', Icon: MdDesignServices, color: '#a78bfa', level: 85 },
  { name: 'REST APIs', cat: 'Integration', Icon: FaExchangeAlt, color: '#4CC9FF', level: 84 },
  { name: 'Python', cat: 'Language', Icon: SiPython, color: '#3776AB', level: 78 },
  { name: 'Java', cat: 'Language', Icon: FaJava, color: '#F89820', level: 72 },
  { name: 'PostgreSQL / MySQL', cat: 'Database', Icon: SiPostgresql, color: '#336791', level: 76 },
  { name: 'Unity / C#', cat: 'Game Dev', Icon: SiUnity, color: '#ffffff', level: 70 },
];

export default function Skills() {
  const gridRef = useRef(null);

  // Skill cards: spotlight on hover (--mx, --my CSS vars)
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll('.skill-card');
    const handlers = [];

    cards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width) * 100 + '%');
        card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height) * 100 + '%');
      };
      card.addEventListener('mousemove', onMove);
      handlers.push({ card, onMove });
    });

    return () => {
      handlers.forEach(({ card, onMove }) => card.removeEventListener('mousemove', onMove));
    };
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Toolkit</div>
          <h2 className="section-title">Stack &amp; specialties.</h2>
          <p className="section-intro">
            A working stack honed across freelance and agency projects — designed for fast,
            accessible, beautifully animated interfaces.
          </p>
        </div>

        <div className="skills-grid" id="skillsGrid" ref={gridRef}>
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="skill-card reveal"
              style={{ transitionDelay: i * 40 + 'ms' }}
            >
              <div className="skill-icon">
                <s.Icon size={28} color={s.color} style={{ filter: 'drop-shadow(0 0 6px ' + s.color + '55)' }} />
              </div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-cat">// {s.cat}</div>
              <div className="skill-bar">
                <div className="skill-bar-fill" data-level={s.level}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
