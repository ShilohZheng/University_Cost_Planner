// UNIVERSITY BUDGET CALCULATOR

function calculateBudget() {

    // GET INPUT VALUES

    const tuition =
        Number(document.getElementById('tuition').value) || 0;

    const housing =
        Number(document.getElementById('housing').value) || 0;

    const food =
        Number(document.getElementById('food').value) || 0;

    const transportation =
        Number(document.getElementById('transportation').value) || 0;

    const books =
        Number(document.getElementById('books').value) || 0;

    const scholarships =
        Number(document.getElementById('scholarships').value) || 0;

    // CALCULATE TOTAL

    const total =
        tuition +
        housing +
        food +
        transportation +
        books -
        scholarships;

    // MONTHLY COST

    const monthly =
        total / 12;

    // DISPLAY RESULTS

    document.getElementById('totalCost').innerText =
        '$' + total.toLocaleString();

    document.getElementById('monthlyCost').innerText =
        '$' + monthly.toFixed(0).toLocaleString();

    document.getElementById('savingsAmount').innerText =
        '$' + scholarships.toLocaleString();

}


// ENTER KEY SUPPORT

document.addEventListener('keypress', function(event) {

    if (event.key === 'Enter') {

        calculateBudget();

    }

});


// SIMPLE CARD ANIMATION

const cards = document.querySelectorAll('.result-card, .tip-card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const cardTop =
            card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 50) {

            card.style.opacity = '1';

            card.style.transform =
                'translateY(0)';

        }

    });

});


// INITIAL STYLE

cards.forEach(card => {

    card.style.opacity = '0';

    card.style.transform =
        'translateY(40px)';

    card.style.transition =
        '0.6s';

});
