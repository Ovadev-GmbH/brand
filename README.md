# brand

Everything the Ovadev brands are made of, in one repo. Today that is four
React component libraries; logos, fonts and a DESIGN.md per brand are
coming to sit next to them.

## The catalog: ovadev-gmbh.github.io/brand

`site/` is a static Vite app, built by the `pages` workflow on every push to
main and served by GitHub Pages. It is **one catalog per package** — the root
is four doors, and behind each door only that package exists: its sidebar,
its components, its install line. The packages are standalone libraries and
the site does not pretend otherwise.

- `/ovadev`, `/ticketova`, `/januna`, `/internal` — a package, its
  components by group, each as a live-rendered thumbnail
- `/<package>/<component>` — the examples on a light or dark ground, the
  source of each example (a `?raw` import of the file that renders), a
  permalink per example, and a props table

`site/src/registry/<package>.ts` names every component, group, summary and
example; `site/src/examples/` holds the example files. The props tables are
generated from the packages' TypeScript by `site/scripts/gen-props.mjs`
(react-docgen-typescript) on every build, into a gitignored
`site/src/props.json`. Adding a component to the catalog is one registry
entry and one example file.

The `internal` examples need the Ovadev Design System underneath them, so
its vendored build sits in `site/src/vendor/design-system` — the same
`dist/` INTERN ships, copied, until the design system is a package too.

## Component libraries

Three of the four are one per brand, the fourth is for the internal tools:

| Package | For | Class prefix |
| --- | --- | --- |
| `@ovadev-gmbh/ui-ovadev` | Ovadev | `ova-` |
| `@ovadev-gmbh/ui-ticketova` | TICKETOVA | `tova-` |
| `@ovadev-gmbh/ui-januna` | Januna | `jan-` |
| `@ovadev-gmbh/ui-internal` | intern.ova.dev and its sections | `ui-` |

The three brand libraries are **independent**: no shared core, no cross-package imports. Each owns
its own copy of every component, and the brands are free to diverge. The cost
is that a fix to one Button is a fix to three; that trade was made on purpose.

Class names and CSS custom properties carry the brand prefix, so an app can
load two of these at once without one restyling the other. The consumer test
in this repo's history loads all three side by side.

The scope has to be `@ovadev-gmbh`: GitHub Packages only accepts a scope that
matches the repository owner, and the org is `Ovadev-GmbH`.

## Brand tokens are copied from the live sites, not invented

Each package's `src/tokens.css` names where its values came from:

- **Ovadev** from `Landing/apps/ova/src/styles.css` - the dark identity,
  paper `#0E0F12`, ink `#ECEEF2`, red `#E8202A`.
- **TICKETOVA** from `Landing/apps/ticketova/src/globals.css` - light, with
  green `#065f46` as the one non-neutral colour.
- **Januna** from the Januna repo's `src/app/globals.css` - a shadcn theme,
  kept in oklch rather than converted, so the values match at a glance.

## Develop

```bash
bun install
bun run build          # every package
bun run check-types
bun run --filter "@ovadev-gmbh/ui-ticketova" build   # just one
```

Each package's build runs Vite in library mode, emits declarations with tsc,
then runs `scripts/strip-css-imports.ts`. That last step removes the
`import "./button.css"` lines tsc copies into the `.d.ts` files: Vite folds
every CSS import into one stylesheet, so those per-component paths do not
exist in the published package and a consumer with `skipLibCheck: false`
would get TS2307.

## Release

Versions are per package, so the tag names the package:

```bash
git tag ticketova-v0.2.0      # or internal-v0.2.0
git push origin ticketova-v0.2.0
```

The workflow reads the package and version out of the tag and fails before
publishing anything if the tag names a package that does not exist, or if its
version disagrees with that `package.json`. Publishing uses the workflow's own
`GITHUB_TOKEN`; there is no secret to configure.

## Consume

The registry is private, so the app needs a token with `read:packages`.

`bunfig.toml` in the app (commit it, the token stays in the environment):

```toml
[install.scopes]
"@ovadev-gmbh" = { url = "https://npm.pkg.github.com/", token = "$GITHUB_PACKAGES_TOKEN" }
```

```bash
export GITHUB_PACKAGES_TOKEN=ghp_...
bun add @ovadev-gmbh/ui-ticketova
```

```tsx
import { Button } from "@ovadev-gmbh/ui-ticketova";
import "@ovadev-gmbh/ui-ticketova/styles.css";
```

React and react-dom are peer dependencies and stay external, so the app
supplies the single copy. CI and Railway need `GITHUB_PACKAGES_TOKEN` in the
environment too, or the install fails on a 401.

## `@ovadev-gmbh/ui-internal` is different in kind

The brand libraries own their look. `ui-internal` does not: it is the tool
layer of the internal apps (page anatomy, tables, stats, toolbar, controls)
and sits **on top of the Ovadev Design System**. Every colour, size and face
in its stylesheet is a `--ovadev-*` token, and its headings, buttons, inputs
and stats are `ov-*` classes, so the consumer has to load the Design System
stylesheet first. It renders links through the component handed to its
`<UiProvider>`, which is how it stays router-agnostic: INTERN passes its
section-aware react-router `Link`, a static page passes nothing and gets a
plain `<a>`. It was extracted from INTERN's `src/components/ui/` and is what
INTERN installs.

## `@ovadev-gmbh/ui` is the old name

Before the split this repo published a single `@ovadev-gmbh/ui` with one
placeholder Button; `0.1.0` of it is still in the registry. Nothing builds
or installs that name any more, so it can be deleted from the registry.

## What is actually in here

One `Button` per package, and that is the point for now: the repo, the build,
the three-way release and the consumer path are real and tested, so filling
the libraries is only a matter of adding files. The 21 components of the
existing design system (Accordion, Badge, Card, Carousel, Checkbox, Cta,
Divider, DocPage, Field, Footer, Frame, Header, Input, Logo, Monogram, Radio,
Select, Stat, Tag, Textarea) still live as a vendored `dist/` in INTERN, built
from a `../DESIGN/Claude` tree that is not on this machine.
