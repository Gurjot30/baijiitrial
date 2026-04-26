import './FilmEntertainment.css';

const films = [
  { title: 'Brand Integration', brand: 'Bollywood Film XYZ', type: 'Product Placement', desc: 'Seamless brand integration in a major Bollywood blockbuster reaching 40M+ viewers.', icon: '🎥' },
  { title: 'Celebrity Endorsement', brand: 'A-List Actor Campaign', type: 'TVC Series', desc: 'A six-film TVC series featuring India\'s top celebrity, driving 280% brand awareness lift.', icon: '⭐' },
  { title: 'Music Video Integration', brand: 'Bollywood Music Label', type: 'Brand Collab', desc: 'Co-branded music video featuring top artists that garnered 12M+ YouTube views in 72 hours.', icon: '🎵' },
  { title: 'OTT Series Partnership', brand: 'Major OTT Platform', type: 'Sponsored Content', desc: 'Title sponsorship of a premium web series, driving brand salience among urban millennials.', icon: '📺' },
  { title: 'Award Show Activation', brand: 'Filmfare Awards', type: 'On-Ground + Digital', desc: 'End-to-end brand presence at India\'s most prestigious film awards — reaching 35M+ viewers.', icon: '🏆' },
  { title: 'Sports x Entertainment', brand: 'IPL Season Campaign', type: 'Cross-Platform', desc: 'Multi-crore IPL campaign combining stadium branding, digital amplification, and celebrity activation.', icon: '🏏' },
];

export default function FilmEntertainment() {
  return (
    <section id="entertainment" className="film section-py">
      <div className="film__bg" />
      <div className="container">
        <div className="film__header reveal">
          <div className="section-badge">Film & Entertainment</div>
          <h2 className="film__heading">
            Where Brands Meet <span className="text-gradient">Bollywood</span>
          </h2>
          <p className="film__sub">
            Exclusive access to Bollywood's creative ecosystem — integrations, endorsements, and co-productions that place your brand at the centre of Indian culture.
          </p>
        </div>

        <div className="film__grid">
          {films.map((f, i) => (
            <div key={f.title} className={`film__card reveal delay-${(i % 3) + 1}`}>
              <div className="film__card-top">
                <div className="film__icon">{f.icon}</div>
                <span className="tag">{f.type}</span>
              </div>
              <div className="film__brand">{f.brand}</div>
              <h3 className="film__card-title">{f.title}</h3>
              <p className="film__card-desc">{f.desc}</p>
              <div className="film__card-cine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
