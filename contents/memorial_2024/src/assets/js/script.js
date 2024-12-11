$(function () {

  // ページトップへ戻る
  $('.page_top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
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
  const accordionItems = document.querySelectorAll('.m-accordion-item');

  accordionItems.forEach(item => {
    const accordion = item.querySelector('.m-accordion-wrapper');
    const header = item.querySelector('.m-accordion-item-header');
    const content = item.querySelector('.m-accordion-item-content');

    header.addEventListener('click', () => {
      if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
        content.style.maxHeight = content.scrollHeight + 'px';
        accordion.classList.add('active');
        header.classList.add('active');
        content.classList.add('active');
      } else {
        content.style.maxHeight = null;
        accordion.classList.remove('active');
        header.classList.remove('active');
        content.classList.remove('active');
      }
    });
  });

  $(document).ready(function () {
    // 要素の位置を取得
    const missionNavPos = $('.MissionNav').offset().top;
    const footerSitePos = $('.footer_wrapper').offset().top;

    // スクロールイベントを設定
    let scrollTimeout;
    $(window).scroll(function () {
      const scrollPos = $(window).scrollTop();

      // MissionNavより上の場合、.m-footer_topBtn を非表示にする
      if (scrollPos < missionNavPos) {
        $('.m-footer_topBtn').css('opacity', 0);
      } else {
        $('.m-footer_topBtn').css('opacity', 1);
      }

      // .m-footer_ticketBtn の is-active クラスの追加/削除
      if (scrollPos >= missionNavPos && scrollPos < footerSitePos) {
        $('.m-footer_ticketBtn').addClass('is-active');
      } else {
        $('.m-footer_ticketBtn').removeClass('is-active');
      }

      // スクロールが停止した後に .m-footer_topBtn の opacity を 0 にする
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        if (scrollPos >= missionNavPos) {
          $('.m-footer_topBtn').css('opacity', 0);
        }
      }, 800); // 100ミリ秒後に実行
    });
  });

  $(window).on('scroll', function () {
    var $contentHeader = $('.header_navTrigger');
    var $missionNav = $('.MissionNav');

    // MissionNavの位置を取得
    var missionNavPosition = $missionNav.offset().top;

    // 現在のスクロール位置を取得
    var currentScrollPosition = $(window).scrollTop();

    // MissionNavより上か下かを判定
    if (currentScrollPosition >= missionNavPosition) {
      $contentHeader.addClass('is-active');
    } else {
      $contentHeader.removeClass('is-active');
    }
  });

  $(window).on("scroll", function () {
    var pageScroll = $(window).scrollTop();
    var pageTop = $(".pageTop").offset().top;

    if (pageScroll > pageTop) {
      $('#contentHeader').addClass('is-fixed');
    } else {
      $('#contentHeader').removeClass('is-fixed');
    }
  });

  function navShow() {
    $('.header_navTrigger').toggleClass('active');
    $(".header_navOpen").toggleClass('active');
    $(".header_navOpen").fadeToggle(200);

    if ($('.header_navOpen').hasClass('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
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

  $('a[href*="#"]').click(function (e) {
    e.preventDefault(); // デフォルトのリンク動作を無効化
    var target = $(this.hash); // アンカーリンクのターゲットを取得
    var headerHeight = $('#contentHeader').outerHeight(); // ヘッダーの高さを取得

    if (target.length) { // ターゲットが存在する場合
      // ターゲット要素のpadding-topとmargin-topを取得
      var targetPaddingTop = parseInt(target.css('padding-top'));
      var targetMarginTop = parseInt(target.css('margin-top'));

      // 値の確認用にコンソールに出力
      // console.log('headerHeight:', headerHeight);
      // console.log('targetPaddingTop:', targetPaddingTop);
      // console.log('targetMarginTop:', targetMarginTop);

      // スクロール位置を計算してスクロール
      var scrollPosition = target.offset().top - headerHeight
      // console.log('scrollPosition:', scrollPosition);

      $('body,html').animate({
        scrollTop: scrollPosition // ヘッダーの高さとターゲットのpaddingとmarginを引いてスクロール
      }, 500);
    }
  });

  // APNGとMP4の再生
  const apngElements = document.querySelectorAll('.apng:not(.buzz_apng)');
  const mp4Elements = document.querySelectorAll('.mp4');
  const buzzApngElements = document.querySelectorAll('.buzz_apng');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const buzzObserverOptionsPC = {
    root: null,
    rootMargin: '0px 0px -70% 0px', // PC用のマージン
    threshold: 0
  };

  const buzzObserverOptionsSP = {
    root: null,
    rootMargin: '0px 0px -50% 0px', // SP用のマージン
    threshold: 0
  };

  const isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;
  const buzzObserverOptions = isMobile ? buzzObserverOptionsSP : buzzObserverOptionsPC;

  // .buzz_apngの要素の初期状態を非アクティブに設定
  buzzApngElements.forEach(el => {
    el.dataset.src = el.src;
    el.src = './assets/images/m-footer_buzz_00.png'; // 初期状態でAPNGを非アクティブにする
  });

  // 通常のAPNGも初期状態を保存しておく
  apngElements.forEach(el => {
    el.dataset.src = el.src;
  });

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.tagName === 'IMG') {
          entry.target.src = entry.target.dataset.src;
        } else if (entry.target.tagName === 'VIDEO') {
          entry.target.play();
        }
      } else {
        if (entry.target.tagName === 'VIDEO') {
          entry.target.pause();
        }
      }
    });
  };

  const apngObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.tagName === 'IMG') {
          entry.target.src = entry.target.dataset.src;
        }
        // 一度発火したら監視を停止
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const apngObserver = new IntersectionObserver(apngObserverCallback, buzzObserverOptions);

  apngElements.forEach(el => {
    apngObserver.observe(el);
  });

  buzzApngElements.forEach(el => {
    apngObserver.observe(el);
  });

  mp4Elements.forEach(el => observer.observe(el));
});
