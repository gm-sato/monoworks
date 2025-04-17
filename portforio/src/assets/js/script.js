export function myFunction() {
  console.log("myFunction has been called!");

  const value = 90;
  const max = 100;
  const circle = document.querySelector(".donut-ring");
  const label = document.getElementById("donut-label");

  if (!circle || !label) {
    console.warn("グラフ要素が見つかりませんでした");
    return;
  }

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = circumference;

  function getColor(value) {
    if (value < 30) return "#ff4d4d";
    if (value < 70) return "#ffaa00";
    return "#00cc66";
  }

  circle.style.stroke = getColor(value);

  let current = 0;
  const duration = 1000;
  const frameRate = 10;
  const steps = duration / frameRate;
  const stepValue = value / steps;

  const interval = setInterval(() => {
    current += stepValue;
    if (current >= value) {
      current = value;
      clearInterval(interval);
    }
    const offset = circumference * (1 - current / max);
    circle.style.strokeDashoffset = offset;
    label.textContent = `${Math.round(current)}%`;
  }, frameRate);

  let currentMode = "pc"; // 'pc' or 'sp'
  let currentIndex = 0;

  function openModal(index) {
    const data = modalData[index];
    if (!data) return;

    currentIndex = index;

    document.querySelector(".works_modal-title").textContent = data.title;
    document.querySelector(".works_modal-dayz").textContent = data.year;
    document.querySelector(".works_modal-language").textContent = data.language;
    document.querySelector(".works_modal-section").textContent = data.section;
    const link = document.querySelector(".works_modal-link");
    link.href = data.url;
    link.textContent = data.url;

    setImages(data.pcImages);

    document.getElementById("works_modal").classList.add("is-active");
  }

  function setImages(images) {
    const list = document.querySelector(".works_modal-slide");
    list.innerHTML = "";
    images.forEach((src) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = src;
      li.appendChild(img);
      list.appendChild(li);
    });
  }

  function closeModal() {
    document.getElementById("works_modal").classList.remove("is-active");
    document.querySelector(".works_modal-slide").innerHTML = "";
    currentIndex = 0;
  }

  document.getElementById("close-modal").addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
  });

  // PC/SP切り替えボタン例（ボタンのHTML必要）
  document.getElementById("toggle-pc").addEventListener("click", () => {
    currentMode = "pc";
    setImages(modalData[currentIndex].pcImages);
  });

  document.getElementById("toggle-sp").addEventListener("click", () => {
    currentMode = "sp";
    setImages(modalData[currentIndex].spImages);
  });
}
