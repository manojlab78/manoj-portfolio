const revealElements = document.querySelectorAll(
  ".section-head, .hero-left, .hero-image, .info-card, .project-item, .skills-wrap span, .availability-card, .contact-box"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.86;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();