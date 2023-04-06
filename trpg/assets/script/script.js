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
  centerdSlides: true,
  slidesPerView: 1,
  breakpoints: {
    820: {
      slidesPerView: 3,
    }
  },
  speed: 10000,
  allowTouchMove: false,
  slidesPerView: "auto",
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

const movieB = new Swiper('.movie_b', {
  loop: true,
  slidesPerView: 1,
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


const character = new Swiper('.chara_slide', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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