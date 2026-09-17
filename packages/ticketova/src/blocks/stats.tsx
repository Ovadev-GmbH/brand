"use client";

import * as React from "react";
import { cn } from "../lib/utils";

/* A row of figures above a table: cells separated by hairlines, the way
   Geist draws them. The grid is a description list; each Stat is one
   term and its value. Columns fit the width: four on a laptop, two on a
   narrow screen; override them with a className. The hairlines are the
   cells' outlines meeting in a 1px gap, so a row that is not full ends
   in an empty white cell, not a grey one. The grid wears the Card's
   corner; overflow-hidden clips the corner cells' outlines to it. */
function StatGrid({ className, ...props }: React.ComponentProps<"dl">) {
  return (
    <dl
      data-slot="stat-grid"
      className={cn(
        "grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-px overflow-hidden rounded-xl border border-divider bg-surface-primary",
        className,
      )}
      {...props}
    />
  );
}

type StatTone = "positive" | "negative" | "neutral";

/* The change since the last period, coloured by what it means. The sign
   is in the text, so the colour never carries the meaning alone. */
function StatDelta({ tone = "neutral", className, ...props }: React.ComponentProps<"span"> & { tone?: StatTone }) {
  return (
    <span
      data-slot="stat-delta"
      data-tone={tone}
      className={cn(
        "text-label-12-mono",
        tone === "positive" && "text-status-success",
        tone === "negative" && "text-status-danger",
        tone === "neutral" && "text-content-secondary",
        className,
      )}
      {...props}
    />
  );
}

/* One figure: its label, the value in mono, the change beside it and a
   hint beneath (the period, the unit, where it comes from). */
function Stat({
  label,
  value,
  delta,
  tone = "neutral",
  hint,
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  label: React.ReactNode;
  value: React.ReactNode;
  delta?: string;
  tone?: StatTone;
  hint?: React.ReactNode;
}) {
  return (
    <div data-slot="stat" className={cn("flex min-w-0 flex-col gap-space-2 bg-surface-primary p-space-4 outline outline-divider", className)} {...props}>
      <dt className="text-label-12 text-content-secondary">{label}</dt>
      <dd className="m-0 flex flex-col gap-space-1">
        <div className="flex flex-wrap items-baseline gap-space-2">
          <span className="text-heading-24 font-mono text-content-primary">{value}</span>
          {delta ? <StatDelta tone={tone}>{delta}</StatDelta> : null}
        </div>
        {hint ? <span className="text-label-12 text-content-tertiary">{hint}</span> : null}
      </dd>
    </div>
  );
}

export type { StatTone };
export { StatGrid, Stat, StatDelta };
