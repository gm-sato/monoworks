<template lang="pug">
div#works_modal.works_modal(:class="{ 'is-active': isActive }")
  .works_modal-content
    .works_modal-scroll
      .works_modal-img
        swiper(:loop="true")
          swiper-slide(v-for="(img, i) in images" :key="i")
            img(:src="img")
        .mode-toggle
          button#toggle-pc(@click="switchMode('pc')") PC表示
          button#toggle-sp(@click="switchMode('sp')") SP表示
      .works_modal-text
        h3.works_modal-title {{ modal.title }}
        p.works_modal-dayz {{ modal.year }}
        p.works_modal-language {{ modal.language }}
        p.works_modal-section {{ modal.section }}
        a.works_modal-link(:href="modal.url" target="_blank") {{ modal.url }}
    a#close-modal(@click.prevent="closeModal")
      img(src="@/assets/images/works_modal/modal_close_btn.png", alt="close")
</template>

<script setup>
import { onMounted, ref } from "vue";
import modalData from "@/assets/js/modal_data.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const isActive = ref(false);
const modal = ref({});
const images = ref([]);
const currentIndex = ref(0);
const currentMode = ref("pc");

const openModal = (index) => {
  const data = modalData[index];
  if (!data) return;
  modal.value = data;
  currentIndex.value = index;
  currentMode.value = "pc";
  images.value = data.pcImages;
  isActive.value = true;
};

const switchMode = (mode) => {
  currentMode.value = mode;
  const data = modalData[currentIndex.value];
  images.value = mode === "pc" ? data.pcImages : data.spImages;
};

const closeModal = () => {
  isActive.value = false;
  modal.value = {};
  images.value = [];
};

// windowイベントリスナー
onMounted(() => {
  window.addEventListener("open-modal", (e) => openModal(e.detail));
});
</script>

<style scoped>
.works_modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  z-index: 9999;
}
.works_modal.is-active {
  display: block;
}
.works_modal-content {
  width: 90%;
  max-width: 960px;
  background: #fff;
  margin: 5vh auto;
  padding: 20px;
  position: relative;
}
.mode-toggle {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
</style>
