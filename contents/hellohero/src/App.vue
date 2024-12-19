<template lang="pug">
main
  router-view
</template>

<script>
import { watch } from "vue";
import { useRouter } from "vue-router";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  setup() {
    const router = useRouter();

    // ページ遷移時にメタ情報を設定
    watch(
      () => router.currentRoute.value.meta,
      (metaInfo) => {
        if (metaInfo) {
          document.title = metaInfo.title || "デフォルトのタイトル";

          const description = document.querySelector(
            'meta[name="description"]'
          );
          if (description) {
            description.setAttribute("content", metaInfo.description || "");
          }

          const keywords = document.querySelector('meta[name="keywords"]');
          if (keywords) {
            keywords.setAttribute("content", metaInfo.keywords || "");
          }
        }
      },
      { immediate: true } // 初回ロード時にも実行
    );
  },

  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      correctPasswords: {
        Page1: "password1", // Page1用のパスワード
        Page2: "password2", // Page2用のパスワード
        Page3: "password3", // Page3用のパスワード
      },
      currentRouteName: null, // 現在遷移しようとしているルート名を保持
    };
  },
  methods: {
    openModal(routeName) {
      this.currentRouteName = routeName; // 現在のルート名をセット
      this.showModal = true; // モーダルを表示
    },
    closeModal() {
      this.showModal = false;
      this.currentRouteName = null; // リセット
    },
    handlePasswordSubmit(inputPassword) {
      if (inputPassword === this.correctPasswords[this.currentRouteName]) {
        // 正しいパスワードの場合のみ遷移
        this.$router.push({ name: this.currentRouteName });
      } else {
        alert("パスワードが違います");
      }
      this.closeModal();
    },
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      if (["Page1", "Page2", "Page3"].includes(to.name)) {
        // パスワードが必要なページの場合モーダルを表示
        this.openModal(to.name);
        next(false); // 遷移を一旦停止
      } else {
        next(); // 他のルートはそのまま遷移
      }
    });
  },
};
</script>
