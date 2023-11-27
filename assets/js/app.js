"use strick";

const swiper = new Swiper('.swiper', {
  // mobile control
  slidesPerView: 1,
  spaceBetween: 30,

  // desktop control
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
