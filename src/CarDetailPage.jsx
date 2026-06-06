import React, { useState, useRef, useCallback } from 'react';
import { Phone, ChevronLeft, ChevronRight, Zap, Gauge, Battery, Timer, Check, RotateCcw, RotateCw } from 'lucide-react';

// ── 3D View angle definitions ─────────────────────────────────────────────────
const VIEW_ANGLES = [
  {
    key: 'front-quarter',
    label: 'Depan',
    icon: '⬡',
    description: 'Tampak Depan ¾',
    imgStyle: {
      transform: 'scaleX(1)',
      filter: 'brightness(1)',
    },
    bgGradient: 'radial-gradient(ellipse at 30% 60%, rgba(0,102,204,0.07) 0%, transparent 70%), linear-gradient(135deg, #f0f4f8 0%, #e8ecf0 100%)',
  },
  {
    key: 'side',
    label: 'Samping',
    icon: '◻',
    description: 'Tampak Samping',
    imgStyle: {
      transform: 'scaleX(-1.12) translateX(-4%)',
      filter: 'brightness(0.97)',
    },
    bgGradient: 'radial-gradient(ellipse at 50% 70%, rgba(0,80,160,0.06) 0%, transparent 70%), linear-gradient(135deg, #eef2f6 0%, #e4e8ec 100%)',
  },
];


