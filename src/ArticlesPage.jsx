import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Calendar, Tag, Search, BookOpen } from 'lucide-react';

// ── Article Data ──────────────────────────────────────────────────────────────
const articles = [
  {
    id: 1,
    slug: 'wuling-eksion-review-lengkap',
    category: 'Review',
    categoryColor: '#0066cc',
    date: 'Mei 10, 2025',
    title: 'Review Lengkap Wuling Eksion EV 2025: SUV Listrik Premium Terbaik di Kelasnya',
    excerpt:
      'Wuling Eksion EV hadir dengan desain sporty aerodinamis yang memukau, teknologi motor listrik bertenaga tinggi, dan performa yang mengagumkan. Kami menguji langsung di jalanan BSD hingga Puncak. Ini hasilnya.',
    image: './images/wuling/Eksion-White.png',
    content: [
      { type: 'paragraph', text: "Wuling Eksion EV secara resmi menjadi salah satu SUV listrik paling menarik di Indonesia sejak pertama kali diluncurkan. Menawarkan perpaduan desain aerodinamis sporty yang memukau dan teknologi motor listrik bertenaga tinggi, mobil ini mampu menarik perhatian para penggemar otomotif tanah air." },
      { type: 'heading', text: 'Performa dan Pengalaman Berkendara' },
      { type: 'paragraph', text: 'Kami menguji langsung varian Eksion EV EX di wilayah BSD City, Serpong Raya. Mengendarai SUV bertenaga 160 kW dengan akselerasi yang instan memberikan sensasi berkendara luar biasa yang menyenangkan dan meyakinkan.' },
      { type: 'list', items: [
        'Tenaga Maksimal: 160 kW (217 HP) dengan motor listrik PMSM',
        'Akselerasi 0–100 km/jam: Dalam 6.5 detik yang mengesankan',
        'Jarak Tempuh Maksimal: Hingga 475 km dalam sekali pengisian daya penuh',
        'Handling & Stabilitas: Sangat kokoh dengan sasis modern berteknologi terkini'
      ] },
      { type: 'heading', text: 'Kenyamanan dan Fitur Interior' },
      { type: 'paragraph', text: 'Ditambah dengan kabin yang sangat kedap suara, panoramic sunroof yang lapang, audio premium berkualitas tinggi, serta jok berlapis material premium, Wuling Eksion EV adalah pilihan terbaik bagi Anda yang mencari kombinasi kemewahan dan performa.' }
    ]
  },
  {
    id: 2,
    slug: 'wuling-darion-vs-honda-odyssey',
    category: 'Comparison',
    categoryColor: '#7c3aed',
    date: 'April 28, 2025',
    title: 'Wuling Darion EV vs Honda Odyssey: MPV Listrik vs Hybrid, Mana yang Lebih Worth It?',
    excerpt:
      'Dua MPV terpopuler di Indonesia head-to-head. Kami membandingkan harga, fitur, kenyamanan, dan biaya operasional secara mendalam untuk membantu Anda memilih MPV keluarga terbaik.',
    image: './images/wuling/Darion_White.png',
    content: [
      { type: 'paragraph', text: "Pasar MPV keluarga di Indonesia semakin beragam dengan kehadiran Wuling Darion EV yang menantang kemapanan kendaraan berbahan bakar konvensional. Keduanya menawarkan kenyamanan berkendara, kabin lega, dan berbagai fitur canggih untuk keluarga." },
      { type: 'heading', text: 'Perbandingan Harga & Spesifikasi Utama' },
      { type: 'list', items: [
        'Baterai Wuling Darion EV: 68.8 kWh dengan jangkauan 500 km sekali pengisian penuh',
        'Efisiensi Operasional: Biaya per km Darion EV jauh lebih rendah dibanding BBM',
        'Fitur Keamanan: Keduanya sudah dilengkapi fitur ADAS canggih lengkap',
        'Kapasitas: Keduanya hadir dengan konfigurasi 7-seater yang lapang dan fleksibel'
      ] },
      { type: 'heading', text: 'Mana yang Lebih Layak Dipilih?' },
      { type: 'paragraph', text: 'Wuling Darion EV menawarkan biaya operasional yang jauh lebih rendah, teknologi listrik modern, serta nilai value-for-money yang luar biasa untuk keluarga Indonesia yang ingin beralih ke kendaraan masa depan.' }
    ]
  },
  {
    id: 3,
    slug: 'tips-merawat-baterai-ev',
    category: 'Tips',
    categoryColor: '#059669',
    date: 'April 15, 2025',
    title: '7 Tips Merawat Baterai Mobil Listrik Wuling agar Tetap Awet dan Optimal',
    excerpt:
      'Baterai adalah jantung mobil listrik. Dengan perawatan yang tepat, usia baterai kendaraan listrik Wuling bisa mencapai lebih dari 10 tahun. Simak panduan lengkapnya di sini.',
    image: './images/wuling/NewAIREV-Galaxy_Blue.png',
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
      { type: 'paragraph', text: 'Dengan teknologi baterai Wuling yang canggih dan terpercaya, melakukan perawatan sederhana di atas akan menjamin performa penyimpanan daya tetap prima selamanya.' }
    ]
  },
  {
    id: 4,
    slug: 'wuling-eksion-phev-test-drive',
    category: 'Test Drive',
    categoryColor: '#dc2626',
    date: 'April 5, 2025',
    title: 'Test Drive Wuling Eksion PHEV: Akselerasi 0–100 km/h dalam 5,5 Detik yang Mengejutkan',
    excerpt:
      'Kami mencoba varian Eksion PHEV EX di jalan tol dan perkotaan. Torsi 460 Nm terasa nyata saat pedal gas ditekan penuh. Ini pengalaman berkendara paling mendebarkan dari Wuling.',
    image: './images/wuling/Eksion-Archipelago_Blue.png',
    content: [
      { type: 'paragraph', text: "Wuling Eksion PHEV EX mendefinisikan ulang standar SUV berperforma tinggi. Kami berkesempatan mengujinya langsung di jalan bebas hambatan Tangerang-Merak untuk merasakan semburan torsi instan yang mengejutkan." },
      { type: 'heading', text: 'Hasil Uji Performa Lapangan' },
      { type: 'list', items: [
        'Torsi Instan: Semburan 460 Nm langsung terasa begitu pedal akselerator diinjak',
        'Akselerasi 0-100 km/jam: Terbukti tembus dalam waktu 5.5 detik yang mengesankan',
        'Moda Berkendara: Tersedia mode EV, Hybrid, dan Sport untuk berbagai kebutuhan',
        'Stabilitas Tikungan: Body roll sangat minim dengan grip AWD yang mencengkeram sempurna'
      ] },
      { type: 'paragraph', text: 'Secara keseluruhan, SUV PHEV ini menghadirkan perpaduan sempurna antara kenyamanan berkendara premium kelas atas dan performa mesin yang instan serta jangkauan tanpa batas.' }
    ]
  },
  {
    id: 5,
    slug: 'panduan-kredit-mobil-wuling-2025',
    category: 'Panduan',
    categoryColor: '#d97706',
    date: 'Maret 22, 2025',
    title: 'Panduan Lengkap Kredit Mobil Wuling 2025: Syarat, Cicilan, dan Simulasi Harga',
    excerpt:
      'Beli mobil Wuling secara kredit kini semakin mudah. Kami merangkum semua pilihan pembiayaan, DP minimal, tenor, dan bunga terbaik yang tersedia di dealer resmi Wuling Mimosa BSD.',
    image: './images/wuling/Alvez-Pristine_White.png',
    content: [
      { type: 'paragraph', text: "Memiliki kendaraan impian kini semakin mudah dengan berbagai program pembiayaan yang fleksibel. Dealer resmi Wuling Mimosa BSD bekerja sama dengan berbagai bank dan leasing terkemuka menyediakan paket DP ringan dan bunga kompetitif." },
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
    slug: 'wuling-darion-ev-untuk-keluarga',
    category: 'Review',
    categoryColor: '#0066cc',
    date: 'Maret 10, 2025',
    title: 'Wuling Darion EV: MPV Listrik 7-Seater Terbaik untuk Keluarga Besar di Indonesia',
    excerpt:
      'Wuling Darion EV menawarkan kabin lega 7 penumpang, desain premium, dan jangkauan hingga 500 km. Apakah ini MPV listrik impian keluarga Indonesia?',
    image: './images/wuling/Darion-Haze_Grey.png',
    content: [
      { type: 'paragraph', text: "Wuling Darion EV hadir sebagai jawaban atas tingginya permintaan mobil keluarga 7-seater di Indonesia yang ramah lingkungan. MPV listrik premium ini menawarkan ruang kabin yang lapang, kepraktisan harian, dan jaminan keamanan tingkat tinggi bagi keluarga besar." },
      { type: 'heading', text: 'Keunggulan Utama Wuling Darion EV' },
      { type: 'list', items: [
        'Kapasitas 7 Penumpang Nyata: Kursi baris kedua dan ketiga sangat lapang dengan AC hembusan merata',
        'Fleksibilitas Ruang: Kursi baris belakang bisa dilipat rata dengan lantai untuk muatan bagasi ekstra luas',
        'Jarak Tempuh Panjang: Dilengkapi baterai 68.8 kWh dengan jangkauan tempuh mencapai 500 km sekali cas penuh',
        'Biaya Operasional Rendah: Penghematan biaya harian hingga 70% dibandingkan mobil bermesin bensin'
      ] },
      { type: 'paragraph', text: 'Wuling Darion EV merupakan pilihan nomor satu bagi keluarga modern Indonesia yang mendambakan mobil ramah lingkungan dengan kemewahan dan fungsi maksimal.' }
    ]
  },
  {
    id: 7,
    slug: 'charging-station-jabodetabek',
    category: 'Tips',
    categoryColor: '#059669',
    date: 'Februari 28, 2025',
    title: 'Peta Lengkap SPKLU & Charging Station Wuling di Jabodetabek 2025',
    excerpt:
      'Sudah tahu semua lokasi pengisian daya untuk mobil listrik Wuling Anda di area Jabodetabek? Kami merangkum 50+ titik SPKLU terdekat lengkap dengan waktu pengisian.',
    image: './images/wuling/NewCLOUDEV-Aurora_Silver.png',
    content: [
      { type: 'paragraph', text: "Jaringan Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) di wilayah Jabodetabek tumbuh sangat pesat pada tahun 2025. Sebagai pemilik mobil listrik Wuling, Anda kini tidak perlu lagi merasa khawatir kehabisan daya saat berkendara jauh." },
      { type: 'heading', text: 'Lokasi Pengisian Daya Terfavorit' },
      { type: 'list', items: [
        'Wuling Mimosa BSD: Menyediakan fasilitas DC Fast Charging gratis khusus bagi konsumen setia',
        'SPKLU PLN Mobile: Tersebar di puluhan rest area jalan tol dan kantor pemerintahan di Jabodetabek',
        'Charging Station Mall: Tersedia di mal terkemuka seperti AEON Mall, Summarecon Mall Serpong, dan Grand Indonesia',
        'Jaringan Charging Station Swasta: Akses mudah menggunakan aplikasi seperti Charge.in atau Casion'
      ] },
      { type: 'paragraph', text: 'Panduan lengkap ini membantu Anda memetakan titik SPKLU strategis terdekat, panduan penggunaan aplikasi pengisian daya, serta estimasi waktu cas dari 10% hingga 80% dalam waktu kurang dari 30 menit.' }
    ]
  },
  {
    id: 8,
    slug: 'wuling-air-ev-city-car-terbaik',
    category: 'Review',
    categoryColor: '#0066cc',
    date: 'Februari 14, 2025',
    title: 'Wuling New Air EV: City Car Listrik Paling Fun dan Efisien untuk Anak Muda',
    excerpt:
      'Desain kompak futuristik yang playful, kabin modern, dan harga terjangkau membuat Wuling New Air EV menjadi pilihan utama generasi muda yang ingin beralih ke kendaraan listrik.',
    image: './images/wuling/NewAIREV-Lemon_Yellow.png',
    content: [
      { type: 'paragraph', text: "Wuling New Air EV menjadi pilihan utama bagi anak muda perkotaan yang mencari mobil harian yang stylish, lincah, dan super hemat energi. Desain luarnya yang kompak dan futuristik terlihat sangat dinamis dan modern di jalanan kota." },
      { type: 'heading', text: 'Fitur Unggulan Kekinian' },
      { type: 'list', items: [
        'Layar sentuh 10.25 inci yang intuitif dengan konektivitas smartphone lengkap',
        'Sistem hiburan dengan Apple CarPlay & Android Auto wireless instan',
        'Konsumsi energi super efisien untuk perjalanan perkotaan sehari-hari',
        'Bebas aturan Ganjil-Genap di seluruh ruas jalan protokol Jakarta'
      ] },
      { type: 'paragraph', text: 'Dengan jangkauan hingga 300 km dalam sekali pengisian baterai penuh, Wuling New Air EV siap menemani mobilitas harian Anda dengan kenyamanan dan efisiensi energi yang luar biasa.' }
    ]
  },
];

