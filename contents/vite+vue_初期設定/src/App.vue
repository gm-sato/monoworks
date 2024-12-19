<template lang="pug">
div
  router-view
</template>

<script>
import { watch } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "App",
  setup() {
    const router = useRouter();

    // ページ遷移時にメタ情報を設定
    watch(
      () => router.currentRoute.value.meta,
      (metaInfo) => {
        console.log("タイトル:", metaInfo.title);
        console.log("説明:", metaInfo.description);
        console.log("キーワード:", metaInfo.keywords);

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
};
</script>
