<template lang="pug">
div
  h1 WORKS
  WorksList
  WorksModal
</template>

<script setup>
import WorksList from "../components/WorksList.vue";
import WorksModal from "../components/Modal.vue";
</script>

<style scoped>
h1 {
  color: #555;
  margin-bottom: 20px;
}
</style>
