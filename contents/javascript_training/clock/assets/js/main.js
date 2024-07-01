//時計の標示を更新する関数
function updateClock() {
  //現在の日時を取得
  const now = new Date();

  //時、分、秒を取得
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;

  const hourHand = document.getElementById("hour-hand");
  const minuteHand = document.getElementById("minute-hand");
  const secondHand = document.getElementById("second-hand");

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  setTimeout(updateClock, 1000);
}

// 時計を開始
updateClock();
