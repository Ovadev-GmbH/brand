/* Every component the package exports, as cards in the hairline grid — the
   list that used to sit on the introduction, moved to a page of its own so
   the front door can stay four doors wide. */

import type { Pkg } from "../types";
import { grouped } from "../registry";
import { Thumb } from "../components/Thumb";
import { Grid, Cell } from "../components/Grid";
import { PageHeader, SectionHeader } from "../components/PageHeader";

export function ComponentsPage({ pkg }: { pkg: Pkg }) {
  const groups = grouped(pkg);
  return (
    <article>
      <PageHeader title="Components" />

      {groups.map(({ group, entries }) => (
        <section key={group}>
          <SectionHeader title={group} count={entries.length} />
          <div className="-mx-6 lg:-mx-12">
            <Grid cols={2}>
              {entries.map((e) => (
                <Cell key={e.slug}>
                  <Thumb pkg={pkg} entry={e} />
                </Cell>
              ))}
            </Grid>
          </div>
        </section>
      ))}
    </article>
  );
}
