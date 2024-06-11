$(function () {
  $('.slick-carousel').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    slideshowSpeed: 4000,
    fade: true,
    lazyLoad: 'progressive'
  });
});

$(function () {
  $('.Contents-carousel').slick({
    autoplay: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    dots: false,
    slideshowSpeed: 4000,
    fade: true,
  });
});
