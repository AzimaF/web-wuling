// ============================================================
//  Wuling Mimosa BSD — Car Data (sourced from Katalog PDFs)
//  Images use .png format (available in public/images/wuling)
// ============================================================

export const carData = {
  'wuling-new-air-ev': {
    id: 'wuling-new-air-ev',
    name: 'New Air EV',
    tagline: 'City EV Terpopuler',
    slogan: 'Drive the Future, Every Day',
    description:
      'Wuling New Air EV hadir sebagai kendaraan listrik kota yang praktis, lincah, dan sangat hemat energi. Dengan desain kompak modern yang stylish dan teknologi EV terkini, New Air EV adalah pilihan cerdas untuk mobilitas urban sehari-hari yang menyenangkan.',
    highlights: [
      'Desain kompak futuristik ideal untuk kota',
      'Efisiensi tinggi dengan jangkauan hingga 300 km',
      'Pengisian daya AC cepat dan mudah',
      'Tersedia varian Lite 300 dan Pro yang lebih bertenaga',
    ],
    heroImage: './images/wuling/NewAIREV-Pristine_White.png',
    coverImage: './images/Cover-Wuling/Cover-NewAIREV.png',
    colorImage: './images/wuling/NewAIREV-Pristine_White.png',
    colors: [
      { name: 'Pristine White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/NewAIREV-Pristine_White.png' },
      { name: 'Starry Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/NewAIREV-Starry_Black.png' },
      { name: 'Galaxy Blue', hex: '#2E5FA3', cssFilter: 'none', image: './images/wuling/NewAIREV-Galaxy_Blue.png' },
      { name: 'Avocado Green', hex: '#6B8F52', cssFilter: 'none', image: './images/wuling/NewAIREV-Avocado_Green.png' },
      { name: 'Lemon Yellow', hex: '#F5D020', cssFilter: 'none', image: './images/wuling/NewAIREV-Lemon_Yellow.png' },
      { name: 'Peach Pink', hex: '#F4A9A8', cssFilter: 'none', image: './images/wuling/NewAIREV-Peach_Pink.png' },
    ],
    variants: [
      { name: 'Air EV Lite 300', price: 'Rp 251.000.000', specs: { range: '300 km', power: '30 kW', torque: '110 N.m', battery: '17.3 kWh', acceleration: '14.5 dtk' } },
      { name: 'Air EV Pro', price: 'Rp 307.500.000', specs: { range: '300 km', power: '30 kW', torque: '110 N.m', battery: '26.7 kWh', acceleration: '14.5 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '2.974 mm',
        Lebar: '1.505 mm',
        Tinggi: '1.631 mm',
        Wheelbase: '2.010 mm',
        'Berat Kosong': '820 kg',
      },
      Powertrain: {
        Motor: 'Permanent Magnet Synchronous Motor',
        Transmisi: 'Single-speed Automatic',
        Penggerak: 'RWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '12 inch',
        'Rem Depan': 'Disc',
        'Rem Belakang': 'Drum',
      },
      Kapasitas: {
        Penumpang: '4 orang',
        'Volume Bagasi': '170 L',
      },
    },
  },

  'wuling-new-binguo-ev': {
    id: 'wuling-new-binguo-ev',
    name: 'New Binguo EV',
    tagline: 'Hatchback Listrik Stylish',
    slogan: 'Style Meets Efficiency',
    description:
      'Wuling New Binguo EV menghadirkan desain hatchback yang menawan dengan perpaduan estetika modern dan performa listrik yang handal. Dengan interior premium dan fitur teknologi canggih, Binguo EV menjadi pilihan sempurna bagi mereka yang mengutamakan gaya dan kenyamanan.',
    highlights: [
      'Desain hatchback premium dengan tampilan aerodinamis',
      'Interior modern dengan layar sentuh besar',
      'Jangkauan hingga 333 km sekali pengisian',
      'Apple CarPlay & Android Auto wireless',
    ],
    heroImage: './images/wuling/NewBINGUOEV-Starry_Black.png',
    coverImage: './images/Cover-Wuling/Cover-NewBINGUOEV.png',
    colorImage: './images/wuling/NewBINGUOEV-Starry_Black.png',
    colors: [
      { name: 'Starry Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/NewBINGUOEV-Starry_Black.png' },
      { name: 'Avocado Green', hex: '#6B8F52', cssFilter: 'none', image: './images/wuling/NewBINGUOEV-Avocado_Green.png' },
      { name: 'Lemon Yellow', hex: '#F5D020', cssFilter: 'none', image: './images/wuling/NewBINGUOEV-Lemon_Yellow.png' },
      { name: 'Med Galaxy Blue', hex: '#3A6FAD', cssFilter: 'none', image: './images/wuling/NewBINGUOEV-Med_Galaxy_Blue.png' },
      { name: 'Milk Tea', hex: '#C9A882', cssFilter: 'none', image: './images/wuling/NewBINGUOEV-Milk_Tea.png' },
    ],
    variants: [
      { name: 'Binguo Lite', price: 'Rp 318.000.000', specs: { range: '333 km', power: '50 kW', torque: '150 N.m', battery: '31.9 kWh', acceleration: '11.0 dtk' } },
      { name: 'Binguo Pro', price: 'Rp 363.000.000', specs: { range: '333 km', power: '50 kW', torque: '150 N.m', battery: '31.9 kWh', acceleration: '11.0 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.065 mm',
        Lebar: '1.730 mm',
        Tinggi: '1.530 mm',
        Wheelbase: '2.560 mm',
        'Berat Kosong': '1.280 kg',
      },
      Powertrain: {
        Motor: 'Permanent Magnet Synchronous Motor',
        Transmisi: 'Single-speed Automatic',
        Penggerak: 'FWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '16 inch',
        'Rem Depan': 'Ventilated Disc',
        'Rem Belakang': 'Disc',
      },
      Kapasitas: {
        Penumpang: '5 orang',
        'Volume Bagasi': '338 L',
      },
    },
  },

  'wuling-new-cloud-ev': {
    id: 'wuling-new-cloud-ev',
    name: 'New Cloud EV',
    tagline: 'SUV Listrik Premium',
    slogan: 'Elevate Every Journey',
    description:
      'Wuling New Cloud EV hadir sebagai crossover listrik premium yang memadukan kecanggihan teknologi dengan kenyamanan premium. Dengan desain yang modern dan kabin luas, Cloud EV siap membawa Anda ke level berkendara yang lebih tinggi.',
    highlights: [
      'Desain crossover premium dengan ground clearance tinggi',
      'Kabin luas dengan panoramic sunroof',
      'Layar sentuh 15.6 inch canggih',
      'Tersedia varian Lite dan Pro bertenaga tinggi',
    ],
    heroImage: './images/wuling/NewCLOUDEV-Pristine_White.png',
    coverImage: './images/Cover-Wuling/Cover-NewCLOUDEV.png',
    colorImage: './images/wuling/NewCLOUDEV-Pristine_White.png',
    colors: [
      { name: 'Pristine White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/NewCLOUDEV-Pristine_White.png' },
      { name: 'Stray Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/NewCLOUDEV-Stray_Black.png' },
      { name: 'Aurora Silver', hex: '#C0C0C0', cssFilter: 'none', image: './images/wuling/NewCLOUDEV-Aurora_Silver.png' },
      { name: 'Milk Tea', hex: '#C9A882', cssFilter: 'none', image: './images/wuling/NewCLOUDEV-Milk_Tea.png' },
      { name: 'Tungsten Grey', hex: '#6B6B6B', cssFilter: 'none', image: './images/wuling/NewCLOUDEV-Tungsten_Grey.png' },
    ],
    variants: [
      { name: 'Cloud Lite', price: 'Rp 415.000.000', specs: { range: '460 km', power: '100 kW', torque: '180 N.m', battery: '50.6 kWh', acceleration: '7.5 dtk' } },
      { name: 'Cloud Pro', price: 'Rp 443.000.000', specs: { range: '460 km', power: '100 kW', torque: '180 N.m', battery: '50.6 kWh', acceleration: '7.5 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.295 mm',
        Lebar: '1.850 mm',
        Tinggi: '1.625 mm',
        Wheelbase: '2.650 mm',
        'Berat Kosong': '1.550 kg',
      },
      Powertrain: {
        Motor: 'Permanent Magnet Synchronous Motor',
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
        'Volume Bagasi': '450 L',
      },
    },
  },

  'wuling-darion-ev': {
    id: 'wuling-darion-ev',
    name: 'Darion EV',
    tagline: 'MPV Listrik Keluarga',
    slogan: 'Family First, Always',
    description:
      'Wuling Darion EV adalah MPV listrik premium yang dirancang untuk keluarga modern Indonesia. Dengan kabin 7-seater yang lega, teknologi baterai terkini, dan desain yang elegan, Darion EV menghadirkan perjalanan keluarga yang tak tertandingi dalam kenyamanan dan keberlanjutan.',
    highlights: [
      'Kabin 7-seater yang lapang dan nyaman',
      'Desain exterior premium berwibawa',
      'Jangkauan panjang untuk perjalanan keluarga',
      'Fitur keselamatan ADAS lengkap',
    ],
    heroImage: './images/wuling/Darion_White.png',
    coverImage: './images/Cover-Wuling/Cover-Darion.png',
    colorImage: './images/wuling/Darion_White.png',
    colors: [
      { name: 'White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/Darion_White.png' },
      { name: 'Stary Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/Darion-Stary_Black.png' },
      { name: 'Haze Grey', hex: '#8F8F8F', cssFilter: 'none', image: './images/wuling/Darion-Haze_Grey.png' },
      { name: 'Orchid Purple', hex: '#7B5EA7', cssFilter: 'none', image: './images/wuling/Darion-Orchid_Purple.png' },
    ],
    variants: [
      { name: 'Darion EV CE', price: 'Rp 399.000.000', specs: { range: '500 km', power: '130 kW', torque: '250 N.m', battery: '68.8 kWh', acceleration: '8.0 dtk' } },
      { name: 'Darion EV EX', price: 'Rp 459.000.000', specs: { range: '500 km', power: '130 kW', torque: '250 N.m', battery: '68.8 kWh', acceleration: '8.0 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.780 mm',
        Lebar: '1.895 mm',
        Tinggi: '1.770 mm',
        Wheelbase: '2.800 mm',
        'Berat Kosong': '2.105 kg',
      },
      Powertrain: {
        Motor: 'Permanent Magnet Synchronous Motor',
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
        'Volume Bagasi': '200 L (baris 3 terlipat: 700 L)',
      },
    },
  },

  'wuling-darion-phev': {
    id: 'wuling-darion-phev',
    name: 'Darion PHEV',
    tagline: 'Plug-in Hybrid MPV Keluarga',
    slogan: 'Go Further, Together',
    description:
      'Wuling Darion PHEV menggabungkan kemudahan kendaraan listrik dengan kebebasan mesin bensin hybrid. Dengan teknologi PHEV canggih, Darion PHEV memberikan efisiensi bahan bakar luar biasa sekaligus jangkauan tanpa batas untuk perjalanan keluarga jarak jauh.',
    highlights: [
      'Teknologi Plug-in Hybrid (PHEV) hemat bahan bakar',
      'Jangkauan total lebih dari 1.000 km',
      'Kabin 7-seater mewah dengan konfigurasi fleksibel',
      'Pengisian listrik dan BBM untuk fleksibilitas maksimal',
    ],
    heroImage: './images/wuling/Darion_White.png',
    coverImage: './images/Cover-Wuling/Cover-Darion.png',
    colorImage: './images/wuling/Darion_White.png',
    colors: [
      { name: 'White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/Darion_White.png' },
      { name: 'Stary Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/Darion-Stary_Black.png' },
      { name: 'Haze Grey', hex: '#8F8F8F', cssFilter: 'none', image: './images/wuling/Darion-Haze_Grey.png' },
      { name: 'Orchid Purple', hex: '#7B5EA7', cssFilter: 'none', image: './images/wuling/Darion-Orchid_Purple.png' },
    ],
    variants: [
      { name: 'Darion PHEV CE', price: 'Rp 449.000.000', specs: { range: '1.000+ km', power: '195 kW', torque: '350 N.m', battery: '27.2 kWh', acceleration: '6.5 dtk' } },
      { name: 'Darion PHEV EX', price: 'Rp 499.000.000', specs: { range: '1.000+ km', power: '195 kW', torque: '350 N.m', battery: '27.2 kWh', acceleration: '6.5 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.780 mm',
        Lebar: '1.895 mm',
        Tinggi: '1.770 mm',
        Wheelbase: '2.800 mm',
        'Berat Kosong': '2.230 kg',
      },
      Powertrain: {
        'Tipe Mesin': '1.5L Turbocharged + Motor Listrik (PHEV)',
        'Daya Total Sistem': '195 kW',
        'Torsi Total': '350 N.m',
        Transmisi: 'e-CVT',
        Penggerak: 'FWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '18 inch',
        'Rem Depan': 'Ventilated Disc',
        'Rem Belakang': 'Disc',
      },
      Kapasitas: {
        Penumpang: '7 orang',
        'Volume Bagasi': '200 L (baris 3 terlipat: 700 L)',
        'Baterai Listrik': '27.2 kWh (PHEV)',
      },
    },
  },

  'wuling-eksion-ev': {
    id: 'wuling-eksion-ev',
    name: 'Eksion EV',
    tagline: 'SUV Listrik Berperforma Tinggi',
    slogan: 'Power Beyond Limits',
    description:
      'Wuling Eksion EV mendefinisikan ulang standar SUV listrik dengan performa tinggi dan desain aerodinamis yang menawan. Ditenagai oleh motor listrik bertenaga besar, Eksion EV menawarkan akselerasi instan dan jangkauan jauh untuk setiap petualangan.',
    highlights: [
      'Performa SUV listrik bertenaga tinggi',
      'Desain eksterior sporty dan aerodinamis',
      'Tersedia varian CE dan EX premium',
      'Fitur ADAS generasi terbaru',
    ],
    heroImage: './images/wuling/Eksion-White.png',
    coverImage: './images/Cover-Wuling/Cover-Eksion.png',
    colorImage: './images/wuling/Eksion-White.png',
    colors: [
      { name: 'White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/Eksion-White.png' },
      { name: 'Stary Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/Eksion-Stary_Black.png' },
      { name: 'Haze Grey', hex: '#8F8F8F', cssFilter: 'none', image: './images/wuling/Eksion-Haze_Grey.png' },
      { name: 'Archipelago Blue', hex: '#2E5FA3', cssFilter: 'none', image: './images/wuling/Eksion-Archipelago_Blue.png' },
    ],
    variants: [
      { name: 'Eksion EV CE', price: 'Rp 389.000.000', specs: { range: '475 km', power: '160 kW', torque: '320 N.m', battery: '70 kWh', acceleration: '6.5 dtk' } },
      { name: 'Eksion EV EX', price: 'Rp 459.000.000', specs: { range: '475 km', power: '160 kW', torque: '320 N.m', battery: '70 kWh', acceleration: '6.5 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.785 mm',
        Lebar: '1.930 mm',
        Tinggi: '1.675 mm',
        Wheelbase: '2.850 mm',
        'Berat Kosong': '2.100 kg',
      },
      Powertrain: {
        Motor: 'Permanent Magnet Synchronous Motor',
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
        'Volume Bagasi': '590 L',
      },
    },
  },

  'wuling-eksion-phev': {
    id: 'wuling-eksion-phev',
    name: 'Eksion PHEV',
    tagline: 'SUV Hybrid Bertenaga Tinggi',
    slogan: 'Hybrid Power, Infinite Range',
    description:
      'Wuling Eksion PHEV menggabungkan tenaga motor listrik berperforma tinggi dengan fleksibilitas mesin bensin hybrid. Dengan torsi instan dan kemampuan berkendara di segala medan, Eksion PHEV adalah pilihan sempurna bagi petualang modern Indonesia.',
    highlights: [
      'Sistem PHEV bertenaga tinggi dengan AWD opsional',
      'Jangkauan total lebih dari 1.000 km tanpa batas',
      'Performa luar biasa dengan akselerasi 0–100 km/h yang mengesankan',
      'SUV premium untuk segala medan dan petualangan',
    ],
    heroImage: './images/wuling/Eksion-White.png',
    coverImage: './images/Cover-Wuling/Cover-Eksion.png',
    colorImage: './images/wuling/Eksion-White.png',
    colors: [
      { name: 'White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/Eksion-White.png' },
      { name: 'Stary Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/Eksion-Stary_Black.png' },
      { name: 'Haze Grey', hex: '#8F8F8F', cssFilter: 'none', image: './images/wuling/Eksion-Haze_Grey.png' },
      { name: 'Archipelago Blue', hex: '#2E5FA3', cssFilter: 'none', image: './images/wuling/Eksion-Archipelago_Blue.png' },
    ],
    variants: [
      { name: 'Eksion PHEV CE', price: 'Rp 449.000.000', specs: { range: '1.000+ km', power: '240 kW', torque: '460 N.m', battery: '25.8 kWh', acceleration: '5.5 dtk' } },
      { name: 'Eksion PHEV EX', price: 'Rp 499.000.000', specs: { range: '1.000+ km', power: '240 kW', torque: '460 N.m', battery: '25.8 kWh', acceleration: '5.5 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.785 mm',
        Lebar: '1.930 mm',
        Tinggi: '1.675 mm',
        Wheelbase: '2.850 mm',
        'Berat Kosong': '2.280 kg',
      },
      Powertrain: {
        'Tipe Mesin': '1.5L Turbocharged + Motor Listrik (PHEV)',
        'Daya Total Sistem': '240 kW (326 HP)',
        'Torsi Total': '460 N.m',
        Transmisi: 'e-CVT',
        Penggerak: 'AWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '19 inch',
        'Rem Depan': 'Ventilated Disc',
        'Rem Belakang': 'Ventilated Disc',
      },
      Kapasitas: {
        Penumpang: '5 orang',
        'Volume Bagasi': '590 L',
        'Baterai Listrik': '25.8 kWh (PHEV)',
      },
    },
  },

  'wuling-mitra-ev': {
    id: 'wuling-mitra-ev',
    name: 'Mitra EV',
    tagline: 'Kendaraan Niaga Listrik',
    slogan: 'Power Your Business',
    description:
      'Wuling Mitra EV adalah solusi kendaraan niaga listrik terdepan untuk bisnis Anda. Hadir dalam varian BV (Box Van) dan MB (Minibus), Mitra EV menawarkan efisiensi operasional tinggi, biaya operasional rendah, dan kapasitas angkut yang optimal untuk usaha Anda.',
    highlights: [
      'Tersedia varian Box Van (BV) dan Minibus (MB)',
      'Efisiensi biaya operasional tinggi dibanding BBM',
      'Kapasitas angkut optimal untuk berbagai kebutuhan bisnis',
      'Pengisian daya AC cepat untuk operasional harian',
    ],
    heroImage: './images/wuling/MitraEV-White.png',
    coverImage: './images/Cover-Wuling/Cover-MitraEV.png',
    colorImage: './images/wuling/MitraEV-White.png',
    colors: [
      { name: 'White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/MitraEV-White.png' },
      { name: 'Grey New', hex: '#8F8F8F', cssFilter: 'none', image: './images/wuling/MitraEV-Grey_New.png' },
    ],
    variants: [
      { name: 'Mitra EV BV 300', price: 'Rp 328.000.000', specs: { range: '300 km', power: '60 kW', torque: '200 N.m', battery: '43.9 kWh', acceleration: '—' } },
      { name: 'Mitra EV BV 400', price: 'Rp 358.000.000', specs: { range: '400 km', power: '60 kW', torque: '200 N.m', battery: '57.5 kWh', acceleration: '—' } },
      { name: 'Mitra EV MB 300', price: 'Rp 348.000.000', specs: { range: '300 km', power: '60 kW', torque: '200 N.m', battery: '43.9 kWh', acceleration: '—' } },
      { name: 'Mitra EV MB 400', price: 'Rp 378.000.000', specs: { range: '400 km', power: '60 kW', torque: '200 N.m', battery: '57.5 kWh', acceleration: '—' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.995 mm',
        Lebar: '1.790 mm',
        Tinggi: '2.050 mm',
        Wheelbase: '3.050 mm',
        'Berat Kosong': '1.900 kg',
      },
      Powertrain: {
        Motor: 'Permanent Magnet Synchronous Motor',
        Transmisi: 'Single-speed Automatic',
        Penggerak: 'RWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '15 inch',
        'Rem Depan': 'Disc',
        'Rem Belakang': 'Drum',
      },
      Kapasitas: {
        'Penumpang (MB)': '9 orang',
        'Kapasitas Muatan (BV)': '1.000 kg',
      },
    },
  },

  'wuling-almaz': {
    id: 'wuling-almaz',
    name: 'Almaz',
    tagline: 'SUV Premium Berteknologi',
    slogan: 'Intelligence Meets Luxury',
    description:
      'Wuling Almaz hadir sebagai SUV premium yang memadukan kemewahan, teknologi canggih, dan kenyamanan tinggi. Dengan fitur Wuling Indonesian Command (WIND) yang inovatif dan desain yang elegan, Almaz memberikan pengalaman berkendara premium yang sesungguhnya.',
    highlights: [
      'Fitur Wuling Indonesian Command (WIND) canggih',
      'Desain eksterior premium dan mewah',
      'Kabin 7-seater lega dengan material premium',
      'Kamera 360° dan fitur keselamatan lengkap',
    ],
    heroImage: './images/wuling/Almaz-Pristine_White.png',
    coverImage: './images/Cover-Wuling/Cover-Almaz.png',
    colorImage: './images/wuling/Almaz-Pristine_White.png',
    colors: [
      { name: 'Pristine White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/Almaz-Pristine_White.png' },
      { name: 'Starry Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/Almaz-Starry_Black.png' },
      { name: 'Aurora Silver', hex: '#C0C0C0', cssFilter: 'none', image: './images/wuling/Almaz-Aurora_Silver.png' },
      { name: 'Steel Grey', hex: '#6B6B6B', cssFilter: 'none', image: './images/wuling/Almaz-Steel_Grey.png' },
      { name: 'Carnelian Red', hex: '#A52A2A', cssFilter: 'none', image: './images/wuling/Almaz-Carnelian_Red.png' },
    ],
    variants: [
      { name: 'Almaz Lite', price: 'Rp 329.800.000', specs: { range: '—', power: '174 HP', torque: '285 N.m', battery: '—', acceleration: '9.5 dtk' } },
      { name: 'Almaz Pro', price: 'Rp 374.800.000', specs: { range: '—', power: '174 HP', torque: '285 N.m', battery: '—', acceleration: '9.5 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.655 mm',
        Lebar: '1.835 mm',
        Tinggi: '1.760 mm',
        Wheelbase: '2.750 mm',
        'Berat Kosong': '1.645 kg',
      },
      Powertrain: {
        'Tipe Mesin': '1.5L Turbo Petrol',
        'Daya Mesin': '128 kW (174 HP)',
        Transmisi: 'CVT Automatic',
        Penggerak: 'FWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '18 inch',
        'Rem Depan': 'Ventilated Disc',
        'Rem Belakang': 'Disc',
      },
      Kapasitas: {
        Penumpang: '7 orang',
        'Volume Bagasi': '225 L (baris 3 terlipat: 625 L)',
      },
    },
  },

  'wuling-alvez': {
    id: 'wuling-alvez',
    name: 'Alvez',
    tagline: 'SUV Kompak Modern',
    slogan: 'Smart. Sporty. Stylish.',
    description:
      'Wuling Alvez hadir sebagai SUV kompak yang menggabungkan desain sporty modern dengan teknologi terkini. Dengan dimensi yang ideal untuk jalanan Indonesia, fitur keselamatan canggih, dan interior premium, Alvez adalah pilihan tepat bagi pengemudi muda yang dinamis.',
    highlights: [
      'Desain SUV kompak sporty yang memukau',
      'Layar sentuh besar dengan konektivitas lengkap',
      'Fitur keselamatan ADAS terlengkap di kelasnya',
      'Efisiensi bahan bakar tinggi untuk penghematan maksimal',
    ],
    heroImage: './images/wuling/Alvez-Pristine_White.png',
    coverImage: './images/Cover-Wuling/Cover-Alvez.png',
    colorImage: './images/wuling/Alvez-Pristine_White.png',
    colors: [
      { name: 'Pristine White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/Alvez-Pristine_White.png' },
      { name: 'Starry Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/Alvez-Starry_Black.png' },
      { name: 'Aurora Silver', hex: '#C0C0C0', cssFilter: 'none', image: './images/wuling/Alvez-Aurora_Silver.png' },
      { name: 'Steel Grey', hex: '#6B6B6B', cssFilter: 'none', image: './images/wuling/Alvez-Steel_Grey.png' },
      { name: 'Carnelian Red', hex: '#A52A2A', cssFilter: 'none', image: './images/wuling/Alvez-Carnelian_Red.png' },
    ],
    variants: [
      { name: 'Alvez Lite', price: 'Rp 258.800.000', specs: { range: '—', power: '123 HP', torque: '205 N.m', battery: '—', acceleration: '10.8 dtk' } },
      { name: 'Alvez Pro', price: 'Rp 308.800.000', specs: { range: '—', power: '123 HP', torque: '205 N.m', battery: '—', acceleration: '10.8 dtk' } },
    ],
    fullSpecs: {
      Dimensi: {
        Panjang: '4.330 mm',
        Lebar: '1.810 mm',
        Tinggi: '1.645 mm',
        Wheelbase: '2.600 mm',
        'Berat Kosong': '1.360 kg',
      },
      Powertrain: {
        'Tipe Mesin': '1.5L Naturally Aspirated Petrol',
        'Daya Mesin': '90 kW (123 HP)',
        Transmisi: 'CVT Automatic',
        Penggerak: 'FWD',
      },
      'Wheel & Brake': {
        'Ukuran Velg': '17 inch',
        'Rem Depan': 'Ventilated Disc',
        'Rem Belakang': 'Disc',
      },
      Kapasitas: {
        Penumpang: '5 orang',
        'Volume Bagasi': '435 L',
      },
    },
  },
};

export const carList = Object.values(carData);
