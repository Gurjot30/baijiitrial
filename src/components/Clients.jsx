import './Clients.css';

const clients = [
  { name: 'Titan', sector: 'Lifestyle' },
  { name: 'HDFC Bank', sector: 'Finance' },
  { name: 'Samsung', sector: 'Technology' },
  { name: 'Mamaearth', sector: 'FMCG' },
  { name: 'Airtel', sector: 'Telecom' },
  { name: 'Myntra', sector: 'E-Commerce' },
  { name: 'Dabur', sector: 'FMCG' },
  { name: 'Swiggy', sector: 'Food Tech' },
  { name: 'Tata Motors', sector: 'Automotive' },
  { name: 'Axis Bank', sector: 'Finance' },
  { name: 'Big Bazaar', sector: 'Retail' },
  { name: 'Sony LIV', sector: 'OTT' },
  { name: 'Nykaa', sector: 'Beauty' },
  { name: 'Maruti Suzuki', sector: 'Automotive' },
  { name: 'Filmfare', sector: 'Entertainment' },
  { name: 'PVR Cinemas', sector: 'Entertainment' },
];

const industries = [
  { icon: '🏦', label: 'BFSI' },
  { icon: '🛍️', label: 'Retail' },
  { icon: '🎬', label: 'Entertainment' },
  { icon: '📱', label: 'Technology' },
  { icon: '🌿', label: 'FMCG' },
  { icon: '🏎️', label: 'Automotive' },
];

export default function Clients() {
  return (
    <section id="clients" className="clients section-py">
      <div className="clients__bg" />
      <div className="container">
        <div className="clients__header reveal">
          <div className="section-badge" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold-dark)' }}>
            Our Clients
          </div>
          <h2 className="clients__heading">
            Brands That <span className="text-gradient">Trust Us</span>
          </h2>
          <p className="clients__sub">
            A diverse portfolio of India's most iconic brands across industries — each one a testament to our creative impact.
          </p>
        </div>

        {/* Industry chips */}
        <div className="clients__industries reveal delay-2">
          {industries.map((ind) => (
            <div key={ind.label} className="clients__industry">
              <span>{ind.icon}</span>
              <span>{ind.label}</span>
            </div>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="clients__grid reveal-scale delay-3">
          {clients.map((c) => (
            <div key={c.name} className="clients__logo-cell">
              <div className="clients__logo-inner">
                <div className="clients__logo-placeholder">
                  <span className="clients__logo-initial">{c.name.charAt(0)}</span>
                </div>
                <div className="clients__logo-hover">
                  <span className="clients__logo-name">{c.name}</span>
                  <span className="clients__logo-sector">{c.sector}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="clients__note reveal delay-4">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#C9A84C" strokeWidth="1.2"/>
            <path d="M8 5v4M8 11v0" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Logos shown as placeholders. Full portfolio available on request.
        </div>
      </div>
    </section>
  );
}
