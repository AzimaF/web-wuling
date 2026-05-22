import React, { useState } from 'react';
import { ArrowRight, Calendar, Tag, Search, BookOpen } from 'lucide-react';

// ── Article Data ──────────────────────────────────────────────────────────────
const articles = [
  {
    id: 1,
    slug: 'byd-seal-review-lengkap',
    category: 'Review',
    categoryColor: '#0066cc',
    date: 'Mei 10, 2025',
    title: 'Review Lengkap BYD Seal 2025: Sedan Listrik Premium Terbaik di Kelasnya',
    excerpt:
      'BYD Seal hadir dengan desain aerodinamis memukau, teknologi e-platform 3.0, dan performa setara mobil sport. Kami menguji langsung di jalanan Serpong hingga Puncak. Ini hasilnya.',
    image: './images/byd_seal.png',
    content: [
      { type: 'paragraph', text: "BYD Seal secara resmi menjadi salah satu sedan listrik paling populer di Indonesia sejak pertama kali diluncurkan. Menawarkan perpaduan estetika 'Ocean Aesthetics' yang sporty dan teknologi baterai Blade legendaris dari BYD, mobil ini mampu menarik perhatian para penggemar otomotif tanah air." },
      { type: 'heading', text: 'Performa dan Pengalaman Berkendara' },
      { type: 'paragraph', text: 'Kami menguji langsung varian Performance AWD di wilayah BSD City, Serpong Raya. Mengendarai sedan bertenaga 530 HP dengan akselerasi yang instan memberikan sensasi berkendara luar biasa layaknya mobil sport murni.' },
      { type: 'list', items: [
        'Tenaga Maksimal: 530 HP dengan motor listrik ganda (AWD)',
        'Akselerasi 0–100 km/jam: Hanya dalam 3,8 detik saja',
        'Jarak Tempuh Maksimal: Hingga 580 km dalam sekali pengisian daya penuh (NEDC)',
        'Handling & Stabilitas: Sangat kokoh dengan rancangan sasis e-platform 3.0 terbaru'
      ] },
      { type: 'heading', text: 'Kenyamanan dan Fitur Interior' },
      { type: 'paragraph', text: 'Ditambah dengan kabin yang sangat kedap suara, panoramic glass roof yang lapang, audio mewah premium dari Dynaudio 12-speaker, serta jok berlapis kulit premium, BYD Seal adalah pilihan terbaik bagi Anda yang mencari kombinasi kemewahan dan kecepatan.' }
    ]
  },
  {
    id: 2,
    slug: 'byd-atto3-vs-hyundai-ioniq5',
    category: 'Comparison',
    categoryColor: '#7c3aed',
    date: 'April 28, 2025',
    title: 'BYD Atto 3 vs Hyundai Ioniq 5: Mana yang Lebih Worth It untuk Keluarga Indonesia?',
    excerpt:
      'Dua SUV listrik terpopuler di Indonesia head-to-head. Kami membandingkan harga, fitur, kenyamanan, dan biaya operasional secara mendalam untuk membantu Anda memilih.',
    image: './images/byd_atto.png',
    content: [
      { type: 'paragraph', text: "Pasar SUV listrik di Indonesia semakin memanas dengan kehadiran BYD Atto 3 dan Hyundai Ioniq 5. Keduanya menawarkan kenyamanan berkendara, performa motor listrik yang instan, dan kabin modern yang sangat ramah untuk perjalanan keluarga." },
      { type: 'heading', text: 'Perbandingan Harga & Spesifikasi Utama' },
      { type: 'list', items: [
        'Baterai BYD Atto 3: 60.48 kWh Blade Battery dengan jangkauan 480 km (NEDC)',
        'Baterai Hyundai Ioniq 5: 72.6 kWh dengan jangkauan 481 km (WLTP)',
        'Fitur Keamanan: Keduanya sudah dilengkapi fitur ADAS canggih lengkap',
        'Tema Desain: Atto 3 bertema sporty-music yang dinamis, Ioniq 5 mengusung konsep retro-pixel'
      ] },
      { type: 'heading', text: 'Mana yang Lebih Layak Dipilih?' },
      { type: 'paragraph', text: 'BYD Atto 3 menawarkan kenyamanan berkendara, durabilitas Blade Battery yang legendaris, serta nilai value-for-money yang sangat luar biasa untuk keluarga Indonesia yang ingin bertransisi ke kendaraan masa depan.' }
    ]
  },
  {
    id: 3,
    slug: 'tips-merawat-baterai-ev',
    category: 'Tips',
    categoryColor: '#059669',
    date: 'April 15, 2025',
    title: '7 Tips Merawat Baterai Mobil Listrik agar Tetap Awet dan Optimal',
    excerpt:
      'Baterai adalah jantung mobil listrik. Dengan perawatan yang tepat, usia baterai BYD Blade bisa mencapai lebih dari 10 tahun. Simak panduan lengkapnya di sini.',
    image: './images/byd_sealion.png',
    content: [
      { type: 'paragraph', text: "Baterai adalah jantung kendaraan listrik (EV). Merawat baterai dengan benar tidak hanya menjaga jangkauan jarak tempuh tetap optimal, tetapi juga memperpanjang masa pakai baterai hingga belasan tahun." },
      { type: 'heading', text: 'Tips Menjaga Kualitas Sel Baterai' },
      { type: 'list', items: [
        'Hindari Daya Drop di Bawah 10%: Jangan biarkan baterai sering kehabisan daya hingga kosong.',
        'Batasi DC Fast Charging: Gunakan pengisian AC lambat di rumah untuk pemakaian harian agar baterai tidak cepat panas.',
        'Jaga Pengisian di Angka 80-90%: Untuk penggunaan rutin perkotaan, pengisian daya tidak harus selalu 100%.',
        'Parkir di Tempat Teduh: Suhu ekstrim dapat mempengaruhi efisiensi pengisian daya dan umur baterai.',
        'Lakukan Pembaruan Software (OTA): Selalu update sistem manajemen baterai mobil Anda.'
      ] },
      { type: 'paragraph', text: 'Dengan teknologi Blade Battery BYD yang terkenal sangat aman dan tahan terhadap siklus ekstrem, melakukan perawatan sederhana di atas akan menjamin performa penyimpanan daya tetap prima selamanya.' }
    ]
  },
  {
    id: 4,
    slug: 'byd-sealion-7-test-drive',
    category: 'Test Drive',
    categoryColor: '#dc2626',
    date: 'April 5, 2025',
    title: 'Test Drive BYD Sealion 7 AWD: Akselerasi 0–100 km/h dalam 4,5 Detik yang Mengejutkan',
    excerpt:
      'Kami mencoba varian Performance AWD BYD Sealion 7 di sirkuit dan jalan tol. Torsi 690 Nm terasa nyata saat pedal gas ditekan penuh. Ini pengalaman berkendara paling mendebarkan kami.',
    image: './images/byd_sealion.png',
    content: [
      { type: 'paragraph', text: "BYD Sealion 7 AWD Performance mendefinisikan ulang standar SUV listrik berperforma tinggi. Kami berkesempatan mengujinya langsung di jalan bebas hambatan Tangerang-Merak untuk merasakan semburan torsi instan yang mengejutkan." },
      { type: 'heading', text: 'Hasil Uji Performa Lapangan' },
      { type: 'list', items: [
        'Torsi Instan: Semburan 690 Nm langsung terasa begitu pedal akselerator diinjak',
        'Akselerasi 0-100 km/jam: Terbukti tembus dalam waktu 4.5 detik saja',
        'Sasis & Suspensi: Menggunakan e-platform 3.0 terpadu dengan suspensi adaptif DiSus-C',
        'Stabilitas Tikungan: Body roll sangat minim dengan grip AWD yang mencengkeram sempurna'
      ] },
      { type: 'paragraph', text: 'Secara keseluruhan, SUV listrik ini menghadirkan perpaduan sempurna antara kenyamanan berkendara premium kelas atas dan performa mesin buas yang instan.' }
    ]
  },
  {
    id: 5,
    slug: 'panduan-kredit-mobil-listrik-2025',
    category: 'Panduan',
    categoryColor: '#d97706',
    date: 'Maret 22, 2025',
    title: 'Panduan Lengkap Kredit Mobil Listrik BYD 2025: Syarat, Cicilan, dan Simulasi Harga',
    excerpt:
      'Beli mobil listrik BYD secara kredit kini semakin mudah. Kami merangkum semua pilihan pembiayaan, DP minimal, tenor, dan bunga terbaik yang tersedia di dealer resmi.',
    image: './images/byd_atto.png',
    content: [
      { type: 'paragraph', text: "Memiliki kendaraan listrik impian kini semakin mudah dengan berbagai program pembiayaan yang fleksibel. Dealer resmi BYD BIPO Serpong bekerja sama dengan berbagai bank dan leasing terkemuka menyediakan paket DP ringan dan bunga kompetitif." },
      { type: 'heading', text: 'Syarat Dokumen Pengajuan Kredit' },
      { type: 'list', items: [
        'Fotokopi KTP Pemohon (Suami & Istri jika sudah menikah)',
        'Fotokopi Kartu Keluarga (KK) & NPWP terbaru',
        'Slip Gaji Bulanan atau Surat Keterangan Usaha (bagi pengusaha)',
        'Salinan Rekening Koran tabungan selama 3 bulan terakhir'
      ] },
      { type: 'heading', text: 'Simulasi Promo & Pembiayaan Terbaik' },
      { type: 'paragraph', text: 'Konsumen dapat menikmati promo menarik mulai dari DP ringan 15%, pilihan bunga mulai dari 0% untuk tenor pendek, hingga jangka waktu cicilan fleksibel mencapai 7 tahun.' }
    ]
  },
  {
    id: 6,
    slug: 'byd-m6-untuk-keluarga',
    category: 'Review',
    categoryColor: '#0066cc',
    date: 'Maret 10, 2025',
    title: 'BYD M6: MPV Listrik 7-Seater Terbaik untuk Keluarga Besar di Indonesia',
    excerpt:
      'BYD M6 menawarkan kabin lega 7 penumpang, pintu geser elektrik, panoramic sunroof, dan jangkauan hingga 530 km. Apakah ini MPV listrik impian keluarga Indonesia?',
    image: './images/byd_seal.png',
    content: [
      { type: 'paragraph', text: "BYD M6 hadir sebagai jawaban atas tingginya permintaan mobil keluarga 7-seater di Indonesia yang ramah lingkungan. MPV listrik medium ini menawarkan ruang kabin yang lapang, kepraktisan harian, dan jaminan keamanan tingkat tinggi bagi keluarga besar." },
      { type: 'heading', text: 'Keunggulan Utama BYD M6' },
      { type: 'list', items: [
        'Kapasitas 7 Penumpang Nyata: Kursi baris kedua dan ketiga sangat lapang dengan AC hembusan merata',
        'Fleksibilitas Ruang: Kursi baris belakang bisa dilipat rata dengan lantai untuk muatan bagasi ekstra luas',
        'Jarak Tempuh Panjang: Dilengkapi baterai andal dengan jangkauan tempuh mencapai 530 km sekali cas penuh',
        'Biaya Operasional Rendah: Penghematan biaya harian hingga 70% dibandingkan mobil bermesin bensin'
      ] },
      { type: 'paragraph', text: 'BYD M6 merupakan pilihan nomor satu bagi keluarga modern Indonesia yang mendambakan mobil ramah lingkungan dengan kemewahan dan fungsi maksimal.' }
    ]
  },
  {
    id: 7,
    slug: 'charging-station-jabodetabek',
    category: 'Tips',
    categoryColor: '#059669',
    date: 'Februari 28, 2025',
    title: 'Peta Lengkap SPKLU & Charging Station BYD di Jabodetabek 2025',
    excerpt:
      'Sudah tahu semua lokasi pengisian daya untuk mobil listrik BYD Anda di area Jabodetabek? Kami merangkum 50+ titik SPKLU terdekat lengkap dengan waktu pengisian.',
    image: './images/byd_sealion.png',
    content: [
      { type: 'paragraph', text: "Jaringan Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) di wilayah Jabodetabek tumbuh sangat pesat pada tahun 2025. Sebagai pemilik mobil listrik BYD, Anda kini tidak perlu lagi merasa khawatir kehabisan daya saat berkendara jauh." },
      { type: 'heading', text: 'Lokasi Pengisian Daya Terfavorit' },
      { type: 'list', items: [
        'BYD BIPO Serpong: Menyediakan fasilitas DC Ultra-Fast Charging gratis khusus bagi konsumen setia',
        'SPKLU PLN Mobile: Tersebar di puluhan rest area jalan tol dan kantor pemerintahan di Jabodetabek',
        'Charging Station Mall: Tersedia di mal terkemuka seperti AEON Mall, Summarecon Mall Serpong, dan Grand Indonesia',
        'Jaringan Charging Station Swasta: Akses mudah menggunakan aplikasi seperti Charge.in atau Casion'
      ] },
      { type: 'paragraph', text: 'Panduan lengkap ini membantu Anda memetakan titik SPKLU strategis terdekat, panduan penggunaan aplikasi pengisian daya, serta estimasi waktu cas dari 10% hingga 80% dalam waktu kurang dari 30 menit.' }
    ]
  },
  {
    id: 8,
    slug: 'byd-dolphin-city-car-terbaik',
    category: 'Review',
    categoryColor: '#0066cc',
    date: 'Februari 14, 2025',
    title: 'BYD Dolphin: City Car Listrik Paling Fun dan Efisien untuk Anak Muda',
    excerpt:
      'Desain Ocean Aesthetics yang playful, kabin modern, dan harga terjangkau membuat BYD Dolphin menjadi pilihan utama generasi muda yang ingin beralih ke kendaraan listrik.',
    image: './images/byd_seal.png',
    content: [
      { type: 'paragraph', text: "BYD Dolphin menjadi pilihan utama bagi anak muda perkotaan yang mencari mobil harian yang stylish, lincah, dan super hemat energi. Desain luarnya terinspirasi dari keindahan laut (Ocean Aesthetics) yang terlihat dinamis dan modern." },
      { type: 'heading', text: 'Fitur Unggulan Kekinian' },
      { type: 'list', items: [
        'Layar Sentuh 12,8 Inci yang bisa diputar (Rotating Screen) vertikal/horizontal khas BYD',
        'Sistem hiburan premium dengan Apple CarPlay & Android Auto nirkabel instan',
        'Panoramic glass roof lapang yang menambah kemewahan kabin',
        'Bebas aturan Ganjil-Genap di seluruh ruas jalan protokol Jakarta'
      ] },
      { type: 'paragraph', text: 'Dengan jangkauan mencapai 410-490 km dalam sekali pengisian baterai penuh, BYD Dolphin siap menemani mobilitas harian Anda dengan kenyamanan maksimal dan efisiensi energi yang luar biasa.' }
    ]
  },
];

