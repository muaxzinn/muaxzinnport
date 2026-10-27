/**
 * ====================================================================
 * Firman Awea Portfolio - Project Catalog & System Registry
 * 25+ Curated Engineering Projects | Micro-Roadmaps | Concise Specs
 * Zero Personal / Romance Projects (Strictly Filtered)
 * ====================================================================
 */

const PROJECTS_DATA = [
  // ==========================================
  // FLAGSHIP INNOVATIONS (Top-Tier Masterpieces)
  // ==========================================
  {
    id: 'sblt-cas',
    isFlagship: true,
    title: 'SBLT-CAS',
    subtitle: 'All-in-One Medical AI Platform',
    category: 'ai-medical',
    shortDesc: 'แพลตฟอร์ม AI วินิจฉัยพยาธิสภาพ 7 ระบบบนเบราว์เซอร์ 100% รักษาความเป็นส่วนตัวผู้ป่วย',
    fullDesc: 'ระบบตรวจคัดกรองพยาธิสภาพร่างกาย 7 ระบบ (ผิวหนัง, ดวงตา, ปอด, สมอง, เนื้อเยื่อ) รันผ่าน TensorFlow.js Client-Side 100% โดยไม่ต้องส่งภาพขึ้น Cloud',
    architecture: 'Router Architecture คัดแยกประเภทภาพด้วยความแม่นยำ 93% ก่อนส่งต่อไปยัง Deep Neural Network เฉพาะทางของแต่ละอวัยวะ',
    award: 'รางวัลชมเชยอันดับ 1 STEAMS Co-Creation (ม.เกษตรศาสตร์)',
    techStack: ['TensorFlow.js', 'Router Model', 'Computer Vision', 'Client-Side AI'],
    liveUrl: 'https://muaxzinn.github.io/SBLT-CAS/',
    githubUrl: 'https://github.com/muaxzinn/SBLT-CAS',
    icon: 'fa-brain',
    accentColor: 'cyan',
    roadmap: null
  },
  {
    id: 'drug-advisor',
    isFlagship: true,
    title: 'AI Drug & Symptom Advisor',
    subtitle: 'Clinical NLP & Pharmacological Intelligence',
    category: 'ai-medical',
    shortDesc: 'ระบบสืบค้นข้อมูลยาและอาการทางคลินิก แปลศัพท์เภสัชกรรมซับซ้อนเป็นภาษาชาวบ้านที่เข้าใจง่าย',
    fullDesc: 'ระบบผู้ช่วยสืบค้นข้อมูลยาและประเมินอาการทางคลินิก (Clinical Symptom Checker) ออกแบบเพื่อลดช่องว่างความเข้าใจระหว่างแพทย์-เภสัชกรและประชาชนทั่วไป แปลงศัพท์เภสัชวิทยายากๆ (Mechanism of Action, Contraindications, Drug-Drug Interactions) เป็นภาษาที่เข้าใจได้ทันที พัฒนาจากประสบการณ์จริงในแผนกเภสัชกรรม',
    architecture: 'สถาปัตยกรรมเชื่อมโยง OpenFDA Drug API และฐานข้อมูล MedlinePlus Terminology ผสานกับ Rule-based Clinical NLP Engine เพื่อจับคู่ตัวยาสำคัญ (Generic vs Brand Names) พร้อมระบบประเมินความเสี่ยงอาการไม่พึงประสงค์จากการใช้ยา',
    award: 'แรงบันดาลใจจากการฝึกงานโรงพยาบาลแว้ง (แผนก ER, X-ray, เภสัชกรรม)',
    techStack: ['Medical NLP', 'OpenFDA API', 'Clinical Pharmacology', 'MedlinePlus', 'JavaScript ES6'],
    liveUrl: 'https://ai-drag-and-symptom-advisor.netlify.app',
    githubUrl: 'https://github.com/muaxzinn/ai-drag-and-symptom-advisor',
    icon: 'fa-pills',
    accentColor: 'rose',
    roadmap: [
      { ver: 'v1.0', label: 'Hospital Prototype', active: false },
      { ver: 'v2.0', label: 'Cloud NLP Engine', active: true }
    ]
  },
  {
    id: 'minipos',
    isFlagship: true,
    title: 'minipos & CYD Terminal',
    subtitle: 'Smart Payment & Touchscreen POS Ecosystem',
    category: 'embedded-fintech',
    shortDesc: 'เทอร์มินัลชำระเงิน PromptPay QR (BOT EMVCo) และ Web POS สองทางบน ESP32 2.8" Touchscreen',
    fullDesc: 'ระบบนิเวศจุดขายอัจฉริยะ (POS) ทำงานร่วมกันระหว่างจอสัมผัส ESP32 2.8" กับ Web App แคชเชียร์แบบสองทางเรียลไทม์ รองรับ PromptPay EMVCo, เงินสดคำนวณเงินทอนอัตโนมัติ และทำงานออฟไลน์ได้ 100%',
    architecture: 'PlatformIO C++ เฟิร์มแวร์เชื่อมต่อ Supabase Realtime WebSocket ควบคู่กับ Local Engine จัดการสร้าง QR ตามมาตรฐานธนาคารแห่งประเทศไทย (BOT EMVCo)',
    award: 'Embedded Fintech Ecosystem',
    techStack: ['ESP32', 'PlatformIO', 'C++', 'Supabase Realtime', 'EMVCo QR'],
    liveUrl: 'https://github.com/muaxzinn',
    githubUrl: 'https://github.com/muaxzinn',
    icon: 'fa-cash-register',
    accentColor: 'teal',
    roadmap: [
      { ver: 'v1.0', label: 'CYD Terminal (Stripe)', active: false },
      { ver: 'v1.2', label: 'Next-Gen Architecture', active: false },
      { ver: 'v2.0', label: 'Smart POS Ecosystem', active: true }
    ]
  },
  {
    id: 'xquant',
    isFlagship: true,
    title: 'XQuant',
    subtitle: 'Smart Spectrophotometer & Colorimetric Tool',
    category: 'ai-medical',
    shortDesc: 'เปลี่ยนสมาร์ทโฟนให้เป็นเครื่องวัดความเข้มข้นสารละลายเทียบเท่าอุปกรณ์ห้องแล็บ',
    fullDesc: 'เครื่องมือวิเคราะห์ความเข้มข้นสารเคมีผ่านการดูดกลืนแสง โดยแปลงภาพถ่ายจากกล้องมือถือเป็นค่าความเข้มข้นทางเคมีตามกฎ Beer-Lambert Law พร้อม AI ปรับแก้สภาพแสง',
    architecture: 'ประมวลผลพิกเซล RGB &rarr; คำนวณ Absorbance & Transmittance &rarr; ชดเชยความเบี่ยงเบนของแสงด้วย Linear Regression ML',
    award: 'ASTI Feynman Challenge 2025 (Malaysia / Online)',
    techStack: ['Canvas 2D API', 'Beer-Lambert Law', 'Machine Learning', 'Colorimetric'],
    liveUrl: 'https://muaxzinn.github.io/xquantcolorimetric/',
    githubUrl: 'https://github.com/muaxzinn/xquantcolorimetric',
    icon: 'fa-flask',
    accentColor: 'emerald',
    roadmap: null
  },
  {
    id: 'hongsamud',
    isFlagship: true,
    title: 'hongsamud (ห้องสมุดอัจฉริยะ)',
    subtitle: 'Serverless RFID Library Borrowing System',
    category: 'embedded-fintech',
    shortDesc: 'ระบบยืม-คืนหนังสืออัจฉริยะด้วยบัตร RFID, จอ OLED และ Supabase Realtime Dashboard',
    fullDesc: 'ระบบบริหารห้องสมุดอัตโนมัติไร้เซิร์ฟเวอร์ บันทึกการยืม-คืนหนังสือผ่านคลื่นความถี่วิทยุ RFID (RC522) แสดงผลสดบนจอ OLED และซิงค์ฐานข้อมูลขึ้น Web Dashboard แบบเรียลไทม์',
    architecture: 'ESP32 Firmware เชื่อมต่อ RFID RC522 & I2C SSD1306 ควบคุม Transaction ผ่าน Supabase Cloud Database & Realtime Channels',
    award: 'Serverless IoT Library System',
    techStack: ['ESP32', 'RFID RC522', 'OLED I2C', 'Supabase Realtime', 'Web Dashboard'],
    liveUrl: 'https://github.com/muaxzinn',
    githubUrl: 'https://github.com/muaxzinn',
    icon: 'fa-book-bookmark',
    accentColor: 'violet',
    roadmap: [
      { ver: 'v1.0', label: 'RFID Prototype', active: false },
      { ver: 'v2.0', label: 'Supabase Realtime Cloud', active: true }
    ]
  },
  {
    id: 'smart-cap',
    isFlagship: true,
    title: 'Smart Cap & Glasses for the Blind',
    subtitle: 'Assistive IoT Mobility System',
    category: 'embedded-fintech',
    shortDesc: 'อุปกรณ์สวมใส่ตรวจจับสิ่งกีดขวาง แจ้งเตือนด้วยเสียง AI และส่งพิกัดฉุกเฉินผ่าน GPS',
    fullDesc: 'หมวกและแว่นตาอัจฉริยะสำหรับผู้พิการทางสายตา มีระบบอัลตราโซนิกตรวจจับวัตถุระดับศีรษะและลำตัว พร้อมส่งเสียงเตือน AI และระบุพิกัดดาวเทียมกรณีฉุกเฉิน',
    architecture: 'ไมโครคอนโทรลเลอร์ประมวลผลสัญญาณ Ultrasonic & ToF Sensor เรียลไทม์ เชื่อมต่อโมดูลเสียงสังเคราะห์และเสาสัญญาณ GPS',
    award: 'เหรียญทองแดงระดับชาติ & เหรียญทองระดับภาค - นักประดิษฐ์ สพฐ.',
    techStack: ['Arduino', 'ESP32', 'C/C++', 'Ultrasonic Sensors', 'GPS Telemetry'],
    liveUrl: 'https://github.com/muaxzinn',
    githubUrl: 'https://github.com/muaxzinn',
    icon: 'fa-glasses',
    accentColor: 'amber',
    roadmap: null
  },

  // ==========================================
  // EXTENDED SHOWCASE (Categorized Sandbox)
  // ==========================================

  // Category 1: AI & Medical Science
  {
    id: 'diabeye',
    isFlagship: false,
    title: 'DiabEye.ai',
    subtitle: 'Diabetic Retinopathy Screening',
    category: 'ai-medical',
    shortDesc: 'ระบบ AI ตรวจคัดกรองเบาหวานขึ้นจอประสาทตาจากภาพถ่าย Fundus',
    techStack: ['Deep Learning', 'Ophthalmology', 'Client AI'],
    liveUrl: 'https://github.com/muaxzinn/DiabEye.ai',
    githubUrl: 'https://github.com/muaxzinn/DiabEye.ai',
    icon: 'fa-eye'
  },
  {
    id: 'wkskincencer',
    isFlagship: false,
    title: 'wkskincencer',
    subtitle: 'Skin Lesion & Melanoma AI',
    category: 'ai-medical',
    shortDesc: 'โมเดลตรวจคัดกรองรอยโรคและมะเร็งผิวหนังเบื้องต้นด้วยคอมพิวเตอร์วิทัศน์',
    techStack: ['Computer Vision', 'Dermatology AI', 'TensorFlow.js'],
    liveUrl: 'https://github.com/muaxzinn/wkskincencer',
    githubUrl: 'https://github.com/muaxzinn/wkskincencer',
    icon: 'fa-shield-virus'
  },
  {
    id: 'color2iron',
    isFlagship: false,
    title: 'Color2Iron',
    subtitle: 'Spectrometric Iron Detector',
    category: 'ai-medical',
    shortDesc: 'ตรวจวัดปริมาณธาตุเหล็กในน้ำผ่านการเทียบสีภาพถ่ายกับ Standard Curve',
    techStack: ['RGB Chemistry', 'Water Quality', 'Color Matching'],
    liveUrl: 'https://muaxzinn.github.io/Color2Iron/',
    githubUrl: 'https://github.com/muaxzinn/Color2Iron',
    icon: 'fa-droplet'
  },
  {
    id: 'find-vitamin-c',
    isFlagship: false,
    title: 'Find Vitamin C',
    subtitle: 'Iodine Titration Simulation',
    category: 'ai-medical',
    shortDesc: 'เว็บจำลองการทดลองไทเทรตด้วยสารละลายไอโอดีนและคำนวณปริมาณวิตามินซีอัตโนมัติ',
    techStack: ['Chemical Simulation', 'Titration Math', 'Data Export'],
    liveUrl: 'https://muaxzinn.github.io/Find-vitamin-C-with-iodine/',
    githubUrl: 'https://github.com/muaxzinn/Find-vitamin-C-with-iodine',
    icon: 'fa-vial'
  },
  {
    id: 'percent-decolorization',
    isFlagship: false,
    title: 'Percent Decolorization',
    subtitle: 'Reaction Kinetics RGB Analyzer',
    category: 'ai-medical',
    shortDesc: 'วิเคราะห์อัตราเร็วการเกิดปฏิกิริยาเคมีจากการฟอกจางสีระดับพิกเซล',
    techStack: ['HTML5 Canvas', 'Reaction Kinetics', 'Pixel Matrix'],
    liveUrl: 'https://muaxzinn.github.io/Percent-Decolorization-RGB-Colorimetric-/',
    githubUrl: 'https://github.com/muaxzinn/Percent-Decolorization-RGB-Colorimetric-',
    icon: 'fa-palette'
  },

  // Category 2: Embedded IoT & Fintech
  {
    id: 'cyd-payment',
    isFlagship: false,
    title: 'CYD PromptPay Terminal',
    subtitle: 'Embedded Payment Prototype (v1.0)',
    category: 'embedded-fintech',
    shortDesc: 'ต้นแบบเครื่องชำระเงินจอสัมผัส ESP32 2.8" สร้าง QR PromptPay ผ่าน Stripe',
    techStack: ['ESP32-2432S028R', 'Stripe API', 'PlatformIO'],
    liveUrl: 'https://github.com/muaxzinn',
    githubUrl: 'https://github.com/muaxzinn',
    icon: 'fa-credit-card'
  },

  // Category 3: EdTech & Exam Engines
  {
    id: '3d-spatial-lab',
    isFlagship: false,
    title: '3D Spatial Reasoning Lab',
    subtitle: 'Cognitive 3D Mental Rotation Lab',
    category: 'edtech-exams',
    shortDesc: 'เว็บทดสอบมิติสัมพันธ์และการหมุนวัตถุ 3 มิติในจินตนาการด้วย React & Three.js',
    techStack: ['React', 'Vite', 'Three.js', 'Spatial Math'],
    liveUrl: 'https://github.com/muaxzinn',
    githubUrl: 'https://github.com/muaxzinn',
    icon: 'fa-cubes'
  },
  {
    id: 'polcexam',
    isFlagship: false,
    title: 'แอปติวสอบ นสต. 18 (Dolphin/Lion King)',
    subtitle: 'PWA Cadet Exam Prep & Fitness Engine',
    category: 'edtech-exams',
    shortDesc: 'แอป PWA เตรียมสอบนายสิบตำรวจ คลังข้อสอบ ตารางฝึกสมรรถภาพ และใช้งานออฟไลน์ได้',
    techStack: ['PWA', 'Offline Storage', 'Quiz Engine', 'Fitness Tracker'],
    liveUrl: 'https://github.com/muaxzinn/polcexam',
    githubUrl: 'https://github.com/muaxzinn/polcexam',
    icon: 'fa-shield-halved'
  },
  {
    id: 'tgat2',
    isFlagship: false,
    title: 'TGAT2 Exam Simulator',
    subtitle: 'Vite High-Speed Practice App',
    category: 'edtech-exams',
    shortDesc: 'ระบบจำลองการสอบวัดสมรรถนะการคิดอย่างมีเหตุผล (TGAT2) พร้อมเฉลยและการจับเวลา',
    techStack: ['React', 'Vite', 'Oxlint', 'Exam Logic'],
    liveUrl: 'https://github.com/muaxzinn/TGAT2',
    githubUrl: 'https://github.com/muaxzinn/TGAT2',
    icon: 'fa-pen-to-square'
  },
  {
    id: 'allstudy',
    isFlagship: false,
    title: 'AllStudy (Kanit Engine)',
    subtitle: 'Olympiad & A-Level Practice Suite',
    category: 'edtech-exams',
    shortDesc: 'แพ็กเกจข้อสอบคณิตศาสตร์โอลิมปิกวิชาการและ A-Level สำหรับทบทวนความพร้อม',
    techStack: ['TypeScript', 'MathJax', 'Study Packs'],
    liveUrl: 'https://github.com/muaxzinn',
    githubUrl: 'https://github.com/muaxzinn',
    icon: 'fa-square-root-variable'
  },
  {
    id: 'wiang-4x4',
    isFlagship: false,
    title: 'Wiang 4x4 Gameshow',
    subtitle: 'Interactive Edutainment Game Engine',
    category: 'edtech-exams',
    shortDesc: 'เกมคณิตศาสตร์ประลองเชาวน์ปัญญา 4x4 พร้อมบอร์ดคะแนนสดและระบบจัดการเกม',
    techStack: ['Game Engine', 'Real-time Score', 'Admin Panel'],
    liveUrl: 'https://muaxzinn.github.io/wiang-4x4-gameshow/',
    githubUrl: 'https://github.com/muaxzinn/wiang-4x4-gameshow',
    icon: 'fa-gamepad'
  },
  {
    id: 'psym6',
    isFlagship: false,
    title: 'Psym6 Assessment',
    subtitle: 'Psychological Cognitive Evaluator',
    category: 'edtech-exams',
    shortDesc: 'เครื่องมือประเมินทักษะและกรอบความคิดทางจิตวิทยาและการเรียนรู้',
    techStack: ['Psychology Form', 'Scoring Engine', 'Interactive UI'],
    liveUrl: 'https://github.com/muaxzinn/Psym6',
    githubUrl: 'https://github.com/muaxzinn/Psym6',
    icon: 'fa-user-gear'
  },
  {
    id: 'tgat1-image',
    isFlagship: false,
    title: 'TGAT1 Image Tools',
    subtitle: 'Exam Layout & Resizing Tool',
    category: 'edtech-exams',
    shortDesc: 'เครื่องมือจัดเตรียมและย่อขนาดภาพเพื่อการจัดทำเอกสารและสื่อเตรียมสอบ',
    techStack: ['Canvas Processing', 'Image Resizer', 'Utility'],
    liveUrl: 'https://muaxzinn.github.io/tgat1image/',
    githubUrl: 'https://github.com/muaxzinn/tgat1image',
    icon: 'fa-image'
  },

  // Category 4: Web Utilities & Social Impact
  {
    id: 'allshortcut',
    isFlagship: false,
    title: 'AllShortcut Hub',
    subtitle: 'Next.js Productivity & Keystroke Matrix',
    category: 'web-utilities',
    shortDesc: 'ศูนย์รวมคีย์ลัดสำหรับ Developer และระบบ Productivity สไตล์มินิมอลด้วย Next.js',
    techStack: ['Next.js', 'React', 'Tailwind', 'Productivity'],
    liveUrl: 'https://github.com/muaxzinn',
    githubUrl: 'https://github.com/muaxzinn',
    icon: 'fa-keyboard'
  },
  {
    id: 'thai-chuay-thai',
    isFlagship: false,
    title: 'ไทยช่วยไทย (ChuayCalc)',
    subtitle: 'Mobile-First 60/40 Subsidy Engine',
    category: 'web-utilities',
    shortDesc: 'เว็บแอปคำนวณสิทธิ์เงินอุดหนุนภาครัฐ 60/40 พร้อมระบบคำนวณส่วนต่างและสรุปยอด',
    techStack: ['Mobile-First', 'Calculation Logic', 'Local Database'],
    liveUrl: 'https://github.com/muaxzinn/ThaiChuayThai-ChuayCalc',
    githubUrl: 'https://github.com/muaxzinn/ThaiChuayThai-ChuayCalc',
    icon: 'fa-calculator'
  },
  {
    id: 'smart-bmi',
    isFlagship: false,
    title: 'Smart Calories & BMI Analyzer',
    subtitle: 'Nutritional Health Platform',
    category: 'web-utilities',
    shortDesc: 'คำนวณ BMR & TDEE ด้วยสมการ Mifflin-St Jeor พร้อมแผนโภชนาการและ Export PDF',
    techStack: ['Mifflin-St Jeor', 'PDF Generation', 'Nutrition Health'],
    liveUrl: 'https://muaxzinn.github.io/smart-calories-bmi-analyzer/',
    githubUrl: 'https://github.com/muaxzinn/smart-calories-bmi-analyzer',
    icon: 'fa-apple-whole'
  },
  {
    id: 'flood-helping',
    isFlagship: false,
    title: 'Flood Helping Konthai',
    subtitle: 'Disaster Relief Resource Coordinator',
    category: 'web-utilities',
    shortDesc: 'ระบบข้อมูลประสานงานและจุดรับบริจาคช่วยเหลือผู้ประสบอุทกภัยภาคประชาชน',
    techStack: ['Crisis System', 'Emergency Directory', 'Social Impact'],
    liveUrl: 'https://muaxzinn.github.io/floodhelpingkonthai/',
    githubUrl: 'https://github.com/muaxzinn/floodhelpingkonthai',
    icon: 'fa-hand-holding-heart'
  },
  {
    id: 'buketa-travel',
    isFlagship: false,
    title: 'Buketa Travel',
    subtitle: 'Community Ecotourism Platform',
    category: 'web-utilities',
    shortDesc: 'เว็บประชาสัมพันธ์การท่องเที่ยวชุมชนบูเก๊ะตา ป่าฮาลา–บาลา และน้ำตกสิรินธร จ.นราธิวาส',
    techStack: ['Ecotourism', 'Responsive Web', 'Community'],
    liveUrl: 'https://muaxzinn.github.io/Buketa-travel/',
    githubUrl: 'https://github.com/muaxzinn/Buketa-travel',
    icon: 'fa-mountain-sun'
  },
  {
    id: 'bank-sim',
    isFlagship: false,
    title: 'Bank Ledger Web App',
    subtitle: 'Financial Ledger Simulation',
    category: 'web-utilities',
    shortDesc: 'ระบบจำลองบัญชีธนาคารและการบันทึกธุรกรรมการเงินส่วนบุคคล',
    techStack: ['Financial Logic', 'State Storage', 'Vanilla JS'],
    liveUrl: 'https://muaxzinn.github.io/Bank/',
    githubUrl: 'https://github.com/muaxzinn/Bank',
    icon: 'fa-building-columns'
  },
  {
    id: 'color-picker-util',
    isFlagship: false,
    title: 'Color Palette Engine',
    subtitle: 'Hex & RGB Colorimetric Utility',
    category: 'web-utilities',
    shortDesc: 'เครื่องมือดูดและจับคู่ชุดสีสำหรับงานออกแบบ UI และการคำนวณทางเคมี',
    techStack: ['Color Parsing', 'Clipboard API', 'Hex Matrix'],
    liveUrl: 'https://github.com/muaxzinn/wk-picker-color',
    githubUrl: 'https://github.com/muaxzinn/wk-picker-color',
    icon: 'fa-eye-dropper'
  },
  {
    id: 'no-code-study',
    isFlagship: false,
    title: 'No-Code Architecture Study',
    subtitle: 'Low-Code Adaptability Benchmark',
    category: 'web-utilities',
    shortDesc: 'การศึกษาวิจัยและเปรียบเทียบ Productivity ระหว่าง Low-Code กับ Hand-Coded Web',
    techStack: ['Low-Code', 'Architecture Study', 'Glide/Sites'],
    liveUrl: 'https://muaxzinn.github.io/muaxzinn-port-no-code/',
    githubUrl: 'https://github.com/muaxzinn/muaxzinn-port-no-code',
    icon: 'fa-wand-magic-sparkles'
  }
];

window.PROJECTS_DATA = PROJECTS_DATA;
