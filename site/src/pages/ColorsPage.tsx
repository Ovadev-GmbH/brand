/* The brand's palette, read off its token file. Every swatch names the CSS
   custom property a consumer would actually write, so this page is usable as
   a reference and not only as a picture. */

import type { Pkg } from "../types";
import { CHROME } from "../brands";

export function ColorsPage({ pkg }: { pkg: Pkg }) {
  const chrome = CHROME[pkg.id];
  return (
    <article className="cat-page">
      <header className="cat-page__head">
        <h1 className="cat-h1">Colors</h1>
        <p className="cat-sub">
          From <code>{chrome.source}</code>
        </p>
      </header>
      <section className="cat-block">
        <div className="cat-swatches">
          {chrome.swatches.map((s) => (
            <div className="cat-swatch" key={s.token}>
              <div className="cat-swatch__chip" style={{ background: s.value }} />
              <div className="cat-swatch__meta">
                <span className="cat-swatch__name">{s.name}</span>
                <code className="cat-swatch__value">{s.value}</code>
                <code className="cat-swatch__token">{s.token}</code>
                {s.note ? <p className="cat-muted" style={{ margin: "6px 0 0" }}>{s.note}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
