// Nav: scroll shadow
const nav = document.getElementById('site-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Nav: mobile toggle
const toggle = document.getElementById('nav-toggle');
const links  = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', links.classList.contains('open'));
});

// Close mobile nav on link click
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// Media: outlet filter + show-more
(function () {
  const LIMIT    = 8;
  const grid     = document.querySelector('.media-grid');
  if (!grid) return;

  const allCards = Array.from(grid.querySelectorAll('.media-card'));
  const badges   = Array.from(document.querySelectorAll('.media-logo-badge'));
  let showMoreBtn = null;

  function addShowMore(visible) {
    if (showMoreBtn) { showMoreBtn.remove(); showMoreBtn = null; }
    if (visible.length > LIMIT) {
      visible.slice(LIMIT).forEach(c => { c.style.display = 'none'; });
      showMoreBtn = document.createElement('button');
      showMoreBtn.className = 'media-show-all';
      showMoreBtn.textContent = `Show all ${visible.length} appearances →`;
      grid.insertAdjacentElement('afterend', showMoreBtn);
      showMoreBtn.addEventListener('click', () => {
        visible.forEach(c => { c.style.display = ''; });
        showMoreBtn.remove(); showMoreBtn = null;
      });
    }
  }

  function applyFilter(filter) {
    if (showMoreBtn) { showMoreBtn.remove(); showMoreBtn = null; }
    const matched = filter === 'all'
      ? allCards
      : allCards.filter(c => c.dataset.outlet.toLowerCase().includes(filter.toLowerCase()));
    allCards.forEach(c => { c.style.display = 'none'; });
    matched.forEach(c => { c.style.display = ''; });
    if (filter === 'all') addShowMore(matched);
  }

  badges.forEach(badge => {
    badge.addEventListener('click', () => {
      badges.forEach(b => b.classList.remove('filter-active'));
      badge.classList.add('filter-active');
      applyFilter(badge.dataset.filter);
    });
  });

  applyFilter('all');
}());
