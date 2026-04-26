import { useState } from 'react';
import './Footer.css';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Director', href: '#director' },
  { label: 'Clients', href: '#clients' },
];

const services = [
  'Creative Strategy',
  'Media Buying',
  'Film Production',
  'Digital Marketing',
  'PR & Events',
  'Celebrity Management',
];

const socials = [
  { label: 'Instagram', href: '#', icon: (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
  )},
  { label: 'LinkedIn', href: '#', icon: (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8"/><path d="M7 10v7M7 7v0M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
  )},
  { label: 'YouTube', href: '#', icon: (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.8"/><path d="M10 9l5 3-5 3V9z" fill="currentColor"/></svg>
  )},
  { label: 'Twitter / X', href: '#', icon: (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
  )},
];

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="footer">
      {/* Contact Section */}
      <div className="footer__contact section-py">
        <div className="container">
          <div className="footer__contact-grid">
            {/* Contact Form */}
            <div className="footer__form-wrap reveal-left">
              <div className="section-badge">Get In Touch</div>
              <h2 className="footer__form-heading">
                Start a Conversation
              </h2>
              <p className="footer__form-sub">Tell us about your brand and we'll get back within 24 hours.</p>

              {submitted ? (
                <div className="footer__success">
                  <div className="footer__success-icon">✓</div>
                  <h3>Message Received!</h3>
                  <p>Our team will reach out to you shortly. Thank you for choosing Baiji Entertainments.</p>
                </div>
              ) : (
                <form className="footer__form" onSubmit={handleSubmit}>
                  <div className="footer__form-row">
                    <div className="footer__form-group">
                      <label className="footer__label" htmlFor="contact-name">Full Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        className="footer__input"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      />
                    </div>
                    <div className="footer__form-group">
                      <label className="footer__label" htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        type="email"
                        className="footer__input"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="footer__form-group">
                    <label className="footer__label" htmlFor="contact-phone">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="footer__input"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    />
                  </div>
                  <div className="footer__form-group">
                    <label className="footer__label" htmlFor="contact-msg">Your Message</label>
                    <textarea
                      id="contact-msg"
                      className="footer__input footer__textarea"
                      placeholder="Tell us about your project, brand, and goals..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    />
                  </div>
                  <button type="submit" className="btn btn-gold footer__submit">
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Map + Info */}
            <div className="footer__info-wrap reveal-right">
              {/* Map */}
              <div className="footer__map">
                <iframe
                  title="Baiji Entertainments - Delhi Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="footer__map-overlay">
                  <span className="footer__map-pin">📍</span>
                  <span>New Delhi, India</span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="footer__contact-details">
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">📍</div>
                  <div>
                    <div className="footer__contact-title">Head Office</div>
                    <div className="footer__contact-val">Connaught Place, New Delhi – 110001</div>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">🏢</div>
                  <div>
                    <div className="footer__contact-title">Production Hub</div>
                    <div className="footer__contact-val">Andheri West, Mumbai – 400053</div>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">📞</div>
                  <div>
                    <div className="footer__contact-title">Call Us</div>
                    <a href="tel:+911234567890" className="footer__contact-val footer__contact-link">+91 12345 67890</a>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">✉️</div>
                  <div>
                    <div className="footer__contact-title">Email</div>
                    <a href="mailto:hello@baijienterainments.com" className="footer__contact-val footer__contact-link">hello@baijientertainments.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="footer__logo-mark">B</span>
                <div>
                  <div className="footer__logo-name">BAIJI ENTERTAINMENTS</div>
                  <div className="footer__logo-tagline">Creative Strategy · Media · Film · Celebrity Management</div>
                </div>
              </div>
              <div className="footer__socials">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className="footer__social" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__links-col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }} className="footer__link">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer__links-col">
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__links">
                {services.map((s) => (
                  <li key={s}>
                    <span className="footer__link">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer__copyright">
            <span>© {new Date().getFullYear()} Baiji Entertainments. All rights reserved.</span>
            <span className="footer__copyright-sep">·</span>
            <span>Delhi & Mumbai, India</span>
            <span className="footer__copyright-sep">·</span>
            <span>Designed with ✦ by Baiji Creative Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
