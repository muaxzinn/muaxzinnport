/**
 * ====================================================================
 * Firman Awea Portfolio - Application Bootstrap & Orchestrator
 * Component Lifecycle Manager | Scroll Observers | Dynamic Age Bindings
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Populate Dynamic Profile Data (Calculates age from birthdate without exposing string)
  if (window.CONFIG) {
    const age = window.CONFIG.getAge();
    document.querySelectorAll('.dynamic-age-val').forEach(el => {
      el.textContent = age;
    });
  }

  // 2. Initialize Core Systems
  window.themeNavManager = new window.ThemeAndNavigationManager();
  window.projectModal = new window.ProjectModalManager();
  window.projectShowcase = new window.ProjectShowcaseManager();
  window.aiTerminal = new window.AIAgentTerminal();
  window.cmdPalette = new window.CommandPalette();
  if (window.SocialPreviewModalManager) {
    window.socialPreviewModal = new window.SocialPreviewModalManager();
  }

  // 3. Initialize 3D Perspective Card Tilt Engine
  if (window.CardTilt3DEngine) {
    window.cardTiltEngine = new window.CardTilt3DEngine('.tilt-3d');
  }

  // 4. Setup Scroll Reveal IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
  window.revealObserver = revealObserver;

  // 5. Numerical Stat Counters Animation
  const counters = document.querySelectorAll('.counter-val');
  let countersTriggered = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersTriggered) {
        countersTriggered = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let count = 0;
          const step = Math.ceil(target / 45);
          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              counter.textContent = `${target}+`;
              clearInterval(timer);
            } else {
              counter.textContent = count;
            }
          }, 25);
        });
      }
    });
  }, { threshold: 0.5 });

  if (counters.length > 0) {
    counterObserver.observe(counters[0]);
  }
});
