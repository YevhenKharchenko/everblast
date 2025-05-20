import Swiper from 'swiper';
import 'swiper/css/bundle';

const uniquenessLeftArrow = document.getElementById('uniquenessLeftArrow');
const uniquenessRightArrow = document.getElementById('uniquenessRightArrow');

let uniquenessSwiper;

uniquenessSwiper = new Swiper('.uniqueness-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 20,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.uniqueness-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateUniquenessArrows(this);
    },
  },
});

updateUniquenessArrows(uniquenessSwiper);

function updateUniquenessArrows(swiper) {
  uniquenessLeftArrow.disabled = swiper.isBeginning;
  uniquenessRightArrow.disabled = swiper.isEnd;
}

uniquenessLeftArrow.addEventListener('click', () => {
  uniquenessSwiper.slidePrev();
});

uniquenessRightArrow.addEventListener('click', () => {
  uniquenessSwiper.slideNext();
});
