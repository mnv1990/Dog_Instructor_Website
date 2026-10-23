(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const header = document.querySelector('[data-header]');
  const drops = [...document.querySelectorAll('[data-nav-drop]')];
  const closeDrops = (except = null) => drops.forEach(d => { if (d !== except) d.removeAttribute('open'); });
  const setMenu = (open) => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    if (!open) closeDrops();
  };
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu?.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('click', e => {
    const d = e.target.closest('[data-nav-drop]');
    if (!d) closeDrops(); else closeDrops(d);
    if (toggle?.getAttribute('aria-expanded') === 'true' && header && !header.contains(e.target)) setMenu(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeDrops(); if (toggle?.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); } }
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 860) setMenu(false); });
  window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 10), { passive:true });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