const CATEGORIES = ['Semua', 'Review', 'Comparison', 'Test Drive', 'Tips', 'Panduan'];

// ── Article Card Component ────────────────────────────────────────────────────
function ArticleCard({ article, featured = false, onSelect }) {
  return (
    <div 
      className={`art-card ${featured ? 'art-card-featured' : ''}`} 
      onClick={() => onSelect(article)}
      style={{ cursor: 'pointer' }}
    >
      {/* Thumbnail */}
      <div className="art-card-img-wrap">
        <img src={article.image} alt={article.title} className="art-card-img" />
        <div className="art-card-img-overlay" />
      </div>

      {/* Body */}
      <div className="art-card-body">
        <div className="art-card-meta">
          <span
            className="art-category-badge"
            style={{ background: article.categoryColor + '18', color: article.categoryColor, border: `1px solid ${article.categoryColor}33` }}
          >
            <Tag size={10} /> {article.category}
          </span>
          <span className="art-date">
            <Calendar size={12} /> {article.date}
          </span>
        </div>

        <h2 className={`art-card-title ${featured ? 'art-card-title-featured' : ''}`}>
          {article.title}
        </h2>

        <p className="art-card-excerpt">{article.excerpt}</p>

        <button className="art-read-btn" onClick={(e) => { e.stopPropagation(); onSelect(article); }}>
          Baca Selengkapnya <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

// ── Articles Page ─────────────────────────────────────────────────────────────
export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'Semua' || a.category === activeCategory;
    const matchSearch =
      searchQuery === '' ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const [featured, ...rest] = filtered;

  // Handle article view (Only text, white background, no images, structured text + points)
  if (selectedArticle) {
    return (
      <div className="art-detail-page-container" style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '100px', paddingBottom: '5rem', color: '#1f2937' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          {/* Back Button */}
          <button 
            onClick={() => {
              setSelectedArticle(null);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#0066cc',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0',
              marginBottom: '2rem',
              transition: 'color 0.2s',
              fontFamily: "'Inter', sans-serif"
            }}
            onMouseEnter={(e) => e.target.style.color = '#0052a3'}
            onMouseLeave={(e) => e.target.style.color = '#0066cc'}
          >
            ← Kembali ke Daftar Artikel
          </button>

          {/* Meta Info (No read time) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span
              style={{
                background: selectedArticle.categoryColor + '18',
                color: selectedArticle.categoryColor,
                border: `1px solid ${selectedArticle.categoryColor}33`,
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.25rem 0.75rem',
                borderRadius: '50px'
              }}
            >
              {selectedArticle.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>
              Tanggal: {selectedArticle.date}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#111827',
            fontFamily: 'Outfit, sans-serif',
            lineHeight: '1.25',
            marginBottom: '2rem',
          }}>
            {selectedArticle.title}
          </h1>

          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '2rem' }} />

          {/* Reading Content (Structured with headings and lists - No Images) */}
          <div className="article-body-content" style={{
            fontSize: '1.1rem',
            lineHeight: '1.85',
            color: '#374151',
            fontFamily: 'Inter, sans-serif',
          }}>
            {selectedArticle.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={index} style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#111827',
                    fontFamily: 'Outfit, sans-serif',
                    marginTop: '2.2rem',
                    marginBottom: '1rem'
                  }}>
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={index} style={{
                    paddingLeft: '1.5rem',
                    marginBottom: '1.8rem',
                    listStyleType: 'disc'
                  }}>
                    {block.items.map((item, itemIdx) => {
                      // Check for colon to bold prefix
                      const parts = item.split(': ');
                      if (parts.length > 1) {
                        return (
                          <li key={itemIdx} style={{
                            marginBottom: '0.6rem',
                            lineHeight: '1.75'
                          }}>
                            <strong>{parts[0]}:</strong> {parts.slice(1).join(': ')}
                          </li>
                        );
                      }
                      return (
                        <li key={itemIdx} style={{
                          marginBottom: '0.6rem',
                          lineHeight: '1.75'
                        }}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                );
              }
              // Default is paragraph
              return (
                <p key={index} style={{ marginBottom: '1.5rem' }}>
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '3rem', marginBottom: '2.5rem' }} />

          {/* WhatsApp CTA */}
          <div style={{
            background: '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111827', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
              Tertarik Berkonsultasi Lebih Lanjut?
            </h3>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
              Hubungi Rafi Brand Consultan (Sales Dealer Resmi BYD BIPO Serpong) untuk simulasi cicilan, harga promo terbaru, dan jadwal test drive gratis.
            </p>
            <a
              href={`https://wa.me/6288214786250?text=Halo%20saya%20tertarik%20dengan%20artikel%20"${encodeURIComponent(selectedArticle.title)}"%20dan%20ingin%20tanya-tanya%20seputar%20BYD`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.75rem 2rem', textDecoration: 'none' }}
            >
              Konsultasi WhatsApp
            </a>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="art-page">

      {/* ── Hero ── */}
      <div className="art-hero">
        <div className="art-hero-glow" />
        <div className="container art-hero-inner">
          <span className="art-hero-badge">
            <BookOpen size={13} /> Blog & Artikel
          </span>
          <h1 className="art-hero-title">Berita & Artikel<br />Seputar BYD</h1>
          <p className="art-hero-sub">
            Tips berkendara, review kendaraan listrik, panduan kredit, dan informasi terbaru
            seputar BYD Indonesia — semuanya tersedia di sini.
          </p>

          {/* Search */}
          <div className="art-search-wrap">
            <Search size={18} className="art-search-icon" />
            <input
              type="text"
              placeholder="Cari artikel..."
              className="art-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div className="art-filter-bar">
        <div className="container art-filter-inner">
          <div className="art-filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`art-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="art-filter-count">{filtered.length} artikel</span>
        </div>
      </div>

      {/* ── Articles Grid ── */}
      <div className="art-content">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="art-empty">
              <BookOpen size={48} className="art-empty-icon" />
              <p className="art-empty-title">Artikel tidak ditemukan</p>
              <p className="art-empty-sub">Coba ubah kata kunci atau filter kategori</p>
              <button
                className="art-filter-btn active"
                style={{ marginTop: '1rem' }}
                onClick={() => { setSearchQuery(''); setActiveCategory('Semua'); }}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <>
              {/* Featured article (full-width, first item) */}
              {featured && <ArticleCard article={featured} featured onSelect={handleSelectArticle} />}

              {/* Rest articles — 2-col grid */}
              {rest.length > 0 && (
                <div className="art-grid">
                  {rest.map((a) => (
                    <ArticleCard key={a.id} article={a} onSelect={handleSelectArticle} />
                  ))}
                </div>
              )}
            </>
          ) }
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="art-cta-section">
        <div className="container art-cta-inner">
          <div>
            <h2 className="art-cta-title">Ada Pertanyaan Seputar BYD?</h2>
            <p className="art-cta-sub">
              Hubungi tim sales kami untuk konsultasi gratis seputar mobil listrik BYD, kredit, dan test drive.
            </p>
          </div>
          <a
            href="https://wa.me/6288214786250?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20BYD"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '0.9rem 2rem', flexShrink: 0 }}
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </div>
  );
}
