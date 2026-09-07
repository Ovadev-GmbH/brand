// Data table. Header in the text face, sentence case; numbers in mono, right
// aligned; hairlines between rows, no box around the table. Sorting is the
// caller's — Th only draws the state.

import * as React from "react";
import { useLink } from "./link";
import type { SortState } from "./sort";

export function Table({
  children,
  hover = true,
  dense = false,
  className,
  ariaLabel,
}: {
  children: React.ReactNode;
  hover?: boolean;
  dense?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div className="ui-tablewrap">
      <table
        className={`ui-table ${hover ? "ui-table--hover" : ""} ${dense ? "ui-table--dense" : ""} ${className ?? ""}`}
        aria-label={ariaLabel}
      >
        {children}
      </table>
    </div>
  );
}

export function Th<K extends string = string>({
  children,
  num,
  sortKey,
  sort,
  onSort,
  width,
}: {
  children?: React.ReactNode;
  num?: boolean;
  sortKey?: K;
  sort?: SortState<K>;
  onSort?: (key: K) => void;
  width?: string;
}) {
  const active = sortKey != null && sort?.key === sortKey;
  const style = width ? { width } : undefined;
  if (!sortKey || !onSort) {
    return (
      <th className={num ? "ui-th ui-th--num" : "ui-th"} style={style}>
        {children}
      </th>
    );
  }
  return (
    <th
      className={`ui-th ui-th--sortable ${num ? "ui-th--num" : ""} ${active ? "ui-th--active" : ""}`}
      aria-sort={active ? (sort!.dir === 1 ? "ascending" : "descending") : undefined}
      style={style}
    >
      <button type="button" className="ui-th__btn" onClick={() => onSort(sortKey)}>
        {children}
        <span className="ui-th__arrow" aria-hidden="true">
          {active ? (sort!.dir === 1 ? "↑" : "↓") : "↕"}
        </span>
      </button>
    </th>
  );
}

export function Td({
  children,
  num,
  muted,
  nowrap,
  className,
  title,
}: {
  children?: React.ReactNode;
  num?: boolean;
  muted?: boolean;
  nowrap?: boolean;
  className?: string;
  title?: string;
}) {
  return (
    <td
      className={`${num ? "ui-td--num ui-num" : ""} ${muted ? "ui-td--muted" : ""} ${nowrap ? "ui-td--nowrap" : ""} ${className ?? ""}`}
      title={title}
    >
      {children ?? <span className="ui-td--none">–</span>}
    </td>
  );
}

/** Name cell: bold link plus a muted secondary line. */
export function NameCell({ href, children, sub }: { href?: string; children: React.ReactNode; sub?: React.ReactNode }) {
  const Link = useLink();
  return (
    <td className="ui-td--name">
      {href ? (
        <Link className="ui-name" href={href}>
          {children}
        </Link>
      ) : (
        <span className="ui-name">{children}</span>
      )}
      {sub ? <span className="ui-sub">{sub}</span> : null}
    </td>
  );
}

export function MoreButton({ remaining, step, onClick }: { remaining: number; step: number; onClick: () => void }) {
  if (remaining <= 0) return null;
  return (
    <button type="button" className="ov-btn ov-btn--outline ov-btn--sm ui-more" onClick={onClick}>
      Weitere {Math.min(step, remaining)} anzeigen
    </button>
  );
}
