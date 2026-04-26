import './Process.css';

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Research',
    desc: 'Deep-dive into consumer behavior, competitive landscape, and cultural context to uncover insights that fuel strategy.',
    tools: ['Consumer Surveys', 'Focus Groups', 'Social Listening', 'Data Mining'],
  },
  {
    num: '02',
    icon: '🧩',
    title: 'Strategy',
    desc: 'Translating raw insights into a coherent brand and communication strategy — the roadmap for everything that follows.',
    tools: ['Brand Architecture', 'Positioning', 'Channel Mix', 'KPI Framework'],
  },
  {
    num: '03',
    icon: '💡',
    title: 'Ideation',
    desc: 'Blue-sky creative sessions merge with strategic guardrails to produce big ideas that are bold, original, and on-brand.',
    tools: ['Creative Sprints', 'Mood Boards', 'Concept Testing', 'Storyboarding'],
  },
  {
    num: '04',
    icon: '🎬',
    title: 'Execution',
    desc: 'From pre-production to final delivery — flawless execution across every medium with obsessive attention to craft.',
    tools: ['Film Production', 'Media Booking', 'Design Delivery', 'QA Checks'],
  },
  {
    num: '05',
    icon: '📊',
    title: 'Analytics',
    desc: 'Real-time performance tracking and post-campaign analysis to measure impact, learn, and continuously optimize.',
    tools: ['GRP Analysis', 'Digital Metrics', 'Brand Studies', 'ROI Reporting'],
  },
];

export default function Process() {
  return (
    <section id="process" className="process section-py">
      <div className="process__bg" />
      <div className="container">
        <div className="process__header reveal">
          <div className="section-badge">How We Work</div>
          <h2 className="process__heading">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="process__sub">
            Five disciplined phases, working in harmony, to take your brand from insight to impact.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, i) => (
            <div key={step.num} className={`process__step reveal delay-${i + 1}`}>
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="process__connector">
                  <div className="process__connector-line" />
                  <svg className="process__connector-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}

              <div className="process__step-card">
                <div className="process__step-icon-wrap">
                  <div className="process__step-icon">{step.icon}</div>
                  <div className="process__step-num">{step.num}</div>
                </div>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.desc}</p>
                <div className="process__step-tools">
                  {step.tools.map((t) => (
                    <span key={t} className="process__step-tool">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
