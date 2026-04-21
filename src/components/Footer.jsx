import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <svg width="40" height="40" viewBox="0 0 100 100">
            <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="#E8500A" strokeWidth="3"/>
            <polygon points="50,20 80,50 50,80 20,50" fill="#E8500A" opacity="0.3"/>
            <line x1="50" y1="5" x2="50" y2="95" stroke="#E8500A" strokeWidth="1.5" opacity="0.6"/>
            <line x1="5" y1="50" x2="95" y2="50" stroke="#E8500A" strokeWidth="1.5" opacity="0.6"/>
          </svg>
          <div>
            <div className="footer-brand-name">ARAVIND INDUSTRIES</div>
            <div className="footer-brand-tag">Steel Fabrication Works — VPS Groups</div>
          </div>
        </div>
        <div className="footer-tagline">
          "Quality Fabrication,<br />Built to Last"
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-mid">
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {['Main Gates', 'Windows & Doors', 'Staircase Railings', 'Balcony Railings', 'Aluminium UPVC', 'Titanium Gold'].map(s => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:9842240224">📞 9842240224</a></li>
            <li><a href="tel:9578468371">📞 9578468371</a></li>
            <li><a href="mailto:aravindindustries21@gmail.com">✉ aravindindustries21@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Location</h4>
          <p className="footer-addr">
            Opposite to Aranthangi Court,<br />
            L.N.Puram, Aranthangi – 614 616,<br />
            Tamil Nadu, India
          </p>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span>© 2026 Aravind Industries. All rights reserved.</span>
        <span className="footer-credit">Part of VPS Groups</span>
      </div>
    </footer>
  );
};

export default Footer;
