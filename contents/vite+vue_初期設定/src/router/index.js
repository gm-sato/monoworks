import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import meta from "@/meta.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: meta.home, // メタ情報を設定
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: meta.about, // メタ情報を設定
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
