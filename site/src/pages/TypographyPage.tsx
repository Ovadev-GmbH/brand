/* The faces the brand sets its text in, shown at the size they are used at.
   Each row renders in the real family, so a missing font is visible here
   rather than a surprise in an app. */

import type { Pkg } from "../types";
import { CHROME } from "../brands";

export function TypographyPage({ pkg }: { pkg: Pkg }) {
  const chrome = CHROME[pkg.id];
  return (
    <article className="cat-page">
      <header className="cat-page__head">
        <h1 className="cat-h1">Typography</h1>
        <p className="cat-sub">
          From <code>{chrome.source}</code>
        </p>
      </header>
      <section className="cat-block">
        {chrome.type.map((t) => (
          <div className="cat-typerow" key={t.name}>
            <span
              className="cat-typerow__sample"
              style={{ fontFamily: t.family, fontWeight: t.weight, fontSize: t.size, lineHeight: 1.2 }}
            >
              {t.name}
            </span>
            <span className="cat-typerow__meta">
              {t.size} · {t.weight} · {t.note}
            </span>
          </div>
        ))}
      </section>
    </article>
  );
}
