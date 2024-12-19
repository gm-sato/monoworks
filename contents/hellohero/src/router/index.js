import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Ho01 from "@/views/Ho01.vue";
import Ho02 from "@/views/Ho02.vue";
import Ho03 from "@/views/Ho03.vue";
import meta from "@/meta.js"; // メタ情報のインポート

// ページごとのパスワードをチェック
const passwordProtectedRoute = (to, from, next) => {
  const password = to.meta.password; // metaからパスワードを取得
  if (!password) {
    next(); // パスワードがない場合はそのまま進む
    return;
  }

  const inputPassword = prompt(
    "このページはパスワードで保護されています。パスワードを入力してください:"
  );
  if (inputPassword === password) {
    next(); // パスワードが正しい場合
  } else {
    alert("パスワードが間違っています。");
    next(false); // アクセスをキャンセル
  }
};

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
  {
    path: "/ho1",
    name: "Ho01",
    component: Ho01,
    meta: meta.ho01, // メタ情報を設定
    beforeEnter: passwordProtectedRoute, // パスワード保護
  },
  {
    path: "/ho2",
    name: "Ho02",
    component: Ho02,
    meta: meta.ho02, // メタ情報を設定
    beforeEnter: passwordProtectedRoute, // パスワード保護
  },
  {
    path: "/ho3",
    name: "Ho03",
    component: Ho03,
    meta: meta.ho03, // メタ情報を設定
    beforeEnter: passwordProtectedRoute, // パスワード保護
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
