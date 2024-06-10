import * as THREE from 'three';
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';

let scene, camera, renderer, pointLight, controls;

// シーンを作成
scene = new THREE.Scene();

// カメラを作成
camera = new THREE.PerspectiveCamera(
  50, //視野角
  window.innerWidth / window.innerHeight, //アスペクト比
  0.1, //開始距離
  1000 //終了距離
);
camera.position.set(0, 0, +500);


//レンダラーを追加
renderer = new THREE.WebGLRenderer({
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ジオメトリを作成
let ballGeometry = new THREE.SphereGeometry(100, 64, 32);

//マテリアルを作成
let ballMaterial = new THREE.MeshPhysicalMaterial({});

// メッシュ化してみよう
let ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ballMesh);

//平行光源を追加してみよう
let directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

//ポイント光源を追加してみよう
pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.power = 50000
pointLight.position.set(-200, -200, -200);
scene.add(pointLight);

//ポイント光源がどこにあるのかを特定する
let pointLightHelper = new THREE.PointLightHelper(pointLight, 30);
scene.add(pointLightHelper)

//マウス操作ができるようにしよう
controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  //ポイント光源を球体の周りを巡回させよう
  pointLight.position.set(
    200 * Math.sin(Date.now() / 500),
    200 * Math.sin(Date.now() / 1000),
    200 * Math.cos(Date.now() / 1000)
  );

  //レンダリングしてみよう
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();