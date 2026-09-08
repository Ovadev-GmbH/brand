/* One brand's catalog. The frame is the same for all four; what changes is
   the data-brand on the root, which is where styles/tokens.css hangs that
   brand's accent, display face and corner radius. So each brand gets its own
   layout without a second copy of the shell.

   The other brands are never named in here: the chooser at / is the only
   place they meet. */

import * as React from "react";
import { Link, NavLink, useLocation } from "react-router";
import type { Pkg } from "../types";
import { navGroups, neighbours } from "../nav";
import { StatusBadge } from "./StatusBadge";
import { ThemeSwitcher } from "./theme";
import { CommandMenu } from "./CommandMenu";
import { Pagination } from "./Pagination";
import { MenuIcon, CloseIcon, SearchIcon } from "./icons";
import { BrandSwitcher } from "./BrandSwitcher";

function NavList({ pkg, onNavigate }: { pkg: Pkg; onNavigate?: () => void }) {
  return (
    <>
      {navGroups(pkg).map(({ group, items }) => (
        <div className="g-side__group" key={group}>
          <p className="g-side__title">{group}</p>
          <ul className="g-side__list">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink
                  end
                  to={item.href}
                  onClick={onNavigate}
                  className={({ isActive }) => `g-side__link ${isActive ? "g-side__link--active" : ""}`}
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
    <div className="g-shell" data-brand={pkg.id}>
      <header className="g-header">
        <div className="g-header__inner">
          <div className="g-header__brand">
            <BrandSwitcher pkg={pkg} />
          </div>
          <div className="g-header__tools">
            <button type="button" className="g-searchbtn" onClick={() => setSearch(true)}>
              <span className="g-searchbtn__label">
                <SearchIcon />
                <span className="g-searchbtn__text">Search {pkg.name}</span>
              </span>
              <kbd className="g-kbd">
                <span>⌘</span>
                <span>K</span>
              </kbd>
            </button>
            <span className="g-header__spacer" />
            <ThemeSwitcher />
            <button
              type="button"
              className="g-menubtn"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              onClick={() => setMenu((v) => !v)}
            >
              {menu ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {menu ? (
          <nav className="g-mobilenav" aria-label={`${pkg.name} pages`}>
            <NavList pkg={pkg} onNavigate={() => setMenu(false)} />
          </nav>
        ) : null}
      </header>

      <main className="g-main">
        <aside className="g-side">
          <div className="g-side__scroll">
            <NavList pkg={pkg} />
          </div>
        </aside>
        <div className="g-content">
          <div className="g-content__inner">
            <div className="g-content__body">{children}</div>
            <Pagination prev={prev} next={next} />
          </div>
        </div>
      </main>

      <CommandMenu pkg={pkg} open={search} onClose={() => setSearch(false)} />
    </div>
  );
}
