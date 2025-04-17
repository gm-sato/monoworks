<template lang="pug">
footer
  #contentFooter
    a.open-btn(href="#")
    ul
      li
        router-link(to="/") Top
      li
        router-link(to="/Works") Works
      li
        router-link(to="/Profile") Profile
      li
        router-link(to="/Contact") Contact
</template>

<script setup>
defineOptions({
  name: "AppFooter",
});
// import { ref, onMounted } from "vue";
// onMounted(() => {
//   const btn = document.querySelector(".open-btn");
//   const footer = document.querySelector("footer");

//   if (btn && footer) {
//     btn.addEventListener("click", (e) => {
//       e.preventDefault();
//       footer.classList.toggle("is-active");
//     });
//   }
// });
//
</script>

<style lang="scss" scoped></style>
