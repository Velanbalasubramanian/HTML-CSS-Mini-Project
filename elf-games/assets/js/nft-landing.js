var swiper = new Swiper(".banner-swiper", {
    effect: "coverflow",
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 30,
      depth: 80,
      modifier: 3,
      slideShadows: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },
      767: {
        slidesPerView: 1.5,
      },
      991: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 2,
      },
    },
  });