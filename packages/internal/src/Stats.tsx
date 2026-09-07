// KPI row on the Design System's stat anatomy: mono figure, Oswald label,
// muted caption. No boxes — a hairline on the left of each figure.

import { useLink } from "./link";

export type StatItem = {
  value: string;
  label: string;
  caption?: string;
  href?: string;
  tone?: "ink" | "neutral" | "green" | "red" | "yellow" | "blue";
};

export function Stats({ items }: { items: StatItem[] }) {
  const Link = useLink();
  return (
    <div className="ui-stats">
      {items.map((k) => {
        const inner = (
          <>
            <span className="ov-stat__value">{k.value}</span>
            <span className="ov-stat__label">{k.label}</span>
            {k.caption ? <span className="ov-stat__caption">{k.caption}</span> : null}
          </>
        );
        const cls = `ov-stat ov-stat--${k.tone ?? "ink"}`;
        return k.href ? (
          <Link key={k.label} href={k.href} className={`${cls} ui-stat--link`}>
            {inner}
          </Link>
        ) : (
          <div key={k.label} className={cls}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}
