import Swiper from 'swiper';
import 'swiper/css/bundle';

let featuresSwiper;

featuresSwiper = new Swiper('.features-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 0,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.features-swiper-container')
        .classList.add('show');
    },
  },
});
