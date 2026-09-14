import type { Entry, Pkg } from "../types";
import { mdHref } from "../registry";
import { Example } from "../components/Example";
import { PageHeader } from "../components/PageHeader";
import { CodeBlock, DocSection, PropsTable, Rich, anchorOf } from "../components/Doc";

/* A component's page. With a doc (site/src/docs/<id>/<slug>.ts) it takes the
   shape shadcn/ui gives its pages: what the component is, the demo, how to
   install and use it, how it is put together, one section per case worth
   showing, and its props. Without one it is the import line and the demos. */
export function EntryPage({ pkg, entry }: { pkg: Pkg; entry: Entry }) {
  const doc = entry.doc;
  const names = entry.imports ?? [entry.name];
  /* One line while it fits, one name per line once it does not, the way a
     formatter would write it. */
  const oneLine = `import { ${names.join(", ")} } from "${pkg.pkg}";`;
  const importLine = oneLine.length <= 80 ? oneLine : `import {\n${names.map((n) => `  ${n},`).join("\n")}\n} from "${pkg.pkg}";`;
  const frame = (index: number) => (pkg.frame ? { pkg: pkg.id, slug: entry.slug, index } : undefined);

  if (entry.kind === "block") {
    const blockLine = `import { ${names.join(", ")} } from "${pkg.pkg}/blocks";`;
    return (
      <article>
        <PageHeader title={entry.name} md={mdHref(pkg, entry.slug)}>
          <p className="mt-3 text-[13px] text-gray-900">
            <code>{blockLine.length <= 80 ? blockLine : `import {\n${names.map((n) => `  ${n},`).join("\n")}\n} from "${pkg.pkg}/blocks";`}</code>
          </p>
        </PageHeader>
        <section className="mt-12">
          {entry.examples.map((ex, i) => (
            <Example key={i} example={ex} anchor={ex.name ?? `example-${i + 1}`} frame={frame(i)} block />
          ))}
        </section>
      </article>
    );
  }

  if (!doc) {
    return (
      <article>
        <PageHeader title={entry.name} md={mdHref(pkg, entry.slug)}>
          <p className="mt-3 text-[13px] text-gray-900">
            <code>{importLine}</code>
          </p>
        </PageHeader>
        <section className="mt-12 max-w-224">
          {entry.examples.map((ex, i) => (
            <Example key={i} example={ex} anchor={`example-${i + 1}`} frame={frame(i)} />
          ))}
        </section>
      </article>
    );
  }

  return (
    <article>
      <PageHeader title={entry.name} md={mdHref(pkg, entry.slug)}>
        <p className="mt-3 max-w-160 text-[15px] text-gray-900">
          <Rich text={doc.description} />
        </p>
      </PageHeader>

      <div className="mt-12 max-w-224">
        <Example example={entry.examples[0]!} anchor="preview" frame={frame(0)} />

        <DocSection title="Installation">
          <p>
            <Rich text={`Add the package; it brings Base UI and the icon set with it. The \`@ovadev-gmbh\` scope is served from GitHub Packages, so the registry needs a token that can read packages.`} />
          </p>
          <CodeBlock lang="bash" code={`bun add ${pkg.pkg}`} />
          <p>Import the stylesheet as the app&rsquo;s Tailwind entry.</p>
          <CodeBlock lang="css" code={`@import "${pkg.pkg}/styles.css";`} />
        </DocSection>

        <DocSection title="Usage">
          <CodeBlock lang="tsx" code={importLine} />
          <CodeBlock lang="tsx" code={doc.usage} />
        </DocSection>

        {doc.composition ? (
          <DocSection title="Composition">
            <p>The parts nest like this:</p>
            <CodeBlock lang="text" code={doc.composition} />
          </DocSection>
        ) : null}

        {doc.sections.map((s) => {
          const index = s.example ? entry.examples.findIndex((e) => e.name === s.example) : -1;
          return (
            <DocSection key={s.title} title={s.title}>
              {s.text ? (
                <p>
                  <Rich text={s.text} />
                </p>
              ) : null}
              {s.code ? <CodeBlock lang="tsx" code={s.code} /> : null}
              {index > 0 ? (
                <Example example={entry.examples[index]!} anchor={`${anchorOf(s.title)}-example`} frame={frame(index)} />
              ) : null}
            </DocSection>
          );
        })}

        {doc.api?.length ? (
          <DocSection title="API Reference">
            {doc.api.map((part) => (
              <div key={part.name} className="flex flex-col gap-3">
                <h3 className="m-0 font-mono text-[15px] font-medium text-gray-1000">{part.name}</h3>
                <p>
                  <Rich text={part.text} />
                </p>
                {part.props?.length ? <PropsTable rows={part.props} /> : null}
              </div>
            ))}
            {doc.links?.api ? (
              <p>
                <Rich text={`Everything else comes from ${doc.links.lib ?? "Base UI"}: [its ${entry.name} API reference](${doc.links.api}).`} />
              </p>
            ) : null}
          </DocSection>
        ) : null}
      </div>
    </article>
  );
}
