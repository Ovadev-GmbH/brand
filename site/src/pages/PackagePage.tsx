import type { Pkg } from "../types";
import { grouped } from "../registry";
import { pkgVersion } from "../props";
import { Thumb } from "../components/Thumb";

export function PackagePage({ pkg }: { pkg: Pkg }) {
  return (
    <article className="cat-page">
      <header className="cat-page__head">
        <p className="cat-eyebrow">{pkg.pkg}</p>
        <h1 className="cat-h1">{pkg.name}</h1>
        <p className="cat-lead">{pkg.intro}</p>
      </header>
      <section className="cat-block">
        <h2 className="cat-h2">Installieren</h2>
        <pre className="cat-code">
          <code>{`bun add ${pkg.pkg}@${pkgVersion(pkg.id)}\n\nimport { … } from "${pkg.pkg}";\nimport "${pkg.pkg}/styles.css";`}</code>
        </pre>
        <dl className="cat-dl">
          <dt>Version</dt>
          <dd>{pkgVersion(pkg.id)}</dd>
          <dt>Registry</dt>
          <dd>npm.pkg.github.com</dd>
          <dt>Quelle</dt>
          <dd>
            <a href={`https://github.com/Ovadev-GmbH/brand/tree/main/packages/${pkg.id}`}>Ovadev-GmbH/brand › packages/{pkg.id}</a>
          </dd>
        </dl>
      </section>
      {grouped(pkg).map(({ group, entries }) => (
        <section className="cat-block" key={group}>
          <h2 className="cat-h2">
            {group} <span className="cat-count">{entries.length}</span>
          </h2>
          <div className="cat-grid">
            {entries.map((e) => (
              <Thumb key={e.slug} pkg={pkg.id} entry={e} />
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
