$(function () {
  $('.contents_slider').slick({
    slidesToShow: 1, // 表示するスライドの数
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    slideshowSpeed: 4000,
    fade: true,
    lazyLoad: 'progressive',
    speed: 500, // スライドのスピード
    fade: false
  });
  $('.resort_slider').slick({
    slidesToShow: 1, // 表示するスライドの数
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    slideshowSpeed: 4000,
    fade: true,
    lazyLoad: 'progressive',
    speed: 500, // スライドのスピード
    fade: false,
    asNavFor: '#dayz_slider',
  });
  $("#dayz_slider").slick({
    //ここにオプション
    asNavFor: "#resort_slider",
    touchMove: false,
    draggable: false,
    arrows: false
  })
});
