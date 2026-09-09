/* One brand's catalog. The frame is the same for all four; what changes is
   the data-brand on the root, which is where styles/tokens.css hangs that
   brand's display face and corner radius. So each brand gets its own layout
   without a second copy of the shell.

   The other brands are never named in here: the chooser at / is the only
   place they meet. */

import * as React from "react";
import { Link, NavLink, useLocation } from "react-router";
import type { Pkg } from "../types";
import { navGroups, neighbours } from "../nav";
import { StatusBadge } from "./StatusBadge";
import { CommandMenu } from "./CommandMenu";
import { Pagination } from "./Pagination";
import { MenuIcon, CloseIcon, SearchIcon } from "./icons";
import { BrandSwitcher } from "./BrandSwitcher";

function NavList({ pkg, onNavigate }: { pkg: Pkg; onNavigate?: () => void }) {
  return (
    <>
      {navGroups(pkg).map(({ group, items }) => (
        <div className="mt-4 first:mt-0" key={group}>
          <p className="flex h-10 items-baseline gap-2 pl-1 text-sm font-medium text-gray-1000">{group}</p>
          <ul className="m-0 list-none p-0">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink
                  end
                  to={item.href}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `-ml-2 flex h-9 items-center justify-between gap-2 rounded-brand px-3 text-sm no-underline hover:bg-alpha-100 hover:text-gray-1000 ${
                      isActive ? "bg-alpha-100 text-gray-1000" : "text-gray-900"
                    }`
                  }
                >
                  <span>{item.name}</span>
                  {item.entry?.status ? <StatusBadge status={item.entry.status} /> : null}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export function Shell({ pkg, children }: { pkg: Pkg; children: React.ReactNode }) {
  const [menu, setMenu] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const { pathname } = useLocation();
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
  }, [pathname]);

  return (
    <div className="min-h-screen bg-bg-200" data-brand={pkg.id}>
      <header className="sticky top-0 z-40 mx-auto w-full max-w-shell">
        <div className="flex w-full border-x border-b border-alpha-400 bg-bg-100 pl-3 md:pl-[22px]">
          {/* Below the sidebar breakpoint the header has to fit a phone: the
              search button loses its label and its shortcut and becomes the
              icon alone, and the spacer that centres the tools goes away. */}
          <div className="flex min-w-0 grow items-center gap-2 border-r border-alpha-400 py-3 pr-3 md:py-[15px] md:pr-4 md:pl-px lg:w-[237px] lg:grow-0">
            <BrandSwitcher pkg={pkg} />
          </div>
          <div className="flex items-center gap-2 py-2 pr-3 pl-3 md:p-4 lg:grow lg:justify-between">
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
            <span className="hidden flex-1 md:block" />
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
            aria-label={`${pkg.name} pages`}
          >
            <NavList pkg={pkg} onNavigate={() => setMenu(false)} />
          </nav>
        ) : null}
      </header>

      <main className="mx-auto -mt-px flex max-w-shell flex-col lg:grid lg:grid-cols-[var(--container-side)_1fr]">
        {/* The sidebar scrolls on its own but never shows a bar: the nav is
            short and a second scrollbar next to the page's is noise. */}
        <aside className="order-1 hidden sticky top-header h-[calc(100vh-var(--spacing-header))] flex-col border-x border-alpha-400 bg-bg-100 lg:flex">
          <div className="scrollbar-none min-h-0 flex-1 overflow-y-auto px-6 pt-4 pb-6">
            <NavList pkg={pkg} />
          </div>
        </aside>
        <div className="order-2 min-w-0">
          <div className="flex min-h-[calc(100vh-var(--spacing-header))] min-w-0 flex-col border-r border-alpha-400 bg-bg-100">
            <div className="flex-1 px-6 pt-8 pb-12 lg:px-12 lg:pt-10 lg:pb-16">{children}</div>
            <Pagination prev={prev} next={next} />
          </div>
        </div>
      </main>

      <CommandMenu pkg={pkg} open={search} onClose={() => setSearch(false)} />
    </div>
  );
}
