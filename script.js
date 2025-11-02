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

