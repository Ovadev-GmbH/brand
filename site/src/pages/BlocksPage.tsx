/* The brand's blocks, the way shadcn shows its own: one page, the categories
 * in the sidebar (components/Shell.tsx), and every block full-width under a toolbar of
 * its own — its name and one line, a way to look at it as a tablet or a
 * phone would, the code behind it, a copy button, and the screen on its own
 * in a new tab. Nothing here is a component page: a block is a screen, and a
 * screen wants the whole column. */

import * as React from "react";
import { useSearchParams } from "react-router";
import type { Entry, Example, Pkg } from "../types";
import { mdHref } from "../registry";
import { DemoFrame } from "../components/DemoFrame";
import { PageHeader } from "../components/PageHeader";

const VIEWPORTS = [
  { id: "desktop", name: "Desktop", width: undefined },
  { id: "tablet", name: "Tablet", width: 768 },
  { id: "phone", name: "Phone", width: 390 },
] as const;
type Viewport = (typeof VIEWPORTS)[number]["id"];

export function BlocksPage({ pkg }: { pkg: Pkg }) {
  const blocks = pkg.entries.filter((e) => e.kind === "block");
  const [params] = useSearchParams();
  const current = params.get("block");
  const shown = current ? blocks.filter((b) => b.slug === current) : blocks;

  return (
    <article>
      <PageHeader title="Blocks" md={mdHref(pkg, "blocks")}>
        <p className="mt-3 max-w-160 text-[15px] text-gray-900">
          Whole screens from the components. Each one is a file you copy into the app; every part of it comes from{" "}
          <code className="font-mono text-[13px]">{pkg.pkg}/blocks</code>.
        </p>
      </PageHeader>

      <div className="mt-10 flex flex-col gap-16">
        {shown.flatMap((block) => block.examples.map((ex, i) => <BlockCard key={`${block.slug}/${i}`} pkg={pkg} block={block} example={ex} index={i} />))}
      </div>
    </article>
  );
}

function BlockCard({ pkg, block, example, index }: { pkg: Pkg; block: Entry; example: Example; index: number }) {
  const [viewport, setViewport] = React.useState<Viewport>("desktop");
  const [view, setView] = React.useState<"preview" | "code">("preview");
  const [copied, setCopied] = React.useState(false);
  const width = VIEWPORTS.find((v) => v.id === viewport)!.width;
  const id = `${block.slug}-${example.name ?? index}`;
  const names = block.imports ?? [block.name];
  const importLine = `import { ${names.join(", ")} } from "${pkg.pkg}/blocks";`;
  const standalone = `${import.meta.env.BASE_URL}preview-${pkg.id}.html?pkg=${pkg.id}&slug=${block.slug}&i=${index}`;

  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div className="min-w-0">
          <p className="m-0 font-mono text-[11px] tracking-wider text-gray-700 uppercase">{block.name}</p>
          <h2 className="mt-1 mb-0 font-display text-xl">
            <a href={`#${id}`} className="text-inherit no-underline">
              {example.title}
            </a>
          </h2>
          {example.description ? <p className="mt-1 mb-0 max-w-160 text-sm text-gray-900">{example.description}</p> : null}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Segment>
            {VIEWPORTS.map((v) => (
              <SegmentButton key={v.id} active={viewport === v.id} onClick={() => setViewport(v.id)}>
                {v.name}
              </SegmentButton>
            ))}
          </Segment>
          <Segment>
            <SegmentButton active={view === "preview"} onClick={() => setView("preview")}>
              Preview
            </SegmentButton>
            <SegmentButton active={view === "code"} onClick={() => setView("code")}>
              Code
            </SegmentButton>
          </Segment>
          <Action
            onClick={() => {
              void navigator.clipboard.writeText(example.source.trim());
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            {copied ? "Copied" : "Copy code"}
          </Action>
          <Action href={standalone}>Open ↗</Action>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-brand border border-alpha-400 bg-bg-100">
        {view === "preview" ? (
          <div className={`bg-checker ${width ? "flex justify-center" : ""}`}>
            <DemoFrame pkg={pkg.id} slug={block.slug} index={index} min={480} width={width} />
          </div>
        ) : (
          <div>
            <div className="flex h-9 items-center border-b border-alpha-400 bg-bg-200 px-4 font-mono text-[12px] text-gray-700">
              {importLine}
            </div>
            <pre className="scrollbar-quiet m-0 max-h-160 overflow-auto p-4 text-[13px] leading-relaxed text-gray-1000">
              <code>{example.source.trim()}</code>
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}

function Segment({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-0.5 rounded-brand bg-bg-200 p-0.5 shadow-border">{children}</div>;
}

function SegmentButton({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`h-7 cursor-pointer rounded-brand border-0 px-2.5 text-[12px] ${active ? "bg-bg-100 text-gray-1000 shadow-border" : "bg-transparent text-gray-900 hover:text-gray-1000"}`}
    >
      {children}
    </button>
  );
}

function Action({ href, onClick, children }: { href?: string; onClick?: () => void; children: React.ReactNode }) {
  const cls = "inline-flex h-8 cursor-pointer items-center rounded-brand border-0 bg-bg-200 px-3 text-[12px] text-gray-900 no-underline shadow-border hover:bg-alpha-100 hover:text-gray-1000";
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