// ── Car 3D Viewer Component ────────────────────────────────────────────────────
function Car3DViewer({ car, selectedColor, onColorChange }) {
  const [activeView, setActiveView] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  const currentImage = car.colors[selectedColor]?.image || car.colorImage || car.heroImage;
  const currentView = VIEW_ANGLES[activeView];

  const changeView = useCallback((newIdx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveView(newIdx);
      setIsTransitioning(false);
    }, 120);
  }, [isTransitioning]);

  const prevView = () => changeView((activeView - 1 + VIEW_ANGLES.length) % VIEW_ANGLES.length);
  const nextView = () => changeView((activeView + 1) % VIEW_ANGLES.length);

  // Drag-to-rotate
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    if (Math.abs(diff) > 60) {
      if (diff < 0) nextView();
      else prevView();
      setDragStartX(e.clientX);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  // Touch
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) nextView();
      else prevView();
      setDragStartX(e.touches[0].clientX);
    }
  };
  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div style={{ width: '100%' }}>
      {/* ── 3D Stage ── */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '720px',
          margin: '0 auto',
          background: currentView.bgGradient,
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          transition: 'background 0.5s ease',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}
      >
        {/* View label badge */}
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          background: 'rgba(17,24,39,0.7)',
          color: '#fff',
          fontSize: '0.72rem',
          fontWeight: '700',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '4px 12px',
          borderRadius: '50px',
          backdropFilter: 'blur(6px)',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{ fontSize: '1rem' }}>🔄</span>
          {currentView.description}
        </div>

        {/* Drag hint */}
        <div style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          background: 'rgba(255,255,255,0.75)',
          color: '#374151',
          fontSize: '0.65rem',
          fontWeight: '600',
          padding: '3px 10px',
          borderRadius: '50px',
          backdropFilter: 'blur(4px)',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          ← Geser untuk Rotasi →
        </div>

        {/* Car Image */}
        <div style={{
          padding: '28px 20px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '280px',
        }}>
          <img
            src={currentImage}
            alt={`${car.name} — ${car.colors[selectedColor]?.name || ''} — ${currentView.label}`}
            style={{
              width: '100%',
              maxWidth: '580px',
              height: 'auto',
              objectFit: 'contain',
              opacity: isTransitioning ? 0 : 1,
              transition: 'opacity 0.15s ease, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              ...(currentView.imgStyle || {}),
              pointerEvents: 'none',
              filter: [currentView.imgStyle?.filter, 'drop-shadow(0 8px 16px rgba(0,0,0,0.12))'].filter(Boolean).join(' '),
            }}
            loading="lazy"
            draggable="false"
          />
        </div>

        {/* Shadow under car */}
        <div style={{
          width: '60%',
          height: '16px',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.12) 0%, transparent 70%)',
          margin: '0 auto 18px',
        }} />

        {/* Prev / Next arrows */}
        <button
          onClick={prevView}
          aria-label="Tampilan sebelumnya"
          style={{
            position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.85)', border: 'none', borderRadius: '50%',
            width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 4, boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            transition: 'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.85)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        >
          <RotateCcw size={16} color="#374151" />
        </button>
        <button
          onClick={nextView}
          aria-label="Tampilan berikutnya"
          style={{
            position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.85)', border: 'none', borderRadius: '50%',
            width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 4, boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            transition: 'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.85)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        >
          <RotateCw size={16} color="#374151" />
        </button>
      </div>

      {/* ── View Selector Tabs ── */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '16px',
      }}>
        {VIEW_ANGLES.map((v, i) => (
          <button
            key={v.key}
            onClick={() => changeView(i)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              padding: '8px 20px',
              borderRadius: '10px',
              border: activeView === i ? '2px solid #0066cc' : '2px solid #e5e7eb',
              background: activeView === i ? '#eff6ff' : '#f9fafb',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              color: activeView === i ? '#0066cc' : '#6b7280',
              letterSpacing: '0.02em',
            }}>
              {v.label}
            </span>
            {/* Dot indicator */}
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: activeView === i ? '#0066cc' : '#d1d5db',
              transition: 'background 0.2s',
            }} />
          </button>
        ))}
      </div>

      {/* ── Color Swatches ── */}
      <div style={{ marginTop: '20px' }}>
        <p style={{
          textAlign: 'center',
          fontSize: '0.82rem',
          fontWeight: '600',
          color: '#6b7280',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          Pilih Warna — <span style={{ color: '#111827', fontWeight: '700' }}>{car.colors[selectedColor]?.name}</span>
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}>
          {car.colors.map((c, i) => (
            <button
              key={i}
              onClick={() => onColorChange(i)}
              title={c.name}
              aria-label={`Pilih warna ${c.name}`}
              aria-pressed={selectedColor === i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              <span style={{
                display: 'block',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: c.hex,
                border: selectedColor === i
                  ? '3px solid #0066cc'
                  : '2px solid #d1d5db',
                boxShadow: selectedColor === i
                  ? '0 0 0 3px rgba(0,102,204,0.2)'
                  : '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease',
                transform: selectedColor === i ? 'scale(1.15)' : 'scale(1)',
              }} />
              {selectedColor === i && (
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  color: '#0066cc',
                  maxWidth: '60px',
                  textAlign: 'center',
                  lineHeight: '1.2',
                }}>
                  {c.name}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Car Detail Page ────────────────────────────────────────────────────────────
export default function CarDetailPage({ car, onBack }) {
  const [activeVariant, setActiveVariant] = useState(0);
  const [activeSpecTab, setActiveSpecTab] = useState(Object.keys(car.fullSpecs)[0]);
  const [selectedColor, setSelectedColor] = useState(0);

  const variant = car.variants[activeVariant];

  return (
    <div className="car-detail-page">

      {/* ── Header Banner ── */}
      <section className="car-header-banner">
        <div className="container car-header-content">
          <button className="car-back-btn" onClick={onBack}>
            <ChevronLeft size={18} /> Kembali
          </button>
          <div className="car-hero-text animate-fade-in">
            <span className="car-tagline">{car.tagline}</span>
            <h1 className="car-hero-name">{car.name}</h1>
            <p className="car-hero-slogan">{car.slogan}</p>
            <div className="car-hero-price">
              <span className="car-price-from">Mulai dari</span>
              <span className="car-price-value">{car.variants[0].price}</span>
            </div>
            <div className="car-hero-cta">
              <a
                href="https://wa.me/6288214786250"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Phone size={18} /> Hubungi Sales
              </a>
              <button className="btn-outline" onClick={() => {
                document.getElementById('car-specs')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Lihat Spesifikasi <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3D Color Viewer Section ── */}
      <section className="car-colors-section" style={{ background: '#f5f7fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 className="section-title color-title" style={{ marginBottom: '0.5rem' }}>
              Pilihan Warna & Tampilan 3D
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
              Geser gambar atau klik tombol untuk melihat tampilan Depan, Samping, dan Belakang
            </p>
          </div>
          <Car3DViewer
            car={car}
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
          />
        </div>
      </section>

      {/* ── Quick Stats Bar ── */}
      <div className="car-stats-bar">
        <div className="container car-stats-inner">
          <div className="car-stat-item">
            <Zap size={20} className="stat-icon" />
            <div>
              <p className="stat-label">Tenaga</p>
              <p className="stat-value">{variant.specs.power}</p>
            </div>
          </div>
          <div className="car-stat-divider" />
          <div className="car-stat-item">
            <Battery size={20} className="stat-icon" />
            <div>
              <p className="stat-label">Jangkauan</p>
              <p className="stat-value">{variant.specs.range}</p>
            </div>
          </div>
          <div className="car-stat-divider" />
          <div className="car-stat-item">
            <Gauge size={20} className="stat-icon" />
            <div>
              <p className="stat-label">Torsi</p>
              <p className="stat-value">{variant.specs.torque}</p>
            </div>
          </div>
          <div className="car-stat-divider" />
          <div className="car-stat-item">
            <Timer size={20} className="stat-icon" />
            <div>
              <p className="stat-label">0–100 km/h</p>
              <p className="stat-value">{variant.specs.acceleration}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Description & Highlights ── */}
      <section className="car-about">
        <div className="container car-about-inner">
          <div className="car-about-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Tentang {car.name}
            </h2>
            <p className="car-desc-text">{car.description}</p>
          </div>
          <div className="car-highlights">
            {car.highlights.map((h, i) => (
              <div key={i} className="car-highlight-item">
                <div className="highlight-check">
                  <Check size={16} />
                </div>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Variant Selector ── */}
      <section className="car-variants-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            Pilih Varian
          </h2>
          <div className="variants-grid">
            {car.variants.map((v, i) => (
              <div
                key={i}
                className={`variant-card ${activeVariant === i ? 'active' : ''}`}
                onClick={() => setActiveVariant(i)}
              >
                <div className="variant-header">
                  <h3 className="variant-name">{v.name}</h3>
                  <span className="variant-price">{v.price}</span>
                </div>
                <div className="variant-specs-grid">
                  <div className="vspec-item">
                    <Zap size={14} className="vspec-icon" />
                    <span className="vspec-label">Tenaga</span>
                    <span className="vspec-val">{v.specs.power}</span>
                  </div>
                  <div className="vspec-item">
                    <Battery size={14} className="vspec-icon" />
                    <span className="vspec-label">Jangkauan</span>
                    <span className="vspec-val">{v.specs.range}</span>
                  </div>
                  <div className="vspec-item">
                    <Gauge size={14} className="vspec-icon" />
                    <span className="vspec-label">Baterai</span>
                    <span className="vspec-val">{v.specs.battery}</span>
                  </div>
                  <div className="vspec-item">
                    <Timer size={14} className="vspec-icon" />
                    <span className="vspec-label">0–100</span>
                    <span className="vspec-val">{v.specs.acceleration}</span>
                  </div>
                </div>
                {activeVariant === i && (
                  <div className="variant-active-badge">Dipilih</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Specifications ── */}
      <section id="car-specs" className="car-specs-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            Spesifikasi Lengkap
          </h2>
          <div className="specs-tabs">
            {Object.keys(car.fullSpecs).map((tab) => (
              <button
                key={tab}
                className={`spec-tab-btn ${activeSpecTab === tab ? 'active' : ''}`}
                onClick={() => setActiveSpecTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="specs-table glass-card" style={{ borderRadius: '16px', overflow: 'hidden', padding: 0 }}>
            {Object.entries(car.fullSpecs[activeSpecTab]).map(([key, val], i) => (
              <div key={key} className={`spec-row ${i % 2 === 0 ? 'even' : 'odd'}`}>
                <span className="spec-key">{key}</span>
                <span className="spec-val">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="car-cta-section">
        <div className="container car-cta-inner">
          <div>
            <h2 className="car-cta-title">Tertarik dengan {car.name}?</h2>
            <p className="car-cta-sub">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik, jadwal test drive, atau informasi lebih lanjut.
            </p>
          </div>
          <div className="car-cta-buttons">
            <a
              href="https://wa.me/6288214786250"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
            >
              <Phone size={20} /> Hubungi Sales Sekarang
            </a>
            <a
              href={`https://wa.me/6288214786250?text=Halo%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(car.name)}%20varian%20${encodeURIComponent(variant.name)}%20(${encodeURIComponent(variant.price)}).%20Boleh%20minta%20info%20lebih%20lanjut%3F`}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
            >
              Test Drive Gratis
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
