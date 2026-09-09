/* The hairline grid the cards sit in.
 *
 * The rules are the grid's own gaps, not borders on the cells: the section
 * paints itself in the hairline colour, the cells paint themselves back over
 * it, and the 1px gap between them is what is left showing. That is why there
 * is no doubling anywhere — no two elements ever draw the same line, and the
 * outer edge is drawn by whatever the grid sits inside, once.
 *
 * The outer rules are the same hairline colour as that fill, so the fill has
 * to stop at the padding edge (bg-clip-padding): a background runs under its
 * own border by default, and two coats of a translucent grey read as a rule
 * twice as heavy as the gaps it is supposed to match.
 *
 * It follows that a half-filled last row would show the hairline colour across
 * the whole gap, so the grid fills the row out with empty cells. Counting them
 * means every child has to be one Cell: hand it a fragment or a component that
 * expands to several and the count is wrong, which buys a phantom row whose
 * gap lands on the section's own bottom rule and reads as a 2px line. */

import * as React from "react";
import type { CSSProperties, ReactNode } from "react";

export function Grid({ cols = 1, children }: { cols?: number; children: ReactNode }) {
  const count = React.Children.count(children);
  const missing = count % cols === 0 ? 0 : cols - (count % cols);
  return (
    <section
      className="grid grid-cols-1 gap-px border-y border-alpha-400 bg-alpha-400 bg-clip-padding md:grid-cols-(--cols)"
      style={{ "--cols": `repeat(${cols}, minmax(0, 1fr))` } as CSSProperties}
    >
      {children}
      {Array.from({ length: missing }, (_, i) => (
        <Cell key={`filler-${i}`} />
      ))}
    </section>
  );
}

export function Cell({ children }: { children?: ReactNode }) {
  return <div className="min-w-0 bg-bg-100">{children}</div>;
}
