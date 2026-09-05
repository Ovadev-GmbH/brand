// Vite folds every CSS import into one dist/ui.css, but tsc copies the
// original `import "./button.css"` into the emitted .d.ts. That path does not
// exist in the published package, so a consumer with skipLibCheck disabled
// gets TS2307. Strip those side-effect imports from the declarations.
import { Glob } from "bun";

const glob = new Glob("**/*.d.ts");
let stripped = 0;

for await (const file of glob.scan("dist")) {
  const path = `dist/${file}`;
  const before = await Bun.file(path).text();
  const after = before.replace(/^import\s+["'][^"']+\.css["'];?\r?\n/gm, "");
  if (after !== before) {
    await Bun.write(path, after);
    stripped++;
  }
}

console.log(`stripped css imports from ${stripped} declaration file(s)`);
