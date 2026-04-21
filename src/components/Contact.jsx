import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-left',
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      gsap.fromTo('.contact-right',
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    gsap.fromTo('.success-msg', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' });
  };

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">LET'S<br /><span>BUILD</span><br />TOGETHER</h2>

          <div className="contact-info">
            <a href="tel:9842240224" className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 13.7a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="info-label">Call Us</span>
                <span className="info-value">9842240224 / 9578468371</span>
              </div>
            </a>

            <a href="mailto:aravindindustries21@gmail.com" className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="info-label">Email Us</span>
                <span className="info-value">aravindindustries21@gmail.com</span>
              </div>
            </a>

            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="info-label">Visit Us</span>
                <span className="info-value">Opp. Aranthangi Court, L.N.Puram, Aranthangi – 614 616</span>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="contact-deco">
            <div className="deco-bar" />
            <span>Available Mon – Sat, 9 AM – 7 PM</span>
          </div>
        </div>

        <div className="contact-right">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Request a Free Quote</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Service Required</label>
                <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} required>
                  <option value="">Select a service</option>
                  <option>Main Gate</option>
                  <option>Windows & Doors</option>
                  <option>Staircase Railings</option>
                  <option>Balcony Railings</option>
                  <option>Aluminium UPVC Partition</option>
                  <option>Titanium Gold Work</option>
                  <option>Other Fabrication Work</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="4"
                  placeholder="Describe your project..."
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                />
              </div>
              <button type="submit" className="form-submit">
                Send Enquiry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          ) : (
            <div className="success-msg">
              <div className="success-icon">✓</div>
              <h3>Enquiry Sent!</h3>
              <p>Thank you for reaching out. We'll contact you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="form-submit" style={{marginTop: 24}}>
                Send Another
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
