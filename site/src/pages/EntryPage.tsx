import type { Entry, Pkg } from "../types";
import { Example } from "../components/Example";

export function EntryPage({ pkg, entry }: { pkg: Pkg; entry: Entry }) {
  return (
    <article className="max-w-224">
      <header className="mb-10">
        <h1 className="mb-3 font-display text-2xl leading-tight md:text-4xl">{entry.name}</h1>
        <p className="mt-3 max-w-[62ch] text-base leading-normal text-gray-900 md:text-xl">{entry.summary}</p>
        <p className="mt-3 text-[13px] text-gray-900">
          <code>{`import { ${(entry.imports ?? [entry.name]).join(", ")} } from "${pkg.pkg}"`}</code>
        </p>
      </header>
      <section className="mt-12">
        {entry.examples.map((ex, i) => (
          <Example key={i} example={ex} anchor={`example-${i + 1}`} />
        ))}
      </section>
    </article>
  );
}
