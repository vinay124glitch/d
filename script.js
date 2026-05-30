// Certificate and Experience Images
const certImages = [
  'cert/Accenture Software Engineering.png',
  'cert/Deloitte Data Analytics .png',
  'cert/GenAI Powered Data Analytics Job Simulation.png',
  'cert/Robotics and Controls Job Simulation.png',
  'cert/Tata Data Visualisation Virtual Experience Program .png',
  'cert/css.png',
  'cert/FRONTEND.png',
  'cert/JAVASCRIPT.png',
  'cert/DBMS.png',
  'cert/JAVA.png',
  'cert/data_analyst.png',
  'cert/data_quantium.png'
];

const expImages = [
  'certificates/cognifiz.png',
  'certificates/codexintern.png',
  'certificates/mindenious.png',
  'certificates/prodigy.png',
  'certificates/oss.png',
  'certificates/letsupgrade.png',
  'certificates/gfg.png'
];

let currentIndex = 0;
let currentType = 'cert';

// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked (for mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Reveal animation on scroll
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function openModal(pathOrIndex, type) {
  const modal = document.getElementById('modal');
  const img = document.getElementById('modal-image');
  const download = document.getElementById('downloadBtn');

  // If it's a direct path (contains '/'), use it directly
  if (typeof pathOrIndex === 'string' && pathOrIndex.includes('/')) {
    img.src = pathOrIndex;
    download.href = pathOrIndex;
    currentIndex = 0;
    currentType = type;
  } else {
    // Otherwise use array index
    currentIndex = pathOrIndex;
    currentType = type;
    const source = type === 'cert' ? certImages : expImages;
    img.src = source[currentIndex];
    download.href = source[currentIndex];
  }

  modal.style.display = 'flex';
}

function openImage(imageUrl) {
  const modal = document.getElementById('modal');
  const img = document.getElementById('modal-image');
  const download = document.getElementById('downloadBtn');
  img.src = imageUrl;
  download.href = imageUrl;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function nextImage() {
  const source = currentType === 'cert' ? certImages : expImages;
  currentIndex = (currentIndex + 1) % source.length;
  updateModalImage(source);
}

function prevImage() {
  const source = currentType === 'cert' ? certImages : expImages;
  currentIndex = (currentIndex - 1 + source.length) % source.length;
  updateModalImage(source);
}

function updateModalImage(source) {
  const img = document.getElementById('modal-image');
  const download = document.getElementById('downloadBtn');

  img.src = source[currentIndex];
  download.href = source[currentIndex];
}

// Optional: Close modal with Escape key
document.addEventListener('keydown', e => {
  const modal = document.getElementById('modal');
  if (modal.style.display === 'flex') {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  }
});
// Download confirmation
function confirmDownload() {
  const confirmed = confirm("Do you want to download the resume?");
  return confirmed; // If true, download continues; if false, it's cancelled
}
