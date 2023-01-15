import Swiper from 'swiper/bundle';

let color_slider = new Swiper('.index-colorSlider__slider', {
  loop: "true",
  spaceBetween: 25,
  speed: 500,

  navigation: {
    nextEl: ".index-colorSlider__arrow--next",
    prevEl: ".index-colorSlider__arrow--prev",
  },

  pagination: {
    el: ".index-colorSlider__progressbar",
    type: "fraction",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: "auto",
    }
}
});

let projects_slider = new Swiper('.index-projectSlider__slider', {
  spaceBetween: 0,
  slidesPerView: "auto",
  centeredSlides: true,
  initialSlide: 1,
  speed: 700,

  navigation: {
    nextEl: ".index-projectSlider__arrow--next",
    prevEl: ".index-projectSlider__arrow--prev",
  },
});
