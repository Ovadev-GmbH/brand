/* The brand's marks: each as it is, and a download in the format you need. */

import type { Pkg } from "../types";
import { CHROME } from "../brands";
import { LogoStudio } from "../components/LogoStudio";
import { Grid } from "../components/Grid";

export function BrandAssetsPage({ pkg }: { pkg: Pkg }) {
  const marks = CHROME[pkg.id].marks ?? [];
  return (
    <article>
      <header className="mb-10">
        <h1 className="mb-3 font-display text-2xl leading-tight md:text-4xl">Brand Assets</h1>
        <p className="mt-3 max-w-[62ch] text-base leading-normal text-gray-900 md:text-xl">
          The {pkg.name} marks.
        </p>
      </header>

      {marks.length ? (
        <div className="-mx-6 lg:-mx-12">
          <Grid cols={2}>
            <LogoStudio marks={marks} />
          </Grid>
        </div>
      ) : (
        <p className="text-sm text-gray-900">{pkg.name} has no marks of its own — it wears Ovadev&rsquo;s.</p>
      )}
    </article>
  );
}
