import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import Character from "../views/Character.vue";
import Shimizu from "../views/Character/shimizu.vue";
import Yanase from "../views/Character/yanase.vue";
import Kimoto from "../views/Character/kimoto.vue";
import Meiji from "../views/Character/meiji.vue";

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
  //Character
  {
    path: "/character",
    name: "Character",
    component: Character,
  },
  {
    path: "/character/shimizu",
    name: "Shimizu",
    component: Shimizu,
  },
  {
    path: "/character/yanase",
    name: "Yanase",
    component: Yanase,
  },
  {
    path: "/character/kimoto",
    name: "Kimoto",
    component: Kimoto,
  },
  {
    path: "/character/meiji",
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
  history: createWebHistory("/dist/"), // ルートでホスティングする場合
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
