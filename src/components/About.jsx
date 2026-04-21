import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-left-content',
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      gsap.fromTo('.about-right-content',
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      gsap.fromTo('.feature-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-features', start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="about-container">
        <div className="about-left-content">
          <div className="section-label">About Us</div>
          <h2 className="section-title">
            CRAFTING<br /><span>STEEL</span><br />EXCELLENCE
          </h2>
          <div className="about-tag">VPS Groups — Est. Aranthangi</div>
        </div>

        <div className="about-right-content">
          <p className="about-text">
            Aravind Industries is a premier steel fabrication works based in Aranthangi, Tamil Nadu. 
            Under the VPS Groups umbrella, we have built a reputation for delivering high-quality 
            fabrication solutions to homes, businesses, and commercial establishments.
          </p>
          <p className="about-text">
            From intricate main gates to robust staircase railings, our craftsmen combine traditional 
            metalworking expertise with modern techniques to deliver lasting quality.
          </p>

          <div className="about-address">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Opposite to Aranthangi Court, L.N.Puram, Aranthangi – 614 616
          </div>
        </div>
      </div>

      <div className="about-features">
        {[
          { icon: '🔧', title: 'Expert Craftsmen', desc: 'Skilled fabricators with decades of hands-on experience' },
          { icon: '⚡', title: 'Fast Delivery', desc: 'On-time project completion without compromising quality' },
          { icon: '🛡️', title: 'Premium Materials', desc: 'Only the finest grade steel and aluminium used' },
          { icon: '💰', title: 'Best Pricing', desc: 'Competitive rates for all types of fabrication work' },
        ].map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
