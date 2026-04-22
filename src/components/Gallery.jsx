import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Service Data ─────────────────────────────────────────────────────────────
const galleryItems = [
  {
    label: 'Steel Main Gate',
    category: 'Gates',
    bg: 'linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 100%)',
    icon: '🚪',
    size: 'large',
 images: [
  'https://s.alicdn.com/@sc04/kf/H4e40549a776d42fa9d3e02279ba9ad3dH/XIYATECH-China-Simple-Metal-Steel-Garden-Door-Gates-Models-Antique-Cast-Wrought-Iron-Grill-Main-Gate-Design-for-Home-Villa-House.png_300x300.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4TC5gjikpI7O_Qnh7b6ZirEIXwn4wY70h-g&s',
  'https://s.alicdn.com/@sc04/kf/H7ff4c731b9c34bb3a25e202a93929c50b/Latest-Modern-House-Wrought-Iron-Steel-Main-Gate-Stylish-Wrought-Iron-Temple-Main-Gate-Designs-Main-Gate-Design-Decorative.jpg'
],
    description: 'Our steel main gates are custom-fabricated to match your property\'s architectural style. Built with heavy-gauge mild steel and finished with premium anti-rust coatings, these gates offer decades of reliable performance.',
    products: ['Sliding Steel Gates', 'Swing Gates (Single & Double)', 'Automated Gate Systems', 'Ornamental Steel Designs', 'Security Gate Grilles'],
  },
  {
    label: 'UPVC Partition',
    category: 'Partition',
    bg: 'linear-gradient(135deg, #0a1a1a 0%, #1a2a1a 100%)',
    icon: '🪟',
    size: 'small',
 images: [
  'https://www.greenfenster.com/chennai/images/shop/partgg.jpg',
  'https://cpimg.tistatic.com/10492165/b/4/UPVC-Office-Partition..jpg',
  'https://5.imimg.com/data5/LX/EC/MY-24070071/upvc-office-partition--500x500.jpg'
],
    description: 'UPVC partitions offer excellent thermal insulation, sound dampening, and weather resistance. Ideal for commercial and residential spaces, they are maintenance-free and available in a wide range of finishes.',
    products: ['Office Room Dividers', 'Sliding UPVC Panels', 'Fixed Wall Partitions', 'Frosted & Tinted Variants', 'Fire-rated UPVC Options'],
  },
  {
    label: 'Staircase Railing',
    category: 'Railings',
    bg: 'linear-gradient(135deg, #1a0a0a 0%, #2a1010 100%)',
    icon: '🏗️',
    size: 'small',
 images: [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDBgqlMFM3F7CKSjC-mpo8VIPRKO_hj7RAQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnF6QpQIYm7SRpzW9946_7A6yA8b_PpIw8uA&s',
  'https://media.designcafe.com/wp-content/uploads/2020/11/19174538/stairs-wooden-railing-designs-for-your-home.jpg'
],
    description: 'We craft staircase railings that blend safety with elegance. From classic mild steel designs to modern stainless steel cable rails, each piece is precision-welded and hand-finished to perfection.',
    products: ['SS Tube Railings', 'Cable Wire Railings', 'Wrought Iron Designs', 'Glass Panel Railings', 'Powder-coated MS Railings'],
  },
  {
    label: 'Balcony Railing',
    category: 'Railings',
    bg: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2a 100%)',
    icon: '⚙️',
    size: 'medium',
images: [
  'https://tiimg.tistatic.com/fp/1/008/892/balcony-railing--951.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2026/1/574344252/LX/IU/DF/144936112/design-metal-balcony-railing.jpeg',
  'https://5.imimg.com/data5/SELLER/Default/2023/11/361873994/ZX/HB/TT/13183293/ss-balcony-railing.jpg'
],
    description: 'Our balcony railings are engineered for strength and style. Whether you prefer the sleek look of stainless steel or the warmth of powder-coated iron, we deliver railings that enhance your outdoor space safely.',
    products: ['Horizontal Bar Designs', 'Vertical Picket Styles', 'Glass Balustrades', 'Decorative Forged Patterns', 'Anti-rust Coated Frames'],
  },
  {
    label: 'Glass Partition',
    category: 'Partition',
    bg: 'linear-gradient(135deg, #1a1a0a 0%, #2a2a10 100%)',
    icon: '🏢',
    size: 'medium',
 images: [
  'https://images.jdmagicbox.com/quickquotes/images_main/glass-partition-cabin-7-5-mm-2226393647-6rvpxlvh.jpg',
  'https://div-mw.com/wp-content/uploads/2018/09/AQUA-2.jpg',
  'https://d3cqty0ktaqisf.cloudfront.net/products/1765189027752_1.webp'
],
    description: 'Tempered and laminated glass partitions bring openness and sophistication to any workspace or home. Frameless options create seamless visual flow while maintaining acoustic and physical separation.',
    products: ['Frameless Glass Walls', 'Framed Aluminium + Glass', 'Frosted Privacy Glass', 'Smart Glass (Switchable)', 'Sliding Glass Doors'],
  },

  {
    label: 'Window Grills',
    category: 'Windows',
    bg: 'linear-gradient(135deg, #0a1a0a 0%, #102a10 100%)',
    icon: '🪟',
    size: 'medium',
images: [
  'https://5.imimg.com/data5/SELLER/Default/2024/10/456993132/ZF/YL/OF/139695981/iron-window-grill.jpg',
  'https://i.ytimg.com/vi/lOLccVXVkqY/maxresdefault.jpg',
  'https://www.jkcement.com/wp-content/uploads/2025/12/195.png'
],
    description: 'Security window grills fabricated from square tubes, flat bars, and round rods — customized to your window dimensions. Available in geometric, floral, and contemporary patterns with durable enamel finish.',
    products: ['Square Tube Grills', 'Flat Bar Designs', 'Burglar-proof Patterns', 'Mosquito Net Combos', 'Powder-coated Finishes'],
  },
  {
    label: 'SS Pillars',
    category: 'Structures',
    bg: 'linear-gradient(135deg, #1a1010 0%, #2a1818 100%)',
    icon: '🏛️',
    size: 'large',
images: [
  'https://5.imimg.com/data5/SELLER/Default/2022/4/PO/SR/FZ/30441412/modular-ss-pillar.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2022/4/JR/ZA/NP/30441412/indoor-ss-steel-pillar.jpg',
  'https://5.imimg.com/data5/ANDROID/Default/2025/1/481068855/SA/DN/VY/24712369/product-jpeg-500x500.jpg'
],
    description: 'Stainless steel pillars and structural columns fabricated for both load-bearing and decorative applications. Mirror-polished or brushed finishes give commercial spaces a modern industrial character.',
    products: ['Round SS Hollow Pillars', 'Square Profile Columns', 'Decorative Fluted Pillars', 'Structural Support Frames', 'PVD-coated SS Columns'],
  },
  {
    label: 'Shed Work',
    category: 'Sheds',
    bg: 'linear-gradient(135deg, #0a1a2a 0%, #1a2a3a 100%)',
    icon: '🏚️',
    size: 'medium',
images: [
  'https://5.imimg.com/data5/SELLER/Default/2022/12/KD/WB/YI/5186854/steel-a-type-metal-roofing-shed-fabrication-work.jpg',
  'https://4.imimg.com/data4/LW/PN/MY-4704555/roofing-shed-work.jpg',
  'https://www.pvfabricationworks.com/wp-content/uploads/2025/04/Shed2-1-495x400.jpg'
],
    description: 'We design and erect robust steel shed structures for industrial, commercial, and residential use. From car parking canopies to warehouse roofing, our sheds are built to withstand harsh weather conditions.',
    products: ['Car Parking Sheds', 'Industrial Warehouse Sheds', 'Rooftop Steel Canopies', 'Polycarbonate Roof Sheds', 'MS Frame + Sheet Structures'],
  },
  {
    label: 'PVD Coating',
    category: 'PVD Finish',
    bg: 'linear-gradient(135deg, #2a1a00 0%, #3a2a00 100%)',
    icon: '🔆',
    size: 'medium',
images: [
  'https://www.stanch.com/proimages/sr/product/pvd-coating-3.jpg',
  'https://www.loriano.co.uk/storage/uploads/blogs/242_nl_media-1_the-hidden-science-behind-pvd-coating.jpg',
  'https://sheetmetalmasion.com/wp-content/uploads/2024/05/PVD-Coating-From-Concept-to-Application.png'
],
    description: 'Physical Vapour Deposition (PVD) coating applies ultra-thin layers of titanium nitride or zirconium nitride onto stainless steel surfaces, creating stunning, durable colors that are 4x harder than paint and completely tarnish-resistant.',
    products: ['Gold PVD Finish', 'Rose Gold Coating', 'Black Titanium PVD', 'Champagne / Bronze Tones', 'Custom Color Matching'],
  },
];

