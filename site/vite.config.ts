import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// The catalog is served at intern.ova.dev/brand, so the Railway build sets
// the base (BASE_PATH=/brand/, see ../railway.toml); locally it is /.
// site/serve.ts answers every unknown path with index.html, which is what
// lets /ticketova/button deep-link into a client-routed app.
//
// preview-<brand>.html are the frames the Tailwind packages' demos render
// in (src/preview.tsx), one per brand: each carries only its own stylesheet,
// because two brands' utilities share class names.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        "preview-januna": resolve(import.meta.dirname, "preview-januna.html"),
        "preview-internal": resolve(import.meta.dirname, "preview-internal.html"),
      },
    },
  },
});
