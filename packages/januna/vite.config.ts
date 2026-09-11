import { isAbsolute, resolve } from "node:path";
import react from "@vitejs/plugin-react";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";

// Library mode, one output module per source module. Modules are preserved
// so that each component's "use client" survives (a single bundle would drop
// it) and an app bundles only the components it imports. Every dependency
// stays external: the app supplies React, Base UI and Tailwind, and the
// component classes live in these files for the app's Tailwind to find.
export default defineConfig({
  plugins: [react(), preserveDirectives()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: (id) => !id.startsWith(".") && !isAbsolute(id) && !id.startsWith("\0"),
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
    },
    sourcemap: true,
    minify: false,
  },
});
