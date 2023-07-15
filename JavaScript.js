// Toggle Menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Change Header Color on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;
  header.style.backgroundColor = scrollPosition > 200 ? '#555' : '#333';
});

// Highlight Active Section in Navigation
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  const currentSection = [...document.querySelectorAll('section')].find(
    (section) =>
      window.pageYOffset >= section.offsetTop - section.clientHeight / 3
  );

  navLinks.forEach((link) => {
    link.classList.toggle(
      'active',
      `#${link.getAttribute('href').slice(1)}` === currentSection?.id
    );
  });
});

// Smooth Scroll to Section
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    });

    // Close the menu after clicking a link
    menu.classList.remove('active');
  });
});

// Change Cursor Color on Hover
const cursorItems = document.querySelectorAll('.cursor-item');
const cursor = document.querySelector('.cursor');

cursorItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('active');
  });

  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
  });
});

// Toggle Footer
function toggleFooter() {
  const footer = document.querySelector('footer');
  footer.classList.toggle('collapsed');
}

// Expand and Collapse Syntax Content
const syntaxSections = document.querySelectorAll('.syntax-section');

syntaxSections.forEach((section) => {
  const syntaxContent = section.querySelector('.syntax-content');
  const syntaxTitle = section.querySelector('.syntax-title');

  syntaxTitle.addEventListener('click', () => {
    syntaxContent.classList.toggle('expanded');
  });
});

// Get the search input element
const searchInput = document.getElementById('search-input');
const sections = Array.from(document.querySelectorAll('section'));
const originalDisplayStyles = new Map();

// Store the original display style of each section
sections.forEach((section, index) => {
  originalDisplayStyles.set(section, section.style.display);
});

// Add event listener for keyup event on search input
searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase().trim();

  sections.forEach(function(section) {
    const content = section.textContent.toLowerCase();
    const isMatch = content.includes(searchText);
    section.style.display = isMatch ? originalDisplayStyles.get(section) : 'none';
  });
});





