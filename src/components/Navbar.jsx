import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
    );

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Gallery', 'Contact'];

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <svg width="32" height="32" viewBox="0 0 100 100">
          <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="#E8500A" strokeWidth="3"/>
          <polygon points="50,20 80,50 50,80 20,50" fill="#E8500A" opacity="0.3"/>
          <line x1="50" y1="5" x2="50" y2="95" stroke="#E8500A" strokeWidth="1.5" opacity="0.6"/>
          <line x1="5" y1="50" x2="95" y2="50" stroke="#E8500A" strokeWidth="1.5" opacity="0.6"/>
          <line x1="50" y1="5" x2="80" y2="50" stroke="white" strokeWidth="1" opacity="0.4"/>
          <line x1="50" y1="5" x2="20" y2="50" stroke="white" strokeWidth="1" opacity="0.4"/>
        </svg>
        <div className="nav-logo-text">
          <span className="brand-main">ARAVIND</span>
          <span className="brand-sub">INDUSTRIES</span>
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <li key={i}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              <span className="link-num">0{i + 1}</span>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">Get Quote</a>

      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
};

export default Navbar;
