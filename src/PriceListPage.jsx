import React, { useState } from 'react';
import { Phone, ChevronRight, Zap, Gauge, Battery, Timer, Tag } from 'lucide-react';

// ── Accurate data sourced from katalog PDFs & reference site ──────────────────
const priceListData = [
  {
    id: 'byd-seal',
    name: 'BYD Seal',
    category: 'Sedan',
    image: './images/BYD/BYD-Seal-AURORA WHITE.png',
    variants: [
      {
        label: 'Premium',
        sub: 'Include Wall Charging',
        price: 'Rp639.000.000',
        priceNum: 639000000,
        specs: { torque: '360 N.m', power: '308 HP', range: '650 km', battery: '82.56 kWh', acceleration: '5.9 dtk' },
      },
      {
        label: 'Premium',
        sub: 'Exclude Wall Charging',
        price: 'Rp630.500.000',
        priceNum: 630500000,
        specs: { torque: '360 N.m', power: '308 HP', range: '650 km', battery: '82.56 kWh', acceleration: '5.9 dtk' },
      },
      {
        label: 'Performance',
        sub: 'Include Wall Charging',
        price: 'Rp750.000.000',
        priceNum: 750000000,
        specs: { torque: '670 N.m', power: '523 HP', range: '580 km', battery: '82.56 kWh', acceleration: '3.8 dtk' },
      },
      {
        label: 'Performance',
        sub: 'Exclude Wall Charging',
        price: 'Rp741.500.000',
        priceNum: 741500000,
        specs: { torque: '670 N.m', power: '523 HP', range: '580 km', battery: '82.56 kWh', acceleration: '3.8 dtk' },
      },
    ],
  },
  {
    id: 'byd-atto-3',
    name: 'BYD Atto 3',
    category: 'SUV',
    image: './images/BYD/BYD-Atto3-Surf Blue.png',
    variants: [
      {
        label: 'Advance+',
        sub: 'NEW',
        price: 'Rp415.000.000',
        priceNum: 415000000,
        specs: { torque: '310 N.m', power: '201 HP', range: '410 km', battery: '49.92 kWh', acceleration: '7.9 dtk' },
      }
    ],
  },
  {
    id: 'byd-dolphin',
    name: 'BYD Dolphin',
    category: 'Hatchback',
    image: './images/BYD/BYD-Dolphin-Surf Blue.png',
    variants: [
      {
        label: 'Premium',
        sub: 'Include Wall Charging',
        price: 'Rp429.000.000',
        priceNum: 429000000,
        specs: { torque: '310 N.m', power: '201 HP', range: '490 km', battery: '60.48 kWh', acceleration: '7.0 dtk' },
      },
      {
        label: 'Premium',
        sub: 'Exclude Wall Charging',
        price: 'Rp420.500.000',
        priceNum: 420500000,
        specs: { torque: '310 N.m', power: '201 HP', range: '490 km', battery: '60.48 kWh', acceleration: '7.0 dtk' },
      },
      {
        label: 'Dynamic',
        sub: 'Include Wall Charging',
        price: 'Rp369.000.000',
        priceNum: 369000000,
        specs: { torque: '180 N.m', power: '94 HP', range: '410 km', battery: '44.9 kWh', acceleration: '12.3 dtk' },
      },
      {
        label: 'Dynamic',
        sub: 'Exclude Wall Charging',
        price: 'Rp360.500.000',
        priceNum: 360500000,
        specs: { torque: '180 N.m', power: '94 HP', range: '410 km', battery: '44.9 kWh', acceleration: '12.3 dtk' },
      },
    ],
  },
  {
    id: 'byd-m6',
    name: 'BYD M6',
    category: 'MPV',
    image: './images/BYD/BYD-M6-Crystal White.png',
    variants: [
      {
        label: 'Superior',
        sub: 'Capt Seat',
        price: 'Rp433.000.000',
        priceNum: 433000000,
        specs: { torque: '310 N.m', power: '201 HP', range: '530 km', battery: '71.8 kWh', acceleration: '8.6 dtk' },
      },
      {
        label: 'Superior',
        sub: '7 Seater',
        price: 'Rp423.000.000',
        priceNum: 423000000,
        specs: { torque: '310 N.m', power: '201 HP', range: '530 km', battery: '71.8 kWh', acceleration: '8.6 dtk' },
      },
      {
        label: 'Standar',
        sub: '7 Seater',
        price: 'Rp383.000.000',
        priceNum: 383000000,
        specs: { torque: '310 N.m', power: '161 HP', range: '420 km', battery: '55.4 kWh', acceleration: '10.1 dtk' },
      },
    ],
  },
  {
    id: 'byd-sealion-7',
    name: 'BYD Sealion 7',
    category: 'SUV',
    image: './images/BYD/BYD-Sealion7-AURORA WHITE.png',
    variants: [
      {
        label: 'Premium',
        sub: 'Include Wall Charging',
        price: 'Rp629.000.000',
        priceNum: 629000000,
        specs: { torque: '390 N.m', power: '308 HP', range: '567 km', battery: '82.56 kWh', acceleration: '5.9 dtk' },
      },
      {
        label: 'Premium',
        sub: 'Exclude Wall Charging',
        price: 'Rp620.500.000',
        priceNum: 620500000,
        specs: { torque: '390 N.m', power: '308 HP', range: '567 km', battery: '82.56 kWh', acceleration: '5.9 dtk' },
      },
      {
        label: 'Performance',
        sub: 'Include Wall Charging',
        price: 'Rp719.000.000',
        priceNum: 719000000,
        specs: { torque: '690 N.m', power: '523 HP', range: '542 km', battery: '82.56 kWh', acceleration: '4.5 dtk' },
      },
      {
        label: 'Performance',
        sub: 'Exclude Wall Charging',
        price: 'Rp710.500.000',
        priceNum: 710500000,
        specs: { torque: '690 N.m', power: '523 HP', range: '542 km', battery: '82.56 kWh', acceleration: '4.5 dtk' },
      },
    ],
  },
  {
    id: 'byd-atto-1',
    name: 'BYD Atto 1',
    category: 'SUV',
    image: './images/BYD/BYD-Atto1-Sprout Green.png',
    variants: [
      {
        label: 'Premium',
        sub: 'Extended Range',
        price: 'Rp245.000.000',
        priceNum: 245000000,
        specs: { torque: '135 N.m', power: '73 HP', range: '380 km', battery: '38.88 kWh', acceleration: '12.5 dtk' },
      },
      {
        label: 'Dynamic',
        sub: 'Standard Range',
        price: 'Rp205.000.000',
        priceNum: 205000000,
        specs: { torque: '135 N.m', power: '73 HP', range: '300 km', battery: '30.08 kWh', acceleration: '12.5 dtk' },
      },
      {
        label: 'Standar',
        sub: 'Standard Range',
        price: 'Rp199.000.000',
        priceNum: 199000000,
        specs: { torque: '135 N.m', power: '73 HP', range: '300 km', battery: '30.08 kWh', acceleration: '12.5 dtk' },
      },
    ],
  },
];

