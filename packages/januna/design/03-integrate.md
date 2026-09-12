## Integrate with the caller's project

Preserve the host framework, file structure, routes, data fetching and build. Edit the files that naturally own the screen. Do not force a single-file deliverable, raw HTML or a new framework; when no project exists, the smallest runnable React app with Tailwind 4 is the fallback.

The system is one package: `@ovadev-gmbh/ui-januna`, on the GitHub Packages registry of `Ovadev-GmbH`. Install it, then make its stylesheet the app's only Tailwind entry:

```css
/* app.css */
@import "@ovadev-gmbh/ui-januna/styles.css";
```

That line brings Tailwind, the theme, the type styles, the materials, Geist and Geist Mono. Do not add a second `@import "tailwindcss"`, a `tailwind.config`, a shadcn `components.json`, a registry, a preset, or a theme of your own. Tailwind's default palette is cleared on purpose; if a class does not exist, the system has no name for it, and that is the answer.

Import components from the package root and icons from Hugeicons:

```tsx
import { Button, Dialog, DialogTrigger, DialogContent } from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
```

The package ships ESM with `"use client"` preserved, so it works in any React 19 setup, server-rendered or not, without wrappers. Keep screens static except where a control holds state.

When the host already uses the package, reuse what is applied: its providers (`TooltipProvider`, `Toaster`), its layout shell, its `Stack` and grid conventions. Add a component only through the package; never copy a shadcn file into the app. Integration changes syntax, never composition or the published API.
