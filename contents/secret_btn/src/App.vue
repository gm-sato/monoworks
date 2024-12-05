<template>
  <transition
    name="fade"
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="onEnter"
    @after-enter="afterEnter"
  >
    <router-view />
  </transition>
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      console.log("アニメーション開始前", el);
    },
    onEnter(el, done) {
      console.log("アニメーション中", el);
      // アニメーション終了を手動で指定する場合
      setTimeout(done, 500);
    },
    afterEnter(el) {
      console.log("アニメーション終了後", el);
    },
  },
};
</script>
