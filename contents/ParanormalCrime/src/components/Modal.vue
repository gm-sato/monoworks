<template lang="pug">
  div(v-if="visible" class="modal-overlay" @click.self="close")
    div.modal-content
      button.modal-close(@click="close") ✖
      slot
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close"); // 親コンポーネントに閉じるイベントを送信
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: relative;

  /* 初期状態を縮小状態に */
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;

  /* アニメーションの設定 */
  animation: openModal 0.5s ease forwards;
}

/* モーダルを閉じた後にスムーズに消えるアニメーション */
.modal-content.closing {
  animation: closeModal 0.5s ease forwards;
}

/* アニメーションの定義 */
@keyframes openModal {
  from {
    transform: scaleY(0); /* 縦方向に縮小 */
    opacity: 0; /* 完全に透明 */
  }
  to {
    transform: scaleY(1); /* 元のサイズに展開 */
    opacity: 1; /* 完全に表示 */
  }
}

@keyframes closeModal {
  from {
    transform: scaleY(1); /* 表示状態 */
    opacity: 1; /* 完全に表示 */
  }
  to {
    transform: scaleY(0); /* 縦方向に縮小 */
    opacity: 0; /* 完全に透明 */
  }
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
</style>
