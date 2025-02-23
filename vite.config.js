import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "jsdom", // Para simular un navegador
    include: ["tests/unit/**/*.test.js"], // Asegura que los tests sean detectados
    exclude: ["node_modules", "dist"], // Evita excluir archivos importantes
  },
});
