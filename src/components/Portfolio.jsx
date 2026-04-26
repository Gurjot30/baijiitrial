import { useState, useEffect, useRef, useCallback } from 'react';
import './Portfolio.css';

const categories = [
  {
    id: 'films',
    label: 'Films',
    icon: '🎬',
    slides: [
      { title: 'Brand Film — Titan Watches', year: '2024', type: 'TVC · 60s', color: '#1a0f02', accent: '#C9A84C' },
      { title: 'Corporate Film — HDFC Bank', year: '2023', type: 'Corporate · 4min', color: '#020d1a', accent: '#1ECBE1' },
      { title: 'Product Launch — Samsung Galaxy', year: '2024', type: 'Launch Film · 90s', color: '#0d021a', accent: '#7C3AED' },
      { title: 'Social Campaign — Swiggy', year: '2023', type: 'Digital Film · 30s', color: '#1a0204', accent: '#E84393' },
    ],
  },
  {
    id: 'digital',
    label: 'Digital',
    icon: '📱',
    slides: [
      { title: 'Social Media Campaign — Nykaa', year: '2024', type: 'Instagram · Reels', color: '#020d1a', accent: '#1ECBE1' },
      { title: 'Performance Campaign — Myntra', year: '2024', type: 'Google · Meta Ads', color: '#0a1a02', accent: '#4ADE80' },
      { title: 'Influencer Integration — Mamaearth', year: '2023', type: 'UGC · Influencer', color: '#1a0f02', accent: '#C9A84C' },
      { title: 'Email & WhatsApp — Axis Bank', year: '2023', type: 'CRM · Retention', color: '#0d021a', accent: '#7C3AED' },
    ],
  },
  {
    id: 'print',
    label: 'Print & Packaging',
    icon: '🖨️',
    slides: [
      { title: 'Brand Packaging — Dabur Honey', year: '2024', type: 'FMCG · Packaging', color: '#1a0f02', accent: '#C9A84C' },
      { title: 'OOH Campaign — Airtel 5G', year: '2024', type: 'Billboard · DOOH', color: '#020d1a', accent: '#1ECBE1' },
      { title: 'Magazine Campaign — Tata Motors', year: '2023', type: 'Print · Automotive', color: '#1a0204', accent: '#E84393' },
      { title: 'Retail Identity — Big Bazaar', year: '2023', type: 'Retail Design', color: '#0d021a', accent: '#7C3AED' },
    ],
  },
];

function PortfolioSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 3500);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 3500);
  };

  return (
    <div className="pf-slider">
      <div className="pf-slider__track">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`pf-slide ${i === current ? 'pf-slide--active' : i === (current - 1 + slides.length) % slides.length ? 'pf-slide--prev' : ''}`}
            style={{ '--slide-color': slide.color, '--slide-accent': slide.accent }}
          >
            {/* Placeholder Art */}
            <div className="pf-slide__art">
              <div className="pf-slide__art-bg" />
              <div className="pf-slide__art-grid">
                {Array.from({ length: 9 }).map((_, j) => (
                  <div key={j} className="pf-slide__art-cell" />
                ))}
              </div>
              <div className="pf-slide__art-text">
                <span className="pf-slide__art-label">CAMPAIGN PORTFOLIO</span>
                <span className="pf-slide__art-icon">✦</span>
              </div>
              <div className="pf-slide__art-frame" />
            </div>

            <div className="pf-slide__info">
              <span className="pf-slide__type">{slide.type}</span>
              <h4 className="pf-slide__title">{slide.title}</h4>
              <span className="pf-slide__year">{slide.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="pf-slider__controls">
        <button className="pf-slider__btn" onClick={() => { prev(); resetTimer(); }} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <div className="pf-slider__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`pf-slider__dot ${i === current ? 'active' : ''}`}
              onClick={() => { setCurrent(i); resetTimer(); }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button className="pf-slider__btn" onClick={() => { next(); resetTimer(); }} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="pf-slider__progress">
        <div className="pf-slider__progress-fill" key={current} />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('films');
  const cat = categories.find((c) => c.id === activeCategory);

  return (
    <section id="portfolio" className="portfolio section-py">
      <div className="portfolio__bg" />
      <div className="container">
        {/* Header */}
        <div className="portfolio__header reveal">
          <div className="section-badge">Portfolio</div>
          <h2 className="portfolio__heading">
            Our Creative <span className="text-gradient">Work</span>
          </h2>
          <p className="portfolio__sub">
            A curated showcase of campaigns that moved markets, shifted perceptions, and built lasting brand equity.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="portfolio__tabs reveal delay-2">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`portfolio__tab ${activeCategory === c.id ? 'portfolio__tab--active' : ''}`}
              onClick={() => setActiveCategory(c.id)}
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="portfolio__slider-wrap reveal-scale delay-3">
          <PortfolioSlider key={activeCategory} slides={cat.slides} />
        </div>

        {/* CTA */}
        <div className="portfolio__cta-wrap reveal delay-4">
          <p className="portfolio__cta-text">Want to see the full portfolio?</p>
          <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Request Credentials
          </a>
        </div>
      </div>
    </section>
  );
}
