/* The header's left-hand control: the package this catalog is for, which
   opens the list of the four libraries plus the way out to the landing. It is the only
   place inside a catalog that knows the other brands exist, which keeps the
   rest of the shell honest about them being standalone.

   Keyboard contract: Enter/Space or ArrowDown opens and focuses the first
   item, Up/Down move, Home/End jump, Escape closes and gives focus back to
   the trigger, Tab out closes. */

import * as React from "react";
import { useNavigate } from "react-router";
import type { Pkg } from "../types";
import { PACKAGES, href } from "../registry";
import { CaretIcon } from "./icons";

type Row = { key: string; label: string; to: string; current: boolean; root?: boolean; mono?: boolean };

/** The package without its scope — the scope is the same on all four, so it
 *  would only make every name longer without telling them apart. */
const shortName = (pkg: string) => pkg.replace(/^@[^/]+\//, "");

export function BrandSwitcher({ pkg }: { pkg: Pkg }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const itemsRef = React.useRef<(HTMLButtonElement | null)[]>([]);

  // Named by the package rather than the wordmark: the four capitalise
  // themselves differently enough (INTERN, Ovadev, TICKETOVA, Januna) that a
  // list of them reads as noise. The scope is the same on all four, so it is
  // left off.
  const rows: Row[] = [
    ...PACKAGES.map((p) => ({ key: p.id, label: shortName(p.pkg), to: href(p.id), current: p.id === pkg.id, mono: true })),
    { key: "__root", label: "All libraries", to: "/", current: false, root: true },
  ];

  const close = React.useCallback((refocus = true) => {
    setOpen(false);
    if (refocus) triggerRef.current?.focus();
  }, []);

  const go = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  // Focus the first row when the menu opens.
  React.useEffect(() => {
    if (open) itemsRef.current[0]?.focus();
  }, [open]);

  // A click or a focus outside the menu closes it, without stealing focus.
  React.useEffect(() => {
    if (!open) return;
    const outside = (e: Event) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", outside);
    document.addEventListener("focusin", outside);
    return () => {
      document.removeEventListener("mousedown", outside);
      document.removeEventListener("focusin", outside);
    };
  }, [open]);

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    const items = itemsRef.current.filter(Boolean) as HTMLButtonElement[];
    const i = items.indexOf(document.activeElement as HTMLButtonElement);
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      items[(i + 1) % items.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      items[(i - 1 + items.length) % items.length]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1]?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div className="relative min-w-0" ref={wrapRef}>
      <button
        type="button"
        ref={triggerRef}
        className="group -ml-2 flex min-w-0 cursor-pointer items-center gap-1.5 rounded-brand border-0 bg-transparent px-2 py-1 text-gray-700 hover:bg-alpha-100 hover:text-gray-1000"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <span className="font-mono text-sm font-medium text-gray-1000 md:text-[15px]">{shortName(pkg.pkg)}</span>
        <span className="flex transition-transform duration-150 group-aria-expanded:rotate-180" aria-hidden="true">
          <CaretIcon />
        </span>
      </button>

      {open ? (
        <div
          className="absolute top-[calc(100%+8px)] -left-2 z-60 min-w-55 rounded-brand bg-bg-100 p-1 shadow-[var(--shadow-border),var(--shadow-menu)]"
          role="menu"
          aria-label="Libraries"
          onKeyDown={onMenuKeyDown}
        >
          {rows.map((row, i) => (
            <button
              key={row.key}
              type="button"
              role="menuitem"
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className={`flex h-10 w-full cursor-pointer items-center rounded-brand border-0 bg-transparent px-2.5 text-left text-sm text-gray-1000 hover:bg-alpha-100 aria-current:font-semibold ${
                row.mono ? "font-mono text-[13px]" : ""
              } ${row.root ? "mt-1 rounded-t-none border-t border-alpha-400 pt-1 text-gray-900" : ""}`}
              aria-current={row.current || undefined}
              onClick={() => go(row.to)}
            >
              {row.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
