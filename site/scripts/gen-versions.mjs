// Read each package's name and version out of its package.json, into a
// gitignored src/versions.json the catalog bundles. It is generated rather
// than written down so the install line on a package's page can never claim a
// version that is not the one in the repo.
import { readFileSync, writeFileSync } from "node:fs";

const PACKAGES = ["internal", "ovadev", "ticketova", "januna"];

const packages = {};
for (const id of PACKAGES) {
  const { name, version } = JSON.parse(readFileSync(`../packages/${id}/package.json`, "utf8"));
  packages[id] = { name, version };
}

writeFileSync("src/versions.json", JSON.stringify({ generatedAt: new Date().toISOString(), packages }, null, 2) + "\n");
console.log(`catalog versions: ${PACKAGES.length} packages`);
