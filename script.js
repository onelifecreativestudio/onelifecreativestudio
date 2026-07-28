const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  });

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    });
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
