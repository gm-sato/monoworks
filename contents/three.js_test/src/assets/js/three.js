import * as THREE from 'three';
import {
  Tween,
  Easing,
  update
} from '@tweenjs/tween.js';

// 基本設定
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff); // 背景色を白に設定
document.body.appendChild(renderer.domElement);

// ライティング
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // ソフトなアンビエントライト
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // 明るいディレクショナルライト
directionalLight.position.set(2, 2, 2).normalize(); // 斜めから光を当てる
scene.add(directionalLight);

// 六角形の形状
const hexagonShape = new THREE.Shape();
const size = 1;
for (let i = 0; i < 6; i++) {
  const angle = (i / 6) * Math.PI * 2;
  const x = Math.cos(angle) * size;
  const y = Math.sin(angle) * size;
  if (i === 0) {
    hexagonShape.moveTo(x, y);
  } else {
    hexagonShape.lineTo(x, y);
  }
}
hexagonShape.lineTo(Math.cos(0) * size, Math.sin(0) * size);

// 押し出し設定
const extrudeSettings = {
  depth: 0.1,
  bevelEnabled: false,
};

// 六角形タイルの作成
const hexagons = [];
const hexagonsGroup = new THREE.Group();
const radius = size; // 六角形の辺と辺がぴったり合うように半径を調整

for (let row = -5; row <= 5; row++) {
  for (let col = -5; col <= 5; col++) {
    let x = col * radius * 1.5;
    let y = row * radius * Math.sqrt(3); // 六角形の高さに合わせて調整
    if (col % 2 !== 0) y += radius * Math.sqrt(3) / 2;

    const hexagon = new THREE.Object3D();

    // Generate initial random height
    const randomHeight = Math.random() * 0.5 + 0.1; // 0.1から0.6の間でランダムな高さ

    const extrudeSettingsWithHeight = {
      ...extrudeSettings,
      depth: randomHeight
    };
    const hexagonGeometry = new THREE.ExtrudeGeometry(hexagonShape, extrudeSettingsWithHeight);
    const hexagonMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff // 六角形の色を白に設定
    });

    const hexagonMesh = new THREE.Mesh(hexagonGeometry, hexagonMaterial);
    hexagon.position.set(x, y, 0);
    hexagon.add(hexagonMesh);

    // 縁取りの作成
    const edges = new THREE.EdgesGeometry(hexagonGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x000000
    }); // 縁の色を黒に変更
    const line = new THREE.LineSegments(edges, lineMaterial);
    hexagon.add(line);

    hexagonsGroup.add(hexagon);
    hexagons.push({
      hexagon,
      hexagonMesh,
      randomHeight
    });
  }
}
scene.add(hexagonsGroup);

camera.position.z = 10;

// 高さを更新するアニメーションを作成する関数
function animateHexagonHeight(hexagonMesh) {
  const initialHeight = hexagonMesh.geometry.parameters.options.depth;
  const newHeight = Math.random() * 0.5 + 0.1; // 新しいランダムな高さ

  new Tween({
      depth: initialHeight
    })
    .to({
      depth: newHeight
    }, 5000) // 5000ミリ秒（5秒）で変化
    .easing(Easing.Quadratic.InOut) // イージング関数を使用してなめらかに
    .onUpdate(function (object) {
      const extrudeSettingsWithHeight = {
        ...extrudeSettings,
        depth: object.depth
      };
      hexagonMesh.geometry.dispose();
      hexagonMesh.geometry = new THREE.ExtrudeGeometry(hexagonShape, extrudeSettingsWithHeight);

      // 縁取りの更新
      hexagonMesh.parent.children.forEach(child => {
        if (child instanceof THREE.LineSegments) {
          child.geometry.dispose();
          const newEdges = new THREE.EdgesGeometry(hexagonMesh.geometry);
          child.geometry = newEdges;
        }
      });
    })
    .onComplete(() => animateHexagonHeight(hexagonMesh)) // アニメーションが完了したら再度実行
    .start();
}

// 初期化後にアニメーションを開始
hexagons.forEach(({
  hexagonMesh
}) => animateHexagonHeight(hexagonMesh));

// アニメーションループ
function animate() {
  requestAnimationFrame(animate);
  update();
  renderer.render(scene, camera);
}
animate();

// リサイズハンドラー
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
