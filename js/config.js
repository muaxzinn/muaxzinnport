/**
 * ====================================================================
 * Firman Awea Portfolio - System Configuration & Metadata
 * Dynamic Age Calculation & Core System Registry
 * ====================================================================
 */

const CONFIG = {
  profile: {
    name: 'Firman Awea',
    handle: 'muaxzinn',
    role: 'AI-Augmented System Architect & Innovator',
    location: 'Narathiwat, Thailand',
    email: 'muaxzinn00374345@gmail.com',
    phone: '091-725-7551',
    github: 'https://github.com/muaxzinn',
    facebook: 'https://www.facebook.com/share/1Y438VRbRE/',
    instagram: 'https://www.instagram.com/mang_agm/',
    quote: '"To be a hero is not to fight, but to create solutions that make life better for everyone."',
  },

  // Dynamic Age Calculator (Calculated automatically from birthdate timestamp without exposing in UI)
  getAge: function () {
    const birthTimestamp = new Date(2007, 3, 18).getTime(); // 18 April 2007
    const now = Date.now();
    const ageDiff = now - birthTimestamp;
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },

  // Ordered Core Interests (Strict requested sequence)
  interests: [
    { id: 'ai', title: 'Artificial Intelligence', subtitle: 'Deep Learning & Neural Architectures', icon: 'fa-brain' },
    { id: 'coding', title: 'Coding & System Design', subtitle: 'Scalable Full-Stack & Algorithm Logic', icon: 'fa-code' },
    { id: 'ai-agents', title: 'AI Agents', subtitle: 'Autonomous Workflows & Multi-Agent Systems', icon: 'fa-microchip-ai' },
    { id: 'health-tech', title: 'Health Technology', subtitle: 'Digital Healthcare, IoT & Assistive Devices', icon: 'fa-heart-pulse' },
    { id: 'medical-ai', title: 'Medical AI (AI ทางการแพทย์)', subtitle: 'Clinical Diagnostics & Pathology Screening', icon: 'fa-stethoscope' }
  ],

  // System Stats
  stats: {
    projectsCount: 25,
    majorAwards: 4,
    gpax: '3.95',
    browserAI: '100%'
  }
};

window.CONFIG = CONFIG;
