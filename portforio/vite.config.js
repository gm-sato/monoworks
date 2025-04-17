import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import glsl from "vite-plugin-glsl";
import path from "path";

export default defineConfig({
  plugins: [vue(), glsl()],
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
