import { resolve } from "node:path";
import { defineConfig } from "vite";

// Three re-exports, built as three modules that import Ovadev's: nothing of
// Ovadev is bundled in, so an app gets one copy of each component.
export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(import.meta.dirname, "src/index.ts"),
        icons: resolve(import.meta.dirname, "src/icons.ts"),
        blocks: resolve(import.meta.dirname, "src/blocks.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: { external: (id) => id.startsWith("@ovadev-gmbh/") },
    minify: false,
  },
});
