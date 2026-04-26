import './CommunicationModel.css';

const truths = [
  {
    letter: 'C',
    title: 'Consumer Truth',
    subtitle: 'What they feel',
    desc: 'Deep empathy-led research into the real desires, motivations, and behavior patterns of your target audience — beyond demographics.',
    points: ['Psychographic Profiling', 'Behavioral Analytics', 'Ethnographic Research', 'Journey Mapping'],
    color: '#C9A84C',
  },
  {
    letter: 'C',
    title: 'Category Truth',
    subtitle: 'What the market says',
    desc: 'A rigorous audit of the competitive landscape, category conventions, and the white spaces that your brand can uniquely own.',
    points: ['Competitive Audit', 'Category Conventions', 'Whitespace Identification', 'Trend Analysis'],
    color: '#1ECBE1',
  },
  {
    letter: 'C',
    title: 'Client Truth',
    subtitle: 'What you stand for',
    desc: 'Uncovering and articulating your brand\'s authentic purpose, heritage, values, and the genuine promise you can deliver.',
    points: ['Brand Purpose', 'Core Values', 'Heritage & Legacy', 'Promise Architecture'],
    color: '#7C3AED',
  },
];

export default function CommunicationModel() {
  return (
    <section id="model" className="comm section-py">
      <div className="comm__bg" />
      <div className="container">
        <div className="comm__header reveal">
          <div className="section-badge">Framework</div>
          <h2 className="comm__heading">
            The <span className="text-gradient">3C Model</span>
          </h2>
          <p className="comm__sub">
            Our proprietary communication framework that sits at the intersection of three fundamental brand truths — the blueprint of every campaign we create.
          </p>
        </div>

        {/* Venn-style visual */}
        <div className="comm__venn-wrap reveal delay-2">
          <div className="comm__venn">
            {truths.map((t) => (
              <div key={t.title} className="comm__venn-circle" style={{ '--c-color': t.color }}>
                <span className="comm__venn-letter">{t.letter}</span>
              </div>
            ))}
            <div className="comm__venn-center">
              <span>Brand</span>
              <span>Insight</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="comm__grid">
          {truths.map((t, i) => (
            <div key={t.title} className={`comm__card reveal delay-${i + 1}`} style={{ '--c-color': t.color }}>
              <div className="comm__card-letter">{t.letter}</div>
              <div className="comm__card-content">
                <div className="comm__card-subtitle">{t.subtitle}</div>
                <h3 className="comm__card-title">{t.title}</h3>
                <p className="comm__card-desc">{t.desc}</p>
                <ul className="comm__card-points">
                  {t.points.map((p) => (
                    <li key={p} className="comm__card-point">
                      <span className="comm__point-arrow">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="comm__card-glow" />
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="comm__tagline reveal delay-4">
          <div className="comm__tagline-line" />
          <p>When all three truths converge, <strong>great communication</strong> happens.</p>
          <div className="comm__tagline-line" />
        </div>
      </div>
    </section>
  );
}
