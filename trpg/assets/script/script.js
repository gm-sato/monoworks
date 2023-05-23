// スムーススクロール
// headerの高さを取得し、headeHeightに代入
const headerHeight = document.querySelector('header').offsetHeight;

//querySelectorAllメソッドを使用してページ内のhref属性が#で始まるものを選択
//forEachメソッドを使って、各アンカータグにクリックされた時の処理
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {

    // クリックされたときのデフォルトの挙動を防ぐ
    e.preventDefault();

    // クリックされたアンカータグのhref属性を取得
    const href = anchor.getAttribute('href');

    // href属性の#を取り除いた部分と一致するIDを取得
    const target = document.getElementById(href.replace('#', ''));

    //取得した要素の位置を取得するために、getBoundingClientRect()を呼び出し、ページ上の位置を計算。
    //headerの高さを引いて、スクロール位置がヘッダーの下になるように調整します。
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    // window.scrollTo()を呼び出して、スクロール位置を設定します。behaviorオプションをsmoothに設定することで、スムーズなスクロールを実現します。
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});


//モーダルウィンドウ
const body = document.body;
const modalBtns = document.querySelectorAll(".js-modal-open");
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    body.style.top = `-${window.scrollY}px`;
    body.classList.add('backgroundfix');
    let modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
    modalbg.classList.add("trpg--is_open");
  };
});
const closeBtns = document.querySelectorAll(".js-modal-close");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    body.classList.remove('backgroundfix');
    let modal = btn.closest('.js-modal');
    modal.style.display = "none";
    const top = body.style.top;
    const topHeight = top.replace('px', '').replace('-', '');
    window.scrollTo(0, topHeight);
  };
});

window.onclick = function (event) {
  if (event.target.className === ".js-modal") {
    event.target.style.display = "none";
    bodyFixedOff();
  }
};
//モーダルウィンドウここまで


const movieA = new Swiper('.movie_a', {
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    820: {
      slidesPerView: 3,
    }
  },
  speed: 10000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

const movieB = new Swiper('.movie_b', {
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    820: {
      slidesPerView: 3,
    }
  },
  speed: 10000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
});

const log = new Swiper('.log_slider', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  },
  loop: false,
  slidesPerView: 'auto',
});


const character = new Swiper('.chara_slide', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: "#pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<p class="' + className + '">' + '<span>' + ["001", "002", "003", ][index] + '</span>' + '</p>';
    },
  },
  slidesPerView: 1,
  loop: true,
});


const targets = document.querySelectorAll('.chara-box'); //アニメーションさせたい要素
//スクロールイベント
window.addEventListener('scroll', function () {
  let scroll = window.scrollY; //スクロール量を取得
  let windowHeight = window.innerHeight; //画面の高さを取得
  for (let target of targets) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
    let targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
    if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
      target.classList.add('is-animated'); //is-animatedクラスを加える
    }
  }
});


window.addEventListener("load", function () {
  const d = document;
  const items = d.querySelectorAll(".js-item");
  const terms = [];

  for (let i in items) {
    for (let i = 0; i < items.length; i++) {
      if (i < 8) {
        items[i].classList.add("accept");
      } else {
        items[i].classList.add("hidden");
      }
    }
  }

  const buttons = d.querySelectorAll(".js-item-term");
  for (const button of buttons) {
    button.addEventListener("click", function () {
      button.classList.toggle("active");

      // クリックした条件を絞り込み条件リストに追加/削除
      const term = button.getAttribute("data-term");
      const termPosition = terms.indexOf(term);
      if (termPosition !== -1) {
        terms.splice(termPosition, 1);
      } else {
        terms.push(term);
      }
      console.log("terms: ", terms);

      // 絞り込み
      for (const item of items) {
        for (let i in items) {
          for (let i = 0; i < items.length; i++) {
            item.classList.remove("accept");
            item.classList.remove("hidden");
          }
        }
        // 選択されてる条件ないなら全てのfadeOut取って処理終了
        if (terms.length === 0 && item.classList.contains("fadeOut")) {
          item.classList.remove("fadeOut");
          continue;
        }
        // 空白削除して配列に
        const itemTagsArray = item
          .getAttribute("data-tag")
          .replace(/\s+/g, "")
          .split(",");
        const isIncludedTerm = terms.filter(function (term) {
          return itemTagsArray.indexOf(term) !== -1;
        });
        if (isIncludedTerm.length !== terms.length && !item.classList.contains("fadeOut")) {
          // 現在の条件と完全一致してなくてfadeOutクラスもなければfadeOutクラス付与
          item.classList.add("fadeOut");
        } else if (isIncludedTerm.length === terms.length && item.classList.contains("fadeOut")) {
          // 現在の条件と完全一致しててfadeOutクラスあるならfadeOutクラス外す
          item.classList.remove("fadeOut");
        }
      }
      let arritem = document.querySelectorAll('.chara-box:not(.fadeOut)');
      for (let i in arritem) {
        console.log(arritem[i]);
        for (let i = 0; i < arritem.length; i++) {
          if (i < 8) {
            arritem[i].classList.add("accept");
          } else {
            arritem[i].classList.add("hidden");
          }
        }
      }
    });
  }
});