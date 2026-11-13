import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        tailwind: resolve(import.meta.dirname, "tailwind.html"),
        publication: resolve(import.meta.dirname, "publication.html"),
        bootstrap: resolve(import.meta.dirname, "bootstrap.html"),
      },
    },
  },
  plugins: [tailwindcss()],
});
