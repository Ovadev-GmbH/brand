import * as React from "react";
import type { Example as ExampleData } from "../types";

const CaretIcon = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
    <path fill="currentColor" fillRule="evenodd" d="m12.06 6.75-.53.53-2.82 2.82a1 1 0 0 1-1.42 0L4.47 7.28l-.53-.53L5 5.69l.53.53L8 8.69l2.47-2.47.53-.53z" clipRule="evenodd" />
  </svg>
);

/** One example on a component page: the demo on a card, and its source folded
 *  away underneath. The heading is the permalink — there is no separate link
 *  button, and no per-example light/dark switch: the header's theme switcher
 *  already decides that for the whole page.
 *
 *  The stage carries data-demo: styles/demo.css hangs the demos' own
 *  presentation off it, which cannot be utilities because the elements inside
 *  come out of the packages. */
export function Example({ example, anchor }: { example: ExampleData; anchor: string }) {
  const [open, setOpen] = React.useState(false);
  const Demo = example.Component;
  return (
    <section className="mb-10" id={anchor}>
      <h2 className="mb-2 font-display text-xl font-semibold">
        <a className="no-underline hover:underline" href={`#${anchor}`}>
          {example.title}
        </a>
      </h2>
      {example.note ? <p className="mb-4 max-w-[62ch] text-sm leading-normal text-gray-900">{example.note}</p> : null}
      <div className="overflow-hidden rounded-brand border border-alpha-400 bg-bg-100">
        <div data-demo className="scrollbar-quiet min-h-24 overflow-x-auto p-6 [&>*+*]:mt-4">
          <Demo />
        </div>
        <div className="border-t border-alpha-400 bg-bg-200">
          <button
            type="button"
            className="flex h-12 w-full cursor-pointer items-center gap-3 border-0 bg-transparent px-4 text-left text-sm text-gray-900 hover:text-gray-1000"
            aria-expanded={open}
            aria-controls={`${anchor}-code`}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`flex transition-[rotate] duration-100 ${open ? "rotate-0" : "-rotate-90"}`}>
              <CaretIcon />
            </span>
            {open ? "Hide code" : "Show code"}
          </button>
          <div id={`${anchor}-code`} hidden={!open}>
            <pre className="scrollbar-quiet m-0 max-h-128 overflow-auto border-t border-alpha-400 bg-bg-100 p-4 text-[13px] leading-relaxed text-gray-1000">
              <code>{example.source}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
