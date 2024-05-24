// document.addEventListener('DOMContentLoaded', function() {
//     const carouselTrack = document.querySelector('.carrusel-track');
//     const carouselItems = document.querySelectorAll('.img-torta');
//     const leftButton = document.querySelector('.carousel-button.left');
//     const rightButton = document.querySelector('.carousel-button.right');

//     let currentIndex = 0;

//     function updateCarousel() {
//         const width = carouselItems[0].clientWidth + 5; 
//         carouselTrack.style.transform = `translateX(-${currentIndex * width}px)`;
//     }

//     leftButton.addEventListener('click', function() {
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateCarousel();
//         }
//     });

//     rightButton.addEventListener('click', function() {
//         if (currentIndex < carouselItems.length - 1) {
//             currentIndex++;
//             updateCarousel();
//         }
//     });

//     window.addEventListener('resize', updateCarousel);
// });