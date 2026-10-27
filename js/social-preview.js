/**
 * ====================================================================
 * Firman Awea Portfolio - Social Share & Open Graph Preview Modal
 * Interactive Real-Time Preview for Facebook, LINE, and X (Twitter)
 * ====================================================================
 */

class SocialPreviewModalManager {
  constructor() {
    this.dialog = document.getElementById('share-modal');
    this.shareUrl = 'https://muaxzinn.github.io/muaxzinnport/';
    this.shareTitle = 'Firman Awea | Systems & Embedded Developer · Health Tech Innovator';
    this.shareDesc = 'Logic. Hardware. Intelligence. Official portfolio of Firman Awea (@muaxzinn) — Systems Architecture, ESP32 Embedded IoT, Edge AI & Health Tech.';

    this.init();
  }

  init() {
    if (!this.dialog) return;

    // Tab buttons
    const tabBtns = this.dialog.querySelectorAll('.share-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const platform = btn.getAttribute('data-platform');
        this.switchPlatform(platform);
        if (window.soundSynth) window.soundSynth.playClick();
      });
    });

    // Close on outside backdrop click
    this.dialog.addEventListener('click', (e) => {
      const rect = this.dialog.getBoundingClientRect();
      const inDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
      if (!inDialog) {
        this.close();
      }
    });

    // ESC key close
    this.dialog.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });

    // Trigger buttons in DOM
    document.querySelectorAll('[data-open-share-modal]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
        if (window.soundSynth) window.soundSynth.playClick();
      });
    });
  }

  open(initialPlatform = 'facebook') {
    if (!this.dialog) return;
    this.switchPlatform(initialPlatform);
    this.dialog.showModal();
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.dialog) return;
    this.dialog.close();
    document.body.style.overflow = '';
  }

  switchPlatform(platform) {
    if (!this.dialog) return;

    // Update tab active classes
    const tabBtns = this.dialog.querySelectorAll('.share-tab-btn');
    tabBtns.forEach(btn => {
      const isCurrent = btn.getAttribute('data-platform') === platform;
      btn.classList.toggle('active', isCurrent);
      if (isCurrent) {
        btn.classList.add('bg-sky-500/20', 'text-sky-400', 'border-sky-500/40');
        btn.classList.remove('text-slate-400', 'border-transparent');
      } else {
        btn.classList.remove('bg-sky-500/20', 'text-sky-400', 'border-sky-500/40');
        btn.classList.add('text-slate-400', 'border-transparent');
      }
    });

    // Show selected preview pane
    const panes = this.dialog.querySelectorAll('.platform-preview-pane');
    panes.forEach(pane => {
      if (pane.getAttribute('data-pane') === platform) {
        pane.classList.remove('hidden');
      } else {
        pane.classList.add('hidden');
      }
    });
  }

  copyShareLink() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.shareUrl).then(() => {
        if (window.showToast) window.showToast('คัดลอกลิงก์แชร์สำเร็จ พร้อมส่งต่อ!');
        if (window.soundSynth) window.soundSynth.playActionSuccess();
      });
    }
  }

  shareToFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.shareUrl)}`;
    window.open(url, '_blank', 'width=640,height=580,menubar=no,toolbar=no');
  }

  shareToLine() {
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(this.shareUrl)}`;
    window.open(url, '_blank', 'width=640,height=580,menubar=no,toolbar=no');
  }

  shareToTwitter() {
    const text = `${this.shareTitle}\n\nLogic. Hardware. Intelligence.\n`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(this.shareUrl)}&via=muaxzinn`;
    window.open(url, '_blank', 'width=640,height=580,menubar=no,toolbar=no');
  }
}

// Global binding
window.SocialPreviewModalManager = SocialPreviewModalManager;
