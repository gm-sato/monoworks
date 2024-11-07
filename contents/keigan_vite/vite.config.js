import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/assets/scss/style.scss";`,
        sourceMap: true, // 必要に応じてtrueに設定
      },
    },
  },
  base: "/", // デプロイ先に応じて適切に設定
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
