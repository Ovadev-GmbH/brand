/* The hairline grid the brand chooser sits in.
 *
 * The rules are the grid's own gaps, not borders on the cells: the section
 * paints itself in the hairline colour, the cells paint themselves back over
 * it, and the 1px gap between them is what is left showing. That is why there
 * is no doubling anywhere — no two elements ever draw the same line, and the
 * outer edge is drawn by whatever the grid sits inside, once. */

import type { CSSProperties, ReactNode } from "react";

export function Grid({ cols = 1, children }: { cols?: number; children: ReactNode }) {
  return (
    <section
      className="grid grid-cols-1 gap-px border-y border-alpha-400 bg-alpha-400 md:grid-cols-(--cols)"
      style={{ "--cols": `repeat(${cols}, minmax(0, 1fr))` } as CSSProperties}
    >
      {children}
    </section>
  );
}

export function Cell({ children }: { children: ReactNode }) {
  return <div className="min-w-0 bg-bg-100">{children}</div>;
}
