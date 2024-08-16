function initSwiperTeam(Swiper) {
  let swiper = undefined;

  const desktopWidth = window.matchMedia('(min-width: 1440px)');

  function setupSwiper() {

    if (!desktopWidth.matches && swiper === undefined) {
      swiper = new Swiper('.team-swiper', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1440: {
            spaceBetween: 0,
            slidesPerView: 'auto',
          },
        },
      });

    } else if (desktopWidth.matches && swiper !== undefined) {
      swiper.destroy();
      swiper = undefined;
    }
  }

  window.addEventListener('load', setupSwiper, { once: true });
  window.addEventListener('resize', setupSwiper);
}

export {initSwiperTeam};
