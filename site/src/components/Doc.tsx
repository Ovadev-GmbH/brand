/* The pieces a documented component page is written with: running text that
 * may carry `code` and links, a code block with a copy button, a titled
 * section with an anchor, and a props table. */

import * as React from "react";
import { Link } from "react-router";

/** `code` spans and [label](/path) links inside a sentence. A path starting
 *  with / is a catalog page and goes through the router. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={i} className="rounded-brand bg-alpha-100 px-1 py-px font-mono text-[0.9em] text-gray-1000">
              {part.slice(1, -1)}
            </code>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, to] = link;
          const cls = "text-gray-1000 underline underline-offset-2 hover:text-gray-900";
          return to!.startsWith("/") ? (
            <Link key={i} to={to!} className={cls}>
              {label}
            </Link>
          ) : (
            <a key={i} href={to} className={cls}>
              {label}
            </a>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}

export function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <div className="overflow-hidden rounded-brand border border-alpha-400 bg-bg-100">
      <div className="flex h-9 items-center justify-between border-b border-alpha-400 bg-bg-200 pr-2 pl-4 font-mono text-[12px] text-gray-700">
        <span>{lang}</span>
        <button
          type="button"
          className="h-7 cursor-pointer rounded-brand border-0 bg-transparent px-2 font-mono text-[12px] text-gray-900 hover:bg-alpha-100 hover:text-gray-1000"
          onClick={() => {
            void navigator.clipboard.writeText(code.trim());
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="scrollbar-quiet m-0 overflow-auto p-4 text-[13px] leading-relaxed text-gray-1000">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

export const anchorOf = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** A titled part of the page. Its heading is an anchor, so a section can be
 *  linked to directly. */
export function DocSection({ title, children }: { title: string; children: React.ReactNode }) {
  const id = anchorOf(title);
  return (
    <section id={id} className="mt-14 scroll-mt-20">
      <h2 className="m-0 font-display text-xl">
        <a href={`#${id}`} className="text-inherit no-underline hover:underline hover:underline-offset-4">
          {title}
        </a>
      </h2>
      <div className="mt-4 flex flex-col gap-4 text-[15px] text-gray-900 [&_p]:m-0 [&_p]:max-w-160">{children}</div>
    </section>
  );
}

export function PropsTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="scrollbar-quiet overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-alpha-400 text-left text-[13px] text-gray-900">
            <th className="h-9 pr-4 font-medium">Prop</th>
            <th className="h-9 pr-4 font-medium">Type</th>
            <th className="h-9 font-medium">Default</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([prop, type, fallback]) => (
            <tr key={prop} className="border-b border-alpha-400 last:border-b-0 align-top">
              <td className="py-3 pr-4 font-mono text-[13px] whitespace-nowrap text-gray-1000">{prop}</td>
              <td className="py-3 pr-4 font-mono text-[13px] text-gray-900">{type}</td>
              <td className="py-3 font-mono text-[13px] whitespace-nowrap text-gray-900">{fallback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
