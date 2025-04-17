<!-- src/components/ShaderBackground.vue -->
<template lang="pug">
  // canvas要素を生成。ref属性で取得できるようにしておく
  canvas(ref="canvasRef")
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
// シェーダーファイルをインポート
import fragmentShader from "@/shaders/background.frag";

const canvasRef = ref(null);

onMounted(() => {
  // レンダラー初期化
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvasRef.value,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // シーン生成
  const scene = new THREE.Scene();

  // フルスクリーン描画用 OrthographicCamera
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // 全画面に広げるPlaneGeometry
  const geometry = new THREE.PlaneGeometry(2, 2);

  // シェーダーマテリアル
  const material = new THREE.ShaderMaterial({
    vertexShader: `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader,
    uniforms: {
      u_time: { value: 0.0 },
      u_resolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
    },
  });

  // メッシュ化
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 毎フレーム更新
  const startTime = Date.now();
  function animate() {
    requestAnimationFrame(animate);

    // 経過秒数をu_timeへ
    material.uniforms.u_time.value = (Date.now() - startTime) / 1000;

    renderer.render(scene, camera);
  }
  animate();

  // リサイズ対応
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    material.uniforms.u_resolution.value.set(
      window.innerWidth,
      window.innerHeight
    );
  });
});
</script>

<style lang="scss" scoped>
/* canvasを全画面表示するためのスタイル */
canvas {
  display: block;
  width: 100vw;
  height: 100vh;
}
</style>
