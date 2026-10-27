/**
 * ====================================================================
 * Firman Awea Portfolio - Project Showcase Renderer & Filter Engine
 * 4 Categories | Micro-Roadmaps | Instant Live Search | 3D Tilt Cards
 * ====================================================================
 */

class ProjectShowcaseManager {
  constructor() {
    this.container = document.getElementById('projects-grid');
    this.flagshipContainer = document.getElementById('flagship-grid');
    this.searchInput = document.getElementById('project-search');
    this.filterButtons = document.querySelectorAll('.filter-pill');

    this.activeCategory = 'all';
    this.searchQuery = '';

    this.init();
  }

  init() {
    this.renderFlagships();
    this.renderShowcase();
    this.bindEvents();
  }

  // Render Flagship Projects (Top Tier) with Enhanced 3D Perspective Tilt & Multi-Plane Layers
  renderFlagships() {
    if (!this.flagshipContainer || !window.PROJECTS_DATA) return;

    const flagships = window.PROJECTS_DATA.filter(p => p.isFlagship);
    this.flagshipContainer.innerHTML = '';

    flagships.forEach((project, idx) => {
      const card = document.createElement('article');
      card.className = 'glow-card flagship-card tilt-3d p-6 sm:p-8 flex flex-col justify-between reveal';
      card.setAttribute('data-tilt-max', '11');
      card.style.transitionDelay = `${idx * 80}ms`;

      // Build Micro-Roadmap HTML if available
      let roadmapHtml = '';
      if (project.roadmap && project.roadmap.length > 0) {
        const steps = project.roadmap.map((s, sIdx) => {
          const arrow = sIdx < project.roadmap.length - 1 ? '<i class="fas fa-chevron-right roadmap-arrow"></i>' : '';
          return `<span class="roadmap-step ${s.active ? 'active' : ''}">${s.ver}</span>${arrow}`;
        }).join('');
        roadmapHtml = `<div class="mini-roadmap" title="Version Roadmap">${steps}</div>`;
      }

      // Tech tags
      const techTags = project.techStack.map(t =>
        `<span class="badge-pill badge-slate text-[11px] font-mono">${t}</span>`
      ).join('');

      card.innerHTML = `
        <div>
          <!-- Top Flagship Masterpiece Beacon & Category -->
          <div class="flex items-center justify-between mb-4 tilt-layer-front">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/25 shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
              Flagship Innovation
            </span>
            ${roadmapHtml}
          </div>

          <div class="flex items-start gap-4 mb-4">
            <div class="tilt-layer-deep w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-teal-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center text-xl shadow-lg shadow-sky-500/10 flex-shrink-0">
              <i class="fas ${project.icon}"></i>
            </div>
            <div class="tilt-layer-front flex-1">
              <h3 class="font-bold text-xl sm:text-2xl text-white tracking-tight">${project.title}</h3>
              <span class="text-xs text-sky-400 font-mono font-medium block mt-0.5">${project.subtitle}</span>
            </div>
          </div>

          <div class="tilt-layer-mid">
            <p class="card-desc mb-5 text-slate-300 text-sm leading-relaxed">${project.shortDesc}</p>

            ${project.award ? `
              <div class="p-2.5 rounded-lg bg-slate-900/90 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2 mb-5 shadow-sm">
                <i class="fas fa-award text-amber-400 text-sm"></i>
                <span class="truncate font-medium">${project.award}</span>
              </div>
            ` : ''}

            <div class="flex flex-wrap gap-1.5 mb-6">
              ${techTags}
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 tilt-layer-front">
          <button onclick="window.projectModal.open('${project.id}')" class="px-3.5 py-1.5 rounded-lg glass-panel hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm">
            <i class="fas fa-layer-group text-sky-400"></i> สถาปัตยกรรมระบบ
          </button>
          <div class="flex items-center gap-2">
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-sky-500/20">
                เปิดระบบ <i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            ` : ''}
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm border border-slate-700/60">
                <i class="fab fa-github"></i> Repository
              </a>
            ` : ''}
            ${!project.liveUrl && !project.githubUrl ? `
              <span class="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-400 text-[11px] font-mono flex items-center gap-1.5">
                <i class="fas fa-microchip"></i> Hardware Prototype
              </span>
            ` : ''}
          </div>
        </div>
      `;

      this.flagshipContainer.appendChild(card);
    });

