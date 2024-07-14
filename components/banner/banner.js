const swiper_banners = new Swiper('.swiper-banners', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },  
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  speed: 2000
});

const swiper_testimonio = new Swiper('.swiper-testimonio', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 10,
    }
  },
});
