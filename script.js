const currentYearElement = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
const mobileMenuButton = document.getElementById('mobile-menu-button');
const header = document.getElementById('header');
const headerNav = document.getElementById('header-nav');

currentYearElement.textContent = new Date().getFullYear();

mobileMenuButton.addEventListener('click', () => {
  if (header.classList.contains('active')) {
    headerNav.classList.remove('active');
    document.body.style.overflow = 'auto';
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    header.classList.remove('active');
  } else {
    document.body.style.overflow = 'hidden';
    header.classList.add('active');
    headerNav.classList.add('active');
    mobileMenuButton.setAttribute('aria-expanded', 'true');
  }
});
