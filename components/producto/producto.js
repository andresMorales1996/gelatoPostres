document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const contentSections = document.querySelectorAll('.content-productos');

    cards.forEach(card => {
        const image = card.querySelector('img');
        const link = card.querySelector('a');

        image.addEventListener('click', function() {
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).style.display = 'block';
        });
    });
});
