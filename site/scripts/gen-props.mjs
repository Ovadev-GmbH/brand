// Generate the props tables out of the sibling packages' TypeScript. Each
// prop's name, type, default, requiredness and /** */ comment come from the
// real declarations via react-docgen-typescript, so a table can not drift
// from the code. Written to src/props.json (gitignored) and bundled.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import docgen from "react-docgen-typescript";

const PACKAGES = ["internal", "ovadev", "ticketova", "januna"];

const parser = docgen.withCompilerOptions(
  { jsx: 4, esModuleInterop: true, skipLibCheck: true, strict: true },
  {
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
    // The brand Buttons extend ButtonHTMLAttributes; the 250 inherited DOM
    // props would bury the three that matter. Keep what the package declares.
    propFilter: (prop) => !(prop.parent && /node_modules\/@types\/react\//.test(prop.parent.fileName)),
  },
);

const typeOf = (t) =>
  t.name === "enum" && Array.isArray(t.value) ? t.value.map((v) => v.value).join(" | ") : t.raw ?? t.name;

const packages = {};
for (const id of PACKAGES) {
  const dir = `../packages/${id}`;
  const { name, version } = JSON.parse(readFileSync(`${dir}/package.json`, "utf8"));
  const files = readdirSync(`${dir}/src`).filter((f) => f.endsWith(".tsx")).map((f) => `${dir}/src/${f}`);
  const components = {};
  for (const c of parser.parse(files)) {
    components[c.displayName] = {
      description: c.description,
      props: Object.values(c.props)
        .map((p) => ({
          name: p.name,
          type: typeOf(p.type),
          required: p.required,
          defaultValue: p.defaultValue?.value,
          description: p.description,
        }))
        .sort((a, b) => Number(b.required) - Number(a.required) || a.name.localeCompare(b.name)),
    };
  }
  packages[id] = { name, version, components };
}

writeFileSync("src/props.json", JSON.stringify({ generatedAt: new Date().toISOString(), packages }, null, 2) + "\n");
const n = Object.values(packages).reduce((s, p) => s + Object.keys(p.components).length, 0);
console.log(`catalog props: ${n} components across ${PACKAGES.length} packages`);
