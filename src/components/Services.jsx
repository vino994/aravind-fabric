import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'Main Gates',
    desc: 'Custom-designed steel main gates with intricate patterns, maximum security, and long-lasting finish for your home and commercial spaces.',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="15" width="22" height="35" rx="1"/>
        <rect x="33" y="15" width="22" height="35" rx="1"/>
        <line x1="5" y1="25" x2="27" y2="25"/>
        <line x1="5" y1="35" x2="27" y2="35"/>
        <line x1="16" y1="15" x2="16" y2="50"/>
        <line x1="33" y1="25" x2="55" y2="25"/>
        <line x1="33" y1="35" x2="55" y2="35"/>
        <line x1="44" y1="15" x2="44" y2="50"/>
        <circle cx="30" cy="32" r="3"/>
      </svg>
    ),
    color: '#E8500A'
  },
  {
    id: '02',
    title: 'Windows & Doors',
    desc: 'Stylish and durable steel and aluminium windows and doors. Built to withstand weather while enhancing aesthetics.',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="44" height="44" rx="2"/>
        <line x1="30" y1="8" x2="30" y2="52"/>
        <line x1="8" y1="30" x2="52" y2="30"/>
        <rect x="12" y="12" width="14" height="14" rx="1" strokeDasharray="3 2"/>
        <rect x="34" y="12" width="14" height="14" rx="1" strokeDasharray="3 2"/>
      </svg>
    ),
    color: '#FF6B2B'
  },
  {
    id: '03',
    title: 'Staircase Railings',
    desc: 'Elegant stainless steel and MS staircase railings designed for safety and style in residential and commercial buildings.',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 52 L8 35 L22 35 L22 22 L36 22 L36 10 L52 10"/>
        <path d="M8 45 L8 35" strokeWidth="3"/>
        <path d="M22 45 L22 35" strokeWidth="3"/>
        <path d="M36 32 L36 22" strokeWidth="3"/>
        <line x1="8" y1="35" x2="22" y2="35"/>
        <line x1="22" y1="22" x2="36" y2="22"/>
        <line x1="36" y1="10" x2="52" y2="10"/>
      </svg>
    ),
    color: '#C23D00'
  },
  {
    id: '04',
    title: 'Balcony Railings',
    desc: 'Premium balcony railing systems combining beauty with strength — available in SS, MS, and titanium finishes.',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="5" y1="20" x2="55" y2="20" strokeWidth="2.5"/>
        <line x1="5" y1="50" x2="55" y2="50" strokeWidth="2.5"/>
        <line x1="12" y1="20" x2="12" y2="50"/>
        <line x1="20" y1="20" x2="20" y2="50"/>
        <line x1="28" y1="20" x2="28" y2="50"/>
        <line x1="36" y1="20" x2="36" y2="50"/>
        <line x1="44" y1="20" x2="44" y2="50"/>
        <circle cx="12" cy="35" r="2" fill="currentColor"/>
        <circle cx="28" cy="35" r="2" fill="currentColor"/>
        <circle cx="44" cy="35" r="2" fill="currentColor"/>
      </svg>
    ),
    color: '#E8500A'
  },
  {
    id: '05',
    title: 'Aluminium & UPVC',
    desc: 'Modern aluminium and UPVC partitions, doors, and windows — lightweight, corrosion-resistant, and thermally efficient.',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="8" width="22" height="44" rx="2"/>
        <rect x="33" y="8" width="22" height="44" rx="2"/>
        <line x1="16" y1="8" x2="16" y2="52"/>
        <line x1="44" y1="8" x2="44" y2="52"/>
        <line x1="5" y1="30" x2="27" y2="30"/>
        <line x1="33" y1="30" x2="55" y2="30"/>
        <circle cx="28" cy="30" r="2" fill="currentColor"/>
        <circle cx="32" cy="30" r="2" fill="currentColor"/>
      </svg>
    ),
    color: '#FF6B2B'
  },
  {
    id: '06',
    title: 'Titanium Gold Works',
    desc: 'Premium titanium gold coat signboards, name boards, and decorative metalwork that make a bold statement.',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M30 8 L52 18 L52 42 L30 52 L8 42 L8 18 Z"/>
        <path d="M30 15 L45 22 L45 38 L30 45 L15 38 L15 22 Z" opacity="0.5"/>
        <text x="30" y="33" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold" stroke="none">GOLD</text>
      </svg>
    ),
    color: '#C23D00'
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-header',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      gsap.fromTo('.service-card',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.services-grid', start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="services-section">
      <div className="services-header">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">OUR <span>SERVICES</span></h2>
        <p className="services-intro">
          Complete steel and aluminium fabrication solutions for every need
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div
            key={i}
            className={`service-card ${active === i ? 'active' : ''}`}
            onMouseEnter={() => setActive(i)}
          >
            <div className="service-num">{s.id}</div>
            <div className="service-icon" style={{ color: s.color }}>
              {s.icon}
            </div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <div className="service-arrow" style={{ color: s.color }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <div className="service-line" style={{ background: s.color }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
