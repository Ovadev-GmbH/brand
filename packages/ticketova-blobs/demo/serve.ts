/* bun run demo: bundles demo/main.ts and serves the page on :4820 */
const dir = import.meta.dir;
const out = await Bun.build({ entrypoints: [`${dir}/main.ts`], target: "browser", minify: false });
if (!out.success) { console.error(out.logs); process.exit(1); }
const js = await out.outputs[0]!.text();
const port = Number(process.env.PORT ?? 4820);
Bun.serve({
  port,
  fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname === "/main.js") return new Response(js, { headers: { "content-type": "text/javascript" } });
    return new Response(Bun.file(`${dir}/index.html`));
  },
});
console.log(`blobs demo on http://localhost:${port}`);
