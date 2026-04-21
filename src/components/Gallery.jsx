import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { label: 'Steel Main Gate', category: 'Gates', bg: 'linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 100%)', icon: '🚪', size: 'large' },
  { label: 'UPVC Partition', category: 'Partition', bg: 'linear-gradient(135deg, #0a1a1a 0%, #1a2a1a 100%)', icon: '🪟', size: 'small' },
  { label: 'Staircase Railing', category: 'Railings', bg: 'linear-gradient(135deg, #1a0a0a 0%, #2a1010 100%)', icon: '🏗️', size: 'small' },
  { label: 'Balcony Railing', category: 'Railings', bg: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2a 100%)', icon: '⚙️', size: 'medium' },
  { label: 'Glass Partition', category: 'Partition', bg: 'linear-gradient(135deg, #1a1a0a 0%, #2a2a10 100%)', icon: '🏢', size: 'medium' },
  { label: 'Titanium Signs', category: 'Signboard', bg: 'linear-gradient(135deg, #1a0a1a 0%, #2a102a 100%)', icon: '✨', size: 'small' },
  { label: 'Window Grills', category: 'Windows', bg: 'linear-gradient(135deg, #0a1a0a 0%, #102a10 100%)', icon: '🪟', size: 'small' },
  { label: 'SS Pillars', category: 'Structures', bg: 'linear-gradient(135deg, #1a1010 0%, #2a1818 100%)', icon: '🏛️', size: 'large' },
];

const Gallery = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-header',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );

      gsap.fromTo('.gallery-item',
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="gallery-section">
      <div className="gallery-header">
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">OUR <span>WORK</span></h2>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div key={i} className={`gallery-item ${item.size}`} style={{ background: item.bg }}>
            <div className="gallery-inner">
              <div className="gallery-icon">{item.icon}</div>
              <div className="gallery-overlay">
                <span className="gallery-cat">{item.category}</span>
                <h3 className="gallery-label">{item.label}</h3>
                <div className="gallery-view">View Project →</div>
              </div>
            </div>
            <div className="gallery-border" />
          </div>
        ))}
      </div>

      <div className="gallery-note">
        * Gallery shows representative project categories. Contact us for portfolio details.
      </div>
    </section>
  );
};

export default Gallery;
