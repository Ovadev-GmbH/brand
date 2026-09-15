## Integrate with the caller's project

Preserve the host framework, file structure, routes, data fetching and build. Edit the files that naturally own the screen. Do not force a single-file deliverable, raw HTML or a new framework; when no project exists, the smallest runnable React app with Tailwind 4 is the fallback.

The system is one package: `@ovadev-gmbh/ui-ticketova`, on the GitHub Packages registry of `Ovadev-GmbH`. Install it, then make its stylesheet the app's only Tailwind entry:

```css
/* app.css */
@import "@ovadev-gmbh/ui-ticketova/styles.css";
```

That line brings Tailwind, the theme, the type styles, the materials, Geist, Geist Mono and Oswald. Do not add a second `@import "tailwindcss"`, a `tailwind.config`, a shadcn `components.json`, a registry, a preset, a font of your own or a theme of your own. Tailwind's default palette is cleared on purpose; if a class does not exist, the system has no name for it, and that is the answer.

The system is light only. There is no dark palette, no switcher and no theme cookie, so there is nothing for a `dark:` variant to switch to. Write every class once, unprefixed.

Import components from the package root and icons from its `icons` subpath (Phosphor, re-exported):

```tsx
import { Button, Table, TableRow, Field } from "@ovadev-gmbh/ui-ticketova";
import { TicketIcon, MagnifyingGlassIcon } from "@ovadev-gmbh/ui-ticketova/icons";
```

Phosphor's icons read a React context, so a server component (a page or layout in Next's App Router) imports them from `@ovadev-gmbh/ui-ticketova/icons/ssr` instead; the names are the same.

Whole screens start from a block, the package's `/blocks` subpath: an app shell with the sidebar, the sign-in with a mobile number and a code, the error pages, a stats row. Start there where one fits and compose the rest from components; never rebuild what a block already is.

```tsx
import { AppShell, PhoneSignInForm } from "@ovadev-gmbh/ui-ticketova/blocks";
```

The package ships ESM with `"use client"` preserved, so it works in any React 19 setup, server-rendered or not, without wrappers. It brings its own Base UI and icon set; the app supplies only React and Tailwind, and never installs or imports either library itself. Keep screens static except where a control holds state.

When the host already uses the package, reuse what is applied: its providers (`TooltipProvider`, `Toaster`), its layout shell and grid conventions. Add a component only through the package; never copy a shadcn file into the app. On the shop, a tenant's own logo and name come from the tenant record, as the shop already loads them; the system's colours, type and materials stay. Integration changes syntax, never composition or the published API. TICKETOVA shares its class vocabulary with Internal, Januna and Ovadev; a screen written for one reads in the others, only the values differ.
