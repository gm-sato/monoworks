<script setup>
import { createApp } from "vue";
import App from "../App.vue";
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles"; // 完全版を使用する場合
// import { loadSlim } from '@tsparticles/slim'; // 軽量版を使用する場合

const app = createApp(App);

app.use(Particles, {
  async init(engine) {
    await loadFull(engine); // 完全版を使用する場合
    // await loadSlim(engine); // 軽量版を使用する場合
  },
});

app.mount("#app");
</script>

<template>
  <div>
    <vue-particles id="tsparticles" :options="particlesOptions" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      particlesOptions: {
        background: {
          color: { value: "#0d47a1" },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: { enable: true },
            value: 80,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      },
    };
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
