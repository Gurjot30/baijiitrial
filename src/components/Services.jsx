import './Services.css';

const services = [
  {
    icon: '🎯',
    title: 'Creative Strategy & Planning',
    desc: 'Consumer insight-driven campaigns built on research, positioning, and messaging architecture that competes and wins.',
    features: ['Brand Positioning', 'Campaign Architecture', 'Competitive Analysis', 'Messaging Strategy'],
  },
  {
    icon: '📺',
    title: 'Media Strategy & Buying',
    desc: 'Precision media planning across TV, OOH, Print, Radio and Digital — maximizing GRPs, reach, and ROI.',
    features: ['GRP Planning', 'Media Buying', 'OOH & Print', 'Radio & TV Spots'],
  },
  {
    icon: '🎬',
    title: 'Film Production & Motion',
    desc: 'From concept to final cut — TVCs, corporate films, brand documentaries, social reels, and animated content.',
    features: ['TVC Production', 'Corporate Films', 'Brand Documentaries', 'Motion Graphics'],
  },
  {
    icon: '📱',
    title: 'Digital Marketing & Design',
    desc: 'Performance marketing, social media, SEO/SEM, and creative design that drives traffic, leads, and sales.',
    features: ['Social Media', 'Performance Ads', 'SEO & SEM', 'UI/UX Design'],
  },
  {
    icon: '🎙️',
    title: 'PR & Event Design',
    desc: 'Crafting brand narratives through media relations, press, influencer engagement, and immersive brand experiences.',
    features: ['Media Relations', 'Press Releases', 'Event Curation', 'Brand Activations'],
  },
  {
    icon: '⭐',
    title: 'Celebrity Management',
    desc: 'Connecting brands with the right talent — from endorsements and brand ambassadors to on-screen integrations.',
    features: ['Brand Ambassadors', 'Bollywood Tie-ups', 'Endorsements', 'Licensing Deals'],
  },
  {
    icon: '🏅',
    title: 'Sports Marketing',
    desc: 'Leveraging India\'s sports passion — IPL integrations, jersey sponsorships, and athlete partnerships.',
    features: ['IPL Campaigns', 'Athlete Partnerships', 'Sports Sponsorship', 'Fan Engagement'],
  },
];

export default function Services() {
  return (
    <section id="services" className="services section-py">
      <div className="services__bg" />
      <div className="container">
        <div className="services__header reveal">
          <div className="section-badge">What We Do</div>
          <h2 className="services__heading">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="services__sub">
            A complete ecosystem of creative, media, and entertainment services under one roof.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div key={s.title} className={`services__card reveal delay-${(i % 4) + 1}`}>
              <div className="services__card-header">
                <div className="services__icon">{s.icon}</div>
                <div className="services__card-num">0{i + 1}</div>
              </div>
              <h3 className="services__title">{s.title}</h3>
              <p className="services__desc">{s.desc}</p>
              <ul className="services__features">
                {s.features.map((f) => (
                  <li key={f} className="services__feature">
                    <span className="services__feature-dot" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="services__card-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
