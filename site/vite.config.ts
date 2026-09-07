import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GitHub Pages serves a project site under /<repo>/, so the base is set by
// the workflow (BASE_PATH=/brand/); locally and on a custom domain it is /.
// 404.html is a copy of index.html (see the build script): Pages serves it
// for every unknown path, which is what lets /ticketova/button deep-link into
// a client-routed app.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react()],
});
