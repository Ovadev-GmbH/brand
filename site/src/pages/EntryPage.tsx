import type { Entry, Pkg } from "../types";
import { Example } from "../components/Example";
import { PropsTable } from "../components/PropsTable";
import { StatusBadge } from "../components/StatusBadge";

export function EntryPage({ pkg, entry }: { pkg: Pkg; entry: Entry }) {
  const propsOf = entry.props ?? [entry.name];
  return (
    <article className="cat-page">
      <header className="cat-page__head">
        <p className="cat-eyebrow">
          {pkg.name} · {entry.group}
        </p>
        <h1 className="cat-h1">
          {entry.name} {entry.status ? <StatusBadge status={entry.status} /> : null}
        </h1>
        <p className="cat-lead">{entry.summary}</p>
        <pre className="cat-code cat-code--inline">
          <code>{`import { ${propsOf.join(", ")} } from "${pkg.pkg}";`}</code>
        </pre>
      </header>
      <section className="cat-block">
        <h2 className="cat-h2">
          Beispiele <span className="cat-count">{entry.examples.length}</span>
        </h2>
        {entry.examples.map((ex, i) => (
          <Example key={i} example={ex} anchor={`beispiel-${i + 1}`} />
        ))}
      </section>
      {propsOf.map((name) => (
        <section className="cat-block" key={name} id={`props-${name.toLowerCase()}`}>
          <h2 className="cat-h2">{name} Props</h2>
          <PropsTable pkg={pkg.id} name={name} />
        </section>
      ))}
    </article>
  );
}
