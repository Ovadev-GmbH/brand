/* The hairline grid the brand chooser and the introduction sit in: cells
   separated by 1px rules, with a small cross at each corner of the block.
   It is decoration, but it is the decoration that makes a page of cards read
   as one drawing rather than four boxes. */

import type { ReactNode } from "react";

export function Crosses() {
  return (
    <>
      <span className="g-cross g-cross--tl" aria-hidden="true" />
      <span className="g-cross g-cross--tr" aria-hidden="true" />
      <span className="g-cross g-cross--bl" aria-hidden="true" />
      <span className="g-cross g-cross--br" aria-hidden="true" />
    </>
  );
}

export function Grid({ cols = 1, flush = false, crosses = true, children }: { cols?: number; flush?: boolean; crosses?: boolean; children: ReactNode }) {
  return (
    <section className={`g-grid ${flush ? "g-grid--flush" : ""}`} style={{ ["--cols" as string]: cols }}>
      {children}
      {crosses ? <Crosses /> : null}
    </section>
  );
}

export function Cell({ children }: { children: ReactNode }) {
  return <div className="g-grid__cell">{children}</div>;
}
