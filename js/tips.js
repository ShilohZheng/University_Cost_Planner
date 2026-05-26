// TIPS PAGE ANIMATION (FIXED)

const elements = document.querySelectorAll('.tip-card, .quote-box');

// SCROLL CHECK
function revealOnScroll() {

    elements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            el.style.opacity = '1';

            el.style.transform = 'translateY(0)';

        }

    });

}

// RUN ON SCROLL
window.addEventListener('scroll', revealOnScroll);

// RUN ON LOAD (important fix)
window.addEventListener('load', revealOnScroll);
