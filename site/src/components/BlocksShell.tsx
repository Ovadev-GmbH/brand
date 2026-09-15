/* The blocks area's frame: the catalog's header and a sidebar of the block
   categories, like the catalog's, but no column limit — a block is a screen,
   and the screens get the whole window to be tried at any width. It wears
   the brand the same way the catalog does (data-brand on the root), so the
   chrome is one and the same. */

import * as React from "react";
import { Link, useLocation, useSearchParams } from "react-router";
import type { Pkg } from "../types";
import { href } from "../registry";
import { BrandSwitcher } from "./BrandSwitcher";
import { AreaNav } from "./AreaNav";
import { MenuIcon, CloseIcon } from "./icons";

/* All blocks, then one line per category with how many screens it holds.
   The category is a filter on the one page (?block=), not a page of its own. */
function BlockList({ pkg, onNavigate }: { pkg: Pkg; onNavigate?: () => void }) {
  const [params] = useSearchParams();
  const current = params.get("block");
  const blocks = pkg.entries.filter((e) => e.kind === "block");
  const items = [
    { key: "all", to: `${href(pkg.id)}/blocks`, name: "All", count: blocks.reduce((n, b) => n + b.examples.length, 0), active: !current },
    ...blocks.map((b) => ({
      key: b.slug,
      to: `${href(pkg.id)}/blocks?block=${b.slug}`,
      name: b.name,
      count: b.examples.length,
      active: current === b.slug,
    })),
  ];
  return (
    <div>
      <p className="mb-1 flex h-7 items-center pl-1 text-[11px] font-semibold tracking-[0.08em] text-gray-800 uppercase">Blocks</p>
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
          <li key={item.key}>
            <Link
              to={item.to}
              aria-current={item.active ? "page" : undefined}
              onClick={() => {
                window.scrollTo(0, 0);
                onNavigate?.();
              }}
              className={`-ml-2 flex h-8 items-center justify-between gap-2 rounded-brand px-3 text-sm no-underline hover:bg-alpha-100 hover:text-gray-1000 ${
                item.active ? "bg-alpha-100 text-gray-1000" : "text-gray-900"
              }`}
            >
              <span>{item.name}</span>
              <span className="text-[12px] text-gray-700 tabular-nums">{item.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BlocksShell({ pkg, children }: { pkg: Pkg; children: React.ReactNode }) {
  const [menu, setMenu] = React.useState(false);
  const { search } = useLocation();

  React.useEffect(() => {
    setMenu(false);
  }, [search]);

  return (
    <div className="min-h-screen bg-bg-100" data-brand={pkg.id}>
      <header className="sticky top-0 z-40 w-full">
        <div className="flex w-full border-b border-alpha-400 bg-bg-100 pl-3 md:pl-[22px]">
          <div className="flex min-w-0 grow items-center gap-2 border-r border-alpha-400 py-3 pr-3 md:py-[15px] md:pr-4 md:pl-px lg:w-[237px] lg:grow-0">
            <BrandSwitcher pkg={pkg} />
          </div>
          <div className="flex items-center gap-2 py-2 pr-3 pl-3 md:p-4 lg:grow">
            <AreaNav pkg={pkg} area="blocks" />
            <button
              type="button"
              className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-gray-1000 lg:hidden"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              onClick={() => setMenu((v) => !v)}
            >
              {menu ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {menu ? (
          <nav className="border-b border-alpha-400 bg-bg-100 px-6 pb-6 lg:hidden" aria-label="Block categories">
            <BlockList pkg={pkg} onNavigate={() => setMenu(false)} />
          </nav>
        ) : null}
      </header>

      <main className="-mt-px flex flex-col lg:grid lg:grid-cols-[var(--container-side)_1fr]">
        <aside className="sticky top-header hidden h-[calc(100vh-var(--spacing-header))] flex-col border-r border-alpha-400 bg-bg-100 lg:flex">
          <nav className="scrollbar-none min-h-0 flex-1 overflow-y-auto px-6 pt-4 pb-6" aria-label="Block categories">
            <BlockList pkg={pkg} />
          </nav>
        </aside>
        <div className="min-h-[calc(100vh-var(--spacing-header))] min-w-0 bg-bg-100 px-6 pt-8 pb-16 lg:px-10 lg:pt-10">{children}</div>
      </main>
    </div>
  );
}
