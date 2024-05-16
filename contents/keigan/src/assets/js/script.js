$(function () {
  // ページトップへ戻る
  $('.page_top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $('.pageLink a').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href === "#" || href === "" ? 'html' : href);
    var position = target.offset().top - 50;
    $('html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  // fadeInアニメーション
  $(window).scroll(function () {
    $(".fade-in").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll + windowHeight > position) {
        $(this).addClass("visible");
      }
    });
  });

  // アコーディオン
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-item-header');
    const content = item.querySelector('.accordion-item-content');

    header.addEventListener('click', () => {
      if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
        content.style.maxHeight = content.scrollHeight + 'px';
        header.classList.add('active');
        content.classList.add('active');
      } else {
        content.style.maxHeight = null;
        header.classList.remove('active');
        content.classList.remove('active');
      }
    });
  });

  $(window).on("scroll", function () {
    var pageScroll = $(window).scrollTop();
    var pageTop = $(".pageTop").offset().top;

    if (pageScroll > pageTop) {
      $('.header_navTrigger').addClass('is-fixed');
    } else {
      $('.header_navTrigger').removeClass('is-fixed');
    }
  });

  function navShow() {
    $('.header_navTrigger').toggleClass('active');
    $(".header_navOpen").toggleClass('active');
    $(".header_navOpen").fadeToggle(200);

    if ($('.header_navOpen').hasClass('active')) {
      $('.header_navTrigger p').text('Close');
    } else {
      $('.header_navTrigger p').text('Menu');
    }
  }

  $(".header_navTrigger").on("click", function () {
    navShow();

    if ($(window).scrollTop() === 0) {
      var targetClass = '.pcWrap';
      var targetOffset = $(targetClass).offset().top;
      $('html, body').animate({
        scrollTop: targetOffset
      }, 1000);
    }

  });
  $(".header_navOpen a").on("click", function () {
    navShow();
  });

});
