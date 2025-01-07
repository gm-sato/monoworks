<template lang="pug">
div.l-bg
  article
    section.l-hero-image
      h1 PARANORMAL CRIME
    section.l-story
      .m-heading_Type2
        h2 STORY
      .l-story_text
        p ここにテキストが入ります。
          br
          | ここにテキストが入ります。ここにテキストが入ります。
          br
          | ここにテキストが入ります。ここにテキストが入ります。
          br
          | ここにテキストが入ります。ここにテキストが入ります。

        p ここにテキストが入ります。ここにテキストが入ります。
          br
          | ここにテキストが入ります。ここにテキストが入ります。
    section.l-character
      .m-heading_Type2
        h2 CHARACTER
      .l-character_list
        .l-character_card#character01(v-for="character in characters" :key="character.id" class="l-character_card" @click="openModal(character)")
          img(src="../assets/images/character_test.png")
    Modal(:visible="isModalVisible" @close="closeModal")
      .modal-content-image
        img(:src="modalContent.image" alt="Character")
      .modal-content-text
        h3 {{ modalContent.name }}
        p {{ modalContent.details }}
    section.l-episode
      .m-headingType2
        h2 EPISODE
      .l-episode_list
        .l-episode_card
          .l-episode_card-image
            img(src="../assets/images/character_test.png")
          .l-episode_card-about
            h3.l-episode_card-name 第一話<br>ヒーローと眠り姫
            ul.l-episode_card-item
              li 所要時間
              li 15～30時間
            ul.l-episode_card-item
              li 推奨技能
              li 目星/聞き耳/回避/戦闘技能


    section.l-shop
      .l-shop_wrapper
        .l-shop_img
          img(src="")
        .l-shop_text
          h3
          span
          p


  p ようこそ、私たちのホームページへ！
  router-link(to="/about") アバウトページへ

</template>

<script>
import Modal from "../components/Modal.vue";
export default {
  name: "Home",
  components: {
    Modal,
  },
  data() {
    return {
      characters: [
        {
          id: 1,
          name: "Character 1",
          image: "../src/assets/images/character_test.png",
          details: "Details about character 1",
        },
        {
          id: 2,
          name: "Character 2",
          image: "../src/assets/images/character_test.png",
          details: "Details about character 2",
        },
        {
          id: 3,
          name: "Character 3",
          image: "../src/assets/images/character_test.png",
          details: "Details about character 3",
        },
        {
          id: 4,
          name: "Character 4",
          image: "../src/assets/images/character_test.png",
          details: "Details about character 3",
        },
        {
          id: 5,
          name: "Character 5",
          image: "../src/assets/images/character_test.png",
          details: "Details about character 3",
        },
        {
          id: 6,
          name: "Character 6",
          image: "../assets/images/character_test.png",
          details: "Details about character 3",
        },
        // 他のキャラクター情報
      ],
      isModalVisible: false, // モーダルの表示状態
      modalContent: {}, // モーダル内のコンテンツ
    };
  },
  methods: {
    openModal(character) {
      this.modalContent = character; // 選択されたキャラクター情報を設定
      this.isModalVisible = true; // モーダルを表示
    },
    closeModal() {
      this.isModalVisible = false; // モーダルを非表示
    },
  },
};
</script>

<style scoped></style>
