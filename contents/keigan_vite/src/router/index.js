import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import Suspect from "../views/Suspect.vue";
import Shimizu from "../views/Suspect/shimizu.vue";
import Yanase from "../views/Suspect/yanase.vue";
import Kimoto from "../views/Suspect/kimoto.vue";
import Meiji from "../views/Suspect/meiji.vue";

import Files from "../views/Files.vue";
import Episode from "../views/Files/Episode.vue";
import Materials from "../views/Files/Materials.vue";
import Report from "../views/Files/Report.vue";
import Scene from "../views/Files/Scene.vue";
import Statement from "../views/Files/Statement.vue";

import Story from "../views/Story.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  //suspect
  {
    path: "/suspect",
    name: "Suspect",
    component: Suspect,
  },
  {
    path: "/suspect/shimizu",
    name: "Shimizu",
    component: Shimizu,
  },
  {
    path: "/suspect/yanase",
    name: "Yanase",
    component: Yanase,
  },
  {
    path: "/suspect/kimoto",
    name: "Kimoto",
    component: Kimoto,
  },
  {
    path: "/suspect/meiji",
    name: "Meiji",
    component: Meiji,
  },
  //files
  {
    path: "/files",
    name: "Files",
    component: Files,
  },
  {
    path: "/files/episode",
    name: "Episode",
    component: Episode,
  },
  {
    path: "/files/materials",
    name: "materials",
    component: Materials,
  },
  {
    path: "/files/report",
    name: "report",
    component: Report,
  },
  {
    path: "/files/scene",
    name: "Scene",
    component: Scene,
  },
  {
    path: "/files/statement",
    name: "statement",
    component: Statement,
  },
  {
    path: "/story",
    name: "Story",
    component: Story,
  },
];

const router = createRouter({
  history: createWebHistory("/"), // ルートでホスティングする場合
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
