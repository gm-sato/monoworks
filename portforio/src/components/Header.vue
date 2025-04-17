<template lang="pug">
header
  #contentHeader
    a.open-btn(href="#")
    ul
      li
        router-link(to="/") TOP
      li
        router-link(to="/Works") WORKS
      li
        router-link(to="/Profile") PROFILE
      li
        router-link(to="/Contact") CONTACT
</template>

<script setup>
import { ref, onMounted } from "vue";
onMounted(() => {
  const btn = document.querySelector(".open-btn");
  const header = document.querySelector("header");

  if (btn && header) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      header.classList.toggle("is-active");
    });
  }
});
</script>

<style lang="scss" scoped></style>
