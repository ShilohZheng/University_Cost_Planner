// COMPARISON PAGE

const sections = document.querySelectorAll(
    '.comparison-section, .reference-section'
);

function revealSections() {

    sections.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.style.opacity = '1';

            section.style.transform =
                'translateY(0)';
        }

    });

}

// INITIAL STATE

sections.forEach(section => {

    section.style.opacity = '0';

    section.style.transform =
        'translateY(30px)';

    section.style.transition =
        '0.6s ease';
});

// EVENTS

window.addEventListener(
    'scroll',
    revealSections
);

window.addEventListener(
    'load',
    revealSections
);
