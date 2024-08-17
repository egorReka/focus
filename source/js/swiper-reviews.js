const initSwiperReviews = (Swiper, Navigation) => {
  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation],
    loop: false,
    simulateTouch: false,
    slidesPerView: 'auto',
    spaceBetween: 40,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
      },
      1440: {
        spaceBetween: 60,
      },
    },
  });

  return swiper.init();
};

export {initSwiperReviews};
