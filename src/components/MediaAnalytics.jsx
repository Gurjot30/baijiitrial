import './MediaAnalytics.css';

const metrics = [
  { label: 'GRP Planning', val: '10,000+', sub: 'GRPs delivered', icon: '📺' },
  { label: 'Media Impressions', val: '500M+', sub: 'Total reach', icon: '👁️' },
  { label: 'Digital Campaigns', val: '120+', sub: 'Campaigns managed', icon: '🖥️' },
  { label: 'ROI Achieved', val: '4.8x', sub: 'Average return', icon: '📈' },
];

const expertise = [
  { title: 'Television Planning', desc: 'Prime-time GRP planning, daypart analysis, and spot scheduling across national and regional channels.', icon: '📺' },
  { title: 'OOH & Print', desc: 'Strategic billboard, hoardings, and print placement with site-level audience data and impact measurement.', icon: '🗺️' },
  { title: 'Digital Ecosystem', desc: 'Full-funnel digital campaigns across Search, Social, Programmatic, YouTube, OTT, and Connected TV.', icon: '🌐' },
  { title: 'Analytics & Reporting', desc: 'Real-time dashboards, brand lift studies, attribution modeling, and post-campaign effectiveness analysis.', icon: '📊' },
];

export default function MediaAnalytics() {
  return (
    <section id="media" className="media section-py">
      <div className="media__bg" />
      <div className="container">
        <div className="media__layout">
          {/* Left */}
          <div className="media__left">
            <div className="section-badge reveal">Media & Analytics</div>
            <h2 className="media__heading reveal delay-1">
              Data-Driven<br />
              <span className="text-gradient">Media Mastery</span>
            </h2>
            <div className="gold-line reveal delay-2" />
            <p className="media__para reveal delay-2">
              Our media practice combines 15+ years of buying power with modern data intelligence — giving your brand the perfect reach at the most efficient cost.
            </p>

            <div className="media__metrics reveal delay-3">
              {metrics.map((m) => (
                <div key={m.label} className="media__metric">
                  <span className="media__metric-icon">{m.icon}</span>
                  <div>
                    <div className="media__metric-val">{m.val}</div>
                    <div className="media__metric-label">{m.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="media__right">
            <div className="media__expertise-grid">
              {expertise.map((e, i) => (
                <div key={e.title} className={`media__expertise-card reveal-right delay-${i + 1}`}>
                  <div className="media__expertise-icon">{e.icon}</div>
                  <h4 className="media__expertise-title">{e.title}</h4>
                  <p className="media__expertise-desc">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
