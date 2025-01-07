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

<style scoped></style>
