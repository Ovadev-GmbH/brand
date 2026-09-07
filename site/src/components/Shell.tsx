import * as React from "react";
import { Link, NavLink } from "react-router";
import type { Pkg } from "../types";
import { grouped, href } from "../registry";
import { pkgVersion } from "../props";
import { StatusBadge } from "./StatusBadge";

/** One package's catalog chrome: its name in the header, only its
 *  components in the sidebar. The other packages are not mentioned; the
 *  root's four doors are the only place they meet. */
export function Shell({ pkg, current, children }: { pkg: Pkg; current?: string; children: React.ReactNode }) {
  const [filter, setFilter] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const groups = grouped(pkg, filter);
  return (
    <div className="cat">
      <header className="cat-top">
        <Link to={href(pkg.id)} className="cat-top__brand">
          <span className="cat-top__name">{pkg.name}</span>
          <span className="cat-top__pkg">
            {pkg.pkg}@{pkgVersion(pkg.id)}
          </span>
        </Link>
        <Link to="/" className="cat-top__root">
          Ovadev Brand
        </Link>
        <button className="cat-burger" aria-label="Navigation" onClick={() => setOpen((v) => !v)}>
          ≡
        </button>
      </header>
      <div className="cat-body">
        <aside className={`cat-side ${open ? "cat-side--open" : ""}`}>
          <input
            type="search"
            className="cat-search"
            placeholder="Komponente"
            aria-label="Komponente suchen"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <nav className="cat-nav" aria-label="Komponenten">
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
            {groups.length === 0 ? <p className="cat-nav__empty">Nichts gefunden.</p> : null}
          </nav>
        </aside>
        <main className="cat-main">{children}</main>
      </div>
    </div>
  );
}
