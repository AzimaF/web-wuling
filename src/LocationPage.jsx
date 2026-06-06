import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  Star,
  Users,
  Car,
  MessageCircle,
} from 'lucide-react';

const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8086769662814!2d106.6478851!3d-6.2888604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb226edfa761%3A0x56f490fbc556b2b1!2sWuling%20BSD%20MIMOSA!5e0!3m2!1sid!2sid!4v1780728714710!5m2!1sid!2sid';

const MAPS_LINK = 'https://maps.app.goo.gl/PGtRPgMk1We9psV99';

const serviceAreas = [
  'Serpong', 'Tangerang Selatan', 'Gading Serpong',
  'Alam Sutera', 'Bintaro', 'Pamulang',
  'BSD City', 'Cisauk', 'Pagedangan',
  'Jakarta Selatan', 'Jakarta Barat', 'Bekasi',
];

const highlights = [
  { icon: <Star size={18} />, label: 'Rating Google', value: '4.8 ★  (87 ulasan)' },
  { icon: <Car size={18} />, label: 'Test Drive', value: 'Gratis & Tanpa Booking' },
  { icon: <Users size={18} />, label: 'Sales Expert', value: 'Siap Membantu Anda' },
  { icon: <Clock size={18} />, label: 'Jam Buka', value: 'Senin – Minggu' },
];

export default function LocationPage() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      // Showroom buka setiap hari (Senin-Minggu) jam 08:00 - 20:00
      if (currentHour >= 8 && currentHour < 20) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    checkTime();
    const interval = setInterval(checkTime, 60000); // Cek setiap menit
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loc-page">

      {/* ── Hero ─────────────────────────────────────── */}
      <div className="loc-hero">
        <div className="loc-hero-glow" />
        <div className="container loc-hero-inner">
          <div className="loc-hero-text animate-fade-in">
            <span className="loc-hero-badge">
              <MapPin size={13} /> Dealer Resmi Wuling
            </span>
            <h1 className="loc-hero-title">
              Kunjungi<br />Showroom Kami
            </h1>
            <p className="loc-hero-subtitle">
              <strong>Wuling Mimosa BSD</strong> — dealer resmi Wuling di BSD,
              Tangerang Selatan. Kami melayani test drive gratis, konsultasi,
              dan pembelian untuk wilayah BSD, Serpong, Tangerang, Banten, dan Jakarta.
            </p>
            <div className="loc-hero-actions">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Navigation size={18} /> Petunjuk Arah
              </a>
              <a
                href="https://wa.me/6288214786250"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={18} /> Chat WhatsApp
              </a>
            </div>
          </div>

          {/* ── Highlight badges ── */}
          <div className="loc-highlights-grid">
            {highlights.map((h, i) => (
              <div key={i} className="loc-highlight-card">
                <div className="loc-hl-icon">{h.icon}</div>
                <div>
                  <p className="loc-hl-label">{h.label}</p>
                  <p className="loc-hl-value">{h.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content: Map + Info ──────────────────── */}
      <div className="loc-main">
        <div className="container loc-main-inner">

          {/* LEFT — Map embed */}
          <div className="loc-map-wrap">
            <iframe
              title="Wuling BSD MIMOSA Location"
              src={MAPS_EMBED}
              className="loc-map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* RIGHT — Contact info */}
          <div className="loc-info-panel">

            {/* Address card */}
            <div className="loc-info-card">
              <div className="loc-info-card-header">
                <MapPin size={20} className="loc-info-icon" />
                <h2 className="loc-info-card-title">Alamat Showroom</h2>
              </div>
              <div className="loc-info-card-body">
                <p className="loc-address-name">WULING MIMOSA BSD</p>
                <p className="loc-address-detail">
                  Jl. Raya Serpong Km. 7 No. 30,<br />
                  Pakulonan, Kec. Serpong Utara,<br />
                  Kota Tangerang Selatan, Banten 15326
                </p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="loc-maps-link"
                >
                  Buka di Google Maps <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Hours card */}
            <div className="loc-info-card">
              <div className="loc-info-card-header">
                <Clock size={20} className="loc-info-icon" />
                <h2 className="loc-info-card-title">Jam Operasional</h2>
              </div>
              <div className="loc-info-card-body">
                <div className="loc-hours-table">
                  <div className="loc-hours-row">
                    <span className="loc-hours-day">Senin – Minggu</span>
                    <span className="loc-hours-time loc-hours-open">08.00 – 20.00 WIB</span>
                  </div>
                </div>
                <div 
                  className="loc-status-badge"
                  style={{
                    background: isOpen ? '#ecfdf5' : '#fef2f2',
                    borderColor: isOpen ? '#a7f3d0' : '#fecaca',
                    color: isOpen ? '#065f46' : '#991b1b'
                  }}
                >
                  <span 
                    className="loc-status-dot" 
                    style={{
                      background: isOpen ? '#10b981' : '#ef4444',
                      animation: isOpen ? 'pulse-dot 2s infinite' : 'none'
                    }}
                  />
                  {isOpen ? 'Showroom Sedang Buka' : 'Showroom Sedang Tutup'}
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="loc-info-card">
              <div className="loc-info-card-header">
                <Phone size={20} className="loc-info-icon" />
                <h2 className="loc-info-card-title">Hubungi Sales</h2>
              </div>
              <div className="loc-info-card-body">
                <div className="loc-sales-profile">
                  <div className="loc-sales-avatar">WM</div>
                  <div>
                    <p className="loc-sales-name">Tim Sales Wuling Mimosa BSD</p>
                    <p className="loc-sales-role">Sales Executive Wuling Mimosa BSD</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/6288214786250?text=Halo%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20tentang%20Wuling%20Mimosa%20BSD"
                  target="_blank"
                  rel="noreferrer"
                  className="loc-wa-btn"
                >
                  <MessageCircle size={18} />
                  WhatsApp: +62 882-1478-6250
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>



      {/* ── Bottom CTA ───────────────────────────────── */}
      <div className="loc-cta-section">
        <div className="container loc-cta-inner">
          <div>
            <h2 className="loc-cta-title">Siap Berkunjung?</h2>
            <p className="loc-cta-sub">
              Jadwalkan kunjungan atau test drive gratis Anda sekarang. Tim kami siap menyambut Anda di showroom.
            </p>
          </div>
          <div className="loc-cta-buttons">
            <a
              href="https://wa.me/6288214786250?text=Halo%2C%20saya%20ingin%20jadwalkan%20test%20drive%20gratis"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
            >
              <Car size={18} /> Jadwal Test Drive
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
            >
              <Navigation size={18} /> Petunjuk Arah
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
