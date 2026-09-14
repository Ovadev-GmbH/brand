"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "../lib/utils";

type Tone = "positive" | "negative" | "neutral";

/* A row of figures separated by hairlines, the way Geist draws them: the
   grid's gap shows the divider through, each cell paints the sheet back on.
   The cells wrap into fewer columns as the row narrows. */
function StatGrid({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stat-grid"
      className={cn("grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-px overflow-hidden rounded-regular bg-divider shadow-base", className)}
      {...props}
    />
  );
}

/* The change beside a value: its sign, its direction, and a colour that
   agrees with both. Neutral is the secondary ink and no arrow. */
function StatDelta({ tone = "neutral", className, children, ...props }: React.ComponentProps<"span"> & { tone?: Tone }) {
  return (
    <span
      data-slot="stat-delta"
      data-tone={tone}
      className={cn(
        "inline-flex items-center gap-space-1 text-label-13 tabular-nums",
        tone === "positive" && "text-status-success",
        tone === "negative" && "text-status-danger",
        tone === "neutral" && "text-content-secondary",
        className,
      )}
      {...props}
    >
      {tone === "positive" ? <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} className="size-3.5" /> : null}
      {tone === "negative" ? <HugeiconsIcon icon={ArrowDownRight01Icon} strokeWidth={2} className="size-3.5" /> : null}
      {children}
    </span>
  );
}

/* One figure: what it is, the number, how it moved, and one line of context. */
function Stat({
  label,
  value,
  delta,
  tone = "neutral",
  hint,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  label: React.ReactNode;
  value: React.ReactNode;
  delta?: string;
  tone?: Tone;
  hint?: React.ReactNode;
}) {
  return (
    <div data-slot="stat" className={cn("flex min-w-0 flex-col gap-space-2 bg-surface-primary p-space-4", className)} {...props}>
      <span data-slot="stat-label" className="text-label-13 text-content-secondary">
        {label}
      </span>
      <div className="flex flex-wrap items-baseline gap-x-space-2 gap-y-space-1">
        <span data-slot="stat-value" className="text-heading-24 text-content-primary tabular-nums">
          {value}
        </span>
        {delta ? <StatDelta tone={tone}>{delta}</StatDelta> : null}
      </div>
      {hint ? (
        <span data-slot="stat-hint" className="text-label-12 text-content-tertiary">
          {hint}
        </span>
      ) : null}
    </div>
  );
}

export type { Tone as StatTone };
export { StatGrid, Stat, StatDelta };
