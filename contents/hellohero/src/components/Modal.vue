<template lang="pug">
div.modal(v-if="visible")
  div.modal-content
    h3 パスワードを入力してください
    form(@submit.prevent="onSubmit")
      input(
        type="password"
        v-model="password"
        placeholder="Password"
        autocomplete="new-password"
      )
      button(type="submit") 送信
      button(type="button" @click="close") キャンセル
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      password: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault(); // フォーム送信を防止
      const trimmedPassword = this.password.trim(); // 空白を除去
      this.$emit("submit", trimmedPassword); // 親コンポーネントに送信
    },
    close() {
      this.password = ""; // フォームリセット
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
</style>