    // Re-attach 3D Tilt
    if (window.CardTilt3DEngine) {
      new window.CardTilt3DEngine('.tilt-3d');
    }
  }

  // Render Extended Showcase Projects
  renderShowcase() {
    if (!this.container || !window.PROJECTS_DATA) return;

    const filtered = window.PROJECTS_DATA.filter(p => {
      if (p.isFlagship) return false;
      const matchCat = (this.activeCategory === 'all') || (p.category === this.activeCategory);
      const query = this.searchQuery.toLowerCase();
      const matchSearch = !query ||
        p.title.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query) ||
        p.techStack.some(t => t.toLowerCase().includes(query));

      return matchCat && matchSearch;
    });

    this.container.innerHTML = '';

    if (filtered.length === 0) {
      this.container.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-500">
          <i class="fas fa-search text-3xl mb-3 text-slate-600 block"></i>
          <p class="text-sm">ไม่พบโปรเจกต์ที่ตรงกับคำค้นหา "${this.searchQuery}"</p>
        </div>
      `;
      return;
    }

    filtered.forEach((project, idx) => {
      const card = document.createElement('article');
      card.className = 'glow-card tilt-3d p-5 flex flex-col justify-between reveal';
      card.style.transitionDelay = `${(idx % 6) * 50}ms`;

      const tags = project.techStack.slice(0, 3).map(t =>
        `<span class="badge-pill badge-slate text-[10px] font-mono">${t}</span>`
      ).join('');

      card.innerHTML = `
        <div class="tilt-layer-front">
          <div class="flex items-center justify-between mb-3">
            <div class="w-9 h-9 rounded-xl bg-slate-800/80 text-sky-400 flex items-center justify-center text-base">
              <i class="fas ${project.icon || 'fa-code'}"></i>
            </div>
            <div class="flex items-center gap-1.5">
              ${project.liveUrl ? `
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-sky-500/15 hover:bg-sky-500 text-sky-300 hover:text-white transition-all text-xs flex items-center gap-1 font-semibold border border-sky-500/25" title="เปิดระบบใช้งานจริง">
                  <span>เปิดเว็บ</span> <i class="fas fa-arrow-up-right-from-square text-[9px]"></i>
                </a>
              ` : ''}
              ${project.githubUrl ? `
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="p-1.5 px-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60" title="ดู Repository บน GitHub">
                  <i class="fab fa-github text-xs"></i>
                </a>
              ` : ''}
              ${!project.liveUrl && !project.githubUrl ? `
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">กำลังพัฒนา</span>
              ` : ''}
            </div>
          </div>

          <h4 class="font-bold text-base text-white tracking-tight mb-1 truncate">${project.title}</h4>
          <span class="text-[11px] text-slate-400 block mb-2">${project.subtitle}</span>
          <p class="card-desc mb-4 text-xs text-slate-300">${project.shortDesc}</p>
        </div>

        <div class="pt-3 border-t border-slate-800/60 flex items-center justify-between tilt-layer-front">
          <div class="flex flex-wrap gap-1">
            ${tags}
          </div>
          <button onclick="window.projectModal.open('${project.id}')" class="text-[11px] text-sky-400 hover:text-sky-300 font-semibold font-mono">
            Specs &rarr;
          </button>
        </div>
      `;

      this.container.appendChild(card);
    });

    // Re-attach 3D Tilt
    if (window.CardTilt3DEngine) {
      new window.CardTilt3DEngine('.tilt-3d');
    }

    // Re-trigger scroll observer for new items
    if (window.revealObserver) {
      document.querySelectorAll('.reveal').forEach(el => window.revealObserver.observe(el));
    }
  }

  bindEvents() {
    // Category pill filtering
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.soundSynth) window.soundSynth.playClick();
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeCategory = btn.getAttribute('data-filter');
        this.renderShowcase();
      });
    });

    // Real-time live search
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        this.renderShowcase();
      });
    }
  }
}

window.ProjectShowcaseManager = ProjectShowcaseManager;
