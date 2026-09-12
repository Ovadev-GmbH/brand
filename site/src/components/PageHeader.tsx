/* Every page opens the same way: its name, whatever one line it needs under
 * that, and a rule across the full width of the column — the same rule the
 * introduction and Brand Assets have always had, which used to be the card
 * grid's top edge and is now the header's own.
 *
 * It bleeds past the column's padding, so the rule runs edge to edge while
 * the words stay in the text column. Whatever follows draws only its own
 * bottom edge: no two elements ever draw the same line. */

import type { ReactNode } from "react";

export function PageHeader({ title, md, children }: { title: string; md?: string; children?: ReactNode }) {
  return (
    <header className="-mx-6 border-b border-alpha-400 px-6 pb-10 lg:-mx-12 lg:px-12">
      <div className="flex items-start justify-between gap-6">
        <h1 className="font-display text-2xl leading-tight md:text-4xl">{title}</h1>
        {md ? (
          <a
            href={md}
            className="mt-2 shrink-0 font-mono text-[12px] text-gray-700 no-underline hover:text-gray-1000"
            title="This page as Markdown, for agents"
          >
            .md
          </a>
        ) : null}
      </div>
      {children}
    </header>
  );
}

/** A group's heading inside a page. No rule of its own: the page's header
 *  drew the one line, and a section is set apart by space. */
export function SectionHeader({ title, count }: { title: string; count?: number }) {
  return (
    <h2 className="mt-14 mb-0 font-display text-xl">
      {title}
      {count === undefined ? null : (
        <span className="ml-2 font-mono text-[13px] font-normal tracking-normal text-gray-700">{count}</span>
      )}
    </h2>
  );
}
