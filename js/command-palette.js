/**
 * ====================================================================
 * Firman Awea Portfolio - Spotlight Command Palette (Cmd + K)
 * Fast Global Search across Projects, Hardware, Skills & Sections
 * ====================================================================
 */

class CommandPalette {
  constructor() {
    this.dialog = document.getElementById('cmd-palette');
    this.input = document.getElementById('cmd-input');
    this.results = document.getElementById('cmd-results');
    this.triggers = [document.getElementById('search-trigger'), document.getElementById('search-trigger-mobile')];

    this.items = [];
    this.init();
  }

  init() {
    this.buildSearchIndex();
    this.bindEvents();
  }

  buildSearchIndex() {
    this.items = [
      // Sections
      { title: 'Hero & 3D Holographic Core', desc: 'Jump to 3D interactive core and intro', url: '#home', type: 'Section' },
      { title: 'The Engineering Methodology', desc: 'Jump to 3-phase methodology bento grid', url: '#philosophy', type: 'Section' },
      { title: 'Flagship Innovations', desc: 'SBLT-CAS, Drug Advisor, minipos v2, XQuant, hongsamud v2', url: '#flagship', type: 'Section' },
      { title: 'Skills & Technical Toolchain', desc: 'AI, Web, IoT, and System competency matrix', url: '#skills', type: 'Section' },
      { title: 'Interactive Developer Terminal', desc: 'CLI simulation console & diagnostic benchmarks', url: '#terminal', type: 'Interactive' },
      { title: 'Extended Showcase & Sandbox', desc: 'Browse all curated projects with live filter', url: '#showcase', type: 'Section' },
      { title: 'Awards, Honors & Journey', desc: 'ASTI Feynman 2025, National Inventor Medal, CP Scholarship', url: '#awards', type: 'Section' },
      { title: 'Contact Coordinates', desc: 'Phone, email, GitHub, and message form', url: '#contact', type: 'Section' }
    ];

    // Add Projects from data registry
    if (window.PROJECTS_DATA) {
      window.PROJECTS_DATA.forEach(p => {
        this.items.push({
          title: p.title,
          desc: `${p.subtitle} &middot; ${p.shortDesc}`,
          url: p.liveUrl || p.githubUrl || '#showcase',
          type: p.isFlagship ? 'Flagship' : 'Showcase'
        });
      });
    }
  }

  renderResults(query = '') {
    if (!this.results) return;
    this.results.innerHTML = '';

    const q = query.toLowerCase();
    const matches = this.items.filter(item =>
      !q || item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      this.results.innerHTML = `
        <div class="py-8 text-center text-xs text-slate-500">
          ไม่พบผลลัพธ์สำหรับ "${query}"
        </div>
      `;
      return;
    }

    matches.slice(0, 8).forEach(item => {
      const a = document.createElement('a');
      a.href = item.url;
      if (item.url.startsWith('http')) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      a.className = 'block p-3 rounded-xl hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700/60';
      a.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-white tracking-tight">${item.title}</span>
          <span class="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">${item.type}</span>
        </div>
        <p class="text-xs text-slate-400 mt-1 truncate">${item.desc}</p>
      `;
      a.addEventListener('click', () => {
        if (window.soundSynth) window.soundSynth.playClick();
        this.close();
      });
      this.results.appendChild(a);
    });
  }

  open() {
    if (!this.dialog) return;
    if (window.soundSynth) window.soundSynth.playClick();
    this.dialog.showModal();
    if (this.input) {
      this.input.value = '';
      this.renderResults('');
      setTimeout(() => this.input.focus(), 60);
    }
  }

  close() {
    if (this.dialog && this.dialog.open) {
      this.dialog.close();
    }
  }

  bindEvents() {
    this.triggers.forEach(t => {
      if (t) t.addEventListener('click', () => this.open());
    });

    if (this.input) {
      this.input.addEventListener('input', (e) => this.renderResults(e.target.value));
    }

    // Keyboard shortcuts (Cmd+K, Ctrl+K, '/')
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (this.dialog && this.dialog.open) this.close();
        else this.open();
      } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        this.open();
      }
    });

    if (this.dialog) {
      this.dialog.addEventListener('click', (e) => {
        const rect = this.dialog.getBoundingClientRect();
        const inDialog = (
          rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX && e.clientX <= rect.left + rect.width
        );
        if (!inDialog) this.close();
      });
    }
  }
}

window.CommandPalette = CommandPalette;
