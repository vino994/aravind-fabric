import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const diamondRef = useRef(null);
  const bgLinesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance
      const tl = gsap.timeline({ delay: 0.3 });

      // BG lines
      tl.fromTo('.bg-line', 
        { scaleY: 0, transformOrigin: 'bottom' },
        { scaleY: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out' },
        0
      );

      // Diamond logo
      tl.fromTo(diamondRef.current,
        { scale: 0, rotation: -45, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: 'back.out(1.7)' },
        0.3
      );

      // Title chars
      tl.fromTo('.hero-label',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
        0.6
      );

      tl.fromTo('.title-line',
        { y: 120, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1, stagger: 0.15, ease: 'power4.out' },
        0.7
      );

      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        1.3
      );

      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        1.5
      );

      tl.fromTo('.stat-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
        1.6
      );

      // Floating diamond animation
      gsap.to(diamondRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2
      });

      // Rotating outer ring
      gsap.to('.diamond-ring', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear',
        transformOrigin: 'center center'
      });

      // Scroll indicator bounce
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 3
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="hero">
      {/* Background lines */}
      <div ref={bgLinesRef} className="bg-lines">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-line" style={{ left: `${12.5 * i}%` }} />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="hero-gradient" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-label">
            <span className="label-dot" />
            VPS Groups — Steel Fabrication Works
          </div>

          <div ref={titleRef} className="hero-title">
            <div className="title-overflow">
              <h1 className="title-line">ARAVIND</h1>
            </div>
            <div className="title-overflow">
              <h1 className="title-line orange">INDUSTRIES</h1>
            </div>
            <div className="title-overflow">
              <h2 className="title-line title-sub">STEEL FABRICATION</h2>
            </div>
          </div>

          <p ref={subtitleRef} className="hero-subtitle">
            Premium steel fabrication, aluminium & UPVC solutions crafted with precision. 
            Serving Aranthangi with excellence since inception.
          </p>

          <div ref={ctaRef} className="hero-cta">
            <a href="#contact" className="btn-hero-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 13.7a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Now
            </a>
            <a href="#services" className="btn-hero-outline">
              Our Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div ref={statsRef} className="hero-stats">
            {[
              { num: '500+', label: 'Projects Done' },
              { num: '15+', label: 'Years Experience' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div ref={diamondRef} className="diamond-container">
            {/* Outer rotating ring */}
            <svg className="diamond-ring" viewBox="0 0 400 400" width="400" height="400">
              <circle cx="200" cy="200" r="185" fill="none" stroke="rgba(232,80,10,0.15)" strokeWidth="1" strokeDasharray="8 12"/>
              <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(232,80,10,0.1)" strokeWidth="1" strokeDasharray="4 20"/>
            </svg>
            {/* Main diamond */}
            <svg className="main-diamond" viewBox="0 0 300 300" width="300" height="300">
              <defs>
                <linearGradient id="dg1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF8C42" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#C23D00" stopOpacity="0.9"/>
                </linearGradient>
                <linearGradient id="dg2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E8500A" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#FF6B2B" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              {/* Diamond shape - 4 quadrants */}
              <polygon points="150,10 290,150 150,290 10,150" fill="url(#dg2)" stroke="rgba(232,80,10,0.4)" strokeWidth="1"/>
              {/* Inner facets */}
              <polygon points="150,10 290,150 150,150" fill="url(#dg1)" opacity="0.8"/>
              <polygon points="150,150 290,150 150,290" fill="#C23D00" opacity="0.6"/>
              <polygon points="10,150 150,10 150,150" fill="#FF8C42" opacity="0.5"/>
              <polygon points="150,150 10,150 150,290" fill="#E8500A" opacity="0.4"/>
              {/* Internal lines */}
              {[30,60,90,120].map((a, i) => (
                <line key={i}
                  x1="150" y1="10"
                  x2={150 + 140 * Math.cos((a * Math.PI) / 180)}
                  y2={150 + 140 * Math.sin((a * Math.PI) / 180)}
                  stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"
                />
              ))}
              {[210,240,270,300].map((a, i) => (
                <line key={i}
                  x1="150" y1="290"
                  x2={150 + 140 * Math.cos((a * Math.PI) / 180)}
                  y2={150 + 140 * Math.sin((a * Math.PI) / 180)}
                  stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"
                />
              ))}
              {/* Center point */}
              <circle cx="150" cy="150" r="4" fill="white" opacity="0.6"/>
            </svg>
            {/* Glow */}
            <div className="diamond-glow" />
          </div>

          {/* Floating tags */}
          <div className="floating-tag tag-1">
            <span>⚙</span> Steel Gates
          </div>
          <div className="floating-tag tag-2">
            <span>🏗</span> Railings
          </div>
          <div className="floating-tag tag-3">
            <span>🪟</span> UPVC
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line">
          <div className="scroll-dot" />
        </div>
      </div>

      {/* Phone strip */}
      <div className="phone-strip">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 13.7a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        9842240224 &nbsp;/&nbsp; 9578468371
      </div>
    </section>
  );
};

export default Hero;
