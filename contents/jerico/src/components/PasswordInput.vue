<template lang="pug">
div
  h2 パスワードを入力してください
  input(type="password" v-model="password" placeholder="パスワードを入力")
  button(@click="checkPassword") 送信
</template>

<script>
export default {
  props: {
    correctPassword: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      password: "",
    };
  },
  methods: {
    checkPassword() {
      if (this.password === this.correctPassword) {
        this.$emit("authorized"); // 親コンポーネントに通知
      } else {
        alert("パスワードが間違っています。");
      }
    },
  },
};
</script>

<style scoped>
input {
  margin-right: 10px;
  padding: 5px;
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
