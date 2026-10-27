/**
 * ====================================================================
 * Firman Awea Portfolio - Interactive 3D Perspective Card Tilt Engine
 * Pure Vanilla JavaScript | 60 FPS RequestAnimationFrame | Holographic Glare
 * Multi-layer 3D Parallax Depth for Flagships & Profile Card
 * ====================================================================
 */

class CardTilt3DEngine {
  constructor(selector = '.tilt-3d') {
    this.elements = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    if (!this.elements.length) return;

    // Check if device supports hover and prefers motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasHover = window.matchMedia('(hover: hover)').matches;

    if (prefersReducedMotion || !hasHover) return;

    this.elements.forEach(el => this.attachTilt(el));
  }

  attachTilt(card) {
    // Avoid double binding
    if (card.dataset.tiltAttached === 'true') return;
    card.dataset.tiltAttached = 'true';

    let bounds;
    let isHovering = false;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animFrame = null;

    // Add holographic glare layer if not present
    let glare = card.querySelector('.tilt-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'tilt-glare';
      card.appendChild(glare);
    }

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      isHovering = true;
      card.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
      if (!animFrame) animFrame = requestAnimationFrame(update);
    };

    const onMouseMove = (e) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      // Normalized coordinates from -1 to 1
      mouseX = (x / bounds.width) * 2 - 1;
      mouseY = (y / bounds.height) * 2 - 1;

      // Update holographic glare position
      const px = (x / bounds.width) * 100;
      const py = (y / bounds.height) * 100;
      glare.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255, 255, 255, 0.14) 0%, rgba(14, 165, 233, 0.08) 35%, transparent 70%)`;
      glare.style.opacity = '1';
    };

    const onMouseLeave = () => {
      isHovering = false;
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      glare.style.opacity = '0';

      // Reset layer depths
      card.querySelectorAll('.tilt-layer-deep, .tilt-layer-front, .tilt-layer-mid').forEach(child => {
        child.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        child.style.transform = 'translateZ(0px)';
      });

      if (animFrame) {
        cancelAnimationFrame(animFrame);
        animFrame = null;
      }
    };

    const update = () => {
      if (!isHovering) return;

      // Smooth dampening
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      const maxTilt = card.getAttribute('data-tilt-max') ? +card.getAttribute('data-tilt-max') : 8.5;
      const rotateX = -currentY * maxTilt;
      const rotateY = currentX * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      // Multi-plane 3D parallax depth for children
      const deepLayers = card.querySelectorAll('.tilt-layer-deep');
      deepLayers.forEach(child => {
        child.style.transition = 'none';
        child.style.transform = 'translateZ(40px)';
      });

      const frontLayers = card.querySelectorAll('.tilt-layer-front');
      frontLayers.forEach(child => {
        child.style.transition = 'none';
        child.style.transform = 'translateZ(24px)';
      });

      const midLayers = card.querySelectorAll('.tilt-layer-mid');
      midLayers.forEach(child => {
        child.style.transition = 'none';
        child.style.transform = 'translateZ(14px)';
      });

      animFrame = requestAnimationFrame(update);
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  }
}

window.CardTilt3DEngine = CardTilt3DEngine;
