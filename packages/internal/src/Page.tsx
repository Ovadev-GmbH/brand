// Page anatomy shared by every section: eyebrow, title, lead, a muted meta
// line (data stand, counts), then sections with a ruled title. The type and
// colour come from the Design System (ov-*, --ovadev-*); the layout is this
// library's own (ui-*).

import * as React from "react";

export function Page({
  eyebrow,
  title,
  lead,
  meta,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: React.ReactNode;
  /** Small muted line under the lead: data stand, source, back link. */
  meta?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <article className="ui-page">
      <header className="ui-page__head">
        {eyebrow ? <p className="ui-eyebrow">{eyebrow}</p> : null}
        <h1 className="ov-h1">{title}</h1>
        {lead ? <p className="ui-lead">{lead}</p> : null}
        {meta ? <p className="ui-meta">{meta}</p> : null}
      </header>
      {children}
    </article>
  );
}

export function Section({
  title,
  intro,
  aside,
  id,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  /** Right-aligned content on the title line: a count, a toggle, an action. */
  aside?: React.ReactNode;
  id?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="ui-block" id={id}>
      <div className="ui-section__head">
        <h2 className="ov-h3 ui-section__title">{title}</h2>
        {aside ? <div className="ui-section__aside">{aside}</div> : null}
      </div>
      {intro ? <p className="ui-block__intro">{intro}</p> : null}
      {children}
    </section>
  );
}

/** Quoted note: research notes, hooks, verification text. */
export function Note({
  tone = "neutral",
  children,
}: {
  tone?: "neutral" | "accent" | "warn";
  children: React.ReactNode;
}) {
  return <div className={`ui-note ui-note--${tone}`}>{children}</div>;
}

export function Empty({ children }: { children: React.ReactNode }) {
  return <p className="ui-empty">{children}</p>;
}

/** Muted secondary line inside cells, cards and lists. */
export function Sub({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={`ui-sub ${className ?? ""}`}>{children}</span>;
}

export function ExtLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={`ui-link ${className ?? ""}`} href={href} target="_blank" rel="noreferrer noopener">
      {children}
      <span className="ui-link__ext" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

/** Definition list, label column left. */
export function Dl({ items }: { items: { k: string; v: React.ReactNode; num?: boolean }[] }) {
  const rows = items.filter((i) => i.v !== "" && i.v != null && i.v !== false);
  if (!rows.length) return null;
  return (
    <dl className="ui-dl">
      {rows.map((i) => (
        <React.Fragment key={i.k}>
          <dt>{i.k}</dt>
          <dd className={i.num ? "ui-num" : undefined}>{i.v}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
