<template lang="pug">
AppHeader
main
  router-view
</template>

<script>
import AppHeader from "./components/Header.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
