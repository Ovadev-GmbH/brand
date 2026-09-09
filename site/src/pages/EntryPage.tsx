import type { Entry, Pkg } from "../types";
import { Example } from "../components/Example";
import { PageHeader } from "../components/PageHeader";

export function EntryPage({ pkg, entry }: { pkg: Pkg; entry: Entry }) {
  return (
    <article>
      <PageHeader title={entry.name}>
        <p className="mt-3 text-[13px] text-gray-900">
          <code>{`import { ${(entry.imports ?? [entry.name]).join(", ")} } from "${pkg.pkg}"`}</code>
        </p>
      </PageHeader>
      <section className="mt-12 max-w-224">
        {entry.examples.map((ex, i) => (
          <Example key={i} example={ex} anchor={`example-${i + 1}`} />
        ))}
      </section>
    </article>
  );
}
