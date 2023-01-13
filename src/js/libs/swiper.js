import Swiper from 'swiper/bundle';

let color_slider = new Swiper('.index-colorSlider__slider', {
  spaceBetween: 25,
  slidesPerView: "auto",
  loop: "true",

  navigation: {
    nextEl: ".index-colorSlider__arrow--next",
    prevEl: ".index-colorSlider__arrow--prev",
  },

  pagination: {
    el: ".index-colorSlider__progressbar",
    type: "fraction",
  },
});

let projects_slider = new Swiper('.index-projectSlider__slider', {
  spaceBetween: 25,
  slidesPerView: "auto",
  loop: "true",

  // navigation: {
  //   nextEl: ".index-colorSlider__arrow--next",
  //   prevEl: ".index-colorSlider__arrow--prev",
  // },
});
