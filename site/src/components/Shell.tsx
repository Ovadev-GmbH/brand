import * as React from "react";
import { Link, NavLink } from "react-router";
import type { Pkg } from "../types";
import { grouped, href } from "../registry";
import { pkgVersion } from "../props";
import { StatusBadge } from "./StatusBadge";

/** One package's catalog: the sidebar carries the package name and only
 *  its components. The other packages are not mentioned; the root is the
 *  only place they meet. */
export function Shell({ pkg, current, children }: { pkg: Pkg; current?: string; children: React.ReactNode }) {
  const [filter, setFilter] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const groups = grouped(pkg, filter);
  return (
    <div className="cat">
      <aside className={`cat-side ${open ? "cat-side--open" : ""}`}>
        <div className="cat-side__head">
          <Link to="/" className="cat-side__root">
            Ovadev Brand
          </Link>
          <Link to={href(pkg.id)} className="cat-side__pkg">
            <span className="cat-side__name">{pkg.name}</span>
            <span className="cat-side__version">v{pkgVersion(pkg.id)}</span>
          </Link>
          <button className="cat-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            Menu
          </button>
        </div>
        <div className="cat-side__body">
          <input
            type="search"
            className="cat-search"
            placeholder="Search"
            aria-label="Search components"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <nav className="cat-nav" aria-label="Components">
            {groups.map(({ group, entries }) => (
              <div className="cat-nav__group" key={group}>
                <p className="cat-nav__title">{group}</p>
                <ul className="cat-nav__list">
                  {entries.map((e) => (
                    <li key={e.slug}>
                      <NavLink
                        to={href(pkg.id, e.slug)}
                        className={({ isActive }) => `cat-nav__link ${isActive || current === e.slug ? "cat-nav__link--active" : ""}`}
                        onClick={() => setOpen(false)}
                      >
                        <span>{e.name}</span>
                        {e.status ? <StatusBadge status={e.status} /> : null}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {groups.length === 0 ? <p className="cat-nav__empty">No matches.</p> : null}
          </nav>
        </div>
      </aside>
      <main className="cat-main">{children}</main>
    </div>
  );
}
