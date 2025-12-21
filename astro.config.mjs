import { defineConfig } from "astro/config";
import path from "path";
import vue from "@astrojs/vue";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src")
      }
    }
  },
  integrations: [vue()]
});