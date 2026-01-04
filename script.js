const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const mainNav = document.querySelector('.main-nav');
const overlay = document.querySelector('.overlay');

function openMenu() {
  mainNav.classList.add('active');
  overlay.classList.add('active');
  menuToggle.classList.add('hidden');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mainNav.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.classList.remove('hidden');
  document.body.style.overflow = '';
}

if (menuToggle) {
  menuToggle.addEventListener('click', openMenu);
}

if (menuClose) {
  menuClose.addEventListener('click', closeMenu);
}

if (overlay) {
  overlay.addEventListener('click', closeMenu);
}

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

// Navigation active state
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add active class to clicked link
    this.classList.add('active');
  });
});