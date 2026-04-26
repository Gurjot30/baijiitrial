import './About.css';

const pillars = [
  { icon: '🎯', title: 'Brand Building', desc: 'We craft identities that resonate, connect, and endure across every touchpoint.' },
  { icon: '💡', title: 'Creative Strategy', desc: 'Data-driven ideas fused with storytelling to move audiences and shift markets.' },
  { icon: '🎬', title: 'Film & Content', desc: 'From script to screen — cinematic production that makes brands unforgettable.' },
  { icon: '📡', title: 'Media Excellence', desc: 'Precision media planning, buying, and analytics for maximum impact.' },
];

export default function About() {
  return (
    <section id="about" className="about section-py">
      <div className="about__bg-shape" />
      <div className="container">
        <div className="about__grid">
          {/* Left Visual */}
          <div className="about__visual reveal-left">
            <div className="about__visual-card about__visual-card--main">
              <div className="about__visual-art">
                <div className="about__rings">
                  <div className="about__ring about__ring--1" />
                  <div className="about__ring about__ring--2" />
                  <div className="about__ring about__ring--3" />
                  <div className="about__ring-core">
                    <span className="about__ring-icon">✦</span>
                  </div>
                </div>
              </div>
              <div className="about__visual-badge">
                <span className="about__visual-badge-num">15+</span>
                <span className="about__visual-badge-txt">Years of Excellence</span>
              </div>
            </div>

            <div className="about__visual-card about__visual-card--delhi">
              <span className="about__city-icon">🏛️</span>
              <div>
                <div className="about__city-name">New Delhi</div>
                <div className="about__city-label">Head Office</div>
              </div>
            </div>

            <div className="about__visual-card about__visual-card--mumbai">
              <span className="about__city-icon">🎬</span>
              <div>
                <div className="about__city-name">Mumbai</div>
                <div className="about__city-label">Production Hub</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="about__content">
            <div className="section-badge reveal delay-1">About Baiji</div>
            <h2 className="about__heading reveal delay-2">
              Full‑Service Creative Agency<br />
              <em>Redefining Brand Narratives</em>
            </h2>
            <div className="gold-line reveal delay-3" />

            <p className="about__para reveal delay-3">
              <strong>Baiji Entertainments</strong> is a premier full-service creative advertising and entertainment agency headquartered in <strong>New Delhi</strong>, with a production hub in <strong>Mumbai</strong>. We bridge the gap between brand ambition and consumer reality through intelligent, innovative storytelling.
            </p>
            <p className="about__para reveal delay-4">
              Our multidisciplinary team of strategists, creatives, filmmakers, and media experts work in unison to deliver campaigns that don't just communicate — they connect, convert, and captivate. From a startup's first campaign to a multinational's rebranding, we bring the same relentless pursuit of excellence.
            </p>

            <div className="about__pillars reveal delay-5">
              {pillars.map((p) => (
                <div key={p.title} className="about__pillar">
                  <span className="about__pillar-icon">{p.icon}</span>
                  <div>
                    <div className="about__pillar-title">{p.title}</div>
                    <div className="about__pillar-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
