const currentYearElement = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
const mobileMenuButton = document.getElementById('mobile-menu-button');
const header = document.getElementById('header');
const headerNav = document.getElementById('header-nav');

currentYearElement.textContent = new Date().getFullYear();

const removeMobileNavActiveStyles = () => {
  headerNav.classList.remove('active');
  document.body.style.overflow = 'auto';
  mobileMenuButton.setAttribute('aria-expanded', 'false');
  header.classList.remove('active');
};

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const handleTabletChange = () => {
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  if (mediaQuery.matches) {
    console.log('Media Query Matched!');
    removeMobileNavActiveStyles();
  }
};

const debouncedHandleTabletChange = debounce(handleTabletChange);

mobileMenuButton.addEventListener('click', () => {
  if (header.classList.contains('active')) {
    headerNav.classList.remove('active');
    document.body.style.overflow = 'auto';
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    header.classList.remove('active');
  } else {
    removeMobileNavActiveStyles();
  }
});

window.addEventListener('resize', debouncedHandleTabletChange);
