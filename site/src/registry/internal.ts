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
    "Der Tool-Layer der internen Apps: Seitenanatomie, Tabellen, Kennzahlen, Toolbar und Steuerelemente. Sitzt auf dem Design System (ov-*, --ovadev-*) und rendert Links über den Slot in UiProvider.",
  groups: ["Seite", "Daten", "Steuerung"],
  entries: [
    {
      name: "Page",
      slug: "page",
      group: "Seite",
      summary: "Eyebrow, Titel, Lead und Meta-Zeile, dann Sections mit Linie unter dem Titel.",
      examples: [{ title: "Seite mit Section", Component: PageBasic, source: PageBasicSrc }],
      props: ["Page", "Section"],
    },
    {
      name: "Section",
      slug: "section",
      group: "Seite",
      summary: "Ein Abschnitt mit Titel, optionalem Intro und rechts einer Zahl oder Aktion.",
      examples: [{ title: "Mit Aktion rechts", Component: SectionAside, source: SectionAsideSrc }],
    },
    {
      name: "Text",
      slug: "text",
      group: "Seite",
      summary: "Sub, ExtLink, Note und Empty: die kleinen Textbausteine in Zellen, Karten und Listen.",
      examples: [{ title: "Alle vier", Component: TextBits, source: TextBitsSrc }],
      props: ["Sub", "ExtLink", "Note", "Empty"],
    },
    {
      name: "Table",
      slug: "table",
      group: "Daten",
      summary: "Datentabelle: Kopf in der Textschrift, Zahlen mono rechtsbündig, Haarlinien statt Rahmen. Sortierung gehört dem Aufrufer.",
      examples: [
        { title: "Sortierbar, mit NameCell", note: "Th zeichnet den Sortierzustand, die Seite besitzt ihn.", Component: TableSortable, source: TableSortableSrc },
        { title: "Dicht, seitenweise", note: "MoreButton lädt den nächsten Block nach.", Component: TablePaged, source: TablePagedSrc },
      ],
      props: ["Table", "Th", "Td", "NameCell", "MoreButton"],
    },
    {
      name: "Stats",
      slug: "stats",
      group: "Daten",
      summary: "Kennzahlen-Reihe auf der Stat-Anatomie des Design Systems: Mono-Zahl, Oswald-Label, gedämpfte Caption.",
      examples: [{ title: "Vier Kennzahlen", note: "Mit href wird die Kachel zum Link.", Component: StatsRow, source: StatsRowSrc }],
    },
    {
      name: "Dl",
      slug: "dl",
      group: "Daten",
      summary: "Definitionsliste, Label-Spalte links. Leere Werte fallen weg.",
      examples: [{ title: "Vier Paare, eines leer", Component: DlBasic, source: DlBasicSrc }],
    },
    {
      name: "Toolbar",
      slug: "toolbar",
      group: "Steuerung",
      summary: "Filter links, Zähler und Aktionen rechts. SearchInput und Select sind auf Tool-Grösse gesetzt.",
      examples: [{ title: "Suche, Select, Segmented, Aktion", Component: ToolbarFilters, source: ToolbarFiltersSrc }],
      props: ["Toolbar", "SearchInput", "Select"],
    },
    {
      name: "Button",
      slug: "button",
      group: "Steuerung",
      summary: "Button oder Link im Button-Gewand. Ein href mit mailto:/tel:/http rendert ein <a>, sonst den Router-Link aus dem Slot.",
      examples: [{ title: "Varianten, Grössen, Link", Component: ButtonVariants, source: ButtonVariantsSrc }],
    },
    {
      name: "CopyButton",
      slug: "copy-button",
      group: "Steuerung",
      summary: "In die Zwischenablage, mit kurzer Bestätigung.",
      examples: [{ title: "Adresse kopieren", Component: CopyButtonBasic, source: CopyButtonBasicSrc }],
    },
    {
      name: "Segmented",
      slug: "segmented",
      group: "Steuerung",
      summary: "Ein Wert aus wenigen; abgeschaltete Optionen sind schraffiert, nie durchgestrichen.",
      examples: [{ title: "Drei Optionen, eine aus", Component: SegmentedViews, source: SegmentedViewsSrc }],
    },
  ],
};
