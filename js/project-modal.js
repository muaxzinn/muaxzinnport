/**
 * ====================================================================
 * Firman Awea Portfolio - Deep-Dive Architecture Modal (<dialog>)
 * Native Modal System | System Architecture Inspection | Specs View
 * ====================================================================
 */

class ProjectModalManager {
  constructor() {
    this.dialog = document.getElementById('project-modal');
    this.titleEl = document.getElementById('modal-title');
    this.subtitleEl = document.getElementById('modal-subtitle');
    this.descEl = document.getElementById('modal-desc');
    this.archEl = document.getElementById('modal-arch');
    this.tagsEl = document.getElementById('modal-tags');
    this.linkEl = document.getElementById('modal-link');
    this.iconEl = document.getElementById('modal-icon');
    this.roadmapContainer = document.getElementById('modal-roadmap-container');

    this.bindEvents();
  }

  open(projectId) {
    if (!this.dialog || !window.PROJECTS_DATA) return;
    const project = window.PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    if (window.soundSynth) window.soundSynth.playClick();

    this.titleEl.textContent = project.title;
    this.subtitleEl.textContent = project.subtitle;
    this.descEl.textContent = project.fullDesc || project.shortDesc;
    this.archEl.innerHTML = project.architecture || 'โครงสร้างระบบมุ่งเน้นการประมวลผลที่มีประสิทธิภาพสูง ความปลอดภัยของข้อมูล และความเข้ากันได้กับอุปกรณ์หลากหลาย';

    // Icon
    if (this.iconEl) {
      this.iconEl.className = `fas ${project.icon || 'fa-code'}`;
    }

    // Micro-Roadmap in modal
    if (this.roadmapContainer) {
      if (project.roadmap && project.roadmap.length > 0) {
        const steps = project.roadmap.map((s, idx) => {
          const arrow = idx < project.roadmap.length - 1 ? '<i class="fas fa-chevron-right text-[10px] text-slate-600"></i>' : '';
          return `
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-xs font-mono ${s.active ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40' : 'bg-slate-800 text-slate-400'}">
                ${s.ver} - ${s.label}
              </span>
              ${arrow}
            </div>
          `;
        }).join('');
        this.roadmapContainer.innerHTML = `
          <div class="mb-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <span class="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Version Roadmap</span>
            <div class="flex flex-wrap items-center gap-2">${steps}</div>
          </div>
        `;
      } else {
        this.roadmapContainer.innerHTML = '';
      }
    }

    // Tech Tags
    if (this.tagsEl) {
      this.tagsEl.innerHTML = project.techStack.map(t =>
        `<span class="badge-pill badge-cyan text-xs font-mono">${t}</span>`
      ).join('');
    }

    // Action Links inside Modal (Render live web and repo buttons only if they actually exist)
    const actionsEl = document.getElementById('modal-actions');
    if (actionsEl) {
      let actionBtns = '';
      if (project.liveUrl) {
        actionBtns += `
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2">
            เปิดระบบใช้งานจริง <i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        `;
      }
      if (project.githubUrl) {
        actionBtns += `
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all border border-slate-700/80 flex items-center gap-2">
            <i class="fab fa-github"></i> Repository
          </a>
        `;
      }
      if (!project.liveUrl && !project.githubUrl) {
        actionBtns += `
          <span class="px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-medium flex items-center gap-1.5">
            <i class="fas fa-screwdriver-wrench"></i> ฮาร์ดแวร์ต้นแบบ (Hardware Prototype)
          </span>
        `;
      }
      actionsEl.innerHTML = actionBtns;
    }

    this.dialog.showModal();
  }

  close() {
    if (this.dialog && this.dialog.open) {
      if (window.soundSynth) window.soundSynth.playClick();
      this.dialog.close();
    }
  }

  bindEvents() {
    if (!this.dialog) return;

    // Click backdrop to close
    this.dialog.addEventListener('click', (e) => {
      const rect = this.dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        this.close();
      }
    });

    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
  }
}

window.ProjectModalManager = ProjectModalManager;
