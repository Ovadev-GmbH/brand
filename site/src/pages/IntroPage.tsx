/* A package's front page, in the shape of the Geist introduction: the name and
   one line at the top, how to install it, then its components as cards in the
   hairline grid — one cell each, the component itself on top and its name at
   the foot. The grid runs edge to edge of the content column, which is why it
   is pulled back out of the column's padding. */

import type { Pkg } from "../types";
import { grouped } from "../registry";
import { pkgVersion } from "../versions";
import { CHROME } from "../brands";
import { Thumb } from "../components/Thumb";
import { Grid, Cell } from "../components/Grid";

export function IntroPage({ pkg }: { pkg: Pkg }) {
  const chrome = CHROME[pkg.id];
  return (
    <article>
      <header className="mb-10">
        <h1 className="mb-3 font-display text-2xl leading-tight md:text-4xl">{pkg.name}</h1>
        <p className="mt-3 max-w-[62ch] text-base leading-normal text-gray-900 md:text-xl">{pkg.intro}</p>
      </header>

      <section className="mb-12 max-w-224">
        <h2 className="mb-4 font-display text-xl">Install</h2>
        <pre className="scrollbar-quiet m-0 overflow-auto rounded-brand border border-alpha-400 bg-bg-200 px-5 py-4 text-[13px] leading-relaxed text-gray-1000">
          <code>{`bun add ${pkg.pkg}@${pkgVersion(pkg.id)}\n\nimport { … } from "${pkg.pkg}";\nimport "${pkg.pkg}/styles.css";`}</code>
        </pre>
        <dl className="mt-4 grid grid-cols-[max-content_1fr] gap-x-6 gap-y-1.5 text-sm [&_dd]:m-0 [&_dt]:text-gray-900 [&_a]:text-accent">
          <dt>Version</dt>
          <dd>{pkgVersion(pkg.id)}</dd>
          <dt>Registry</dt>
          <dd>npm.pkg.github.com</dd>
          <dt>Tokens</dt>
          <dd>{chrome.source}</dd>
          <dt>Source</dt>
          <dd>
            <a href={`https://github.com/Ovadev-GmbH/brand/tree/main/packages/${pkg.id}`}>
              Ovadev-GmbH/brand › packages/{pkg.id}
            </a>
          </dd>
        </dl>
      </section>

      {grouped(pkg).map(({ group, entries }) => (
        <section className="mb-12" key={group}>
          <h2 className="mb-4 font-display text-xl">
            {group}{" "}
            <span className="ml-2 font-mono text-[13px] font-normal tracking-normal text-gray-700">
              {entries.length}
            </span>
          </h2>
          <div className="-mx-6 lg:-mx-12">
            <Grid cols={2}>
              {entries.map((e) => (
                <Cell key={e.slug}>
                  <Thumb pkg={pkg.id} entry={e} />
                </Cell>
              ))}
            </Grid>
          </div>
        </section>
      ))}
    </article>
  );
}
