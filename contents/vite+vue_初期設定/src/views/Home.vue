<template lang="pug">
div
  h1 ホームページ
  p ようこそ、私たちのホームページへ！
  router-link(to="/about") アバウトページへ
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
h1 {
  color: #333;
}
p {
  font-size: 16px;
  line-height: 1.5;
}
</style>
