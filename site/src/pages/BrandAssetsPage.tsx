/* The brand's marks: each as it is, and a download in the format you need. */

import type { Pkg } from "../types";
import { CHROME } from "../brands";
import { AssetCard } from "../components/LogoStudio";
import { Grid, Cell } from "../components/Grid";

export function BrandAssetsPage({ pkg }: { pkg: Pkg }) {
  const marks = CHROME[pkg.id].marks ?? [];
  return (
    <article>
      <header className="mb-10">
        <h1 className="font-display text-2xl leading-tight md:text-4xl">Brand Assets</h1>
      </header>

      {marks.length ? (
        <div className="-mx-6 lg:-mx-12">
          <Grid cols={2}>
            {marks.map((m) => (
              <Cell key={`${m.file}-${m.kind}`}>
                <AssetCard mark={m} />
              </Cell>
            ))}
          </Grid>
        </div>
      ) : (
        <p className="text-sm text-gray-900">{pkg.name} has no marks of its own — it wears Ovadev&rsquo;s.</p>
      )}
    </article>
  );
}
