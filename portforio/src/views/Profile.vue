<template lang="pug">
div
  h1 PROFILE
  p このページでは、私たちのプロジェクトについて詳しく説明しています。
  router-link(to="/") ホームページへ
  div.donut-chart
    svg.donut(viewBox="0 0 100 100")
      circle.donut-bg(cx="50", cy="50", r="40")
      circle.donut-ring(cx="50", cy="50", r="40")
    div.donut-label#donut-label 0%
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
.donut-chart {
  width: 200px;
  height: 200px;
  position: relative;
}

.donut {
  transform: rotate(-90deg);
}

.donut-bg {
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 10;
}

.donut-ring {
  fill: none;
  stroke: #00aaff;
  stroke-width: 10;
  stroke-dasharray: 251.2; /* 2πr, r=40 */
  stroke-dashoffset: 251.2;
  transition: stroke 0.3s;
}

.donut-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
}
</style>
