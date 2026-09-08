/* The header's left-hand control: the brand's wordmark, which opens the list
   of the four libraries plus the way out to the landing. It is the only
   place inside a catalog that knows the other brands exist, which keeps the
   rest of the shell honest about them being standalone.

   Keyboard contract: Enter/Space or ArrowDown opens and focuses the first
   item, Up/Down move, Home/End jump, Escape closes and gives focus back to
   the trigger, Tab out closes. */

import * as React from "react";
import { useNavigate } from "react-router";
import type { Pkg } from "../types";
import { PACKAGES, href } from "../registry";
import { CHROME } from "../brands";
import { CaretIcon } from "./icons";

type Row = { key: string; label: string; to: string; current: boolean; root?: boolean };

export function BrandSwitcher({ pkg }: { pkg: Pkg }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const itemsRef = React.useRef<(HTMLButtonElement | null)[]>([]);

  const rows: Row[] = [
    ...PACKAGES.map((p) => ({ key: p.id, label: p.name, to: href(p.id), current: p.id === pkg.id })),
    { key: "__root", label: "Alle Libraries", to: "/", current: false, root: true },
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
    <div className="g-switcher" ref={wrapRef}>
      <button
        type="button"
        ref={triggerRef}
        className="g-switcher__trigger"
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
        <span className="g-header__name">{CHROME[pkg.id].mark}</span>
        <span className="g-switcher__caret" aria-hidden="true">
          <CaretIcon />
        </span>
      </button>

      {open ? (
        <div className="g-switcher__menu" role="menu" aria-label="Libraries" onKeyDown={onMenuKeyDown}>
          {rows.map((row, i) => (
            <button
              key={row.key}
              type="button"
              role="menuitem"
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className={`g-switcher__item ${row.root ? "g-switcher__item--root" : ""}`}
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
