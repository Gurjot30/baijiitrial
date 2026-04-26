import './Director.css';

const achievements = [
  { icon: '🎓', label: 'MBA Marketing', sub: 'IIM Ahmedabad Alumni' },
  { icon: '🏆', label: '20+ Awards', sub: 'National & International' },
  { icon: '🎬', label: '50+ Films', sub: 'Directed & Produced' },
  { icon: '🌍', label: 'Global Exposure', sub: 'Cannes, Spikes Asia' },
];

const credentials = [
  'Former Creative Director at Ogilvy India',
  'Jury Member — Effie Awards India 2022, 2023',
  'Speaker — FICCI Frames & Goafest',
  'Brand strategist for 3 Fortune 500 companies',
  'Co-author of "Brand India 2030" whitepaper',
  'Mentor — NASSCOM & iStart Rajasthan',
];

export default function Director() {
  return (
    <section id="director" className="director section-py">
      <div className="director__bg" />
      <div className="container">
        <div className="director__grid">
          {/* Left: Profile Visual */}
          <div className="director__visual reveal-left">
            <div className="director__photo-wrap">
              {/* Artistic placeholder portrait */}
              <div className="director__photo">
                <div className="director__photo-art">
                  <div className="director__photo-gradient" />
                  <div className="director__photo-initials">DS</div>
                  <div className="director__photo-tag">Founder & Creative Director</div>
                </div>
              </div>
              <div className="director__photo-frame director__photo-frame--1" />
              <div className="director__photo-frame director__photo-frame--2" />
            </div>

            {/* Achievement cards */}
            <div className="director__achievements">
              {achievements.map((a) => (
                <div key={a.label} className="director__achievement">
                  <span className="director__ach-icon">{a.icon}</span>
                  <div>
                    <div className="director__ach-label">{a.label}</div>
                    <div className="director__ach-sub">{a.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="director__content">
            <div className="section-badge reveal">Founder's Note</div>

            <div className="director__name-wrap reveal delay-1">
              <h2 className="director__name">Divyanshu Sharma</h2>
              <span className="director__role">Founder & Creative Director</span>
            </div>

            <div className="gold-line reveal delay-2" />

            <blockquote className="director__quote reveal delay-2">
              "Great advertising is not about selling products — it's about selling beliefs. At Baiji, we believe every brand has a story waiting to be told with courage, craft, and conviction."
            </blockquote>

            <p className="director__bio reveal delay-3">
              With over <strong>15 years</strong> of experience spanning multinational agencies, independent production houses, and brand consulting, Divyanshu Sharma founded Baiji Entertainments with a singular vision — to create work that India is proud of.
            </p>
            <p className="director__bio reveal delay-3">
              His work has been recognized at <strong>Cannes Lions, Spikes Asia, Effie India</strong>, and the <strong>Goafest</strong>. He has led campaigns for brands across FMCG, Automotive, Technology, and Entertainment — always with a relentless focus on consumer truth and creative bravery.
            </p>

            <div className="director__credentials reveal delay-4">
              <h4 className="director__cred-title">Key Credentials</h4>
              <ul className="director__cred-list">
                {credentials.map((c) => (
                  <li key={c} className="director__cred-item">
                    <span className="director__cred-dot">✦</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
