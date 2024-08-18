const initSwiperGallery = (Swiper, Pagination) => {
  const swiper = new Swiper('.gallery-swiper', {
    modules: [Pagination],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  });

  return swiper.init();
};

export {initSwiperGallery};
