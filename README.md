# Ovadev component libraries

Three React component libraries, one per brand, in one repo:

| Package | Brand | Class prefix |
| --- | --- | --- |
| `@ovadev-gmbh/ui-ovadev` | Ovadev | `ova-` |
| `@ovadev-gmbh/ui-ticketova` | TICKETOVA | `tova-` |
| `@ovadev-gmbh/ui-januna` | Januna | `jan-` |

They are **independent**: no shared core, no cross-package imports. Each owns
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
git tag ticketova-v0.2.0
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

## `@ovadev-gmbh/ui` is the old name

Before the split this repo published a single `@ovadev-gmbh/ui`, and `0.1.0`
of it is still in the registry and still what `INTERN` installs. Nothing here
builds that name any more. INTERN keeps resolving the published `0.1.0` until
it is moved to `@ovadev-gmbh/ui-ovadev`; do not delete that version from the
registry before then.

## What is actually in here

One `Button` per package, and that is the point for now: the repo, the build,
the three-way release and the consumer path are real and tested, so filling
the libraries is only a matter of adding files. The 21 components of the
existing design system (Accordion, Badge, Card, Carousel, Checkbox, Cta,
Divider, DocPage, Field, Footer, Frame, Header, Input, Logo, Monogram, Radio,
Select, Stat, Tag, Textarea) still live as a vendored `dist/` in INTERN, built
from a `../DESIGN/Claude` tree that is not on this machine.
