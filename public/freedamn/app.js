// This landing-page demo never sends or stores financial information.
(() => {
  const menuButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const closeMenu = () => {
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
  };
  menuButton.addEventListener('click', () => {
    menu.hidden = !menu.hidden;
    menuButton.setAttribute('aria-expanded', String(!menu.hidden));
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
      menuButton.focus();
    }
  });
  const desktop = window.matchMedia('(min-width: 768px)');
  desktop.addEventListener('change', event => {
    if (event.matches) closeMenu();
  });

  const button = document.getElementById('settlement-toggle');
  const offer = document.getElementById('settlement-offer');
  const result = document.getElementById('settlement-result');
  const status = document.getElementById('settlement-status');
  const announcement = document.getElementById('settlement-announcement');
  let settled = false;
  button.addEventListener('click', () => {
    settled = !settled;
    offer.hidden = settled;
    result.hidden = !settled;
    status.textContent = settled ? 'CLOSED' : 'DEFAULTED';
    status.classList.toggle('is-settled', settled);
    button.textContent = settled ? 'Reset Simulation' : 'Simulate Settlement';
    announcement.textContent = settled
      ? 'Simulation completed: 14,000 pesos paid, account closed. No actual payment was made.'
      : 'Simulation reset. Original balance 42,000 pesos; settlement offer 14,000 pesos.';
  });

  // Content stays visible when JavaScript is unavailable or motion is reduced.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-entering');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
})();
