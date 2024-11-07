import $ from 'jquery';

$(function () {
  // ローディング画面表示
  function showSplash() {
    // if ((location.pathname === '/') || (location.pathname === '/index.html')){
    if ($("#splash").length) {

      // body要素にloadingクラスを追加
      $("body").addClass("loading");

      // ローディング画面表示
      $("#splash").delay(1500).fadeOut('slow');
      $("#splash_logo").delay(1200).fadeOut('slow');

    }
  }

  // ページ内リンクのスムーズスクロール
  function smoothScroll() {
    // ページ内リンクがクリックされたときの処理
    $('a[href^="#"]').on('click', function (event) {
      event.preventDefault();

      var targetId = $(this).attr('href').substring(1);
      var $targetElement = $('#' + targetId);

      if ($targetElement.length) {
        var headerHeight = $('header').outerHeight();
        $('html, body').animate({
          scrollTop: $targetElement.offset().top - headerHeight
        }, 0, 'swing');
      }
    });
  }

  // 要素のフェードイン
  function fadeInElements() {
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
  }

  // 要素の展開・折り畳み
  function toggleReadMore() {
    $('.readmore button').on('click', function () {
      const t = $('.readmore-hide');
      t.toggleClass('is_open');
      $(this).toggleClass('close_btn');
      if (t.hasClass('is_open')) {
        const h = t.get(0).scrollHeight;
        t.css('height', h);
        $(this).text('閉じる')
      } else {
        t.css('height', '');
        $(this).text('もっと見る');
      }
    });
  }

  // アコーディオンメニューの実装
  function setupAccordion() {
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
  }
  // モバイルメニューの表示
  function toggleMobileMenu() {
    function navShow() {
      $('.header_navTrigger').toggleClass('active');
      $(".header_navOpen").toggleClass('active');
      $(".header_navOpen").fadeToggle(200);

      if ($('.header_navOpen').hasClass('active')) {
        $('.header_navTrigger p').text('Close');
        $('body').css('overflow', 'hidden'); // スクロール禁止
      } else {
        $('.header_navTrigger p').text('Menu');
        $('body').css('overflow', ''); // スクロール可能に
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
  }

  const $WBorder = $('.fadeIn .W-border');
  const WBorderWidth = $WBorder.width();

  const slideBorderKeyframes = `
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: ${WBorderWidth}px;
  }
`;

  const style = $('<style>')
    .text(`
    @keyframes slideBorder {
      ${slideBorderKeyframes}
    }
  `);
  $('head').append(style);


  // 初期化処理
  function init() {

    showSplash();
    smoothScroll();
    fadeInElements();
    toggleReadMore();
    setupAccordion();
    toggleMobileMenu();
  }

  init();

});

const setElementHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// ローディングが完了したらloadingクラスを削除
$(window).on('load', function () {
  if ($("body.loading").length) {
    setTimeout(function () {
      $("body").removeClass("loading");
    }, 1500);
  }
  let loadingRemove = setInterval(function () {
    if ($("body.loading").length) {
      $("body").removeClass("loading");
      clearInterval(loadingRemove);
    }
  }, 1000);
});

window.addEventListener('resize', setElementHeight);
setElementHeight();
