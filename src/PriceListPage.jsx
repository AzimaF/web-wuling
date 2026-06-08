import React, { useState } from 'react';
import { Phone, ChevronRight, Zap, Gauge, Battery, Timer, Tag } from 'lucide-react';
import { carData } from './carData';

const priceListData = Object.values(carData).map(car => {
  let category = 'Commercial';
  if (car.id.includes('binguo') || car.id.includes('air') || car.id.includes('cloud')) {
    category = 'EV';
  } else if (car.id.includes('mitra') || car.id.includes('formo')) {
    category = 'Commercial';
  } else if (car.id.includes('almaz') || car.id.includes('alvez')) {
    category = 'SUV';
  } else if (car.id.includes('eksion') || car.id.includes('darion')) {
    category = car.id.includes('phev') ? 'PHEV' : 'EV';
  }

  return {
    id: car.id,
    name: car.name,
    category: category,
    image: car.colorImage || car.heroImage,
    variants: car.variants.map(v => ({
      label: v.name,
      sub: '',
      price: v.price,
      specs: v.specs || { torque: '-', power: '-', range: '-', battery: '-', acceleration: '-' }
    }))
  };
});

const CATEGORIES = ['Semua', 'EV', 'PHEV', 'SUV', 'Commercial'];

// ── Single Car Price Card ──────────────────────────────────────────────────────
function PriceCard({ car, onViewDetail }) {
  const [activeVariant, setActiveVariant] = useState(0);
  const v = car.variants[activeVariant];

  const waMessage = encodeURIComponent(
    `Halo, saya tertarik dengan ${car.name} varian ${v.label} seharga ${v.price}. Boleh minta info lebih lanjut?`
  );

  return (
    <div className="pl-card">
      {/* Category badge */}
      <span className="pl-card-category">{car.category}</span>

      {/* Car image */}
      <div className="pl-card-img-wrap">
        <img src={car.image} alt={car.name} className="pl-card-img" />
      </div>

      {/* Model name */}
      <div className="pl-card-body">
        <h2 className="pl-card-name">{car.name}</h2>

        {/* Variant tabs */}
        <div className="pl-variant-tabs">
          {car.variants.map((variant, i) => (
            <button
              key={i}
              className={`pl-variant-tab ${activeVariant === i ? 'active' : ''}`}
              onClick={() => setActiveVariant(i)}
            >
              <span className="pl-tab-label">{variant.label}</span>
              <span className="pl-tab-sub">{variant.sub}</span>
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="pl-price-block">
          <p className="pl-price">{v.price}</p>
          <p className="pl-price-label">OTR Jakarta</p>
          <p className="pl-price-date">Harga per Juni 2026</p>
        </div>

        {/* Specs grid */}
        <div className="pl-specs-grid">
          <div className="pl-spec-box">
            <span className="pl-spec-val">{v.specs.torque || '-'}</span>
            <span className="pl-spec-key">Torsi</span>
          </div>
          <div className="pl-spec-box">
            <span className="pl-spec-val">{v.specs.power || '-'}</span>
            <span className="pl-spec-key">Power</span>
          </div>
          <div className="pl-spec-box">
            <span className="pl-spec-val">{v.specs.range || '-'}</span>
            <span className="pl-spec-key">Range</span>
          </div>
          <div className="pl-spec-box">
            <span className="pl-spec-val">{v.specs.battery || '-'}</span>
            <span className="pl-spec-key">Baterai</span>
          </div>
          <div className="pl-spec-box">
            <span className="pl-spec-val">{v.specs.acceleration || '-'}</span>
            <span className="pl-spec-key">0–100 km/h</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="pl-card-cta">
          <button
            className="pl-btn-detail"
            onClick={() => onViewDetail(car.id)}
          >
            View Detail <ChevronRight size={16} />
          </button>
          <a
            href={`https://wa.me/6288214786250?text=${waMessage}`}
            target="_blank"
            rel="noreferrer"
            className="pl-btn-contact"
          >
            <Phone size={16} /> Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Price List Page ────────────────────────────────────────────────────────────
export default function PriceListPage({ onViewDetail }) {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered =
    activeCategory === 'Semua'
      ? priceListData
      : priceListData.filter((c) => c.category === activeCategory);

  return (
    <div className="pl-page">

      {/* ── Hero Banner ── */}
      <div className="pl-hero">
        <div className="pl-hero-overlay" />
        <div className="container pl-hero-content">
          <span className="pl-hero-badge">
            <Tag size={14} /> Harga Resmi 2026
          </span>
          <h1 className="pl-hero-title">Daftar Harga<br />Mobil Wuling</h1>
          <p className="pl-hero-sub">
            Harga OTR resmi Wuling Mimosa BSD. Klik varian untuk melihat spesifikasi dan harga yang berbeda.
          </p>
        </div>
      </div>

      {/* ── Category Filter ── */}
      <div className="pl-filter-bar">
        <div className="container pl-filter-inner">
          <span className="pl-filter-label">Filter:</span>
          <div className="pl-filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`pl-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="pl-filter-count">
            {filtered.length} model tersedia
          </span>
        </div>
      </div>

      {/* ── Cards Grid ── */}
      <div className="pl-content">
        <div className="container">
          <div className="pl-grid">
            {filtered.map((car) => (
              <PriceCard key={car.id} car={car} onViewDetail={onViewDetail} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="pl-empty">
              <p>Tidak ada model untuk kategori ini.</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="pl-bottom-cta">
        <div className="container pl-bottom-cta-inner">
          <div>
            <h2 className="pl-bottom-title">Butuh Penawaran Khusus?</h2>
            <p className="pl-bottom-sub">
              Hubungi sales kami untuk mendapatkan harga terbaik, promo cicilan, dan info trade-in kendaraan lama Anda.
            </p>
          </div>
          <a
            href="https://wa.me/6288214786250"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '0.9rem 2rem', flexShrink: 0 }}
          >
            <Phone size={18} /> Konsultasi Harga Gratis
          </a>
        </div>
      </div>
    </div>
  );
}
