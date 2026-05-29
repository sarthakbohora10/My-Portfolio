'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState({ text: '', color: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus({ text: '⟶ TRANSMITTING...', color: 'var(--neon-cyan)' });

    const form = e.currentTarget;
    const data = {
      name: form['cf-name'].value.trim(),
      email: form['cf-email'].value.trim(),
      message: form['cf-message'].value.trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({
          text: "✓ MESSAGE QUEUED · I'LL BE IN TOUCH SHORTLY",
          color: '#4ade80',
        });
        form.reset();
      } else {
        setStatus({
          text: '✗ ' + (json.error || 'SOMETHING WENT WRONG. TRY AGAIN.'),
          color: '#f87171',
        });
      }
    } catch (err) {
      setStatus({
        text: '✗ NETWORK ERROR. PLEASE TRY AGAIN.',
        color: '#f87171',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Let&apos;s build<br />something together.
          </h2>
        </div>

        <div className="contact-grid" style={{ marginTop: '50px' }}>
          <div className="reveal contact-info">
            <h3>Open to freelance, full-time, and collaborative work.</h3>
            <p>
              Got a project in mind, or just want to chat about design and code?
              Drop me a line — I usually reply within a day.
            </p>
            <ul className="contact-list">
              <li>
                <div className="ci-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="ci-row">
                  <div className="ci-label">EMAIL</div>
                  <a className="ci-value" href="mailto:sarthakbohora1@gmail.com">sarthakbohora1@gmail.com</a>
                </div>
              </li>
              <li>
                <div className="ci-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="ci-row">
                  <div className="ci-label">PHONE</div>
                  <a className="ci-value" href="tel:+9779861137548">+977 986 113 7548</a>
                </div>
              </li>
              <li>
                <div className="ci-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="ci-row">
                  <div className="ci-label">LINKEDIN</div>
                  <a
                    className="ci-value"
                    href="https://www.linkedin.com/in/sarthak-bohora-86318420b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /in/sarthak-bohora
                  </a>
                </div>
              </li>
              <li>
                <div className="ci-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="ci-row">
                  <div className="ci-label">LOCATION</div>
                  <span className="ci-value">Kathmandu, Nepal</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="reveal contact-form" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="cf-name">Your name</label>
              <input id="cf-name" name="cf-name" type="text" placeholder="Jane Doe" required />
            </div>
            <div className="form-row">
              <label htmlFor="cf-email">Email address</label>
              <input id="cf-email" name="cf-email" type="email" placeholder="jane@company.com" required />
            </div>
            <div className="form-row">
              <label htmlFor="cf-message">Project details</label>
              <textarea
                id="cf-message"
                name="cf-message"
                placeholder="Tell me about your idea, scope, and timeline…"
                required
              ></textarea>
            </div>
            <button className="form-submit" type="submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
            <div className="form-status" id="formStatus" style={{ color: status.color }}>
              {status.text}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
