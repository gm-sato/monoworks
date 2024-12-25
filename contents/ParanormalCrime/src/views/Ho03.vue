<template lang="pug">
div
  h1 HO3のページです
  p このページでは、私たちのプロジェクトについて詳しく説明しています。
  router-link(to="/") ホームページへ
</template>

<script>
export default {
  name: "Ho03",
};
</script>

<style scoped>
h1 {
  color: #555;
}
p {
  font-size: 16px;
  line-height: 1.5;
}
</style>
