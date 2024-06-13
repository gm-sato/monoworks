import * as THREE from 'three';
import {
  gsap
} from 'gsap';

// キャンバス要素の取得
const canvas = document.getElementById('myCanvas');

// 基本設定
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas
});
renderer.setSize(window.innerWidth, window.innerHeight);

// ライト
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(5, 5, 5);
light.castShadow = true;
scene.add(light);

// ハニカムパターン生成
const hexRadius = 6; // サイズを大きく
const hexGeometry = new THREE.CircleGeometry(hexRadius, 6);
const hexMaterial = new THREE.MeshPhongMaterial({
  color: 0xffffff
});

const hexGroup = new THREE.Group();
const hexHeight = Math.sqrt(3) * hexRadius;
const hexWidth = 2 * hexRadius;

for (let y = -10; y <= 10; y++) { // 大きさに合わせて範囲も調整
  for (let x = -10; x <= 10; x++) {
    const hex = new THREE.Mesh(hexGeometry, hexMaterial);
    hex.position.x = (x * hexWidth * 0.75) - (y * hexWidth * 0.75); // 斜め配置のための調整
    hex.position.y = (y * hexHeight * 0.5) + (x * hexHeight * 0.5); // 斜め配置のための調整
    hex.position.z = 0;
    hex.castShadow = true;
    hex.receiveShadow = true;
    hexGroup.add(hex);
  }
}

scene.add(hexGroup);
camera.position.z = 70; // カメラ位置も調整
camera.position.x = -120;
camera.position.y = 50;

camera.rotation.z = -0.5;


// マウス位置取得とRaycasterの設定
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
const mousePosition = new THREE.Vector3();

document.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(planeZ, mousePosition);
  updateHexagons();
});

// タイルの凹ませアニメーション
function updateHexagons() {
  hexGroup.children.forEach((hex) => {
    const distance = hex.position.distanceTo(mousePosition);
    if (distance < 20) { // 距離に応じて凹ませを調整
      gsap.to(hex.position, {
        z: -(5 - (distance / 4)),
        duration: 0.5,
        ease: "power1.out"
      }); // 凹ませの深さを調整
    } else {
      gsap.to(hex.position, {
        z: hex.userData.originalZ || 0,
        duration: 0.5,
        ease: "power1.out"
      });
    }
  });
}

// 波のように規則的に凹ませるアニメーション
function waveAnimateHexagons(time) {
  const waveSpeed = 0.0005; // 波の速度（遅くする）
  const waveHeight = 2; // 波の高さ（大きくする）
  const waveLength = 400; // 波の長さ（大きくする）

  hexGroup.children.forEach((hex) => {
    // 左斜め上から右斜め下への波のフェーズ計算
    const wavePhase = (hex.position.x - hex.position.y) * 0.05 + time * waveSpeed; // フェーズの間隔を広げるために係数を変更
    const waveOffset = Math.sin(wavePhase);
    const zPosition = Math.sin(wavePhase) * waveHeight * Math.exp(-waveOffset / waveLength); // 波の高さを計算
    hex.userData.originalZ = zPosition; // 元のZ位置を保存
    gsap.to(hex.position, {
      z: zPosition,
      duration: 0.5,
      ease: "power1.inOut"
    });
  });
}

// レンダリングループ
function animate(time) {
  requestAnimationFrame(animate);
  waveAnimateHexagons(time);
  renderer.render(scene, camera);
}

animate();
