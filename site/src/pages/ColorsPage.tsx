/* The brand's palette, read off its token file. Every swatch names the CSS
   custom property a consumer would actually write, so this page is usable as
   a reference and not only as a picture. */

import type { Pkg } from "../types";
import { CHROME } from "../brands";
import { PageHeader } from "../components/PageHeader";

export function ColorsPage({ pkg }: { pkg: Pkg }) {
  const chrome = CHROME[pkg.id];
  return (
    <article>
      <PageHeader title="Colors" />
      <section className="mt-12 max-w-224">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {chrome.swatches.map((s) => (
            <div className="overflow-hidden rounded-brand border border-alpha-400" key={s.token}>
              <div className="h-22" style={{ background: s.value }} />
              <div className="border-t border-alpha-400 px-3 py-2.5">
                <span className="text-[13px] font-semibold text-gray-1000">{s.name}</span>
                <code className="block break-all font-mono text-xs text-gray-900">{s.value}</code>
                <code className="block font-mono text-[11px] text-gray-700">{s.token}</code>
                {s.note ? <p className="mt-1.5 mb-0 text-sm text-gray-900">{s.note}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
