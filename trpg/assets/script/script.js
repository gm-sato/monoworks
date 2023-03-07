  // header・footer共通パーツ化

  function include_header(rootDir) {
    $.ajax({
      url: rootDir + 'assets/parts/header.html', // リクエストを送信するURLを指定
      async: false, // 非同期リクエストを無効にする
    }).done(function (header_html) { // 通信が成功したら
      header_html = header_html.replace(/\{\$root\}/g, rootDir); // header.htmlの文字列を置き換え
      document.write(header_html); // herder.htmlを表示する
    });
  }

  function include_footer(rootDir) {
    $.ajax({
      url: rootDir + 'assets/parts/footer.html', // リクエストを送信するURLを指定
      async: false, // 非同期リクエストを無効にする
    }).done(function (footer_html) { // 通信が成功したら
      footer_html = footer_html.replace(/\{\$root\}/g, rootDir); // footer.htmlの文字列を置き換え
      document.write(footer_html); // footer.htmlを表示する
    });
  }

  $(function () {

    // ページ内移動アニメーション
    $('a[href^="#"]').click(function () {
      var adjust = 0;
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top + adjust;
      $("body,html").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
    //フェードアニメーション
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();

      $(".fadeIn").each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-show");
        }
      });
    });
  });

  // iframe設定
  $(window).on("message", function (e) {
    $(function () {
      if ($("#goodsmenuframe").length !== 0) {
        $("#goodsmenuframe iframe").css({
          height: e.originalEvent.data + 4 + "px",
          border: "none",
        });
      }
    });
  });

  // 遅延読み込み
  jQuery(function ($) {
    $("img.lazy").lazyload();
  });