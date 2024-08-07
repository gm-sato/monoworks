import * as THREE from "./build/three.module.js";

let camera, scene, renderer;

init();

function init() {
  //camera
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    15000
  );

  camera.position.z = 250;

  //scene
  scene = new THREE.Scene();

  //gometry
  const size = 250;
  const geometry = new THREE.BoxGeometry(size, size, size);
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    specular: 0xffffff,
    shininess: 50, //輝度
  });

  for (let i = 0; i < 2500; i++) {
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);
    mesh.position.y = 8000 * (2.0 * Math.random() - 1.0);
    mesh.position.z = 8000 * (2.0 * Math.random() - 1.0);

    //回転度合いをランダムに決める
    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.Y = Math.random() * Math.PI;
    mesh.rotation.Z = Math.random() * Math.PI;

    scene.add(mesh);
  }
  //平行光源
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.03);
  scene.add(dirLight);

  addLight(0.08, 0.3, 0.9, 0, 0, -1500);

  //ポイント光源を追加
  function addLight(h, s, l, x, y, z) {
    const light = new THREE.PointLight(0xffffff, 1.5, 2000); //色、強さ、減衰
    light.color.setHSL(h, s, l);
    light.position.set(x, y, z);
    scene.add(light);
  }

  //renderer

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  renderer.render(scene, camera);
}