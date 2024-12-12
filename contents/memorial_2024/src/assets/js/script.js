import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAPとScrollTriggerの初期化
gsap.registerPlugin(ScrollTrigger);

$(function () {
  // memorial_scenarioをフェードイン
  gsap.utils.toArray(".memorial_scenario").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 }, // 初期状態: 不透明度0 & 下に50px
      {
        opacity: 1,
        y: 0, // 元の位置に戻る
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 50%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  });
});
