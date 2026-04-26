import './CTA.css';

export default function CTA() {
  return (
    <section id="cta" className="cta section-py">
      <div className="cta__orb cta__orb--1" />
      <div className="cta__orb cta__orb--2" />
      <div className="cta__noise" />

      <div className="container">
        <div className="cta__inner reveal">
          <div className="cta__badge">Let's Talk Business</div>

          <h2 className="cta__heading">
            Let's Build Your<br />
            <span className="cta__heading-accent">Brand Together</span>
          </h2>

          <p className="cta__sub">
            Whether you're launching a startup or reinventing an established brand, we bring the strategy, creativity, and execution to make it unforgettable.
          </p>

          <div className="cta__actions">
            <a
              href="#contact"
              className="btn btn-gold cta__btn-main"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <span>Start a Project</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M9 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="tel:+911234567890" className="btn btn-outline cta__btn-sec">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 10.6c-.9-.1-1.8-.3-2.6-.6-.3-.1-.6 0-.8.2l-1.1 1.4C7.8 10.8 6.2 9.2 5.4 7.5l1.4-1.1c.2-.2.3-.5.2-.8-.3-.8-.5-1.7-.6-2.6C6.3 2.6 5.7 2 5 2H2.5C1.7 2 1 2.7 1.1 3.5 1.5 8.6 8.4 14.5 13.5 14.9c.8.1 1.5-.6 1.5-1.4V11.6c0-.6-.6-1-1-1z" fill="currentColor"/>
              </svg>
              Call Us Now
            </a>
          </div>

          <div className="cta__stats">
            {[
              { val: '24hrs', label: 'Response Time' },
              { val: 'Free', label: 'Initial Consultation' },
              { val: 'NDA', label: 'Protected Briefs' },
            ].map((s) => (
              <div key={s.label} className="cta__stat">
                <span className="cta__stat-val">{s.val}</span>
                <span className="cta__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
