import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Works from "@/views/Works.vue";
import Profile from "@/views/Profile.vue";
import Contact from "@/views/Contact.vue";
import meta from "@/meta.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: meta.home,
  },
  {
    path: "/Works",
    name: "Works",
    component: Works,
    meta: meta.works,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
    meta: meta.profile,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
    meta: meta.contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
