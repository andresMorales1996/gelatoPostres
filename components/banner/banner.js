console.log("hola")
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },  
    // autoplay: {
    //   delay: 10000,
    //   disableOnInteraction: false,
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    speed: 1000
    
  });