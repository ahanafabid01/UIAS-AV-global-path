const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const totalSlides = slides.length;
let autoSlideTimer;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  showSlide((currentSlide + 1) % totalSlides);
}

function prevSlide() {
  showSlide((currentSlide - 1 + totalSlides) % totalSlides);
}

document.getElementById('next').addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

document.getElementById('prev').addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

dots.forEach(dot => {
  dot.addEventListener('click', e => {
    const index = parseInt(e.target.dataset.index);
    showSlide(index);
    resetAutoSlide();
  });
});

function startAutoSlide() {
  autoSlideTimer = setInterval(() => {
    nextSlide();
  }, 6000);
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  startAutoSlide();
}

startAutoSlide();

// Fade-in animation on scroll
const fadeEls = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('nav a');

  if (navToggle && navbar) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navbar.classList.toggle('nav-open');
    });

    // close when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // close with Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navbar.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

