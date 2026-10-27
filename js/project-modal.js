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

    // Link
    if (this.linkEl) {
      this.linkEl.href = project.liveUrl || project.githubUrl || '#';
      this.linkEl.textContent = project.liveUrl && project.liveUrl !== '#' ? 'เปิดระบบใช้งานจริง' : 'ดู Repository บน GitHub';
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
