// The component catalog's registry — one entry per component, one file per
// package. A page in the catalog is nothing but this data rendered: the
// sidebar, the visual index and the component pages all read it.

import type { ComponentType } from "react";

export type PkgId = "internal" | "ovadev" | "ticketova" | "januna";

export type Example = {
  Component: ComponentType;
  /** The example file, verbatim (a Vite `?raw` import). */
  source: string;
  /** The file's name under examples/<id>/<slug>/, which a doc section names.
   *  Absent for the page's lead demo. */
  name?: string;
  /** A block example's heading on the page. */
  title?: string;
};

/** A component's documentation, in the shape shadcn/ui gives its pages:
 *  what it is, how to use it, how it is put together, one section per case
 *  worth showing, and its props. Lives in site/src/docs/<id>/<slug>.ts; the
 *  page and the Markdown twin both read it. Text may carry `code` and
 *  [links](/internal/button-group). */
export type Doc = {
  description: string;
  /** The smallest useful JSX, shown under the import line. */
  usage: string;
  /** The parts as a tree, for compound components. */
  composition?: string;
  sections: { title: string; text?: string; example?: string; code?: string }[];
  api?: { name: string; text: string; props?: [prop: string, type: string, fallback: string][] }[];
  /** Where the rest of the API is documented. `lib` names it; Base UI when absent. */
  links?: { doc?: string; api?: string; lib?: string };
};

export type Entry = {
  name: string;
  slug: string;
  group: string;
  status?: "draft" | "deprecated";
  /** A block: a screen or screen part composed from the components, imported
   *  from the package's `/blocks` subpath and shown full-width, one example
   *  per case. */
  kind?: "block";
  examples: Example[];
  /** What the page's import line names. Defaults to [name]. */
  imports?: string[];
  doc?: Doc;
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
