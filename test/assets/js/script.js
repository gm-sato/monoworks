// マウスの動きに応じて画面全体を移動する
document.addEventListener('mousemove', function (event) {
    var container = document.getElementById('parallax-container');
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var moveX = (containerWidth / 2 - mouseX) * 0.1;
    var moveY = (containerHeight / 2 - mouseY) * 0.1;

    container.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
});

// コンテンツの高さを計算して適用する
window.addEventListener('load', function () {
    var contents = document.getElementsByClassName('content');
    var totalWidth = 0;
    var numColumns = 6; // カラムの数

    for (var i = 0; i < contents.length; i++) {
        totalWidth += contents[i].offsetWidth;
    }

    var containerWidth = document.getElementById('parallax-container').offsetWidth;
    var contentWidth = containerWidth / numColumns;
    var scaleRatio = contentWidth / totalWidth;

    for (var i = 0; i < contents.length; i++) {
        contents[i].style.width = contentWidth + 'px';
        contents[i].style.transform = 'scale(' + scaleRatio + ')';
    }
});