import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/main.scss";
import { myFunction } from "./assets/js/script.js";

createApp(App).use(router).mount("#app");

window.addEventListener("DOMContentLoaded", () => {
  myFunction();
});
