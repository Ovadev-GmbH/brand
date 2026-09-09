/* The faces the brand sets its text in, shown at the size they are used at.
   Each row renders in the real family, so a missing font is visible here
   rather than a surprise in an app. */

import type { Pkg } from "../types";
import { CHROME } from "../brands";

export function TypographyPage({ pkg }: { pkg: Pkg }) {
  const chrome = CHROME[pkg.id];
  return (
    <article className="max-w-224">
      <header className="mb-10">
        <h1 className="font-display text-2xl leading-tight md:text-4xl">Typography</h1>
      </header>
      <section className="mt-12">
        {chrome.type.map((t) => (
          <div
            className="flex flex-wrap items-baseline justify-between gap-6 border-b border-alpha-400 py-5"
            key={t.name}
          >
            <span
              className="min-w-0 text-gray-1000"
              style={{ fontFamily: t.family, fontWeight: t.weight, fontSize: t.size, lineHeight: 1.2 }}
            >
              {t.name}
            </span>
            <span className="font-mono text-xs whitespace-nowrap text-gray-700">
              {t.size} · {t.weight} · {t.note}
            </span>
          </div>
        ))}
      </section>
    </article>
  );
}
