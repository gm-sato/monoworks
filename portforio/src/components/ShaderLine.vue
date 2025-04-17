<!-- src/components/ShaderLine.vue -->
<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
// vite-plugin-glsl によりシェーダーファイルをインポート
import fragmentShader from "@/shaders/line.frag";

const canvasRef = ref(null);

onMounted(() => {
  // WebGLRendererの作成。canvas要素を指定
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvasRef.value,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // シーン作成
  const scene = new THREE.Scene();

  // フルスクリーン用の直交投影カメラ（クリップ空間 -1〜1に合わせる）
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // 全画面に広げる平面ジオメトリ
  const geometry = new THREE.PlaneGeometry(2, 2);

  // シェーダーマテリアルの設定
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

  // 平面メッシュを作成してシーンに追加
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // アニメーションループの開始
  const startTime = Date.now();
  function animate() {
    requestAnimationFrame(animate);
    // 経過時間（秒）をu_timeに更新
    material.uniforms.u_time.value = (Date.now() - startTime) / 1000;
    renderer.render(scene, camera);
  }
  animate();

  // ウィンドウリサイズ時の対応
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    material.uniforms.u_resolution.value.set(
      window.innerWidth,
      window.innerHeight
    );
  });
});
</script>

<template lang="pug">
  // canvas要素を生成（pug記法）
  canvas(ref="canvasRef")
</template>

<style lang="scss" scoped>
/* canvasを全画面に表示 */
canvas {
  display: block;
  width: 100vw;
  height: 100vh;
}
</style>
