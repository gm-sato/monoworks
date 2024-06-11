import * as THREE from 'three';
import {
  gsap
} from 'gsap';

let scene, camera, renderer, posters;
let posterTextures = [];

init();
animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.PlaneGeometry(1, 1.5);

  // Load poster textures
  const loader = new THREE.TextureLoader();
  for (let i = 1; i <= 10; i++) {
    loader.load(`images/poster_${i}.jpg`, function (texture) {
      posterTextures.push(texture);
      if (posterTextures.length === 10) {
        createPosters();
      }
    });
  }
}

function createPosters() {
  posters = new THREE.Group();
  const radius = 3;

  for (let i = 0; i < posterTextures.length; i++) {
    const material = new THREE.MeshBasicMaterial({
      map: posterTextures[i]
    });
    const poster = new THREE.Mesh(geometry, material);

    const angle = (i / posterTextures.length) * Math.PI * 2;
    poster.position.x = Math.cos(angle) * radius;
    poster.position.z = Math.sin(angle) * radius;
    poster.lookAt(new THREE.Vector3(0, 0, 0));

    posters.add(poster);
  }

  scene.add(posters);
}

function animate() {
  requestAnimationFrame(animate);
  posters.rotation.y += 0.01; // Rotate the carousel
  renderer.render(scene, camera);
}
