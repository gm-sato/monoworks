import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import NewPage from "../views/NewPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/new-page", name: "NewPage", component: NewPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
