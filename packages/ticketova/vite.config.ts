import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Library mode: one ESM entry plus the extracted stylesheet (dist/tova.css).
// React and Base UI stay external so the consuming app supplies one copy.
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
      cssFileName: "tova",
    },
    rollupOptions: {
      // React and Base UI both stay external: the app supplies the single
      // copy of each, so two of these libraries can be loaded side by side
      // without a second Base UI (and a second portal/positioning layer)
      // coming along with them.
      external: (id) => /^react(-dom)?(\/|$)/.test(id) || /^@base-ui\/react(\/|$)/.test(id),
    },
    sourcemap: true,
  },
});