// ── Popup Component ───────────────────────────────────────────────────────────
const ServicePopup = ({ item, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(modalRef.current,
      { y: 60, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' }
    );
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, onComplete: onClose });
    gsap.to(modalRef.current, { y: 40, opacity: 0, scale: 0.97, duration: 0.25 });
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  return (
    <div ref={overlayRef} onClick={handleOverlayClick} style={styles.overlay}>
      <div ref={modalRef} style={styles.modal}>
        {/* Close */}
        <button onClick={handleClose} style={styles.closeBtn}>
          <span style={{ fontSize: 20, lineHeight: 1 }}>✕</span>
        </button>

   <div style={styles.modalBody} data-modal-body>
          {/* LEFT: Image Gallery */}
        <div style={styles.leftCol} data-left-col>
            <div style={styles.mainImgWrap}>
              <img
                src={item.images[activeImg]}
                alt={item.label}
                style={styles.mainImg}
                 data-main-img
                onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80`; }}
              />
              <div style={styles.imgGradient} />
              <div style={styles.imgBadge}>{item.category}</div>
            </div>
            <div style={styles.thumbRow}>
              {item.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    ...styles.thumb,
                    ...(activeImg === i ? styles.thumbActive : {}),
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    style={styles.thumbImg}
                    onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80`; }}
                  />
                  {activeImg === i && <div style={styles.thumbActiveLine} />}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Details */}
          <div style={styles.rightCol}>
            <div style={styles.rightInner}>
              <div style={styles.catLabel}>{item.icon} {item.category}</div>
              <h2 style={styles.modalTitle}>{item.label}</h2>
              <div style={styles.divider} />
              <p style={styles.desc}>{item.description}</p>

              <div style={styles.productsWrap}>
                <div style={styles.productsHeading}>Products & Variants</div>
                <ul style={styles.productList}>
                  {item.products.map((p, i) => (
                    <li key={i} style={styles.productItem}>
                      <span style={styles.productDot} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={styles.ctaRow}>
              <a
                href={`https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(item.label)}%20service.`}
                target="_blank"
                rel="noreferrer"
                style={styles.btnWa}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href={`mailto:info@yourcompany.com?subject=Enquiry: ${item.label}&body=Hi, I'm interested in your ${item.label} service. Please send me more details.`}
                style={styles.btnMail}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 8 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Send Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Inline Styles ─────────────────────────────────────────────────────────────
const styles = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 9999,
    background: 'rgba(0,0,0,0.85)',
    backdropFilter: 'blur(8px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '20px',
  },
  modal: {
    position: 'relative',
    background: '#111',
    border: '1px solid rgba(232,80,10,0.2)',
    width: '100%', maxWidth: 960,
    maxHeight: '90vh',
    display: 'flex', flexDirection: 'column',
    overflow: 'auto',
  },
  closeBtn: {
    position: 'absolute', top: 16, right: 16, zIndex: 10,
    background: 'rgba(232,80,10,0.15)',
    border: '1px solid rgba(232,80,10,0.4)',
    color: '#e8500a',
    width: 36, height: 36,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  modalBody: {
    display: 'flex', flexDirection: 'row',
    height: '100%', minHeight: 0, flex: 1,
    overflow: 'visible',
  },
  leftCol: {
    width: '45%', minWidth: 0,
    display: 'flex', flexDirection: 'column',
    background: '#0a0a0a',
    borderRight: '1px solid rgba(255,255,255,0.06)',
  },
  mainImgWrap: {
    position: 'relative', flex: 1, overflow: 'hidden',
    minHeight: 280,
  },
  mainImg: {
    width: '100%', height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'all 0.4s ease',
  },
  imgGradient: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
  },
  imgBadge: {
    position: 'absolute', top: 16, left: 16,
    background: 'rgba(232,80,10,0.9)',
    color: '#fff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10, letterSpacing: 3,
    textTransform: 'uppercase',
    padding: '4px 10px',
  },
  thumbRow: {
    display: 'flex', gap: 2,
    padding: 2,
    background: '#0a0a0a',
  },
  thumb: {
    flex: 1, position: 'relative',
    height: 72, overflow: 'hidden',
    border: '1px solid transparent',
    cursor: 'pointer',
    padding: 0, background: 'none',
    transition: 'all 0.2s',
  },
  thumbActive: {
    border: '1px solid rgba(232,80,10,0.6)',
  },
  thumbImg: {
    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
  },
  thumbActiveLine: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    height: 2,
    background: '#e8500a',
  },
  rightCol: {
    flex: 1, minWidth: 0,
    display: 'flex', flexDirection: 'column',
    overflow: 'hidden',
  },
  rightInner: {
    flex: 1, overflowY: 'auto',
    padding: '36px 32px 24px',
  },
  catLabel: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11, letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#e8500a',
    marginBottom: 12,
  },
  modalTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 42, letterSpacing: 3,
    color: '#fff',
    lineHeight: 1,
    marginBottom: 20,
  },
  divider: {
    height: 1, background: 'linear-gradient(to right, #e8500a, transparent)',
    marginBottom: 20,
  },
  desc: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14, lineHeight: 1.8,
    color: 'rgba(255,255,255,0.65)',
    marginBottom: 28,
  },
  productsWrap: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
    padding: '20px 24px',
  },
  productsHeading: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 10, letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#e8500a',
    marginBottom: 14,
  },
  productList: {
    listStyle: 'none', padding: 0, margin: 0,
    display: 'flex', flexWrap: 'wrap', gap: '8px 0',
  },
  productItem: {
    width: '50%',
    display: 'flex', alignItems: 'center', gap: 8,
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: 14, fontWeight: 500, letterSpacing: 0.5,
    color: 'rgba(255,255,255,0.75)',
  },
  productDot: {
    width: 5, height: 5,
    background: '#e8500a',
    flexShrink: 0,
  },
  ctaRow: {
    display: 'flex', gap: 2,
    padding: '16px 32px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    background: '#0d0d0d',
  },
  btnWa: {
    flex: 1,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '14px 20px',
    background: '#25D366',
    color: '#fff',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: 15, fontWeight: 700,
    letterSpacing: 1,
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'filter 0.2s',
  },
  btnMail: {
    flex: 1,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '14px 20px',
    background: 'transparent',
    border: '1px solid #e8500a',
    color: '#e8500a',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: 15, fontWeight: 700,
    letterSpacing: 1,
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'all 0.2s',
  },
};

