import {
  gsap
} from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";
import Vivus from 'vivus';
gsap.registerPlugin(ScrollTrigger);

function getRandomDuration(min, max) {
  return Math.random() * (max - min) + min;
}

$(function () {
  // Slickナビゲーションのアニメーション
  gsap.to('.slick-prev', {
    x: 10,
    duration: 1,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1
  });

  gsap.to('.slick-next', {
    x: -10,
    duration: 1,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1
  });

  //点滅アニメーション
  gsap.to(".stars-element", {
    duration: getRandomDuration(1, 5),
    opacity: 0.4,
    scale: 0.8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });

  //回転アニメーション
  gsap.to(".rotate-element", {
    duration: 16,
    rotate: 360,
    ease: "linear",
    repeat: -1,
    yoyo: false
  });

  //縮小アニメーション
  gsap.to(".scale-element", {
    duration: getRandomDuration(1, 5),
    scale: 0.8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });

  //浮遊アニメーション
  gsap.to(".planet-element", {
    duration: 2,
    y: "-=20",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".planet-element", {
    duration: 3,
    x: "+=10",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // TOPバズ
  gsap.set(".animated-element", {
    x: -30,
    y: 10,
    scale: 0.8,
    rotate: 10,
  });

  gsap.to(".animated-element", {
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    delay: 1.25,
    duration: 1,
    ease: "power1.inOut",
    repeat: 0,
    yoyo: false,
    onComplete: function () {
      gsap.delayedCall(1, function () {
        VivusAnime('logo5');
      });
      document.querySelectorAll('.waitMainAnime').forEach(function (element) {
        element.classList.add('is-animation');
      });
      gsap.delayedCall(2.7, function () {
        document.querySelector('.About_main-title').classList.add('is-open');
      });
    }
  });
});

// SVGファイルを読み込む関数
function loadSVG(url, id, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const div = document.createElement('div');
      div.innerHTML = data;
      const svgElement = div.querySelector('svg');
      if (svgElement) {
        svgElement.id = id; // SVGにIDを追加
        callback(svgElement);
      }
    })
    .catch(error => console.error('Error loading SVG:', error));
}

// Vivusの初期設定
let vivusInstances = {};

function VivusInit(id) {
  const duration = id === 'logo5' ? 100 : 80; // logo5 の場合は duration を 100 に設定
  vivusInstances[id] = new Vivus(id, {
    start: 'autostart',
    duration: duration,
    type: 'scenario',
    pathTimingFunction: Vivus.EASE,
  }, function (obj) {
    $(`#${id}`).attr("class", "done");
  });
  vivusInstances[id].stop();
}

// スクロールでSVGを表示する設定
function VivusAnime(id) {
  if (id === 'logo5') {
    vivusInstances[id].play(1);
  } else {
    const elemPos = $(`#${id}`).offset().top - 50;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      vivusInstances[id].play(1);
    }
  }
}

// SVGをDOMに挿入してVivus.jsを適用
function initializeSVGs(svgConfigs) {
  svgConfigs.forEach(config => {
    loadSVG(config.url, config.id, svgElement => {
      document.getElementById(config.containerId).appendChild(svgElement);
      VivusInit(config.id);

      // logo5の初期アニメーションは手動で行うのでここではVivusAnimeを呼びません
      if (config.id !== 'logo5') {
        VivusAnime(config.id);
      }
    });
  });
}

// ページ読み込み時の設定
$(window).on('load', function () {
  const svgConfigs = [{
      url: './assets/images/title/mainttl_attraction-en.svg',
      id: 'logo1',
      containerId: 'attraction-en'
    },
    {
      url: './assets/images/title/mainttl_goods-en.svg',
      id: 'logo2',
      containerId: 'goods-en'
    },
    {
      url: './assets/images/title/mainttl_menu-en.svg',
      id: 'logo3',
      containerId: 'menu-en'
    },
    {
      url: './assets/images/title/mainttl_resort-en.svg',
      id: 'logo4',
      containerId: 'resort-en'
    },
    {
      url: './assets/images/title/m-AboutMain-title.svg',
      id: 'logo5',
      containerId: 'AboutMainttl'
    },
    {
      url: './assets/images/title/mainttl_hotel-en.svg',
      id: 'logo6',
      containerId: 'hotel-en'
    },
    // 必要なだけ追加
  ];

  initializeSVGs(svgConfigs);
});

// スクロールイベントの設定
$(window).scroll(function () {
  Object.keys(vivusInstances).forEach(id => {
    if (id !== 'logo5') {
      VivusAnime(id);
    }
  });
});

$(window).scroll(function () {
  $(".sub_ttl").each(function () {
    var $this = $(this);
    var position = $this.offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll + windowHeight > position) {
      if (!$this.hasClass("is-active-pending")) {
        $this.addClass("is-active-pending");

        setTimeout(function () {
          $this.addClass("is-active");
        }, 1500);
      }
    }
  });
});
