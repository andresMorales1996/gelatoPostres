document.addEventListener("DOMContentLoaded", function() {
    const reviewCards = document.querySelectorAll(".review-card");

    // Animar las tarjetas al cargarlas
    reviewCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = "translateX(0)";
            card.style.opacity = "1";
        }, index * 300); // Escalonar la animación
    });
});
