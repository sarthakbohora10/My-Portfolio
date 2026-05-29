'use client';

import { useEffect, useRef } from 'react';

export default function Preloader() {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const counter = counterRef.current;
    const progress = progressRef.current;
    if (!loader || !counter || !progress) return;

    const duration = 2800;
    const start = performance.now();

    const formatPct = (n) => String(n).padStart(3, '0').split('').join(' ');

    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 2.2);
      const pct = Math.floor(eased * 100);
      counter.textContent = formatPct(pct);
      progress.style.width = eased * 100 + '%';

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        counter.textContent = formatPct(100);
        progress.style.width = '100%';
        setTimeout(() => {
          loader.classList.add('done');
          document.body.classList.remove('loading');
          setTimeout(() => loader.remove(), 1200);
        }, 450);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="loader-screen" id="loader" ref={loaderRef}>
      <div className="loader-progress" id="loaderProgress" ref={progressRef}></div>

      <div className="loader-top-label">PORTFOLIO · 2026</div>
      <div className="loader-top-right">VOL. 01</div>

      <div className="loader-corner tl"></div>
      <div className="loader-corner tr"></div>
      <div className="loader-corner bl"></div>
      <div className="loader-corner br"></div>

      <div className="loader-name" aria-label="Sarthak">
        <span className="loader-letter" style={{ animationDelay: '0.15s' }}>S</span>
        <span className="loader-letter" style={{ animationDelay: '0.27s' }}>A</span>
        <span className="loader-letter" style={{ animationDelay: '0.39s' }}>R</span>
        <span className="loader-letter" style={{ animationDelay: '0.51s' }}>T</span>
        <span className="loader-letter" style={{ animationDelay: '0.63s' }}>H</span>
        <span className="loader-letter" style={{ animationDelay: '0.75s' }}>A</span>
        <span className="loader-letter" style={{ animationDelay: '0.87s' }}>K</span>
      </div>

      <div className="loader-counter-wrap">
        <div className="loader-counter-bar"></div>
        <div className="loader-counter" id="loaderCounter" ref={counterRef}>0 0 0</div>
        <div className="loader-counter-bar right"></div>
      </div>

      <div className="loader-bottom-label">Loading Experience</div>
    </div>
  );
}
