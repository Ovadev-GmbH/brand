/* Every page opens the same way: its name, whatever one line it needs under
 * that, and a rule across the full width of the column — the same rule the
 * introduction and Brand Assets have always had, which used to be the card
 * grid's top edge and is now the header's own.
 *
 * It bleeds past the column's padding, so the rule runs edge to edge while
 * the words stay in the text column. Whatever follows draws only its own
 * bottom edge: no two elements ever draw the same line. */

import type { ReactNode } from "react";

export function PageHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <header className="-mx-6 border-b border-alpha-400 px-6 pb-10 lg:-mx-12 lg:px-12">
      <h1 className="font-display text-2xl leading-tight md:text-4xl">{title}</h1>
      {children}
    </header>
  );
}

/** A group's heading inside a page, ruled the same way so a section opens
 *  exactly like a page does. */
export function SectionHeader({ title, count }: { title: string; count?: number }) {
  return (
    <h2 className="-mx-6 border-b border-alpha-400 px-6 pt-12 pb-4 font-display text-xl lg:-mx-12 lg:px-12">
      {title}
      {count === undefined ? null : (
        <span className="ml-2 font-mono text-[13px] font-normal tracking-normal text-gray-700">{count}</span>
      )}
    </h2>
  );
}
