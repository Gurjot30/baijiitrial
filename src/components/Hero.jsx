import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    particles.current = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.current.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
      });
      // Draw connecting lines
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(201,168,76,${0.08 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  const handleScroll = () => {
    const about = document.querySelector('#about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Animated Canvas */}
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Gradient Overlays */}
      <div className="hero__bg" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />
      <div className="hero__noise" />

      {/* Content */}
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Est. Delhi &amp; Mumbai · Since 2015
        </div>

        <h1 className="hero__heading">
          <span className="hero__heading-line hero__heading-line--1">A Step to</span>
          <span className="hero__heading-line hero__heading-line--2 text-gradient">Brand Building</span>
        </h1>

        <p className="hero__sub">
          Creative Strategy &nbsp;·&nbsp; Media &nbsp;·&nbsp; Film &nbsp;·&nbsp; Celebrity Management
        </p>

        <div className="hero__ctas">
          <a
            href="#contact"
            className="btn btn-gold hero__cta-main"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            <span>Work With Us</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="#portfolio"
            className="btn btn-outline hero__cta-sec"
            onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            View Our Work
          </a>
        </div>

        <div className="hero__stats">
          {[
            { val: '200+', label: 'Brand Campaigns' },
            { val: '50+', label: 'Films Produced' },
            { val: '15+', label: 'Years Experience' },
            { val: '100+', label: 'Clients Served' },
          ].map((s) => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-val">{s.val}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="hero__scroll" onClick={handleScroll} aria-label="Scroll down">
        <span className="hero__scroll-line" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M5 11l5 5 5-5" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Tagline strip */}
      <div className="hero__ticker">
        <div className="hero__ticker-inner">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="hero__ticker-text">
              Creative Strategy &nbsp;&nbsp;·&nbsp;&nbsp; Media Buying &nbsp;&nbsp;·&nbsp;&nbsp; Film Production &nbsp;&nbsp;·&nbsp;&nbsp; Celebrity Management &nbsp;&nbsp;·&nbsp;&nbsp; Digital Marketing &nbsp;&nbsp;·&nbsp;&nbsp; Brand Innovation &nbsp;&nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
