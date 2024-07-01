<template>
  <div>
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="form.name" id="name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="form.email" id="email" />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea v-model="form.message" id="message"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <p v-if="submitted">Thank you for your message, {{ form.name }}!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    };
  },
  methods: {
    submitForm() {
      this.submitted = true;
      console.log(this.form);
      // ここでフォームのデータをサーバーに送信するなどの処理を行います
    }
  }
}
</script>

<style scoped>
form {
  max-width: 600px;
  margin: auto;
}
div {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #555;
}
</style>
