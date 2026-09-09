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
      className="fixed inset-0 z-100 flex items-start justify-center bg-black/40 px-4 pt-[12vh] pb-4"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="flex max-h-[70vh] w-full max-w-160 flex-col overflow-hidden rounded-[max(var(--radius-brand),2px)] bg-bg-100 shadow-[var(--shadow-border),var(--shadow-menu)]"
        role="dialog" aria-modal="true" aria-label={`Search ${pkg.name}`} onKeyDown={onKeyDown}>
        <div className="flex items-center gap-3 border-b border-alpha-400 px-[13px] py-3">
          <input
            className="h-7 flex-1 border-0 bg-transparent p-0 text-[17px] text-gray-1000 outline-none placeholder:text-gray-700 focus-visible:shadow-none"
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
          <button
            type="button"
            className="h-5 cursor-pointer rounded border-0 bg-bg-100 px-1 text-xs text-gray-900 shadow-border"
            onClick={onClose}
          >
            Esc
          </button>
        </div>
        <div className="scrollbar-quiet flex-1 overflow-y-auto p-2" id="cmd-list" role="listbox" ref={listRef}>
          {flat.length === 0 ? (
            <p className="px-2 py-6 text-center text-sm text-gray-900">No matches in {pkg.name}.</p>
          ) : null}
          {groups.map((g) => (
            <div className="mt-1 first:mt-0" key={g.group}>
              <p className="flex h-8 items-center px-2 text-[13px] text-gray-900">{g.group}</p>
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
                    className="flex w-full min-h-10 cursor-pointer scroll-m-2 items-center gap-3 rounded-brand border-0 bg-transparent px-2 text-left text-sm text-gray-1000 data-[selected=true]:bg-alpha-100"
                    onMouseMove={() => setActive(i)}
                    onClick={() => go(item.href)}
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center text-gray-900">{item.kind === "foundation" ? <SwatchIcon /> : <ArrowIcon />}</span>
                    {item.name}
                    {item.entry?.status ? <span className="ml-auto text-xs text-gray-700">{item.entry.status}</span> : null}
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
