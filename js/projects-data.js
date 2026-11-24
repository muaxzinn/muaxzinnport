/**
 * ====================================================================
 * Firman Awea Portfolio - Project Catalog & System Registry
 * 25+ Curated Engineering Projects | Micro-Roadmaps | Concise Specs
 * Verified Live Deployments & Authentic GitHub Repositories
 * ====================================================================
 */

const PROJECTS_DATA = [
  // ==========================================
  // FLAGSHIP INNOVATIONS (Top-Tier Masterpieces)
  // ==========================================
  {
    id: 'cherish-moments',
    isFlagship: true,
    title: 'Cherish Moments V2',
    subtitle: 'Digital Memory Card SaaS · Stripe PromptPay & OWASP Security',
    category: 'web-utilities',
    shortDesc: 'แพลตฟอร์มสร้างการ์ดความทรงจำดิจิทัลหลายหน้าบน Next.js 16 + Supabase + Cloudflare R2 พร้อมชำระเงิน Stripe Live PromptPay QR ผ่านการทดสอบ SIT/UAT และ Security 23/23 เทสต์',
    fullDesc: 'Digital Memory Card Sandbox แบบ Full-Stack Production (Singapore Region) รองรับ Google OAuth 2.0 + PKCE, สตูดิโอสร้างการ์ด 8 บล็อกโต้ตอบ, เพลงประกอบลิขสิทธิ์ปลอดภัย, โควต้าฟรีและระบบชวนเพื่อน รวมถึงระบบเก็บรักษาข้อมูล TTL อัตโนมัติ',
    architecture: 'Next.js 16 App Router SSR + Supabase PostgreSQL (RLS Deny-All & Server-Only RPCs) + Cloudflare R2 Media Gateway (WebP Magic-Byte Validation) + Stripe Live PromptPay Webhook & 2s Polling + OWASP 2025 CSRF/Rate-Limit/AI-Bot Defense',
    award: 'Production Live SaaS · 23/23 Automated & Security QA Tests Passed',
    techStack: ['Next.js 16', 'Supabase', 'Cloudflare R2', 'Stripe Live', 'QA / SIT / UAT'],
    liveUrl: 'https://cherish-moments-zeta.vercel.app',
    githubUrl: 'https://github.com/muaxzinn/Cherish-Moments',
    icon: 'fa-envelope-open-text',
    accentColor: 'rose',
    roadmap: [
      { ver: 'v1.0', label: 'Card Sandbox', active: false },
      { ver: 'v2.0', label: 'Live SaaS & Security QA', active: true }
    ]
  },
  {
    id: 'interactive-lab',
    isFlagship: true,
    title: 'Interactive Learning Lab (v1.1)',
    subtitle: '69 STEM Scientific Workbenches · 186/186 Tests Passed',
    category: 'edtech-exams',
    shortDesc: 'แพลตฟอร์มห้องแล็บวิทยาศาสตร์และคณิตศาสตร์เชิงโต้ตอบ 69 โมดูล พร้อมระบบ TCM และ Automated QA ผ่านครบ 186/186 เทสต์ (64 Suites) และมาตรฐาน WCAG 2.1 AA',
    fullDesc: 'รวม 61 OpenLyceum Scientific Simulations และ 8 Native Laboratories (Circuit Solver, Stoichiometry, Logic Gates, 3D WebGL, Thai Phonology) บน Next.js 15 PWA ที่ทำงานออฟไลน์ได้สมบูรณ์พร้อมรายงาน TEST_REPORT.md',
    architecture: 'Next.js 15 App Router + Three.js WebGL + Mafs 2D + Matter.js + KaTeX + Node.js Native Test Runner (186 tests / 64 suites, 99.91% TS coverage, XSS fuzzing, 3-byte Thai UTF-8 safety)',
    award: '186/186 Tests Passed (64 Suites · 100% Pass Rate · WCAG 2.1 AA)',
    techStack: ['Next.js 15', 'Three.js', 'PWA', 'TCM / QA Suite', 'WCAG 2.1 AA'],
    liveUrl: 'https://lab-beige-mu.vercel.app',
    githubUrl: 'https://github.com/muaxzinn/lab',
    icon: 'fa-atom',
    accentColor: 'cyan',
    roadmap: [
      { ver: 'v1.0', label: '164-Test Release', active: false },
      { ver: 'v1.1', label: '69 Labs · 186 Tests', active: true }
    ]
  },
  {
    id: 'cyc-photobooth',
    isFlagship: true,
    title: 'CYC Photo Booth Studio PWA',
    subtitle: 'iPad Pro Event Kiosk · Cloudflare Workers, D1 & R2',
    category: 'web-utilities',
    shortDesc: 'ระบบตู้ถ่ายภาพ Photo Booth PWA สำหรับงานอีเวนต์สภาเด็กและเยาวชนเทศบาลตำบลบูเก๊ะตา บน iPad Pro พร้อม QR Gallery มือถือเปลี่ยนกรอบ/ฟิลเตอร์ได้ทันทีและลบอัตโนมัติใน 48 ชม.',
    fullDesc: 'ออกแบบและผ่านการทดสอบ On-Device UAT บน iPad Pro (iOS Safari) รองรับกรอบ 20 แบบ ฟิลเตอร์ 8 แบบ รีเซ็ตความเป็นส่วนตัวอัตโนมัติใน 60 วินาที และ Cloudflare Cron Auto-Purge ทุก 1 ชั่วโมง',
    architecture: 'Cloudflare Pages (Next.js PWA) + Cloudflare Workers Edge API + D1 SQLite + R2 Object Storage + Vitest API Test Suites + 32-Byte Session Token Isolation',
    award: 'Deployed for Buketa Municipality Youth Council (On-Device UAT)',
    techStack: ['Cloudflare Workers', 'D1 / R2', 'iPad Kiosk PWA', 'Vitest', 'Canvas 2D'],
    liveUrl: null,
    githubUrl: null,
    icon: 'fa-camera-retro',
    accentColor: 'emerald',
    roadmap: null
  },
  {
    id: 'policeprep',
    isFlagship: true,
    title: 'PolicePrep',
    subtitle: '7,038-Question Exam Platform · Atomic RPC & QA Gate',
    category: 'edtech-exams',
    shortDesc: 'แพลตฟอร์มติวสอบและคลังข้อสอบนายสิบตำรวจจริง 7,038 ข้อ พร้อมภาพประกอบ 1,386 ไฟล์ สคริปต์ตรวจคุณภาพ Test Data และระบบ Atomic Concurrency Lock บน Supabase',
    fullDesc: 'ระบบจำลองการสอบและวิเคราะห์จุดอ่อนรายวิชา ครอบคลุม 7 รายวิชา 22 ชุดข้อสอบ พร้อมระบบ Backoffice, Exam Regression Tester และ Quality Gate Scripts ตรวจสอบความถูกต้องของชุดข้อมูลก่อนดีพลอย',
    architecture: 'Next.js 15 App Router + TypeScript + Supabase PostgreSQL (RLS & SELECT ... FOR UPDATE Atomic RPCs) + QA Quality Gate & Frontend/Backend Test Suites',
    award: '7,038 Validated Exam Records · 1,386 Media Assets · QA Regression Gate',
    techStack: ['Next.js 15', 'Supabase RPC', 'Test Data QA', 'TypeScript', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
    icon: 'fa-shield-halved',
    accentColor: 'violet',
    roadmap: null
  },
  {
    id: 'sblt-cas',
    isFlagship: true,
    title: 'SBLT-CAS',
    subtitle: 'All-in-One Medical AI Platform',
    category: 'ai-medical',
    shortDesc: 'เว็บแอปคัดกรองพยาธิสภาพ 7 ระบบ ประมวลผลโมเดล Deep Learning บนเบราว์เซอร์ผู้ใช้ 100% เพื่อรักษาความลับข้อมูลผู้ป่วย',
    fullDesc: 'ระบบช่วยตรวจคัดกรองพยาธิสภาพร่างกาย 7 ระบบ (ผิวหนัง, จอประสาทตา, ปอด, เนื้อเยื่อ ฯลฯ) ทำงานผ่าน TensorFlow.js ฝั่ง Client-Side 100% โดยไม่ต้องอัปโหลดรูปภาพผู้ป่วยขึ้น Cloud Server เพื่อปกป้องความเป็นส่วนตัวของผู้ป่วยตามมาตรฐานสากล',
    architecture: 'ใช้สถาปัตยกรรม Router Model คัดแยกหมวดหมู่อวัยวะด้วยความแม่นยำ 93% ก่อนส่งต่อไปยัง Deep Neural Network เฉพาะทางของแต่ละระบบ เพื่อลดขนาดโมเดลและเพิ่มความเร็วในการวินิจฉัย',
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
    shortDesc: 'เครื่องมือสืบค้นข้อมูลยาและประเมินอาการทางคลินิก แปลศัพท์เภสัชกรรมซับซ้อนให้เป็นภาษาที่เข้าใจง่าย พัฒนาจากปัญหาจริงในโรงพยาบาล',
    fullDesc: 'ระบบช่วยสืบค้นข้อบ่งใช้ ตัวยาสำคัญ อาการข้างเคียง และข้อควรระวัง (Drug Interactions) โดยใช้เทคนิคการประมวลผลภาษาธรรมชาติ (Clinical NLP) แปลงศัพท์เฉพาะทางทางการแพทย์ให้คนทั่วไปเข้าใจได้ทันที พัฒนาจากปัญหาจริงที่พบขณะฝึกงานในแผนกเภสัชกรรม',
    architecture: 'เชื่อมโยงข้อมูลจาก OpenFDA Drug Database และ MedlinePlus Terminology ผสานกับ Rule-based Clinical NLP Engine ในการจับคู่ชื่อทางการค้ากับชื่อสามัญทางยา (Generic vs Brand Names) พร้อมระบบประเมินความเสี่ยงเบื้องต้น',
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
    shortDesc: 'เทอร์มินัลชำระเงิน PromptPay QR (มาตรฐาน BOT EMVCo) และระบบจัดการจุดขายบนบอร์ด ESP32 2.8" Touchscreen',
    fullDesc: 'ระบบจุดชำระเงินอัจฉริยะ (Smart POS) พัฒนาบนไมโครคอนโทรลเลอร์ ESP32 เชื่อมต่อกับจอสัมผัส 2.8" และเว็บแอปพลิเคชันแคชเชียร์แบบสองทางเรียลไทม์ รองรับคิวอาร์โค้ด PromptPay มาตรฐานสากล, คำนวณเงินทอนอัตโนมัติ และทำงานออฟไลน์ได้สมบูรณ์',
    architecture: 'เฟิร์มแวร์ C++ (PlatformIO) จัดการสื่อสารกับจอสัมผัสผ่าน SPI (TFT_eSPI / XPT2046) ซิงค์ข้อมูลผ่าน Supabase Realtime WebSockets พร้อมเอ็นจินสร้างเพย์โหลดคิวอาร์โค้ดตามมาตรฐาน EMVCo / BOT Checksum CRC16',
    award: 'Embedded Fintech Ecosystem',
    techStack: ['ESP32', 'PlatformIO', 'C++', 'Supabase Realtime', 'EMVCo QR'],
    liveUrl: null,
    githubUrl: null,
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
    shortDesc: 'เครื่องมือวัดความเข้มข้นสารละลายผ่านกล้องสมาร์ทโฟนตามกฎเบียร์-แลมเบิร์ต (Beer-Lambert Law) ด้วยการประมวลผลพิกเซล',
    fullDesc: 'ระบบสเปกโทรโฟโตเมทรีพกพา เปลี่ยนกล้องสมาร์ทโฟนให้เป็นเครื่องมือวิเคราะห์ความเข้มข้นสารเคมี โดยดึงค่าสี RGB จากภาพถ่ายสารละลายมาคำนวณหาค่าการดูดกลืนแสง (Absorbance) และการส่องผ่าน (Transmittance) ตามกฎ Beer-Lambert Law',
    architecture: 'สกัดข้อมูลพิกเซลผ่าน HTML5 Canvas 2D API นำค่าความเข้มแสงมาคำนวณสมการ และใช้ Linear Regression เพื่อปรับเทียบความถูกต้องกับ Standard Curve พร้อมชดเชยแสงรบกวนภายนอก',
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
    shortDesc: 'ระบบบริหารการยืม-คืนหนังสืออัตโนมัติด้วยบัตร RFID และบอร์ด ESP32 เชื่อมต่อฐานข้อมูลคลาวด์เรียลไทม์',
    fullDesc: 'ระบบห้องสมุดอัจฉริยะแบบไร้เซิร์ฟเวอร์ (Serverless) ระบุตัวตนผู้ใช้และหนังสือผ่านคลื่นความถี่วิทยุ RFID (RC522) แสดงสถานะธุรกรรมบนจอ OLED SSD1306 และส่งข้อมูลเข้าฐานข้อมูล Web Dashboard ผ่าน WebSockets ทันที',
    architecture: 'เฟิร์มแวร์ ESP32 จัดการอินเทอร์รัปต์ของโมดูล RFID RC522 สื่อสารกับจอ OLED ผ่าน I2C และส่งข้อมูลผ่าน HTTPS REST API / WebSocket Channels ไปยัง Supabase PostgreSQL',
    award: 'Serverless IoT Library System',
    techStack: ['ESP32', 'RFID RC522', 'OLED I2C', 'Supabase Realtime', 'Web Dashboard'],
    liveUrl: null,
    githubUrl: 'https://github.com/muaxzinn/hongsamud',
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
    shortDesc: 'อุปกรณ์สวมใส่ช่วยเหลือผู้พิการทางสายตา ตรวจจับสิ่งกีดขวาง แจ้งเตือนด้วยเสียง และระบุพิกัดฉุกเฉินผ่านดาวเทียม GPS',
    fullDesc: 'หมวกและแว่นตาอัจฉริยะช่วยนำทางสำหรับผู้มีภาวะบกพร่องทางการมองเห็น ใช้เซนเซอร์คลื่นเสียงอัลตราโซนิกตรวจจับสิ่งกีดขวางทั้งระดับศีรษะและทางเดิน ส่งเสียงแจ้งเตือนผ่านโมดูลเสียง และส่งพิกัดฉุกเฉินผ่านระบบดาวเทียม GPS',
    architecture: 'ไมโครคอนโทรลเลอร์ประมวลผลสัญญาณสะท้อนของคลื่นอัลตราโซนิก (HC-SR04) แบบเรียลไทม์ แปลงระยะทางเป็นระดับเสียงเตือนผ่าน DFPlayer Mini พร้อมโมดูล GPS NEO-6M ถอดรหัส NMEA Sentences',
    award: 'เหรียญทองแดงระดับชาติ & เหรียญทองระดับภาค - การประกวดผลงานสิ่งประดิษฐ์และนวัตกรรม',
    techStack: ['Arduino', 'ESP32', 'C/C++', 'Ultrasonic Sensors', 'GPS Telemetry'],
    liveUrl: null,
    githubUrl: null,
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
    liveUrl: null,
    githubUrl: 'https://github.com/muaxzinn/DiabEye.ai',
    icon: 'fa-eye'
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
    liveUrl: null,
    githubUrl: null,
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
    liveUrl: null,
    githubUrl: null,
    icon: 'fa-cubes'
  },
  {
    id: 'tgat2',
    isFlagship: false,
    title: 'TGAT2 Exam Simulator',
    subtitle: 'Vite High-Speed Practice App',
    category: 'edtech-exams',
    shortDesc: 'ระบบจำลองการสอบวัดสมรรถนะการคิดอย่างมีเหตุผล (TGAT2) พร้อมเฉลยและการจับเวลา',
    techStack: ['React', 'Vite', 'Oxlint', 'Exam Logic'],
    liveUrl: null,
    githubUrl: null,
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
    liveUrl: null,
    githubUrl: null,
    icon: 'fa-square-root-variable'
  },
  {
    id: 'psym6',
    isFlagship: false,
    title: 'Psym6 Assessment',
    subtitle: 'Psychological Cognitive Evaluator',
    category: 'edtech-exams',
    shortDesc: 'เครื่องมือประเมินทักษะและกรอบความคิดทางจิตวิทยาและการเรียนรู้',
    techStack: ['Psychology Form', 'Scoring Engine', 'Interactive UI'],
    liveUrl: null,
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
    liveUrl: null,
    githubUrl: null,
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
    liveUrl: null,
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
  },
  {
    id: 'localdeli',
    isFlagship: false,
    title: 'LocalDeli Multi-Portal POS',
    subtitle: 'Rural Multi-Zone Delivery & Pricing Contracts',
    category: 'embedded-fintech',
    shortDesc: 'ระบบ POS และจัดส่งอาหารหลายโซนพื้นที่พร้อมสคริปต์ทดสอบราคาและสัญญาข้อมูล (Contract Tests)',
    techStack: ['Next.js', 'POS Integration', 'Contract Tests'],
    liveUrl: null,
    githubUrl: null,
    icon: 'fa-motorcycle'
  },
  {
    id: 'typhoon-ocr',
    isFlagship: false,
    title: 'Typhoon OCR Studio',
    subtitle: 'Local Apple MLX Vision-Language OCR',
    category: 'ai-medical',
    shortDesc: 'เครื่องมือสกัดข้อความเอกสารไทย-อังกฤษด้วยโมเดล Typhoon OCR 1.5 (2B) รันโลคอลบน Apple Silicon',
    techStack: ['Python', 'Apple MLX', 'Vision-Language OCR'],
    liveUrl: null,
    githubUrl: null,
    icon: 'fa-file-lines'
  },
  {
    id: 'firman-agentic-os',
    isFlagship: false,
    title: 'Firman Agentic OS & Skill Hub',
    subtitle: '52 Curated AI Engineering & QA Skills',
    category: 'web-utilities',
    shortDesc: 'ศูนย์รวมสกิล AI Agent 52 ตัว รวมถึง Full-Stack Testing, Dual-Gate QA Verification และ Anti-Slop Design System',
    techStack: ['AI Agents', 'QA Workflows', 'Node.js CLI'],
    liveUrl: null,
    githubUrl: null,
    icon: 'fa-robot'
  },
  {
    id: 'nodecentral',
    isFlagship: false,
    title: 'NodeCentral (macOS Native)',
    subtitle: 'SwiftUI Workspace & pnpm Store Control Plane',
    category: 'web-utilities',
    shortDesc: 'แอป macOS Native ภาษา Swift (~20MB RAM) สำหรับจัดการ pnpm Central Store และตรวจ Dependency Matrix ข้ามโปรเจกต์',
    techStack: ['Swift', 'SwiftUI', 'macOS Native', 'pnpm'],
    liveUrl: null,
    githubUrl: null,
    icon: 'fa-laptop-code'
  },
  {
    id: 'macbattery-lab',
    isFlagship: false,
    title: 'MacBattery Analytics & PowerLab',
    subtitle: 'macOS Power & Battery Telemetry Utility',
    category: 'web-utilities',
    shortDesc: 'เครื่องมือวิเคราะห์สุขภาพแบตเตอรี่และพฤติกรรมการใช้พลังงานบน macOS ด้วย Python',
    techStack: ['Python', 'macOS Telemetry', 'Analytics'],
    liveUrl: null,
    githubUrl: null,
    icon: 'fa-battery-three-quarters'
  },
  {
    id: 'nst18-polcexam',
    isFlagship: false,
    title: 'NST18 & PolcExam Academies',
    subtitle: 'Offline-First Police Exam Companion PWAs',
    category: 'edtech-exams',
    shortDesc: 'แอป PWA ออฟไลน์เตรียมสอบ นสต. รุ่น 18 สำหรับ Lion King Academy และ Dolphin Police Academy',
    techStack: ['PWA', 'Service Worker', 'Offline-First'],
    liveUrl: null,
    githubUrl: null,
    icon: 'fa-graduation-cap'
  },
  {
    id: 'bangkok-trip',
    isFlagship: false,
    title: 'Bangkok Trip Planner 2026',
    subtitle: 'Route Optimizer & Interactive Leaflet Map',
    category: 'web-utilities',
    shortDesc: 'เว็บวางแผนเที่ยวกรุงเทพฯ คำนวณงบประมาณ เปรียบเทียบโรงแรม และจัดเส้นทางบนแผนที่ Leaflet',
    techStack: ['Vanilla JS', 'Leaflet Maps', 'Route Logic'],
    liveUrl: null,
    githubUrl: null,
    icon: 'fa-map-location-dot'
  }
];

window.PROJECTS_DATA = PROJECTS_DATA;
