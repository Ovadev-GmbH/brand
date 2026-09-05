# @ovadev-gmbh/ui

React components for the Ovadev Vite apps. Built with Vite in library mode,
published to GitHub Packages, consumed with Bun.

The scope has to be `@ovadev-gmbh`: GitHub Packages only accepts a scope that
matches the repository owner, and the org is `Ovadev-GmbH`.

## Develop

```bash
bun install
bun run build          # dist/index.js, dist/ui.css, dist/*.d.ts
bun run check-types
```

`bun run build` does three things: Vite bundles the ESM entry and extracts
every CSS import into one `dist/ui.css`, `tsc` emits the declarations, and
`scripts/strip-css-imports.ts` removes the `import "./button.css"` lines that
tsc copies into the `.d.ts` files. Without that last step a consumer running
with `skipLibCheck: false` gets TS2307, because the per-component CSS files
do not exist in the published package.

## Release

Bump `version` in `package.json`, commit, then tag:

```bash
git tag v0.1.0
git push origin main --tags
```

The `release` workflow builds and runs `bun publish` against
npm.pkg.github.com using the workflow's own `GITHUB_TOKEN`. No secret to
configure.

## Consume it from a Vite app

The package is private, so the app needs a token that can read packages.
Create a classic PAT with the `read:packages` scope.

`bunfig.toml` in the app (commit this, the token stays in the environment):

```toml
[install.scopes]
"@ovadev-gmbh" = { url = "https://npm.pkg.github.com/", token = "$GITHUB_PACKAGES_TOKEN" }
```

Then:

```bash
export GITHUB_PACKAGES_TOKEN=ghp_...
bun add @ovadev-gmbh/ui
```

```tsx
import { Button } from "@ovadev-gmbh/ui";
import "@ovadev-gmbh/ui/styles.css";

<Button variant="secondary" size="sm" onClick={save}>Speichern</Button>
```

React and react-dom are peer dependencies and stay external in the bundle, so
the app supplies the single copy.

### CI and Railway

Both need `GITHUB_PACKAGES_TOKEN` in the environment before `bun install`.
In GitHub Actions the built-in `secrets.GITHUB_TOKEN` works for repos in the
same org; anywhere else use the PAT.
