//Mobile
const sliderInner = document.querySelector('.slider-inner');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateSliderPosition() {
    const offset = -currentIndex * 100;
    sliderInner.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < sliderItems.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

updateSliderPosition();

//Desktop
currentIndex = 2;
const items = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dots span');

const updateCarousel = () => {
  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentIndex) {
      item.classList.add('active');
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentIndex) {
      dot.classList.add('active');
    }
  });
};

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Initialize the carousel
updateCarousel();