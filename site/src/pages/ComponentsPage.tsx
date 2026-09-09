/* Every component the package exports, as cards in the hairline grid — the
   list that used to sit on the introduction, moved to a page of its own so
   the front door can stay four doors wide. */

import type { Pkg } from "../types";
import { grouped } from "../registry";
import { Thumb } from "../components/Thumb";
import { Grid, Cell } from "../components/Grid";

export function ComponentsPage({ pkg }: { pkg: Pkg }) {
  const groups = grouped(pkg);
  return (
    <article>
      <header className="mb-10">
        <h1 className="font-display text-2xl leading-tight md:text-4xl">Components</h1>
      </header>

      {groups.map(({ group, entries }) => (
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
