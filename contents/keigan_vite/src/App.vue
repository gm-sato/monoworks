<template lang="pug">
div#app
  AppHeader
  template(v-if="isHomePage")
  #praticles-js
  .pcWrap
    main#insight
      transition(name="custom" mode="out-in" @before-enter="beforeEnter" @enter="enter" @leave="leave")
        router-view
  //- AppFooter
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
import gsap from "gsap";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const route = useRoute();
    // 現在のルートが'/'または'Home.vue'に対応するパスの場合にチェック
    const isHomePage = computed(() => route.name === "Home");

    return {
      isHomePage,
    };
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, { opacity: 0 });
    },
    enter(el, done) {
      gsap.to(el, { opacity: 1, duration: 0.5, onComplete: done });
    },
    leave(el, done) {
      gsap.to(el, { opacity: 0, duration: 0.5, onComplete: done });
    },
  },
};
</script>

<style>
/* 必要に応じてグローバルスタイルを追加 */
</style>
