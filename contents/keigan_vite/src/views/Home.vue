<template lang="pug">
.main_wrap
  article.Top
    section.Top_mv
      .Top_ttl
        h1 慧眼の狩人
        ul
          li
            router-link(to="/story") STORY
          li
            router-link(to="/files/episode") EPISODE
          li
            router-link(to="/character") CHARACTER
    canvas
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped></style>
