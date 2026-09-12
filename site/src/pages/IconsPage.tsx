/* Every icon the brand draws with, in the brand's green. The set is loaded
   when the page is, not with the catalog: it is thousands of drawings. Each
   cell is the icon at the size the components use it, and a click puts the
   import on the clipboard. */

import * as React from "react";
import { toast } from "sonner";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import type { Pkg } from "../types";
import { mdHref } from "../registry";
import { CHROME } from "../brands";
import { PageHeader } from "../components/PageHeader";

type Icon = { name: string; svg: IconSvgElement };

/** The free set exports every icon three times (Add01Icon, Add01, Add01FreeIcons);
 *  the …Icon spelling is the one the components import. */
async function loadIcons(): Promise<Icon[]> {
  const mod = await import("@hugeicons/core-free-icons");
  return Object.entries(mod)
    .filter(([name]) => name.endsWith("Icon"))
    .map(([name, svg]) => ({ name, svg: svg as IconSvgElement }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function Cell({ icon, snippet, brand }: { icon: Icon; snippet: string; brand: string }) {
  return (
    <button
      type="button"
      title={icon.name}
      onClick={() => {
        void navigator.clipboard.writeText(snippet);
        toast(`Copied ${icon.name}`, { description: snippet });
      }}
      className="group/icon flex aspect-square cursor-pointer flex-col items-center justify-center gap-2 rounded-brand border border-transparent bg-transparent p-2 text-center text-gray-1000 transition-colors duration-100 hover:border-alpha-400 hover:bg-alpha-100"
      style={{ contentVisibility: "auto", containIntrinsicSize: "96px" }}
    >
      <HugeiconsIcon icon={icon.svg} size={24} strokeWidth={1.5} className="transition-colors duration-100 group-hover/icon:text-(--brand)" style={{ "--brand": brand } as React.CSSProperties} aria-hidden="true" />
      <span className="w-full truncate font-mono text-[10px] leading-tight text-gray-800">
        {icon.name.replace(/Icon$/, "")}
      </span>
    </button>
  );
}

export function IconsPage({ pkg }: { pkg: Pkg }) {
  const icons = CHROME[pkg.id].icons;
  const [all, setAll] = React.useState<Icon[]>();
  const [query, setQuery] = React.useState("");
  const q = React.useDeferredValue(query.trim().toLowerCase().replace(/[\s-]/g, ""));

  React.useEffect(() => {
    if (icons) void loadIcons().then(setAll);
  }, [icons]);

  const shown = React.useMemo(() => {
    if (!all) return [];
    return q ? all.filter((i) => i.name.toLowerCase().includes(q)) : all;
  }, [all, q]);

  if (!icons) return null;
  return (
    <article>
      <PageHeader title="Icons" md={mdHref(pkg, "icons")}>
        <p className="mt-3 max-w-160 text-[15px] text-gray-900">
          {icons.library}, the free set, as the components draw it: stroke 1.5 at 24px, in the ink. An icon takes
          the colour of its text, so it is green only where the text is. Click one to copy its import.
        </p>
        <p className="mt-3 text-[13px] text-gray-900">
          <code>{icons.usage}</code>
        </p>
      </PageHeader>

      <section className="mt-10">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search icons"
            aria-label="Search icons"
            className="h-10 w-full max-w-96 rounded-brand border border-alpha-400 bg-bg-100 px-3 text-sm text-gray-1000 placeholder:text-gray-700"
          />
          <span className="font-mono text-xs text-gray-700">
            {all ? `${shown.length.toLocaleString("en")} of ${all.length.toLocaleString("en")}` : "Loading…"}
          </span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-1">
          {shown.map((icon) => (
            <Cell
              key={icon.name}
              icon={icon}
              brand={icons.color}
              snippet={`import { ${icon.name} } from "${icons.pkg}";`}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
