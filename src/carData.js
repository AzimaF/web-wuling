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
      { name: 'Air EV Lite 200', price: 'Rp 229.000.000', specs: { range: '200 km (CLTC)', power: '30 kW', torque: '110 N.m', battery: '17.3 kWh', acceleration: '—' } },
      { name: 'Air EV Lite 300', price: 'Rp 251.000.000', specs: { range: '300 km (CLTC)', power: '30 kW', torque: '110 N.m', battery: '17.3 kWh', acceleration: '—' } },
      { name: 'Air EV Pro', price: 'Rp 307.500.000', specs: { range: '300 km (CLTC)', power: '30 kW', torque: '110 N.m', battery: '26.7 kWh', acceleration: '—' } },
    ],
    fullSpecs: {
      'Dimensi & Sasis': {
        'P x L x T (mm)': '2.974 x 1.505 x 1.631',
        'Wheelbase (mm)': '2.010',
        'Kapasitas Tempat Duduk': '4',
        'Suspensi': 'McPherson (Front) + 3-link Coil Spring (Rear)',
        'Velg & Ban': '12" Steel Wheel with Full Cap; 145/70R12',
        'Rem': 'Disc (Front) & Drum/Disc (Rear)',
        'Steering': 'Electric Power Steering',
      },
      'Powertrain & Baterai': {
        'Tenaga Maks. Motor': '30 kW',
        'Torsi Maks. Motor': '110 Nm',
        'Transmisi': 'Single Reduction Gear',
        'Kapasitas Baterai': '17.3 kWh (Lite/Standard) / 26.7 kWh (Long Range/Pro)',
        'Jangkauan': 'Up to 200 km - 300 km',
        'Tipe Baterai': 'Lithium Ferro-Phosphate; IP67 Rating',
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
      { name: 'Binguo Lite', price: 'Rp 318.000.000', specs: { range: '333 km (CLTC)', power: '50 kW (68 HP)', torque: '150 N.m', battery: '31.9 kWh', acceleration: '—' } },
      { name: 'Binguo Pro', price: 'Rp 363.000.000', specs: { range: '333 km (CLTC)', power: '50 kW (68 HP)', torque: '150 N.m', battery: '31.9 kWh', acceleration: '—' } },
    ],
    fullSpecs: {
      'Dimensi & Sasis': {
        'P x L x T (mm)': '3.950 x 1.708 x 1.580',
        'Wheelbase (mm)': '2.560',
        'Kapasitas Tempat Duduk': '4',
        'Velg & Ban': '15" steel wheel, 185/60 R15',
        'Rem': 'Disc (Front) & Disc (Rear)',
      },
      'Powertrain & Baterai': {
        'Tenaga Maksimum Motor': '50 kW',
        'Transmisi': 'Single Reduction Gear',
        'Kapasitas Baterai': '31.9 kWh',
        'Jangkauan (CLTC)': 'Up to 333 km',
        'Kecepatan Maksimum': '120 km/h',
        'Tipe Baterai': 'Lithium Ferro-Phosphate; IP67 Rating',
        'Waktu Pengisian AC (20%-100%)': '± 5.5 jam',
        'Waktu Pengisian DC (30%-80%)': '± 35 menit',
      },
      Kapasitas: {
        'Volume Bagasi': 'Maksimal 790 L (kursi terlipat)',
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
      { name: 'Cloud Lite', price: 'Rp 415.000.000', specs: { range: '460 km (CLTC)', power: '100 kW (134 HP)', torque: '200 N.m', battery: '50.6 kWh', acceleration: '—' } },
      { name: 'Cloud Pro', price: 'Rp 443.000.000', specs: { range: '460 km (CLTC)', power: '100 kW (134 HP)', torque: '200 N.m', battery: '50.6 kWh', acceleration: '—' } },
    ],
    fullSpecs: {
      'Dimensi & Sasis': {
        'P x L x T (mm)': '4.295 x 1.850 x 1.652',
        'Wheelbase (mm)': '2.700',
        'Kapasitas Tempat Duduk': '5',
        'Suspensi': 'MacPherson (front) + Torsion beam (rear)',
        'Velg & Ban': '18" Machined Alloy, 215/55 R18',
        'Rem': 'Disc (front) + Disc (rear)',
        'Steering': 'Electric Power Steering',
      },
      'Powertrain & Baterai': {
        'Motor Listrik': 'Permanent Magnet Synchronous Motor',
        'Tenaga Maks. Motor': '100 kW (134 hp)',
        'Torsi Maks. Motor': '200 Nm',
        'Kapasitas Baterai': '50.6 kWh',
        'Jangkauan (CLTC)': '460 KM',
        'Tipe Baterai': 'Lithium Ferro Phosphate (LFP)',
        'Penggerak': 'Front wheel drive',
      },
      Kapasitas: {
        'Volume Bagasi': 'Maksimal 1.707 L (dengan kursi terlipat)',
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
      { name: 'Darion EV CE', price: 'Rp 399.000.000', specs: { range: '540 km (CLTC)', power: '150 kW (201 HP)', torque: '310 N.m', battery: '—', acceleration: '—' } },
      { name: 'Darion EV EX', price: 'Rp 459.000.000', specs: { range: '540 km (CLTC)', power: '150 kW (201 HP)', torque: '310 N.m', battery: '—', acceleration: '—' } },
    ],
    fullSpecs: {
      'Dimensi & Sasis': {
        'P x L x T (mm)': '4.910 x 1.870 x 1.770',
        'Wheelbase (mm)': '2.910',
        'Kapasitas Tempat Duduk': '7',
        'Suspensi': 'McPherson (front) + Multi-link independent (rear)',
        'Velg & Ban': '17" machined alloy wheel, 215/55 R17',
        'Rem': 'Disc (front) & Disc (rear)',
        'Steering': 'Electric Power Steering',
      },
      'Powertrain': {
        'Tenaga Maksimum Motor': '150 kW (201 hp)',
        'Torsi Maksimum Motor': '310 Nm',
        'Transmisi': 'Single reduction',
        'Kapasitas Baterai': '69.2 kWh',
        'Jangkauan All-electric (CLTC)': '540 km',
        'Tipe Baterai': 'Lithium Iron Phosphate',
        'Drive layout': 'Front Wheel Drive',
      }
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
    heroImage: './images/wuling/DarionPHEV_White.png',
    coverImage: './images/Cover-Wuling/Cover-Darion.png',
    colorImage: './images/wuling/DarionPHEV_White.png',
    colors: [
      { name: 'White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/DarionPHEV_White.png' },
      { name: 'Stary Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/DarionPHEV-Stary_Black.png' },
      { name: 'Haze Grey', hex: '#8F8F8F', cssFilter: 'none', image: './images/wuling/DarionPHEV-Haze_Grey.png' },
      { name: 'Orchid Purple', hex: '#7B5EA7', cssFilter: 'none', image: './images/wuling/DarionPHEV-Orchid_Purple.png' },
    ],
    variants: [
      { name: 'Darion PHEV CE', price: 'Rp 449.000.000', specs: { range: '1.000+ km', power: '145 kW (195 HP)', torque: '230 N.m', battery: '20.5 kWh (PHEV)', acceleration: '—' } },
      { name: 'Darion PHEV EX', price: 'Rp 499.000.000', specs: { range: '1.000+ km', power: '145 kW (195 HP)', torque: '230 N.m', battery: '20.5 kWh (PHEV)', acceleration: '—' } },
    ],
    fullSpecs: {
      'Dimensi & Sasis': {
        'P x L x T (mm)': '4.910 x 1.870 x 1.770',
        'Wheelbase (mm)': '2.910',
        'Kapasitas Tempat Duduk': '7',
        'Suspensi': 'McPherson (front) + Multi-link independent (rear)',
        'Velg & Ban': '17" machined alloy wheel, 215/55 R17',
        'Rem': 'Disc (front) & Disc (rear)',
        'Steering': 'Electric Power Steering',
      },
      'Powertrain': {
        'Mesin Hybrid Khusus': 'Gasoline, 1498cc, naturally aspirated, Atkinson cycle',
        'Tenaga Maks. Mesin': '105 hp @5,800 rpm',
        'Torsi Maks. Mesin': '130 Nm @4,600~5,000 rpm',
        'Kapasitas Tangki BBM': '52 L',
        'Tenaga / Torsi Maks. Motor': '145 kW (195 hp) / 230 Nm',
        'Transmisi': 'Dedicated Hybrid Transmission',
        'Kapasitas Baterai': '20.5 kWh',
        'Jangkauan All-electric (CLTC)': '125 km',
        'Tipe Baterai': 'Lithium Iron Phosphate',
        'Drive layout': 'Front Wheel Drive',
      }
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
      { name: 'Eksion EV CE', price: 'Rp 389.000.000', specs: { range: '530 km (CLTC)', power: '145 kW (195 HP)', torque: '230 N.m', battery: '69.2 kWh', acceleration: '—' } },
      { name: 'Eksion EV EX', price: 'Rp 459.000.000', specs: { range: '530 km (CLTC)', power: '145 kW (195 HP)', torque: '230 N.m', battery: '69.2 kWh', acceleration: '—' } },
    ],
    fullSpecs: {
      'Dimensi & Sasis': {
        'P x L x T (mm)': '4.745 x 1.850 x 1.755',
        'Wheelbase (mm)': '2.810',
        'Kapasitas Tempat Duduk': '7',
        'Suspensi': 'McPherson (front) + Multi-link independent (rear)',
        'Velg & Ban': '18" machined alloy wheel, 215/55 R18',
        'Rem': 'Disc (front) & Disc (rear)',
        'Steering': 'Rack & Pinion ; Electric Power Steering',
      },
      'Powertrain': {
        'Tenaga Maksimum Motor': '150 kW (201 hp)',
        'Torsi Maksimum Motor': '310 Nm',
        'Transmisi': 'Single reduction',
        'Kapasitas Baterai': '69.2 kWh',
        'Jangkauan All-electric (CLTC)': '530 km',
        'Tipe Baterai': 'Lithium Iron Phosphate',
        'Drive layout': 'Front Wheel Drive',
      }
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
    heroImage: './images/wuling/EksionPHEV-White.png',
    coverImage: './images/Cover-Wuling/Cover-Eksion.png',
    colorImage: './images/wuling/EksionPHEV-White.png',
    colors: [
      { name: 'White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/EksionPHEV-White.png' },
      { name: 'Stary Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/EksionPHEV-Stary_Black.png' },
      { name: 'Haze Grey', hex: '#8F8F8F', cssFilter: 'none', image: './images/wuling/EksionPHEV-Haze_Grey.png' },
      { name: 'Archipelago Blue', hex: '#2E5FA3', cssFilter: 'none', image: './images/wuling/EksionPHEV-Archipelago_Blue.png' },
    ],
    variants: [
      { name: 'Eksion PHEV CE', price: 'Rp 449.000.000', specs: { range: '1.000+ km', power: '150 kW (201 HP)', torque: '310 N.m', battery: '20.5 kWh (PHEV)', acceleration: '—' } },
      { name: 'Eksion PHEV EX', price: 'Rp 499.000.000', specs: { range: '1.000+ km', power: '150 kW (201 HP)', torque: '310 N.m', battery: '20.5 kWh (PHEV)', acceleration: '—' } },
    ],
    fullSpecs: {
      'Dimensi & Sasis': {
        'P x L x T (mm)': '4.745 x 1.850 x 1.755',
        'Wheelbase (mm)': '2.810',
        'Kapasitas Tempat Duduk': '7',
        'Suspensi': 'McPherson (front) + Multi-link independent (rear)',
        'Velg & Ban': '18" machined alloy wheel, 215/55 R18',
        'Rem': 'Disc (front) & Disc (rear)',
        'Steering': 'Rack & Pinion ; Electric Power Steering',
      },
      'Powertrain': {
        'Mesin Hybrid Khusus': 'Gasoline, 1498cc, naturally aspirated, Atkinson cycle',
        'Tenaga Maks. Mesin': '105 hp @5,800 rpm',
        'Torsi Maks. Mesin': '130 Nm @4,600~5,000 rpm',
        'Kapasitas Tangki BBM': '52 L',
        'Tenaga / Torsi Maks. Motor': '145 kW (195 hp) / 230 Nm',
        'Transmisi': 'Dedicated Hybrid Transmission',
        'Kapasitas Baterai': '20.5 kWh',
        'Jangkauan All-electric (CLTC)': '125 km',
        'Jangkauan Kombinasi Total': '1.000+ km',
        'Tipe Baterai': 'Lithium Iron Phosphate',
        'Drive layout': 'Front Wheel Drive',
      }
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
      { name: 'Mitra EV BV 300', price: 'Rp 328.000.000', specs: { range: '300 km (CLTC)', power: '75 kW (101 HP)', torque: '180 N.m', battery: '41.9 kWh', acceleration: '—' } },
      { name: 'Mitra EV BV 400', price: 'Rp 358.000.000', specs: { range: '400 km (CLTC)', power: '75 kW (101 HP)', torque: '180 N.m', battery: '56.2 kWh', acceleration: '—' } },
      { name: 'Mitra EV MB 300', price: 'Rp 348.000.000', specs: { range: '300 km (CLTC)', power: '75 kW (101 HP)', torque: '180 N.m', battery: '41.9 kWh', acceleration: '—' } },
      { name: 'Mitra EV MB 400', price: 'Rp 378.000.000', specs: { range: '400 km (CLTC)', power: '75 kW (101 HP)', torque: '180 N.m', battery: '56.2 kWh', acceleration: '—' } },
    ],
    fullSpecs: {
      'Dimensi & Sasis': {
        'P x L x T (mm)': '5.010 × 1.800 × 1.975',
        'Wheelbase (mm)': '3.050',
        'Kapasitas Kargo': 'Hingga 6,5 m³',
        'Suspensi': 'McPherson (front) & Leaf spring (rear)',
        'Velg & Ban': '15" steel wheel, 195/70 R15C',
        'Rem': 'Disc (front) & Drum (rear)',
        'Steering': 'Electric Power Steering (EPS)',
      },
      'Powertrain & Baterai': {
        'Motor Listrik': 'Permanent magnet, synchronous motor',
        'Tenaga / Torsi Maks.': '75 kW / 180 Nm',
        'Kapasitas Baterai': '41.9 kWh (300 km) / 56.2 kWh (400 km)',
        'Jangkauan (CLTC)': 'Up to 300 km - 400 km',
        'Tipe Baterai': 'Lithium Iron Phosphate',
        'Penggerak': 'Rear Wheel Drive',
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
      'Dimensi & Sasis': {
        'P x L x T (mm)': '4.655 x 1.835 x 1.760',
        'Wheelbase (mm)': '2.750',
        'Kapasitas Tempat Duduk': '7 orang',
        'Suspensi': 'McPherson strut (depan) / Torsion beam (belakang)',
        'Velg & Ban': 'Machined alloy, 215/55 R18',
        'Rem': 'Disc (depan) & Disc (belakang)',
        'Steering': 'Electric Power Steering (EPS)',
      },
      'Powertrain (Hybrid)': {
        'Mesin Bensin': '1.999cc, naturally aspirated, 4 cylinders, Atkinson cycle',
        'Tenaga / Torsi Mesin': '123 hp @5.600 rpm / 168 Nm @4.000-4.400 rpm',
        'Motor Listrik': '174 hp / 320 Nm',
        'Transmisi': 'Dedicated Hybrid Transmission (DHT)',
        'Tipe Baterai': 'Ternary lithium-ion (NMC)',
        'Kapasitas Baterai': '1.8 kWh',
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
      'Dimensi & Sasis': {
        'P x L x T (mm)': '4.350 x 1.750 x 1.610',
        'Wheelbase (mm)': '2.550',
        'Kapasitas Tempat Duduk': '5',
        'Suspensi': 'McPherson Strut (depan) & Torsion Beam (belakang)',
        'Velg & Ban': '205/60 R16',
        'Rem': 'Disc (depan) & Drum/Disc (belakang)',
        'Steering': 'Electric Power Steering (EPS)',
      },
      'Mesin & Performa': {
        'Tipe Mesin': 'Inline-4 cylinder, DVVT, DOHC',
        'Kapasitas Mesin': '1.485 cc',
        'Tenaga Maksimum': '105 hp @5.800 rpm',
        'Torsi Maksimum': '143 Nm @4.000-4.600 rpm',
        'Transmisi': '6-speed Manual / CVT',
        'Kapasitas Tangki': '45 Liter',
        'Penggerak': 'Front Wheel Drive',
      },
    },
  },

  'wuling-formo-max': {
    id: 'wuling-formo-max',
    name: 'Formo MAX',
    tagline: 'Pikap Niaga Bertenaga',
    slogan: 'Enteng Angkut, Untung Berlipat',
    description:
      'Wuling Formo MAX adalah pikap ringan bermesin depan yang dirancang khusus untuk kebutuhan bisnis Anda. Dengan bak kargo yang luas, mesin bertenaga, Electric Power Steering, dan fitur keselamatan ABS+EBD, Formo MAX hadir sebagai solusi angkutan bisnis yang handal, irit, dan mudah perawatannya.',
    highlights: [
      'Mesin depan untuk kenyamanan supir maksimal',
      'Bak kargo luas dengan bukaan 3 sisi untuk kemudahan bongkar muat',
      'Electric Power Steering (EPS) untuk manuver mudah',
      'ABS + EBD untuk keamanan pengereman di segala kondisi',
    ],
    heroImage: './images/wuling/FormoMAX-White.png',
    coverImage: './images/Cover-Wuling/Cover-FormoMAX.png',
    colorImage: './images/wuling/FormoMAX-White.png',
    colors: [
      { name: 'White', hex: '#F5F5F5', cssFilter: 'none', image: './images/wuling/FormoMAX-White.png' },
      { name: 'Silver', hex: '#C0C0C0', cssFilter: 'none', image: './images/wuling/FormoMAX-Silver.png' },
      { name: 'Black', hex: '#1A1A1A', cssFilter: 'none', image: './images/wuling/FormoMAX-Black.png' },
    ],
    variants: [
      { name: 'Formo MAX Standard', price: 'Rp 209.800.000', specs: { range: '—', power: '98 HP', torque: '140 N.m', battery: '—', acceleration: '—' } },
      { name: 'Formo MAX AC', price: 'Rp 229.800.000', specs: { range: '—', power: '98 HP', torque: '140 N.m', battery: '—', acceleration: '—' } },
    ],
    fullSpecs: {
      'Dimensi & Sasis': {
        'Dimensi Keseluruhan (mm)': '5.135 x 1.725 x 1.740',
        'Dimensi Bak (mm)': '2.695 x 1.725 x 390',
        'Jarak Sumbu Roda (mm)': '3.160',
        'Suspensi': 'McPherson strut (depan) / Leaf spring (belakang)',
        'Ukuran Ban': '175/75 R14C',
        'Rem': 'Disc (depan) & Drum (belakang)',
        'Steering': 'Electric Power Steering (EPS)',
      },
      'Mesin & Performa': {
        'Tipe Mesin': '4 silinder, segaris, DOHC',
        'Kapasitas Mesin': '1.485 cc',
        'Tenaga Maksimum': '98 hp @5.800 rpm',
        'Torsi Maksimum': '140 Nm @3.400-4.400 rpm',
        'Transmisi': 'Manual, 5 kecepatan maju',
        'Kapasitas Tangki': '42 Liter',
      },
    },
  },
};

export const carList = Object.values(carData);
