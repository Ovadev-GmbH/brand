// The component catalog's registry — one entry per component, one file per
// package. A page in the catalog is nothing but this data rendered: the
// sidebar, the visual index and the component pages all read it.

import type { ComponentType } from "react";

export type PkgId = "internal" | "ovadev" | "ticketova" | "januna";

export type Example = {
  Component: ComponentType;
  /** The example file, verbatim (a Vite `?raw` import). */
  source: string;
};

export type Entry = {
  name: string;
  slug: string;
  group: string;
  status?: "draft" | "deprecated";
  examples: Example[];
  /** What the page's import line names. Defaults to [name]. */
  imports?: string[];
};

export type Pkg = {
  id: PkgId;
  /** The visible name. */
  name: string;
  /** The npm name. */
  pkg: string;
  /** Group order in the sidebar; entries name one of these. */
  groups: string[];
  /** The demos render in preview-<id>.html, an iframe with the package's own
   *  stylesheet, rather than inline: a Tailwind library needs its own
   *  Tailwind, and the catalog's chrome is built on a different theme. */
  frame?: boolean;
  entries: Entry[];
};
