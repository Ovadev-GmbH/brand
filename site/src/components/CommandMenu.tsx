/* ⌘K over one brand's catalog. Deliberately not a dependency: it is a
   filtered list, arrow keys, Enter and Escape, and that is the whole
   contract. It never reaches across brands — the menu you open inside
   TICKETOVA can only take you to TICKETOVA pages. */

import * as React from "react";
import { useNavigate } from "react-router";
import type { Pkg } from "../types";
import { navGroups } from "../nav";
import { ArrowIcon, SwatchIcon } from "./icons";

export function CommandMenu({ pkg, open, onClose }: { pkg: Pkg; open: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const listRef = React.useRef<HTMLDivElement>(null);

  const groups = React.useMemo(() => (open ? navGroups(pkg, query) : []), [pkg, query, open]);
  const flat = React.useMemo(() => groups.flatMap((g) => g.items), [groups]);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  React.useEffect(() => {
    setActive(0);
  }, [query]);

  // Keep the highlighted row in view when the arrows walk past the edge.
  React.useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('[data-selected="true"]')?.scrollIntoView({ block: "nearest" });
  }, [active, groups]);

  if (!open) return null;

  const go = (href: string) => {
    onClose();
    navigate(href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (flat.length ? (i + 1) % flat.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (flat.length ? (i - 1 + flat.length) % flat.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = flat[active];
      if (item) go(item.href);
    }
  };

  let index = -1;
  return (
    <div
      className="g-cmd__scrim"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="g-cmd" role="dialog" aria-modal="true" aria-label={`Search ${pkg.name}`} onKeyDown={onKeyDown}>
        <div className="g-cmd__head">
          <input
            className="g-cmd__input"
            autoFocus
            placeholder={`Search ${pkg.name}…`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            role="combobox"
            aria-expanded="true"
            aria-controls="cmd-list"
            aria-autocomplete="list"
            spellCheck={false}
            autoComplete="off"
          />
          <button type="button" className="g-cmd__esc" onClick={onClose}>
            Esc
          </button>
        </div>
        <div className="g-cmd__list" id="cmd-list" role="listbox" ref={listRef}>
          {flat.length === 0 ? <p className="g-cmd__empty">No matches in {pkg.name}.</p> : null}
          {groups.map((g) => (
            <div className="g-cmd__group" key={g.group}>
              <p className="g-cmd__grouphead">{g.group}</p>
              {g.items.map((item) => {
                index += 1;
                const i = index;
                return (
                  <button
                    key={item.href}
                    type="button"
                    role="option"
                    aria-selected={i === active}
                    data-selected={i === active}
                    className="g-cmd__item"
                    onMouseMove={() => setActive(i)}
                    onClick={() => go(item.href)}
                  >
                    <span className="g-cmd__icon">{item.kind === "foundation" ? <SwatchIcon /> : <ArrowIcon />}</span>
                    {item.name}
                    {item.entry?.status ? <span className="g-cmd__meta">{item.entry.status}</span> : null}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
