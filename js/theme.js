/**
 * ====================================================================
 * Firman Awea Portfolio - Theme, Progress & Audio Toggle Manager
 * Dark/Light Sync | Reading Bar | Mobile Menu Drawer | Audio State
 * ====================================================================
 */

class ThemeAndNavigationManager {
  constructor() {
    this.themeBtns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
    this.soundBtns = [document.getElementById('sound-toggle'), document.getElementById('sound-toggle-mobile')];
    this.progressBar = document.getElementById('reading-progress');
    this.mobileBtn = document.getElementById('mobile-menu-btn');
    this.mobileDrawer = document.getElementById('mobile-menu');

    this.init();
  }

  init() {
    this.syncThemeIcons();
    this.syncSoundIcons();
    this.bindEvents();
  }

  syncThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon-dark').forEach(el => el.classList.toggle('hidden', isDark));
    document.querySelectorAll('.theme-icon-light').forEach(el => el.classList.toggle('hidden', !isDark));
  }

  toggleTheme() {
    if (window.soundSynth) window.soundSynth.playClick();
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
    this.syncThemeIcons();
  }

  syncSoundIcons() {
    const isMuted = window.soundSynth ? window.soundSynth.isMuted : false;
    document.querySelectorAll('.sound-icon-on').forEach(el => el.classList.toggle('hidden', isMuted));
    document.querySelectorAll('.sound-icon-muted').forEach(el => el.classList.toggle('hidden', !isMuted));
  }

  toggleSound() {
    if (window.soundSynth) {
      const muted = window.soundSynth.toggleMute();
      this.syncSoundIcons();
      showToast(muted ? 'ปิดเสียงเอฟเฟกต์แล้ว' : 'เปิดเสียงเอฟเฟกต์แล้ว');
      if (!muted) window.soundSynth.playClick();
    }
  }

  bindEvents() {
    // Theme toggles
    this.themeBtns.forEach(btn => {
      if (btn) btn.addEventListener('click', () => this.toggleTheme());
    });

    // Sound toggles
    this.soundBtns.forEach(btn => {
      if (btn) btn.addEventListener('click', () => this.toggleSound());
    });

    // Reading progress on scroll
    window.addEventListener('scroll', () => {
      if (!this.progressBar) return;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      this.progressBar.style.width = `${progress}%`;
    }, { passive: true });

    // Mobile menu toggle
    if (this.mobileBtn && this.mobileDrawer) {
      this.mobileBtn.addEventListener('click', () => {
        if (window.soundSynth) window.soundSynth.playClick();
        this.mobileDrawer.classList.toggle('hidden');
      });

      this.mobileDrawer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => this.mobileDrawer.classList.add('hidden'));
      });
    }
  }
}

// Global Toast utility
function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

// Global Copy to clipboard utility
function copyToClipboard(text, customMessage) {
  if (window.soundSynth) window.soundSynth.playClick();
  navigator.clipboard.writeText(text).then(() => {
    showToast(customMessage || `คัดลอก: ${text}`);
  }).catch(() => {
    showToast('ไม่สามารถคัดลอกได้');
  });
}

window.ThemeAndNavigationManager = ThemeAndNavigationManager;
window.showToast = showToast;
window.copyToClipboard = copyToClipboard;
