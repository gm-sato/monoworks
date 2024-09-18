<template lang="pug">
div#app
  Header
  template(v-if="isHomePage")
    #splash
      #splash_logo
        //- img(src="@/assets/images/decoText.svg", alt="").fadeUp
  .pcWrap
    main#entertainer
      transition(name="custom" mode="out-in" @before-enter="beforeEnter" @enter="enter" @leave="leave")
        router-view
  Footer
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import gsap from 'gsap'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    const route = useRoute()
    // 現在のルートが'/'または'Home.vue'に対応するパスの場合にチェック
    const isHomePage = computed(() => route.name === 'Home')

    return {
      isHomePage
    }
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, { opacity: 0 })
    },
    enter(el, done) {
      gsap.to(el, { opacity: 1, duration: 0.5, onComplete: done })
    },
    leave(el, done) {
      gsap.to(el, { opacity: 0, duration: 0.5, onComplete: done })
    }
  }
}
</script>

<style>
/* 必要に応じてグローバルスタイルを追加 */
</style>
