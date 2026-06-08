import React, { useEffect, useState, Suspense } from 'react';
import {
  Phone,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Zap,
  Users,
  Star,
  Car,
  CalendarDays,
  Menu
} from 'lucide-react';
import './index.css';
import { carData } from './carData';

// Lazy-load pages for code splitting â€” reduces initial JS bundle by ~40-50%
const CarDetailPage = React.lazy(() => import('./CarDetailPage'));
const PriceListPage = React.lazy(() => import('./PriceListPage'));
const LocationPage = React.lazy(() => import('./LocationPage'));
const ArticlesPage = React.lazy(() => import('./ArticlesPage'));

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isCarsMenuOpen, setIsCarsMenuOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const openCarDetail = (carId) => {
    setCurrentCar(carId);
    setCurrentPage('car-detail');
    setIsCarsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeCarDetail = () => {
    setCurrentCar(null);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. Auto scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // 2. Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [currentPage]);

  // 3. Intersection Observer for scroll spy (Home page only)
  useEffect(() => {
    if (currentPage !== 'home') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.2 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  // 4. Global Intersection Observer for scroll reveal animations
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });

    const handleMutations = () => {
      const reveals = document.querySelectorAll('.reveal:not(.observed)');
      reveals.forEach(el => {
        revealObserver.observe(el);
        el.classList.add('observed');
      });
    };

    handleMutations(); // Initial check
    const mutationObserver = new MutationObserver(handleMutations);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const models = [
    {
      id: 'new-air-ev',
      carDetailId: 'wuling-new-air-ev',
      name: 'New Air EV',
      desc: 'Kendaraan listrik kota yang praktis, lincah, dan sangat hemat energi dengan jangkauan hingga 300 km.',
      price: 'Mulai dari Rp229.000.000',
      image: './images/Cover-Wuling/Cover-NewAIREV.png',
    },
    {
      id: 'eksion-ev',
      carDetailId: 'wuling-eksion-ev',
      name: 'Eksion EV',
      desc: 'SUV listrik berperforma tinggi dengan desain aerodinamis sporty dan teknologi mutakhir.',
      price: 'Mulai dari Rp389.000.000',
      image: './images/Cover-Wuling/Cover-Eksion.png',
    },
    {
      id: 'darion-ev',
      carDetailId: 'wuling-darion-ev',
      name: 'Darion EV',
      desc: 'MPV listrik keluarga premium dengan kabin 7-seater yang lapang dan jangkauan hingga 540 km.',
      price: 'Mulai dari Rp399.000.000',
      image: './images/Cover-Wuling/Cover-Darion.png',
    }
  ];

  const features = [
    { icon: <ShieldCheck size={24} />, title: 'Garansi Resmi', desc: 'Garansi resmi Wuling Indonesia dengan layanan purna jual terpercaya' },
    { icon: <Zap size={24} />, title: 'EV & PHEV Ready', desc: 'Tersedia pilihan kendaraan listrik murni dan plug-in hybrid untuk kebutuhan Anda' },
    { icon: <Users size={24} />, title: 'Expert Consultation', desc: 'Tim sales berpengalaman siap memberikan konsultasi terbaik' },
    { icon: <Star size={24} />, title: 'Premium Service', desc: 'Layanan premium dari test drive hingga after sales' },
  ];

  const services = [
    { title: 'Test Drive Gratis', desc: 'Rasakan pengalaman berkendara Wuling dengan test drive gratis tanpa booking' },
    { title: 'Bantuan Kredit & Leasing', desc: 'Solusi pembiayaan fleksibel dengan proses cepat dan DP ringan' },
    { title: 'Service Center', desc: 'Layanan purna jual dengan teknisi bersertifikat Wuling' },
    { title: 'Trade-in Kendaraan', desc: 'Tukar tambah All Brand atau All Merk Kendaraan lama dengan harga terbaik' },
  ];

  return (
    <div className="app">
      {/* Left Side Navigation (Scrollspy) */}
      {currentPage === 'home' && (
        <div className="side-nav">
          <span className="side-nav-item active">
            {['home', 'models', 'features', 'services', 'showroom', 'articles-home'].indexOf(activeSection) !== -1
              ? ['home', 'models', 'features', 'services', 'showroom', 'articles-home'].indexOf(activeSection) + 1
              : 1}
          </span>
          <div className="side-nav-line"></div>
          <span className="side-nav-item">
            6
          </span>
        </div>
      )}

      <nav className="navbar glass" role="navigation" aria-label="Navigasi utama">
        <div className="container">
          <a href="#home" className="navbar-brand" aria-label="Wuling Mimosa BSD - Kembali ke beranda" onClick={(e) => {
            e.preventDefault();
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <img src="./images/Dashboard-mimosa.png" alt="Logo Wuling Mimosa BSD" className="nav-logo-img" />
          </a>
          <div className="navbar-links" role="menubar">
            <button className={`nav-btn ${isCarsMenuOpen ? 'active' : ''}`} onClick={() => setIsCarsMenuOpen(!isCarsMenuOpen)} aria-expanded={isCarsMenuOpen} aria-haspopup="true" aria-controls="mega-menu">Cars</button>
            <button className={`nav-btn ${currentPage === 'price-list' ? 'active' : ''}`} onClick={() => { setCurrentPage('price-list'); setIsCarsMenuOpen(false); }} aria-label="Lihat daftar harga">Price List</button>
            <button className={`nav-btn ${currentPage === 'location' ? 'active' : ''}`} onClick={() => { setCurrentPage('location'); setIsCarsMenuOpen(false); }} aria-label="Lokasi showroom">Location</button>
            <button className={`nav-btn ${currentPage === 'articles' ? 'active' : ''}`} onClick={() => { setCurrentPage('articles'); setIsCarsMenuOpen(false); }} aria-label="Baca artikel Wuling">Articles</button>
          </div>
          <button
            className="mobile-menu-btn btn-outline"
            style={{ padding: '0.5rem', borderRadius: '8px' }}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-sidebar"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mega Menu Overlay */}
      {isCarsMenuOpen && (
        <>
          {/* Backdrop to close menu on outside click */}
          <div
            className="mega-menu-backdrop"
            onClick={() => setIsCarsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mega-menu" id="mega-menu" role="dialog" aria-label="Pilih model Wuling">
            <div className="container">
              <p className="mega-menu-label">Semua Model Wuling</p>
              <div className="mega-menu-grid">
                {[
                  { name: 'New Air EV', img: './images/wuling/NewAIREV-Pristine_White.png', id: 'wuling-new-air-ev' },
                  { name: 'New Binguo EV', img: './images/wuling/NewBINGUOEV-Starry_Black.png', id: 'wuling-new-binguo-ev' },
                  { name: 'New Cloud EV', img: './images/wuling/NewCLOUDEV-Pristine_White.png', id: 'wuling-new-cloud-ev' },
                  { name: 'Darion EV', img: './images/wuling/Darion_White.png', id: 'wuling-darion-ev' },
                  { name: 'Darion PHEV', img: './images/wuling/DarionPHEV_White.png', id: 'wuling-darion-phev' },
                  { name: 'Eksion EV', img: './images/wuling/Eksion-White.png', id: 'wuling-eksion-ev' },
                  { name: 'Eksion PHEV', img: './images/wuling/EksionPHEV-White.png', id: 'wuling-eksion-phev' },
                  { name: 'Formo MAX', img: './images/wuling/FormoMAX-White.png', id: 'wuling-formo-max' },
                  { name: 'Mitra EV', img: './images/wuling/MitraEV-White.png', id: 'wuling-mitra-ev' },
                  { name: 'Almaz', img: './images/wuling/Almaz-Pristine_White.png', id: 'wuling-almaz' },
                  { name: 'Alvez', img: './images/wuling/Alvez-Pristine_White.png', id: 'wuling-alvez' },
                ].map((car) => (
                  <button
                    key={car.name}
                    className="mega-car-item"
                    onClick={() => openCarDetail(car.id)}
                    aria-label={`Lihat detail ${car.name}`}
                  >
                    <div className="mega-car-img-wrap">
                      <img src={car.img} alt={car.name} className="mega-car-img" loading="lazy" width="160" height="90" />
                    </div>
                    <span className="mega-car-name">{car.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile Sidebar Menu */}
      <div className={`mob-sidebar ${isMenuOpen ? 'open' : ''}`} id="mobile-sidebar" role="dialog" aria-label="Menu navigasi mobile" aria-modal="true">
        {/* Header: Wuling logo + Close */}
        <div className="mob-sidebar-header">
          <span className="mob-sidebar-brand">
            <img src="./images/Dashboard-mimosa.png" alt="Logo Wuling Mimosa BSD" style={{ height: '40px', width: 'auto', objectFit: 'contain', maxHeight: '100%' }} />
          </span>
          <button className="mob-sidebar-close" onClick={() => setIsMenuOpen(false)} aria-label="Tutup menu">
            &times;
          </button>
        </div>

        {/* Nav Links */}
        <nav className="mob-sidebar-nav">
          {/* Cars â€” expandable */}
          <div className="mob-nav-section">
            <span className="mob-nav-heading">Cars</span>
            <div className="mob-nav-sub">
              {[
                { name: 'New Air EV', id: 'wuling-new-air-ev' },
                { name: 'New Binguo EV', id: 'wuling-new-binguo-ev' },
                { name: 'New Cloud EV', id: 'wuling-new-cloud-ev' },
                { name: 'Darion EV', id: 'wuling-darion-ev' },
                { name: 'Darion PHEV', id: 'wuling-darion-phev' },
                { name: 'Eksion EV', id: 'wuling-eksion-ev' },
                { name: 'Eksion PHEV', id: 'wuling-eksion-phev' },
                { name: 'Formo MAX', id: 'wuling-formo-max' },
                { name: 'Mitra EV', id: 'wuling-mitra-ev' },
                { name: 'Almaz', id: 'wuling-almaz' },
                { name: 'Alvez', id: 'wuling-alvez' },
              ].map((car) => (
                <button
                  key={car.id}
                  className="mob-nav-sub-item"
                  onClick={() => { openCarDetail(car.id); setIsMenuOpen(false); }}
                >
                  {car.name}
                </button>
              ))}
            </div>
          </div>

          <button className="mob-nav-item" onClick={() => { setCurrentPage('price-list'); setIsMenuOpen(false); window.scrollTo({ top: 0 }); }}>Price List</button>
          <button className="mob-nav-item" onClick={() => { setCurrentPage('location'); setIsMenuOpen(false); window.scrollTo({ top: 0 }); }}>Location</button>
          <button className="mob-nav-item" onClick={() => { setCurrentPage('articles'); setIsMenuOpen(false); window.scrollTo({ top: 0 }); }}>Articles</button>
        </nav>
      </div>
      {/* Backdrop */}
      {isMenuOpen && <div className="mob-sidebar-backdrop" onClick={() => setIsMenuOpen(false)} />}

      {/* Content Area */}
      {currentPage === 'home' && (
        <div className="page-home">
          {/* Hero Section */}
          <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', paddingTop: '24vh' }}>
            <picture>
              <source media="(max-width: 768px)" srcSet="./images/Cover-Website-Mobile/Halaman1-Mobile.png" />
              <img
                src="./images/CoverWebsite-Wuling/Halaman_1.png"
                alt="Wuling Mimosa BSD â€” Dealer Resmi Wuling di BSD, Tangerang Selatan"
                className="hero-bg"
                fetchpriority="high"
                decoding="async"
                width="1920"
                height="1080"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: -2
                }}
              />
            </picture>
            <div className="hero-overlay" style={{
              background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.55) 45%, rgba(10, 10, 10, 0) 100%)'
            }}></div>
            <div className="container" style={{ width: '100%' }}>
              <div className="hero-content animate-fade-in" style={{ maxWidth: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '0 auto' }}>

                <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4.2rem)', fontWeight: 800, whiteSpace: 'nowrap', marginBottom: '1.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
                  Wuling Mimosa BSD
                </h1>
                <div className="hero-actions" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                  <a href="https://wa.me/6288214786250?text=Halo%20Rafi%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20mengenai%20Wuling" target="_blank" rel="noreferrer" className="btn-primary" aria-label="Hubungi sales Wuling melalui WhatsApp">
                    <Phone size={20} aria-hidden="true" /> Hubungi Sales
                  </a>
                  <button 
                    onClick={() => {
                      setCurrentPage('price-list');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="btn-outline"
                    style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Car size={20} /> Lihat Semua Model
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Models Section */}
          <section id="models" style={{ background: `linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.9)), url("${isMobile ? './images/Cover-Website-Mobile/Halaman2-Mobile.png' : './images/CoverWebsite-Wuling/Halaman_2.png'}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Temukan Model Wuling Anda</h2>
                <p className="section-subtitle">
                  Jelajahi pilihan model inovatif kami di bawah ini, atau lihat daftar lengkap untuk menemukan mobil Wuling yang paling cocok untuk Anda.
                </p>
              </div>

              <div className="models-grid">
                {models.map(model => (
                  <div className="model-card glass-card" key={model.id}>
                    <div className="model-image-container">
                      <img src={model.image} alt={`Foto ${model.name}`} className="model-image" loading="lazy" width="400" height="250" />
                    </div>
                    <div className="model-info">
                      <h3 className="model-name">{model.name}</h3>
                      <p className="model-desc">{model.desc}</p>
                      <p className="model-price text-accent-gradient">{model.price}</p>
                      <button
                        onClick={() => openCarDetail(model.carDetailId)}
                        className="btn-outline"
                        style={{ width: '100%' }}
                      >
                        Detail Selengkapnya <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                <button
                  className="btn-outline"
                  style={{ padding: '0.8rem 2.5rem', fontSize: '1.05rem', background: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                  onClick={() => { setCurrentPage('price-list'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  Lihat Semua Model <ChevronRight size={18} style={{ marginLeft: '5px' }} />
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" style={{ background: `linear-gradient(rgba(10, 10, 10, 0.8), rgba(15, 10, 20, 0.85)), url("${isMobile ? './images/Cover-Website-Mobile/Halaman3-Mobile.png' : './images/CoverWebsite-Wuling/Halaman _3.png'}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Terdepan dalam Inovasi Mobilitas Indonesia</h2>
                <p className="section-subtitle">
                  Sebagai bagian dari jaringan resmi Wuling Motors Indonesia, kami hadir untuk memenuhi kebutuhan mobilitas modern Anda dengan kendaraan listrik dan hybrid terbaik.
                </p>
              </div>

              <div className="features-grid">
                {features.map((feature, idx) => (
                  <div className="glass-card feature-card" key={idx}>
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-desc">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" style={{ background: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 15, 20, 0.9)), url("${isMobile ? './images/Cover-Website-Mobile/Halaman4-Mobile.png' : './images/CoverWebsite-Wuling/Halaman_4.png'}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Layanan Komprehensif untuk Kepuasan Anda</h2>
                <p className="section-subtitle">
                  Tim profesional kami yang berpengalaman siap memberikan layanan terbaik dengan komitmen pada kepuasan pelanggan, transparansi, dan pelayanan yang personal.
                </p>
              </div>

              <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                {services.map((service, idx) => (
                  <div className="glass-card" key={idx} style={{ padding: '1.5rem' }}>
                    <h4 className="feature-title" style={{ fontSize: '1.1rem' }}>{service.title}</h4>
                    <p className="feature-desc">{service.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center" style={{ marginTop: '3rem' }}>
                <a href="https://wa.me/6288214786250?text=Halo%20Rafi%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20mengenai%20Wuling" target="_blank" rel="noreferrer" className="btn-primary">
                  Konsultasi Gratis <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </section>

          {/* Showroom Section */}
          <section id="showroom" style={{ background: `linear-gradient(rgba(15, 15, 15, 0.85), rgba(5, 5, 5, 0.95)), url("${isMobile ? './images/Cover-Website-Mobile/Halaman5-Mobile.png' : './images/CoverWebsite-Wuling/Halaman_5.png'}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
              <h2 className="section-title" style={{ marginBottom: '3rem', textAlign: 'left' }}>
                Kunjungi Showroom Wuling<br />Mimosa BSD
              </h2>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                {/* Left Column - Contact Info */}
                <div className="glass-card" style={{ flex: '1', minWidth: '300px', padding: '2.5rem' }}>
                  <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <MapPin size={24} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ marginBottom: '0.2rem', fontSize: '1.1rem' }}>WULING MIMOSA BSD</h4>
                      <p className="feature-desc">Dealer Resmi Wuling - BSD City, Tangerang Selatan</p>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <CalendarDays size={24} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ marginBottom: '0.2rem', fontSize: '1.1rem' }}>Jam Operasional:</h4>
                      <p className="feature-desc">Senin - Minggu: 08:00 - 20:00</p>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Phone size={24} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ marginBottom: '0.2rem', fontSize: '1.1rem' }}>WhatsApp:</h4>
                      <a href="https://wa.me/6288214786250?text=Halo%20Rafi%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20mengenai%20Wuling" className="feature-desc" style={{ textDecoration: 'underline' }}>0882-1478-6250</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Users size={24} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ marginBottom: '0.2rem', fontSize: '1.1rem' }}>Area Layanan:</h4>
                      <p className="feature-desc">BSD, Serpong, Tangerang, Alam Sutera, Gading Serpong, Bintaro, Pamulang, dan sekitarnya hingga seluruh Indonesia.</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Action Buttons */}
                <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <a href="https://wa.me/6288214786250?text=Halo%20Rafi%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20mengenai%20Wuling" className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem', textDecoration: 'none', background: 'rgba(30, 60, 120, 0.4)' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'white' }}>Jadwal Test Drive</h3>
                      <p className="feature-desc">Rasakan pengalaman berkendara Wuling langsung</p>
                    </div>
                    <ChevronRight size={24} style={{ color: 'var(--accent-color)' }} />
                  </a>

                  <div 
                    onClick={() => {
                      setCurrentPage('price-list');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="glass-card" 
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'white' }}>Daftar Harga Lengkap</h3>
                      <p className="feature-desc">Lihat harga dan spesifikasi semua model Wuling</p>
                    </div>
                    <ChevronRight size={24} style={{ color: 'white' }} />
                  </div>
 
                  <div 
                    onClick={() => {
                      setCurrentPage('location');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="glass-card" 
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'white' }}>Lokasi Dealer</h3>
                      <p className="feature-desc">Petunjuk arah ke showroom Wuling Mimosa BSD</p>
                    </div>
                    <ChevronRight size={24} style={{ color: 'white' }} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Articles Section */}
          <section id="articles-home" style={{ background: `linear-gradient(rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 0.9)), url("${isMobile ? './images/Cover-Website-Mobile/Halaman6-Mobile.png' : './images/CoverWebsite-Wuling/Halaman_6.png'}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>Pelajari Lebih Lanjut Tentang Wuling</h2>
              <p style={{ fontSize: '1.2rem', color: '#e5e7eb', marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
                Temukan artikel terbaru tentang teknologi Wuling, tips perawatan, dan panduan mobilitas kendaraan listrik
              </p>
              <a
                onClick={() => { setCurrentPage('articles'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="glass-card"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', color: 'white', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '8px', transition: 'all 0.3s', cursor: 'pointer' }}
              >
                Baca Artikel Wuling <ChevronRight size={18} />
              </a>
            </div>
          </section>
        </div>
      )}

      <Suspense fallback={<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#0a0a0a'}}><div className="loading-spinner" /></div>}>
        {currentPage === 'car-detail' && currentCar && carData[currentCar] && (
          <CarDetailPage car={carData[currentCar]} onBack={closeCarDetail} />
        )}
      </Suspense>

      <Suspense fallback={<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#0a0a0a'}}><div className="loading-spinner" /></div>}>
        {currentPage === 'price-list' && (
          <PriceListPage onViewDetail={openCarDetail} />
        )}
      </Suspense>

      <Suspense fallback={<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#0a0a0a'}}><div className="loading-spinner" /></div>}>
        {currentPage === 'location' && (
          <LocationPage />
        )}
      </Suspense>

      <Suspense fallback={<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#0a0a0a'}}><div className="loading-spinner" /></div>}>
        {currentPage === 'articles' && (
          <ArticlesPage />
        )}
      </Suspense>

      {/* Footer */}
      <footer style={{ backgroundColor: '#ffffff', color: '#4b5563', padding: '3rem 0 1.5rem', borderTop: '1px solid #e5e7eb' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', marginBottom: '2rem' }}>
            {/* Left Column */}
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ color: '#1f2937', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Contact Us</h3>
              <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>Sales: Rafi Wuling Mimosa BSD</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="https://wa.me/6288214786250?text=Halo%20Rafi%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20mengenai%20Wuling" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4b5563', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#25D366'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  <Phone size={18} />
                  <span>+62 882-1478-6250</span>
                </a>
                <a href="mailto:Wulingbsd.rafi@gmail.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4b5563', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ea4335'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>Wulingbsd.rafi@gmail.com</span>
                </a>
                <a href="https://www.instagram.com/rafi.wulingbsd/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4b5563', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e1306c'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span>@rafi.wulingbsd</span>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ flex: '1', minWidth: '300px', display: 'flex', gap: '0.75rem' }}>
              <MapPin size={20} style={{ color: '#6b7280', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ color: '#374151', fontSize: '0.95rem', marginBottom: '0.25rem' }}>Wuling Mimosa BSD</p>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '0.25rem' }}>Jl. BSD Boulevard Utara Kav. 21, Lengkong Kulon, Kec. Pagedangan</p>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Kabupaten Tangerang, Banten 15331</p>
                <a
                  href="https://maps.app.goo.gl/QptZWwwCvTkapXWv5"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#9ca3af', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', transition: 'color 0.2s', marginBottom: '1.2rem' }}
                  onMouseEnter={(e) => e.target.style.color = '#4b5563'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  Open in Google Maps <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>&copy; {new Date().getFullYear()} Wuling Mimosa BSD. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6288214786250?text=Halo%20Rafi%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20mengenai%20Wuling"
        target="_blank"
        rel="noreferrer"
        className="floating-wa"
        aria-label="Hubungi Wuling Mimosa BSD melalui WhatsApp"
      >
        <Phone size={30} color="white" aria-hidden="true" />
      </a>
    </div>
  );
}

export default App;

