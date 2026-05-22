// ============================================================
//  BYD BIPO Serpong — Car Data (sourced from Katalog PDFs)
// ============================================================

export const carData = {
  'byd-dolphin': {
    id: 'byd-dolphin',
    name: 'BYD Dolphin',
    tagline: 'Smart & Sporty',
    slogan: 'The Ocean of Possibilities',
    description:
      'BYD Dolphin hadir sebagai kendaraan listrik kompak yang cerdas dan sporty. Mengusung desain Ocean Aesthetics yang segar, Dolphin menawarkan kabin yang luas, teknologi canggih, dan performa yang menyenangkan untuk mobilitas perkotaan sehari-hari.',
    highlights: [
      'Desain Ocean Aesthetics yang unik dan modern',
      'Kabin luas dengan tampilan interior premium',
      'Baterai Blade BYD dengan keamanan tinggi',
      'Teknologi e-platform 3.0 terbaru',
    ],
    heroImage: './images/BYD/BYD-Dolphin-Surf Blue.png',
    coverImage: './images/Cover-BYD/Cover-BYD-Dolphin.png',
    colorImage: './images/BYD/BYD-Dolphin-Surf Blue.png',
    colors: [
      { name: 'Sand White', hex: '#F4F4F4', cssFilter: 'none', image: './images/BYD/BYD-Dolphin-Sand White.png' },
      { name: 'Ski White', hex: '#E2E5E9', cssFilter: 'none', image: './images/BYD/BYD-Dolphin-Ski White.png' },
      { name: 'Coral Pink', hex: '#E5989B', cssFilter: 'none', image: './images/BYD/BYD-Dolphin-Coral Pink.png' },
      { name: 'Surf Blue', hex: '#5DADE2', cssFilter: 'none', image: './images/BYD/BYD-Dolphin-Surf Blue.png' },
      { name: 'Atlantis Gray', hex: '#5D6D7E', cssFilter: 'none', image: './images/BYD/BYD-Dolphin-Atlantis Gray.png' },
      { name: 'Maldive Purple', hex: '#A391A2', cssFilter: 'none', image: './images/BYD/BYD-Dolphin-Maldive Purple.png' },
      { name: 'Urban Gray', hex: '#8E9195', cssFilter: 'none', image: './images/BYD/BYD-Dolphin-Urban Gray.png' },
    ],
    variants: [
      { name: 'Premium (Include Wall Charging)', price: 'Rp 429.000.000', specs: { range: '490 km', power: '201 HP', torque: '310 N.m', battery: '60.48 kWh', acceleration: '7.0 dtk' } },
      { name: 'Premium (Exclude Wall Charging)', price: 'Rp 420.500.000', specs: { range: '490 km', power: '201 HP', torque: '310 N.m', battery: '60.48 kWh', acceleration: '7.0 dtk' } },
      { name: 'Dynamic (Include Wall Charging)', price: 'Rp 369.000.000', specs: { range: '410 km', power: '94 HP', torque: '180 N.m', battery: '44.9 kWh', acceleration: '12.3 dtk' } },
      { name: 'Dynamic (Exclude Wall Charging)', price: 'Rp 360.500.000', specs: { range: '410 km', power: '94 HP', torque: '180 N.m', battery: '44.9 kWh', acceleration: '12.3 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.290 mm',
        Lebar: '1.770 mm',
        Tinggi: '1.570 mm',
        Wheelbase: '2.700 mm',
        'Berat Kosong': '1.405 kg',
      },
      Powertrain: {
        Motor: 'PMSM (Permanent Magnet Synchronous Motor)',
        Transmisi: 'Single-speed Automatic',
        'Penggerak': 'FWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '17 inch',
        'Rem Depan': 'Ventilated Disc',
        'Rem Belakang': 'Disc',
      },
      Kapasitas: {
        Penumpang: '5 orang',
        'Volume Bagasi': '345 L',
      },
    },
  },

  'byd-m6': {
    id: 'byd-m6',
    name: 'BYD M6',
    tagline: 'Family MPV Listrik',
    slogan: 'More Space, More Life',
    description:
      'BYD M6 adalah MPV listrik premium yang dirancang untuk keluarga modern Indonesia. Dengan kabin 7-seater yang luas, teknologi baterai Blade terkini, dan desain yang elegan, M6 menghadirkan kenyamanan perjalanan keluarga yang tak tertandingi.',
    highlights: [
      'Kabin 7-seater yang luas dan nyaman',
      'Pintu geser elektrik dual-side',
      'Panoramic sunroof untuk nuansa terbuka',
      'Sistem hiburan layar 15,6 inch',
    ],
    heroImage: './images/BYD/BYD-M6-Crystal White.png',
    coverImage: './images/Cover-BYD/Cover-BYD-M6.png',
    colorImage: './images/BYD/BYD-M6-Crystal White.png',
    colors: [
      { name: 'Crystal White', hex: '#ECF0F1', cssFilter: 'none', image: './images/BYD/BYD-M6-Crystal White.png' },
      { name: 'Cosmos Black', hex: '#1A1A2E', cssFilter: 'none', image: './images/BYD/BYD-M6-Cosmos Black.png' },
      { name: 'Quartz Blue', hex: '#2E86C1', cssFilter: 'none', image: './images/BYD/BYD-M6-Quartz Blue.png' },
      { name: 'Harbour Grey', hex: '#839192', cssFilter: 'none', image: './images/BYD/BYD-M6-Harbour Grey.png' },
    ],
    variants: [
      { name: 'Superior (Capt Seat)', price: 'Rp 433.000.000', specs: { range: '530 km', power: '201 HP', torque: '310 N.m', battery: '71.8 kWh', acceleration: '8.6 dtk' } },
      { name: 'Superior (7 Seater)', price: 'Rp 423.000.000', specs: { range: '530 km', power: '201 HP', torque: '310 N.m', battery: '71.8 kWh', acceleration: '8.6 dtk' } },
      { name: 'Standar', price: 'Rp 383.000.000', specs: { range: '420 km', power: '161 HP', torque: '310 N.m', battery: '55.4 kWh', acceleration: '10.1 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.710 mm',
        Lebar: '1.810 mm',
        Tinggi: '1.755 mm',
        Wheelbase: '2.800 mm',
        'Berat Kosong': '2.050 kg',
      },
      Powertrain: {
        Motor: 'PMSM (Permanent Magnet Synchronous Motor)',
        Transmisi: 'Single-speed Automatic',
        Penggerak: 'FWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '18 inch',
        'Rem Depan': 'Ventilated Disc',
        'Rem Belakang': 'Disc',
      },
      Kapasitas: {
        Penumpang: '7 orang',
        'Volume Bagasi': '180 L (baris 3 terlipat: 580 L)',
      },
    },
  },

  'byd-sealion-7': {
    id: 'byd-sealion-7',
    name: 'BYD Sealion 7',
    tagline: 'Performance SUV',
    slogan: 'Charge Ahead',
    description:
      'BYD Sealion 7 mendefinisikan ulang kemewahan SUV listrik dengan performa tinggi dan desain yang aerodinamis. Ditenagai oleh teknologi e-platform 3.0 terkini, Sealion 7 menawarkan akselerasi dahsyat dan jangkauan jauh untuk setiap petualangan.',
    highlights: [
      'Desain aerodinamis dengan drag coefficient 0,272 Cd',
      'Tersedia varian AWD untuk traksi optimal',
      'Intelligent Vehicle Control System (IVCS)',
      'Baterai Blade dengan kapasitas jumbo',
    ],
    heroImage: './images/BYD/BYD-Sealion7-AURORA WHITE.png',
    coverImage: './images/Cover-BYD/Cover-BYD-Sealion7.png',
    colorImage: './images/BYD/BYD-Sealion7-AURORA WHITE.png',
    colors: [
      { name: 'Aurora White', hex: '#F7F9F9', cssFilter: 'none', image: './images/BYD/BYD-Sealion7-AURORA WHITE.png' },
      { name: 'Cosmos Black', hex: '#1C2833', cssFilter: 'none', image: './images/BYD/BYD-Sealion7-Cosmos Black.png' },
      { name: 'Atlantis Gray', hex: '#85929E', cssFilter: 'none', image: './images/BYD/BYD-Sealion7-ATLANTIS GRAY.png' },
      { name: 'Shark Gray', hex: '#566573', cssFilter: 'none', image: './images/BYD/BYD-Sealion7-SHARK GRAY.png' },
    ],
    variants: [
      { name: 'Premium (Include Wall Charging)', price: 'Rp 629.000.000', specs: { range: '567 km', power: '308 HP', torque: '390 N.m', battery: '82.56 kWh', acceleration: '5.9 dtk' } },
      { name: 'Premium (Exclude Wall Charging)', price: 'Rp 620.500.000', specs: { range: '567 km', power: '308 HP', torque: '390 N.m', battery: '82.56 kWh', acceleration: '5.9 dtk' } },
      { name: 'Performance (Include Wall Charging)', price: 'Rp 719.000.000', specs: { range: '542 km', power: '523 HP', torque: '690 N.m', battery: '82.56 kWh', acceleration: '4.5 dtk' } },
      { name: 'Performance (Exclude Wall Charging)', price: 'Rp 710.500.000', specs: { range: '542 km', power: '523 HP', torque: '690 N.m', battery: '82.56 kWh', acceleration: '4.5 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.830 mm',
        Lebar: '1.925 mm',
        Tinggi: '1.620 mm',
        Wheelbase: '2.930 mm',
        'Berat Kosong': '2.150 kg',
      },
      Powertrain: {
        Motor: 'PMSM Front + Rear (AWD)',
        Transmisi: 'Single-speed Automatic',
        Penggerak: 'FWD / AWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '20 inch',
        'Rem Depan': 'Ventilated Disc',
        'Rem Belakang': 'Ventilated Disc',
      },
      Kapasitas: {
        Penumpang: '5 orang',
        'Volume Bagasi': '567 L',
      },
    },
  },

  'byd-atto-3': {
    id: 'byd-atto-3',
    name: 'BYD Atto 3',
    tagline: 'Elevate Versatility',
    slogan: 'Born for Every Adventure',
    description:
      'BYD Atto 3 menawarkan kombinasi kecanggihan dan gaya dengan teknologi Elevate untuk pengalaman serba bisa. SUV kompak ini serbaguna, mewah, dan modern. Motor PMSM yang lebih kuat dengan dua varian tersedia: Advanced (430 km) dan Superior (480 km), keduanya bertenaga 201 hp dan torsi 310 Nm.',
    highlights: [
      'Wajah depan minimalis tanpa grill yang ikonik',
      'Headlight LED dengan DRL & Follow Me Home Light',
      'Performa menanjak lancar dengan mesin senyap',
      'Suspensi empuk dengan stabilitas optimal di tikungan',
    ],
    heroImage: './images/BYD/BYD-Atto3-Surf Blue.png',
    coverImage: './images/Cover-BYD/Cover-BYD-Atto3.png',
    colorImage: './images/BYD/BYD-Atto3-Surf Blue.png',
    colors: [
      { name: 'Ski White', hex: '#F0F3F4', cssFilter: 'none', image: './images/BYD/BYD-Atto3-Ski White.png' },
      { name: 'Surf Blue', hex: '#3498DB', cssFilter: 'none', image: './images/BYD/BYD-Atto3-Surf Blue.png' },
      { name: 'Boulder Gray', hex: '#707B7C', cssFilter: 'none', image: './images/BYD/BYD-Atto3-Boulder Gray.png' },
      { name: 'Cosmos Black', hex: '#17202A', cssFilter: 'none', image: './images/BYD/BYD-Atto3-Cosmos Black.png' },
    ],
    variants: [
      { name: 'Advance+', price: 'Rp 415.000.000', specs: { range: '410 km', power: '201 HP', torque: '310 N.m', battery: '49.92 kWh', acceleration: '7.9 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.455 mm',
        Lebar: '1.875 mm',
        Tinggi: '1.615 mm',
        Wheelbase: '2.720 mm',
        'Berat Kosong': '1.750 kg',
      },
      Powertrain: {
        Motor: 'PMSM (Permanent Magnet Synchronous Motor)',
        Transmisi: 'Single-speed Automatic',
        Penggerak: 'FWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '18 inch',
        'Rem Depan': 'Ventilated Disc',
        'Rem Belakang': 'Disc',
      },
      Kapasitas: {
        Penumpang: '5 orang',
        'Volume Bagasi': '440 L',
      },
    },
  },

  'byd-seal': {
    id: 'byd-seal',
    name: 'BYD Seal',
    tagline: 'Ocean Performance Sedan',
    slogan: 'Born to Perform',
    description:
      'BYD Seal adalah sedan listrik premium yang menggabungkan kemewahan, performa, dan efisiensi dalam satu paket aerodinamis. Dengan desain Ocean Aesthetics yang memukau dan teknologi e-platform 3.0, Seal memberikan pengalaman berkendara sport yang mewah.',
    highlights: [
      'Desain aerodinamis dengan koefisien hambatan 0,219 Cd',
      'Platform CTB (Cell-to-Body) terdepan di industri',
      'Tersedia varian AWD dengan performa 500+ HP',
      'Suspensi belakang multi-link untuk handling presisi',
    ],
    heroImage: './images/BYD/BYD-Seal-AURORA WHITE.png',
    coverImage: './images/Cover-BYD/Cover-BYD-Seal.png',
    colorImage: './images/BYD/BYD-Seal-AURORA WHITE.png',
    colors: [
      { name: 'Aurora White', hex: '#F7F9F9', cssFilter: 'none', image: './images/BYD/BYD-Seal-AURORA WHITE.png' },
      { name: 'Cosmos Black', hex: '#1C2833', cssFilter: 'none', image: './images/BYD/BYD-Seal-Cosmos Black.png' },
      { name: 'Atlantis Gray', hex: '#85929E', cssFilter: 'none', image: './images/BYD/BYD-Seal-ATLANTIS GRAY.png' },
      { name: 'Shark Gray', hex: '#566573', cssFilter: 'none', image: './images/BYD/BYD-Seal-SHARK GRAY.png' },
    ],
    variants: [
      { name: 'Premium (Include Wall Charging)', price: 'Rp 639.000.000', specs: { range: '650 km', power: '308 HP', torque: '360 N.m', battery: '82.56 kWh', acceleration: '5.9 dtk' } },
      { name: 'Premium (Exclude Wall Charging)', price: 'Rp 630.500.000', specs: { range: '650 km', power: '308 HP', torque: '360 N.m', battery: '82.56 kWh', acceleration: '5.9 dtk' } },
      { name: 'Performance (Include Wall Charging)', price: 'Rp 750.000.000', specs: { range: '580 km', power: '523 HP', torque: '670 N.m', battery: '82.56 kWh', acceleration: '3.8 dtk' } },
      { name: 'Performance (Exclude Wall Charging)', price: 'Rp 741.500.000', specs: { range: '580 km', power: '523 HP', torque: '670 N.m', battery: '82.56 kWh', acceleration: '3.8 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.800 mm',
        Lebar: '1.875 mm',
        Tinggi: '1.460 mm',
        Wheelbase: '2.920 mm',
        'Berat Kosong': '1.985 kg',
      },
      Powertrain: {
        Motor: 'PMSM Front + Rear (AWD Performance)',
        Transmisi: 'Single-speed Automatic',
        Penggerak: 'FWD / AWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '19 inch',
        'Rem Depan': 'Ventilated Disc',
        'Rem Belakang': 'Ventilated Disc',
      },
      Kapasitas: {
        Penumpang: '5 orang',
        'Volume Bagasi': '400 L',
      },
    },
  },

  'byd-atto-1': {
    id: 'byd-atto-1',
    name: 'BYD Atto 1',
    tagline: 'Smart City SUV',
    slogan: 'Compact. Smart. Electric.',
    description:
      'BYD Atto 1 adalah SUV kompak listrik yang dirancang khusus untuk mobilitas perkotaan yang cerdas. Dengan dimensi yang ideal untuk jalanan kota, teknologi keselamatan aktif terlengkap di kelasnya, dan efisiensi energi tinggi, Atto 1 adalah pilihan tepat bagi pengemudi urban.',
    highlights: [
      'Dimensi kompak ideal untuk parkir di kota',
      'Advanced Driver Assistance System (ADAS)',
      'Layar sentuh 12,8 inch yang dapat diputar',
      'Teknologi pengisian AC & DC cepat',
    ],
    heroImage: './images/BYD/BYD-Atto1-Sprout Green.png',
    coverImage: './images/Cover-BYD/Cover-BYD-Atto1.png',
    colorImage: './images/BYD/BYD-Atto1-Sprout Green.png',
    colors: [
      { name: 'Apricity White', hex: '#FDFEFE', cssFilter: 'none', image: './images/BYD/BYD-Atto1-Apricity White.png' },
      { name: 'Sprout Green', hex: '#C1D13C', cssFilter: 'none', image: './images/BYD/BYD-Atto1-Sprout Green.png' },
      { name: 'Cosmos Black', hex: '#17202A', cssFilter: 'none', image: './images/BYD/BYD-Atto1-Cosmos Black.png' },
    ],
    variants: [
      { name: 'Standar', price: 'Rp 199.000.000', specs: { range: '300 km', power: '73 HP', torque: '135 N.m', battery: '30.08 kWh', acceleration: '12.5 dtk' } },
      { name: 'Dynamic', price: 'Rp 205.000.000', specs: { range: '300 km', power: '73 HP', torque: '135 N.m', battery: '30.08 kWh', acceleration: '12.5 dtk' } },
      { name: 'Premium', price: 'Rp 245.000.000', specs: { range: '380 km', power: '73 HP', torque: '135 N.m', battery: '38.88 kWh', acceleration: '12.5 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.125 mm',
        Lebar: '1.760 mm',
        Tinggi: '1.580 mm',
        Wheelbase: '2.620 mm',
        'Berat Kosong': '1.320 kg',
      },
      Powertrain: {
        Motor: 'PMSM (Permanent Magnet Synchronous Motor)',
        Transmisi: 'Single-speed Automatic',
        Penggerak: 'FWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '17 inch',
        'Rem Depan': 'Ventilated Disc',
        'Rem Belakang': 'Disc',
      },
      Kapasitas: {
        Penumpang: '5 orang',
        'Volume Bagasi': '270 L',
      },
    },
  },
};

export const carList = Object.values(carData);
