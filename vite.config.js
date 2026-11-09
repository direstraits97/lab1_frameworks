import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        tailwind: resolve(__dirname, "tailwind.html"),
        publication: resolve(__dirname, "publication.html"),
      },
    },
  },
  plugins: [tailwindcss()],
});
