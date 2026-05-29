'use client';

const items = [
  {
    period: '2024 — Present',
    role: 'UI/UX & Frontend Developer Trainee',
    company: 'ArcLogi Pvt Ltd · Baneswor, Nepal',
    desc:
      'End-to-end UI/UX design and frontend development in React and Next.js for client web apps. Designing in Figma and translating layouts into responsive, production-ready components alongside senior developers and project leads.',
  },
  {
    period: '2023 — 2024',
    role: 'Junior Frontend Developer (Freelance)',
    company: 'Self-Employed · Remote',
    desc:
      'Designed and shipped responsive landing pages and business sites for local clients using React and Next.js. Iterated on Figma designs, integrated payment gateways, and delivered pixel-focused frontend implementations.',
  },
  {
    period: '2022 — 2023',
    role: 'Frontend Developer (Trainee)',
    company: 'Personal Development Projects',
    desc:
      'Built responsive websites and reusable component libraries with HTML, CSS, JavaScript, React and Next.js. Practiced clean structure, REST API integration, and modern UI patterns across multiple prototypes.',
  },
  {
    period: '2021 — 2022',
    role: 'Software Developer Intern',
    company: 'Practical Learning Projects',
    desc:
      'Built small web and desktop apps with Python and Java. Implemented CRUD systems against MySQL and PostgreSQL, and developed structured debugging and testing practices.',
  },
  {
    period: '2018 — 2021',
    role: 'BSc (Hons) Computing',
    company: 'Islington College · Kathmandu',
    desc:
      'Computing coursework with applied projects in web development, databases, software design, and engineering workflows.',
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Journey</div>
          <h2 className="section-title">Experience.</h2>
        </div>
        <div className="reveal" style={{ marginTop: '20px' }}>
          <div className="timeline">
            {items.map((it) => (
              <div className="tl-item" key={it.period + it.role}>
                <div className="tl-period">{it.period}</div>
                <div className="tl-role">{it.role}</div>
                <div className="tl-company">{it.company}</div>
                <div className="tl-desc">{it.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
