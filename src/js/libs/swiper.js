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
  loop: true,
  speed: 700,

  navigation: {
    nextEl: ".index-projectSlider__arrow--next",
    prevEl: ".index-projectSlider__arrow--prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1366: {
      slidesPerView: "auto",
    }
  }
});

let blog_slider = new Swiper('.index-blogSlider__slider', {
  loop: "true",
  spaceBetween: 25,

  navigation: {
    nextEl: ".index-blogSlider__arrow--next",
    prevEl: ".index-blogSlider__arrow--prev",
  },

  pagination: {
    el: ".index-blogSlider__progressbar",
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

let about_project_slider = new Swiper('.about-projectSlider__slider', {
  spaceBetween: 25,
  slidesPerView: "auto",
  loop: true,
  speed: 700,

  navigation: {
    nextEl: ".about-projectSlider__arrow--next",
    prevEl: ".about-projectSlider__arrow--prev",
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

