/* One brand's catalog: its docs and its blocks, in one frame. The frame is
   the same for all four brands; what changes is the data-brand on the root,
   which is where styles/tokens.css hangs that brand's display face and
   corner radius. So each brand gets its own layout without a second copy of
   the shell.

   The frame stays mounted across the two areas — App.tsx renders it as the
   layout route — so moving between Docs and Blocks swaps no page for
   another: the same header and sidebar widen from the reading column to the
   whole window, and the sidebar's list turns from the pages into the block
   categories.

   Every vertical rule belongs to the grid, never to the sticky sidebar: the
   header and the main share the same two columns and the same outer
   borders, so the sidebar's rule meets the header's to the pixel and runs
   to the bottom of the page however long the page is.

   The other brands are never named in here: the chooser at / is the only
   place they meet. */

import * as React from "react";
import { Link, NavLink, useLocation, useSearchParams } from "react-router";
import type { Pkg } from "../types";
import { navGroups, neighbours } from "../nav";
import { href } from "../registry";
import { StatusBadge } from "./StatusBadge";
import { CommandMenu } from "./CommandMenu";
import { Pagination } from "./Pagination";
import { MenuIcon, CloseIcon, SearchIcon } from "./icons";
import { BrandSwitcher } from "./BrandSwitcher";
import { AreaNav } from "./AreaNav";

export type Area = "docs" | "blocks";

const GROUP_LABEL = "mb-1 flex h-7 items-center pl-1 text-[11px] font-semibold tracking-[0.08em] text-gray-800 uppercase";
const item = (active: boolean) =>
  `-ml-2 flex h-8 items-center justify-between gap-2 rounded-brand px-3 text-sm no-underline hover:bg-alpha-100 hover:text-gray-1000 ${
    active ? "bg-alpha-100 text-gray-1000" : "text-gray-900"
  }`;

/* The docs' list: foundations first, then one group per component
   category. A group is a small capitals label with its pages tight beneath
   it; the space above the label is the seam. No rules — the label is
   enough. */
function NavList({ pkg, onNavigate }: { pkg: Pkg; onNavigate?: () => void }) {
  return (
    <>
      {navGroups(pkg).map(({ group, items }) => (
        <div className="mt-8 first:mt-0" key={group}>
          <p className={GROUP_LABEL}>{group}</p>
          <ul className="m-0 list-none p-0">
            {items.map((it) => (
              <li key={it.href}>
                <NavLink end to={it.href} onClick={onNavigate} className={({ isActive }) => item(isActive)}>
                  <span>{it.name}</span>
                  {it.entry?.status ? <StatusBadge status={it.entry.status} /> : null}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

/* The blocks' list: all of them, then one line per category with how many
   screens it holds. A category is a filter on the one page (?block=), not a
   page of its own. */
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
      <p className={GROUP_LABEL}>Blocks</p>
      <ul className="m-0 list-none p-0">
        {items.map((it) => (
          <li key={it.key}>
            <Link
              to={it.to}
              aria-current={it.active ? "page" : undefined}
              onClick={() => {
                window.scrollTo(0, 0);
                onNavigate?.();
              }}
              className={item(it.active)}
            >
              <span>{it.name}</span>
              <span className="text-[12px] text-gray-700 tabular-nums">{it.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Shell({ pkg, area, children }: { pkg: Pkg; area: Area; children: React.ReactNode }) {
  const [menu, setMenu] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const { pathname, search: query } = useLocation();
  const { prev, next } = neighbours(pkg, pathname);

  // ⌘K / Ctrl-K anywhere in the catalog.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearch((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    setMenu(false);
  }, [pathname, query]);

  const list = (onNavigate?: () => void) =>
    area === "blocks" ? <BlockList pkg={pkg} onNavigate={onNavigate} /> : <NavList pkg={pkg} onNavigate={onNavigate} />;

  // The reading column for the docs, the whole window for the blocks; the
  // header and the main share it, so they widen as one.
  const width = `mx-auto w-full transition-[max-width] duration-500 ease-in-out motion-reduce:transition-none ${
    area === "blocks" ? "max-w-full" : "max-w-shell"
  }`;
  const columns = "lg:grid lg:grid-cols-[var(--container-side)_minmax(0,1fr)]";

  return (
    <div className="min-h-screen bg-bg-200" data-brand={pkg.id}>
      <header className={`sticky top-0 z-40 ${width}`}>
        <div className={`flex w-full border-x border-b border-alpha-400 bg-bg-100 ${columns}`}>
          {/* Below the sidebar breakpoint the header has to fit a phone: the
              search button loses its label and its shortcut and becomes the
              icon alone. */}
          <div className="flex min-w-0 grow items-center gap-2 border-r border-alpha-400 py-3 pr-3 pl-3 md:py-[15px] md:pr-4 md:pl-[23px]">
            <BrandSwitcher pkg={pkg} />
          </div>
          <div className="flex min-w-0 items-center gap-2 py-2 pr-3 pl-3 md:p-4 lg:justify-between">
            <AreaNav pkg={pkg} area={area} />
            <button
              type="button"
              className="flex h-8 w-8 max-w-full cursor-pointer items-center justify-center gap-2 rounded-brand border border-gray-400 bg-transparent text-[13px] text-gray-700 hover:bg-gray-100 md:w-55 md:justify-between md:pr-1.5 md:pl-2"
              onClick={() => setSearch(true)}
            >
              <span className="flex min-w-0 items-center gap-2">
                <SearchIcon />
                <span className="hidden truncate md:inline">Search {pkg.name}</span>
              </span>
              <kbd className="hidden h-5 min-w-5 items-center gap-px rounded px-1 font-sans text-[11px] text-gray-900 shadow-border md:inline-flex">
                <span>⌘</span>
                <span>K</span>
              </kbd>
            </button>
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
          <nav
            className="scrollbar-quiet max-h-[calc(100dvh-var(--spacing-header))] overscroll-contain overflow-y-auto border-x border-b border-alpha-400 bg-bg-100 px-6 pb-6 lg:hidden"
            aria-label={area === "blocks" ? "Block categories" : `${pkg.name} pages`}
          >
            <div className="pt-4">{list(() => setMenu(false))}</div>
          </nav>
        ) : null}
      </header>

      <main className={`-mt-px flex flex-col border-x border-alpha-400 bg-bg-100 ${columns} ${width}`}>
        {/* The column carries the rule, full height; the list inside it is
            sticky and scrolls on its own without a bar — the nav is short
            and a second scrollbar next to the page's is noise. */}
        <div className="hidden border-r border-alpha-400 lg:block">
          <aside className="scrollbar-none sticky top-header h-[calc(100vh-var(--spacing-header))] overflow-y-auto px-6 pt-4 pb-6">
            {list()}
          </aside>
        </div>
        <div className="flex min-h-[calc(100vh-var(--spacing-header))] min-w-0 flex-col">
          <div className="flex-1 px-6 pt-8 pb-12 lg:px-12 lg:pt-10 lg:pb-16">{children}</div>
          {area === "docs" ? <Pagination prev={prev} next={next} /> : null}
        </div>
      </main>

      <CommandMenu pkg={pkg} open={search} onClose={() => setSearch(false)} />
    </div>
  );
}
