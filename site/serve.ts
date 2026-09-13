/* ------------------------------------------------------------------ *
 * The catalog as a process: the Railway service `brand` in the INTERN
 * project, reached only at intern.ova.dev/brand.
 *
 * GitHub Pages serves this same site at ovadev-gmbh.github.io/brand. On
 * Railway there is no public domain: intern's server forwards /brand/*
 * over the private network with the prefix taken off, so dist/ (built
 * with BASE_PATH=/brand/) is served from the root here. An address with
 * no file behind it gets index.html, which is what 404.html does on
 * Pages, unless its last segment has a dot: that is a missing file.
 * ------------------------------------------------------------------ */
import { stat } from "node:fs/promises";
import { join, resolve, sep } from "node:path";

const DIST = resolve(import.meta.dir, "dist");
const INDEX = join(DIST, "index.html");

async function isFile(path: string): Promise<boolean> {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

const server = Bun.serve({
  /* The private network is IPv6; "::" takes IPv4 as well. */
  hostname: "::",
  port: Number(process.env.PORT ?? 8080),
  async fetch(request) {
    let pathname: string;
    try {
      pathname = decodeURIComponent(new URL(request.url).pathname);
    } catch {
      return new Response("Bad request", { status: 400 });
    }

    const path = resolve(DIST, `.${pathname}`);
    if (path !== DIST && !path.startsWith(DIST + sep)) {
      return new Response("Not found", { status: 404 });
    }

    if (await isFile(path)) {
      return new Response(Bun.file(path), {
        headers: {
          /* Vite fingerprints everything under assets/; the rest keeps its name. */
          "cache-control": pathname.startsWith("/assets/") ? "public, max-age=31536000, immutable" : "no-cache",
        },
      });
    }

    if ((pathname.split("/").pop() ?? "").includes(".")) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(Bun.file(INDEX), {
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-cache" },
    });
  },
});

console.log(`brand catalog on ${server.url}`);
