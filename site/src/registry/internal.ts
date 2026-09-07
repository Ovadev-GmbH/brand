// ui-internal sits on the Design System: its stylesheet is the vendored build
// INTERN ships too (src/vendor/design-system), loaded here so the examples
// render as they do in the app.
import "../vendor/design-system/ovadev.css";
import "@ovadev-gmbh/ui-internal/styles.css";
import type { Pkg } from "../types";
import PageBasic from "../examples/internal/PageBasic";
import PageBasicSrc from "../examples/internal/PageBasic.tsx?raw";
import SectionAside from "../examples/internal/SectionAside";
import SectionAsideSrc from "../examples/internal/SectionAside.tsx?raw";
import TextBits from "../examples/internal/TextBits";
import TextBitsSrc from "../examples/internal/TextBits.tsx?raw";
import TableSortable from "../examples/internal/TableSortable";
import TableSortableSrc from "../examples/internal/TableSortable.tsx?raw";
import TablePaged from "../examples/internal/TablePaged";
import TablePagedSrc from "../examples/internal/TablePaged.tsx?raw";
import StatsRow from "../examples/internal/StatsRow";
import StatsRowSrc from "../examples/internal/StatsRow.tsx?raw";
import DlBasic from "../examples/internal/DlBasic";
import DlBasicSrc from "../examples/internal/DlBasic.tsx?raw";
import ToolbarFilters from "../examples/internal/ToolbarFilters";
import ToolbarFiltersSrc from "../examples/internal/ToolbarFilters.tsx?raw";
import ButtonVariants from "../examples/internal/ButtonVariants";
import ButtonVariantsSrc from "../examples/internal/ButtonVariants.tsx?raw";
import CopyButtonBasic from "../examples/internal/CopyButtonBasic";
import CopyButtonBasicSrc from "../examples/internal/CopyButtonBasic.tsx?raw";
import SegmentedViews from "../examples/internal/SegmentedViews";
import SegmentedViewsSrc from "../examples/internal/SegmentedViews.tsx?raw";

export const internal: Pkg = {
  id: "internal",
  name: "Internal",
  pkg: "@ovadev-gmbh/ui-internal",
  intro:
    "The tool layer of the internal apps: page anatomy, tables, stats, toolbar and controls. Sits on the design system (ov-*, --ovadev-*) and renders links through the slot in UiProvider.",
  groups: ["Page", "Data", "Controls"],
  entries: [
    {
      name: "Page",
      slug: "page",
      group: "Page",
      summary: "Eyebrow, title, lead and meta line, then sections with a rule under the title.",
      examples: [{ title: "Page with a section", Component: PageBasic, source: PageBasicSrc }],
      props: ["Page", "Section"],
    },
    {
      name: "Section",
      slug: "section",
      group: "Page",
      summary: "A section with a title, an optional intro, and a count or action on the right.",
      examples: [{ title: "With an action on the right", Component: SectionAside, source: SectionAsideSrc }],
    },
    {
      name: "Text",
      slug: "text",
      group: "Page",
      summary: "Sub, ExtLink, Note and Empty: the small text pieces in cells, cards and lists.",
      examples: [{ title: "All four", Component: TextBits, source: TextBitsSrc }],
      props: ["Sub", "ExtLink", "Note", "Empty"],
    },
    {
      name: "Table",
      slug: "table",
      group: "Data",
      summary: "Data table: header in the text face, numbers in mono right-aligned, hairlines instead of a box. Sorting belongs to the caller.",
      examples: [
        { title: "Sortable, with NameCell", note: "Th draws the sort state; the page owns it.", Component: TableSortable, source: TableSortableSrc },
        { title: "Dense, paged", note: "MoreButton loads the next block.", Component: TablePaged, source: TablePagedSrc },
      ],
      props: ["Table", "Th", "Td", "NameCell", "MoreButton"],
    },
    {
      name: "Stats",
      slug: "stats",
      group: "Data",
      summary: "KPI row on the design system's stat anatomy: mono figure, Oswald label, muted caption.",
      examples: [{ title: "Four figures", note: "With an href the tile becomes a link.", Component: StatsRow, source: StatsRowSrc }],
    },
    {
      name: "Dl",
      slug: "dl",
      group: "Data",
      summary: "Definition list, label column left. Empty values are dropped.",
      examples: [{ title: "Four pairs, one empty", Component: DlBasic, source: DlBasicSrc }],
    },
    {
      name: "Toolbar",
      slug: "toolbar",
      group: "Controls",
      summary: "Filters left, count and actions right. SearchInput and Select are sized for tool UIs.",
      examples: [{ title: "Search, select, segmented, action", Component: ToolbarFilters, source: ToolbarFiltersSrc }],
      props: ["Toolbar", "SearchInput", "Select"],
    },
    {
      name: "Button",
      slug: "button",
      group: "Controls",
      summary: "Button, or a link in button clothes. An href starting with mailto:/tel:/http renders an <a>; anything else renders the router link from the slot.",
      examples: [{ title: "Variants, sizes, link", Component: ButtonVariants, source: ButtonVariantsSrc }],
    },
    {
      name: "CopyButton",
      slug: "copy-button",
      group: "Controls",
      summary: "Copies to the clipboard, with a short confirmation.",
      examples: [{ title: "Copy an address", Component: CopyButtonBasic, source: CopyButtonBasicSrc }],
    },
    {
      name: "Segmented",
      slug: "segmented",
      group: "Controls",
      summary: "One value out of a few; disabled options are hatched, never struck through.",
      examples: [{ title: "Three options, one off", Component: SegmentedViews, source: SegmentedViewsSrc }],
    },
  ],
};
