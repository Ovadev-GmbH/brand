import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// GitHub Pages serves a project site under /<repo>/, so the base is set by
// the workflow (BASE_PATH=/brand/); locally and on a custom domain it is /.
// 404.html is a copy of index.html (see the build script): Pages serves it
// for every unknown path, which is what lets /ticketova/button deep-link into
// a client-routed app.
//
// preview.html is the second document: the frame the Tailwind packages'
// demos render in (src/preview.tsx), with their stylesheet and not the
// catalog's.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        preview: resolve(import.meta.dirname, "preview.html"),
      },
    },
  },
});