const CATEGORIES = ['Semua', 'Sedan', 'SUV', 'MPV', 'Hatchback'];

// ── Single Car Price Card ──────────────────────────────────────────────────────
function PriceCard({ car, onViewDetail }) {
  const [activeVariant, setActiveVariant] = useState(0);
  const v = car.variants[activeVariant];

  const waMessage = encodeURIComponent(
    `Halo, saya tertarik dengan ${car.name} varian ${v.label} (${v.sub}) seharga ${v.price}. Boleh minta info lebih lanjut?`
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
          <p className="pl-price-label">OTR Jakarta (IDR)</p>
          <p className="pl-price-date">Harga per 4 Februari 2025</p>
        </div>

        {/* Specs grid */}
        <div className="pl-specs-grid">
          <div className="pl-spec-box">
            <span className="pl-spec-val">{v.specs.torque}</span>
            <span className="pl-spec-key">Torsi</span>
          </div>
          <div className="pl-spec-box">
            <span className="pl-spec-val">{v.specs.power}</span>
            <span className="pl-spec-key">Power</span>
          </div>
          <div className="pl-spec-box">
            <span className="pl-spec-val">{v.specs.range}</span>
            <span className="pl-spec-key">Range</span>
          </div>
          <div className="pl-spec-box">
            <span className="pl-spec-val">{v.specs.battery}</span>
            <span className="pl-spec-key">Baterai</span>
          </div>
          <div className="pl-spec-box">
            <span className="pl-spec-val">{v.specs.acceleration}</span>
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
            <Tag size={14} /> Harga Resmi 2025
          </span>
          <h1 className="pl-hero-title">Daftar Harga<br />Mobil Listrik BYD</h1>
          <p className="pl-hero-sub">
            Harga OTR Jakarta resmi untuk seluruh model BYD. Klik varian untuk melihat spesifikasi dan harga yang berbeda.
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
