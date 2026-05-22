import React, { useState } from 'react';
import { Phone, ChevronLeft, ChevronRight, Zap, Gauge, Battery, Timer, Check } from 'lucide-react';

export default function CarDetailPage({ car, onBack }) {
  const [activeVariant, setActiveVariant] = useState(0);
  const [activeSpecTab, setActiveSpecTab] = useState(Object.keys(car.fullSpecs)[0]);
  const [selectedColor, setSelectedColor] = useState(0);

  const variant = car.variants[activeVariant];

  return (
    <div className="car-detail-page">

      {/* ── Header Banner (Like Price List) ── */}
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

      {/* ── Cover Image Section ── */}
      <section className="car-cover-section">
        <div className="container">
          <img src={car.coverImage || car.heroImage} alt={car.name} className="car-cover-img" />
        </div>
      </section>

      {/* ── Quick Stats Bar ──────────────────────────────── */}
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

      {/* ── Description & Highlights ─────────────────────── */}
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

      {/* ── Variant Selector ─────────────────────────────── */}
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

      {/* ── Color Picker ─────────────────────────────────── */}
      <section className="car-colors-section">
        <div className="container">
          <h2 className="section-title color-title">
            Pilihan Warna
          </h2>

          <div className="color-stage-minimal">
            <div className="color-image-wrapper" style={{ position: 'relative', width: '80%', maxWidth: '700px', margin: '0 auto' }}>
              {car.colors.map((c, i) => (
                <img
                  key={i}
                  src={c.image || car.colorImage || car.heroImage}
                  alt={`${car.name} — ${c.name}`}
                  className={`color-car-img-minimal ${selectedColor === i ? 'active' : ''}`}
                  style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    opacity: selectedColor === i ? 1 : 0,
                    transition: 'opacity 0.6s ease-in-out',
                    zIndex: selectedColor === i ? 2 : 1,
                    objectFit: 'contain'
                  }}
                />
              ))}
            </div>
          </div>

          <div className="color-swatch-area">
            <div className="color-swatch-row-left">
              {car.colors.map((c, i) => (
                <div key={i} className={`swatch-wrapper ${selectedColor === i ? 'active' : ''}`}>
                  <button
                    className="color-swatch-btn-min"
                    onClick={() => setSelectedColor(i)}
                    title={c.name}
                    aria-label={c.name}
                  >
                    <span
                      className="color-swatch-min"
                      style={{ backgroundColor: c.hex }}
                    />
                  </button>
                  {selectedColor === i && (
                    <span className="swatch-active-label">{c.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── Full Specifications ──────────────────────────── */}
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

      {/* ── CTA Banner ──────────────────────────────────── */}
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
