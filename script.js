// mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });
}

// navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// intersection observer untuk fade-in
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// mouse particle (lightweight)
document.addEventListener('mousemove', (e) => {
  const particle = document.createElement('div');
  particle.style.position = 'fixed';
  particle.style.left = e.clientX + 'px';
  particle.style.top = e.clientY + 'px';
  particle.style.width = '4px';
  particle.style.height = '4px';
  particle.style.background = 'linear-gradient(45deg, #ffffff, #cccccc)';
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  particle.style.opacity = '0.7';
  particle.style.zIndex = '9999';
  particle.style.transition = 'all 0.5s ease';
  document.body.appendChild(particle);

  setTimeout(() => {
    particle.style.opacity = '0';
    particle.style.transform = 'scale(0)';
    setTimeout(() => {
      if (particle.parentNode) particle.parentNode.removeChild(particle);
    }, 500);
  }, 100);
});
