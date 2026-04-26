import './SuccessStories.css';

const stories = [
  {
    brand: 'Titan Watches',
    category: 'Brand Film + OOH',
    result: '340% Brand Recall Increase',
    metric: '2.4M+',
    metricLabel: 'Impressions',
    desc: 'A cinematic brand film paired with a nationwide OOH campaign that redefined how Indian consumers perceive luxury timepieces.',
    color: '#C9A84C',
    icon: '⌚',
    year: '2024',
  },
  {
    brand: 'Samsung India',
    category: 'Product Launch · Digital',
    result: '#1 Trending on YouTube India',
    metric: '18M+',
    metricLabel: 'Views',
    desc: 'A high-octane product launch film featuring celebrity integration and 360° digital amplification across all major platforms.',
    color: '#1ECBE1',
    icon: '📱',
    year: '2024',
  },
  {
    brand: 'HDFC Bank',
    category: 'Corporate Communication',
    result: '60% Internal Engagement Lift',
    metric: '500K+',
    metricLabel: 'Employees Reached',
    desc: 'An emotionally resonant corporate film series celebrating HDFC\'s 50-year journey, screened across 200+ offices nationwide.',
    color: '#7C3AED',
    icon: '🏦',
    year: '2023',
  },
  {
    brand: 'Mamaearth',
    category: 'Digital + Influencer',
    result: '5x ROAS on Meta Ads',
    metric: '₹4.2Cr',
    metricLabel: 'Revenue Generated',
    desc: 'A performance-driven digital strategy combining influencer UGC, precision meta targeting, and retargeting funnels.',
    color: '#4ADE80',
    icon: '🌿',
    year: '2023',
  },
];

export default function SuccessStories() {
  return (
    <section id="success" className="success section-py">
      <div className="success__bg" />
      <div className="container">
        <div className="success__header reveal">
          <div className="section-badge">Success Stories</div>
          <h2 className="success__heading">
            Results That <span className="text-gradient">Speak Volumes</span>
          </h2>
          <p className="success__sub">
            Beyond creative excellence — we deliver measurable business impact across every campaign we touch.
          </p>
        </div>

        <div className="success__grid">
          {stories.map((s, i) => (
            <div key={s.brand} className={`success__card reveal delay-${i + 1}`} style={{ '--story-color': s.color }}>
              <div className="success__card-top">
                <div className="success__brand-icon">{s.icon}</div>
                <div className="success__brand-info">
                  <div className="success__brand-name">{s.brand}</div>
                  <div className="success__category">{s.category} · {s.year}</div>
                </div>
              </div>

              <p className="success__desc">{s.desc}</p>

              <div className="success__metrics">
                <div className="success__metric">
                  <span className="success__metric-val">{s.metric}</span>
                  <span className="success__metric-label">{s.metricLabel}</span>
                </div>
                <div className="success__result">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 12L6 8l3 3 5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {s.result}
                </div>
              </div>

              <div className="success__card-bar">
                <div className="success__card-bar-fill" />
              </div>
              <div className="success__card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
