// ---------- MOBILE NAV TOGGLE ----------
const nav = document.getElementById("nav");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navToggle.classList.toggle("active");
});

// Close nav when clicking link (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// ---------- YEAR AUTO UPDATE ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- CONTACT FORM VALIDATION + SIMPLE FEEDBACK ----------
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    feedback.textContent = "Please fill all fields correctly.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Message sent successfully!";
  feedback.style.color = "green";

  form.reset();
});

// ---------- SMOOTH SCROLL ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---------- SCROLL REVEAL ANIMATION ----------
const revealElements = document.querySelectorAll('.section, .project-card, .skill-card');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.90;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
