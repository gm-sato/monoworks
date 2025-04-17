<template lang="pug">
section.works-list
  swiper(:slides-per-view="'auto'", space-between="20")
    swiper-slide(
      v-for="(item, index) in modalData"
      :key="index"
      class="works-thumb"
      @click="openModal(index)"
    )
      img(:src="item.pcImages[0]", alt="thumbnail")
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import { ref } from "vue";
import modalData from "@/assets/js/modal_data.js";

const openModal = (index) => {
  const event = new CustomEvent("open-modal", { detail: index });
  window.dispatchEvent(event);
};
</script>

<style scoped>
.works-thumb {
  width: 300px;
  cursor: pointer;
}
.works-thumb img {
  width: 100%;
  display: block;
  border-radius: 8px;
}
</style>