const CATEGORIES = ['Semua', 'Review', 'Comparison', 'Test Drive', 'Tips', 'Panduan'];

// ── Article Card Component ────────────────────────────────────────────────────
function ArticleCard({ article, featured = false, onSelect }) {
  return (
    <div 
      className={`art-card reveal ${featured ? 'art-card-featured' : ''}`} 
      onClick={() => onSelect(article)}
      style={{ cursor: 'pointer' }}
    >
      {/* Thumbnail */}
      <div className="art-card-img-wrap">
        <img src={article.image} alt={article.title} className="art-card-img" loading="lazy" width="600" height="400" />
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
              backgroundColor: '#f3f4f6',
              border: '1px solid #e5e7eb',
              color: '#374151',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.6rem 1.2rem',
              borderRadius: '8px',
              marginBottom: '2rem',
              transition: 'all 0.2s ease',
              fontFamily: "'Inter', sans-serif"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e5e7eb';
              e.currentTarget.style.color = '#111827';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.color = '#374151';
            }}
          >
            <ArrowLeft size={16} /> Kembali ke Daftar Artikel
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
              Hubungi Tim Sales Wuling Mimosa BSD untuk simulasi cicilan, harga promo terbaru, dan jadwal test drive gratis.
            </p>
            <a
              href={`https://wa.me/6288214786250?text=Halo%20saya%20tertarik%20dengan%20artikel%20"${encodeURIComponent(selectedArticle.title)}"%20dan%20ingin%20tanya-tanya%20seputar%20Wuling`}
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
          <h1 className="art-hero-title">Berita & Artikel<br />Seputar Wuling</h1>
          <p className="art-hero-sub">
            Tips berkendara, review kendaraan listrik Wuling, panduan kredit, dan informasi terbaru
            seputar Wuling Indonesia — semuanya tersedia di sini.
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
            <h2 className="art-cta-title">Ada Pertanyaan Seputar Wuling?</h2>
            <p className="art-cta-sub">
              Hubungi tim sales kami untuk konsultasi gratis seputar mobil Wuling, kredit, dan test drive.
            </p>
          </div>
          <a
            href="https://wa.me/6288214786250?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20Wuling"
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
