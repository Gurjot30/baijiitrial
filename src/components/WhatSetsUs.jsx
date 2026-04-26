import './WhatSetsUs.css';

const differentiators = [
  {
    number: '01',
    icon: '🧠',
    title: 'Smart Thinking & Treatment',
    desc: 'We go beyond the brief — combining consumer psychology, cultural insight, and data analytics to craft campaigns that cut through noise.',
    tags: ['Consumer Insight', 'Research', 'Strategy'],
  },
  {
    number: '02',
    icon: '🔬',
    title: 'Innovation & Transparency',
    desc: 'We embrace emerging technologies and new media formats, always keeping you in the loop with honest reporting and open communication.',
    tags: ['Innovation', 'Open Reporting', 'Honesty'],
  },
  {
    number: '03',
    icon: '✂️',
    title: 'Custom Solutions',
    desc: 'No templates. No cookie-cutter campaigns. Every brand gets a bespoke strategy crafted from scratch around their unique goals.',
    tags: ['Bespoke', 'Brand-First', 'Tailored'],
  },
  {
    number: '04',
    icon: '🏆',
    title: 'High-Quality Execution',
    desc: 'Our production standards are uncompromising. From storyboard to final delivery, we obsess over every detail that the audience sees.',
    tags: ['Production', 'Premium', 'Detail'],
  },
];

export default function WhatSetsUs() {
  return (
    <section id="difference" className="wsu section-py">
      {/* Light section */}
      <div className="wsu__top">
        <div className="container">
          <div className="wsu__header reveal">
            <div className="section-badge" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
              Our Edge
            </div>
            <h2 className="wsu__heading">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
            <p className="wsu__sub">
              We don't just run campaigns — we build brands, grow audiences, and create lasting impressions across every medium.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="wsu__grid">
          {differentiators.map((item, i) => (
            <div key={item.number} className={`wsu__card reveal delay-${i + 1}`}>
              <div className="wsu__card-num">{item.number}</div>
              <div className="wsu__card-icon">{item.icon}</div>
              <h3 className="wsu__card-title">{item.title}</h3>
              <p className="wsu__card-desc">{item.desc}</p>
              <div className="wsu__card-tags">
                {item.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="wsu__card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
