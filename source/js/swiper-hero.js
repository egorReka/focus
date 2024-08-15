const initSwiperHero = (Swiper, EffectFade, Autoplay) => {
  const swiper = new Swiper('.hero-swiper', {
    modules: [EffectFade, Autoplay],
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  return swiper.init();
};

export {initSwiperHero};
