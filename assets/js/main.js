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

// Media grids: show first 8 cards, collapse the rest
const MEDIA_LIMIT = 8;
document.querySelectorAll('.media-grid').forEach(grid => {
  const cards = Array.from(grid.querySelectorAll('.media-card'));
  if (cards.length > MEDIA_LIMIT) {
    cards.slice(MEDIA_LIMIT).forEach(c => c.style.display = 'none');

    const showAllBtn = document.createElement('button');
    showAllBtn.className = 'media-show-all';
    showAllBtn.textContent = `Show all ${cards.length} appearances →`;
    grid.insertAdjacentElement('afterend', showAllBtn);

    showAllBtn.addEventListener('click', () => {
      cards.forEach(c => c.style.display = '');
      showAllBtn.remove();
    });
  }
});
