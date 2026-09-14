## Integrate with the caller's project

Preserve the host framework, file structure, routes, data fetching and build. Edit the files that naturally own the screen. Do not force a single-file deliverable, raw HTML or a new framework; when no project exists, the smallest runnable React app with Tailwind 4 is the fallback.

The system is one package: `@ovadev-gmbh/ui-ovadev`, on the GitHub Packages registry of `Ovadev-GmbH`. Install it, then make its stylesheet the app's only Tailwind entry:

```css
/* app.css */
@import "@ovadev-gmbh/ui-ovadev/styles.css";
```

That line brings Tailwind, the theme, the type styles, the materials and Geist. Do not add a second `@import "tailwindcss"`, a `tailwind.config`, a shadcn `components.json`, a registry, a preset, or a theme of your own. Tailwind's default palette is cleared on purpose; if a class does not exist, the system has no name for it, and that is the answer.

The system is dark only. Paper is the ground; there is no light palette, no switcher and no theme cookie, so there is nothing for a `dark:` variant to switch to. Write every class once, unprefixed. A `dark:` in an Ovadev file is a mistake.

Import components from the package root and icons from its `icons` subpath (Lucide, re-exported):

```tsx
import { Button, Table, TableRow, Field } from "@ovadev-gmbh/ui-ovadev";
import { ArrowRightIcon, MailIcon } from "@ovadev-gmbh/ui-ovadev/icons";
```

Whole screens start from a block, the package's `/blocks` subpath: an app shell with the sidebar, the auth screens, the error pages, a stats row. Start there where one fits and compose the rest from components; never rebuild what a block already is.

```tsx
import { ErrorPage, AppShell } from "@ovadev-gmbh/ui-ovadev/blocks";
```

The package ships ESM with `"use client"` preserved, so it works in any React 19 setup, server-rendered or not, without wrappers. It brings its own Base UI and icon set; the app supplies only React and Tailwind, and never installs or imports either library itself. Keep screens static except where a control holds state.

When the host already uses the package, reuse what is applied: its providers (`TooltipProvider`, `Toaster`), its layout shell and grid conventions. Add a component only through the package; never copy a shadcn file into the app. The mark is not a component and not an icon: it comes from the brand assets, drawn on its own cells, and is placed rather than composed. Integration changes syntax, never composition or the published API. Ovadev shares its class vocabulary with Internal and Januna; a screen written for one reads in the others, only the values differ.
