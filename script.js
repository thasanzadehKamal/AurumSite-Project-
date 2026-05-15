/* ── CURSOR GLOW ── */
const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

/* ── HEADER SCROLL ── */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── MOBILE MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

hamburger?.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileLinks.forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('open')));

/* ── MENU TABS ── */
const menuData = {
  Coffee: [
    { name: 'Espresso', desc: 'Short, bold, and quietly electric.', price: '₼6' },
    { name: 'Americano', desc: 'Espresso with hot water, clean and deep.', price: '₼7' },
    { name: 'Flat White', desc: 'Velvet microfoam over a double ristretto.', price: '₼8' },
    { name: 'Cappuccino', desc: 'Equal parts espresso, milk, and foam.', price: '₼8' },
    { name: 'Signature Latte', desc: 'House blend with vanilla and caramel notes.', price: '₼10' },
    { name: 'Cold Brew', desc: 'Slow-steeped 12 hours, smooth and refreshing.', price: '₼9' },
    { name: 'Matcha Latte', desc: 'Stone-ground matcha, soft oat milk.', price: '₼9' },
    { name: 'Turkish Coffee', desc: 'A traditional pour with a deep, roasted soul.', price: '₼7' }
  ],
  Brunch: [
    { name: 'Eggs Benedict', desc: 'Poached eggs, hollandaise, toasted brioche.', price: '₼18' },
    { name: 'Avocado Toast', desc: 'Sourdough, poached egg, lemon chilli oil.', price: '₼16' },
    { name: 'French Toast', desc: 'Brioche, vanilla mascarpone, fresh berries.', price: '₼17' },
    { name: 'Shakshuka', desc: 'Slow-simmered tomato, baked eggs, herbs.', price: '₼15' },
    { name: 'Granola Bowl', desc: 'House granola, yogurt, honeyed seasonal fruit.', price: '₼13' }
  ],
  Desserts: [
    { name: 'Tiramisu', desc: 'Coffee-soaked ladyfingers, cloud-light mascarpone.', price: '₼12' },
    { name: 'Croissant au Beurre', desc: 'Flaky laminated pastry, warm butter aroma.', price: '₼7' },
    { name: 'Cheesecake', desc: 'Silky vanilla filling, soft biscuit base.', price: '₼11' },
    { name: 'Baklava Crème Brûlée', desc: 'Signature fusion — pistachio warmth meets French custard.', price: '₼13' }
  ]
};

const menuGrid = document.getElementById('menu-grid');
const tabBtns = document.querySelectorAll('.tab-btn');
let currentTab = 'Coffee';

function renderMenu(tab) {
  const items = menuData[tab] || [];
  menuGrid.innerHTML = items.map(item => `
    <div class="menu-item">
      <div>
        <div class="menu-item-name">${item.name}</div>
        <div class="menu-item-desc">${item.desc}</div>
      </div>
      <div class="menu-item-price">${item.price}</div>
    </div>
  `).join('');
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTab = btn.dataset.tab;
    renderMenu(currentTab);
  });
});

renderMenu(currentTab);

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

/* ── PARALLAX HERO ── */
const heroBg = document.querySelector('.hero-img');
window.addEventListener('scroll', () => {
  if (heroBg && window.scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
}, { passive: true });

/* ── GALLERY HOVER TILT (subtle) ── */
document.querySelectorAll('.gallery-item').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 6;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 6;
    card.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ── ACTIVE NAV HIGHLIGHT ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--gold)' : '';
  });
}, { passive: true });
