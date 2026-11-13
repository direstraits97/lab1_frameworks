import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "/lab1_frameworks/index.html"),
        tailwind: resolve(
          import.meta.dirname,
          "/lab1_frameworks/tailwind.html",
        ),
        publication: resolve(
          import.meta.dirname,
          "/lab1_frameworks/publication.html",
        ),
        bootstrap: resolve(
          import.meta.dirname,
          "/lab1_frameworks/bootstrap.html",
        ),
      },
    },
  },
  plugins: [tailwindcss()],
  base: "/lab1_frameworks/",
});