// ── CSS Injection ─────────────────────────────────────────────────────────────
const cssText = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');

  :root { --orange: #e8500a; }

  .gallery-section {
    padding: 120px 60px;
    background: #111;
  }
  .gallery-header {
    max-width: 1280px;
    margin: 0 auto 60px;
  }
  .section-label {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 12px;
  }
  .section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 72px;
    letter-spacing: 6px;
    color: white;
    line-height: 1;
    margin: 0;
  }
  .section-title span { color: var(--orange); }

  .gallery-grid {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    min-height: 220px;
    cursor: pointer;
  }
  .gallery-item.large  { grid-column: span 2; grid-row: span 2; min-height: 440px; }
  .gallery-item.medium { grid-column: span 2; }
  .gallery-item.small  { grid-column: span 1; }

  .gallery-inner {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    transition: all 0.4s ease;
  }
  .gallery-icon {
    font-size: 56px; opacity: 0.3;
    transition: all 0.4s ease;
    transform: scale(1);
  }
  .gallery-item:hover .gallery-icon { opacity: 0.1; transform: scale(1.3); }

  .gallery-overlay {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 28px;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
    transform: translateY(20px); opacity: 0;
    transition: all 0.4s ease;
  }
  .gallery-item:hover .gallery-overlay { transform: translateY(0); opacity: 1; }

  .gallery-cat {
    font-family: 'Inter', sans-serif;
    font-size: 10px; letter-spacing: 3px;
    text-transform: uppercase; color: var(--orange);
    display: block; margin-bottom: 8px;
  }
  .gallery-label {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px; letter-spacing: 2px; color: white; margin-bottom: 12px;
  }
  .gallery-view {
    font-family: 'Rajdhani', sans-serif;
    font-size: 13px; font-weight: 600; letter-spacing: 1px;
    color: rgba(255,255,255,0.5);
  }
  .gallery-border {
    position: absolute; inset: 0;
    border: 1px solid transparent;
    transition: border-color 0.4s ease;
    pointer-events: none;
  }
  .gallery-item:hover .gallery-border { border-color: rgba(232,80,10,0.4); }

  .gallery-note {
    max-width: 1280px;
    margin: 24px auto 0;
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    color: rgba(255,255,255,0.2);
    letter-spacing: 1px;
    text-align: right;
  }

  @media (max-width: 1024px) {
    .gallery-grid { grid-template-columns: repeat(3, 1fr); }
    .gallery-item.large { grid-column: span 2; grid-row: span 1; min-height: 220px; }
  }
  @media (max-width: 640px) {
    .gallery-section { padding: 80px 24px; }
    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
    .gallery-item.large, .gallery-item.medium { grid-column: span 2; }
  }

  /* Popup responsive */
  @media (max-width: 720px) {
    [data-modal-body] { flex-direction: column !important; }
    [data-left-col] { width: 100% !important; }
    [data-main-img] { min-height: 200px !important; }
  }

  /* Scrollbar styling for right panel */
  .gallery-modal-scroll::-webkit-scrollbar { width: 4px; }
  .gallery-modal-scroll::-webkit-scrollbar-track { background: transparent; }
  .gallery-modal-scroll::-webkit-scrollbar-thumb { background: rgba(232,80,10,0.4); }
  @media (max-width: 720px) {
  [data-modal-body] {
    flex-direction: column !important;
  }

  [data-left-col] {
    width: 100% !important;
  }

  [data-main-img] {
    min-height: 220px !important;
  }
}
`;

// ── Main Gallery Component ────────────────────────────────────────────────────
const Gallery = () => {
  const sectionRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    // Inject CSS
    const styleEl = document.createElement('style');
    styleEl.textContent = cssText;
    document.head.appendChild(styleEl);

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

    return () => {
      ctx.revert();
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="gallery-section">
      <div className="gallery-header">
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">OUR <span>WORK</span></h2>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`gallery-item ${item.size}`}
          style={{
  backgroundImage: `url(${item.images[2]})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
            onClick={() => setActiveItem(item)}
          >
            <div className="gallery-inner">
      
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

      {activeItem && (
        <ServicePopup item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </section>
  );
};

export default Gallery;