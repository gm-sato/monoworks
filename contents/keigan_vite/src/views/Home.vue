<template lang="pug">
.main_wrap
  article.Top
    section.Top_mv
      .Top_ttl
        h1 テスト
        ul
          li
            router-link(to="/story") STORY
          li
            router-link(to="/files") EPISODE
          li
            router-link(to="/suspect") CHARACTER
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped></style>
