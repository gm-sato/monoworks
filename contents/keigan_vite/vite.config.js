import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        { src: ".htaccess", dest: "" }, // distに.htaccessを直接コピー
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/assets/scss/style.scss";`,
        sourceMap: true, // 必要に応じてtrueに設定
      },
    },
  },
  base: "/dist/", // デプロイ先に応じて適切に設定
  // build: {
  //   outDir: "keigan", // 出力ディレクトリ
  //   sourcemap: true, // デバッグ時にはtrue、本番環境にはfalseが推奨
  // },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
