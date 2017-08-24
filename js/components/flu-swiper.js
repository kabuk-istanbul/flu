var swiper = require('swiper');
var merge = require('lodash.merge');

var fluSwiperClassMap = {
  containerModifierClass: '-',
  slideClass: 'swiper_slide',
  slideActiveClass: '-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper_wrapper',
  bulletClass: 'swiper_pagination-bullet',
  bulletActiveClass: '-active',
  buttonDisabledClass: '-disabled',
  paginationCurrentClass: 'swiper_pagination-current',
  paginationTotalClass: 'swiper_pagination-total',
  paginationHiddenClass: 'swiper_pagination-hidden',
  paginationProgressbarClass: 'swiper_pagination-progressbar',
  paginationClickableClass: 'swiper_pagination-clickable',
  paginationModifierClass: '-',
  lazyLoadingClass: 'swiper-lazy',
  lazyStatusLoadingClass: 'swiper-lazy-loading',
  lazyStatusLoadedClass: 'swiper-lazy-loaded',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  notificationClass: 'swiper-notification',
  preloaderClass: 'preloader',
  zoomContainerClass: 'swiper-zoom-container',
  pagination: '.swiper_pagination',
  nextButton: '.swiper_button-next',
  prevButton: '.swiper_button-prev'
};

var FluSwiper = {
  init: function () {
    var sliders = document.querySelectorAll('.swiper');
    var slider;
    var nextButton = '.swiper_button-next';
    var prevButton = '.swiper_button-prev';
    var pagination;
    var effect;

    if (sliders.length > 0) {
      for (var i = 0, count = sliders.length; i < count; i++) {

        slider = sliders[i];
        nextButton = '.swiper_button-next';
        prevButton = '.swiper_button-prev';
        pagination = '.swiper_pagination';

        if (!slider.querySelector(nextButton)) {
          nextButton = null;
        }

        if (!slider.querySelector(prevButton)) {
          prevButton = null;
        }

        if (!slider.querySelector(pagination)) {
          pagination = null;
        }

        if (slider.hasAttribute('data-effect')) {
          effect = slider.getAttribute('data-effect');
        }
        else {
          effect = 'slide';
        }

        new swiper(sliders[i], merge(fluSwiperClassMap, {
          paginationClickable: true,
          slidesPerView: 1,
          nextButton: nextButton,
          prevButton: prevButton,
          pagination: pagination
        }));
      }
    }
  }
};

module.exports = FluSwiper;