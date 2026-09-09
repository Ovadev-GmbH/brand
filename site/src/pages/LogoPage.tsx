/* The brand's marks, and the studio that dresses them.
 *
 * The same tool the conventions site runs, moved next to the brand it draws:
 * one card per mark, the switches that make a variant, and the download whose
 * filename *is* the naming scheme. There is one file per mark on disk — black
 * artwork on nothing — and every variant is composed from it in the browser,
 * so there is no second file anywhere to fall out of date. */

import type { Pkg } from "../types";
import { CHROME } from "../brands";
import { LogoStudio } from "../components/LogoStudio";
import { Grid, Cell } from "../components/Grid";

export function LogoPage({ pkg }: { pkg: Pkg }) {
  const chrome = CHROME[pkg.id];
  const marks = chrome.marks ?? [];
  return (
    <article>
      <header className="mb-10">
        <h1 className="mb-3 font-display text-2xl leading-tight md:text-4xl">Logo</h1>
        <p className="mt-3 max-w-[62ch] text-base leading-normal text-gray-900 md:text-xl">
          The {pkg.name} marks, and every variant the naming scheme allows. Pick a background, a colour, a padding and a
          corner; the file you get is named for exactly those.
        </p>
      </header>

      {marks.length ? (
        <>
          <section className="mb-10 max-w-224">
            <h2 className="mb-4 font-display text-xl">The name is the variant</h2>
            <pre className="scrollbar-quiet m-0 overflow-auto rounded-brand border border-alpha-400 bg-bg-200 px-5 py-4 text-[13px] leading-relaxed text-gray-1000">
              <code>{`${chrome.letter}_IMG_{LGO|ICO}_{C-DRK|C-WHT}_{BG-NON|BG-DRK|BG-WHT}_{P-0|P-1|P-2}_{R-0|R-1}[_PX-{px}].{svg|png|webp}`}</code>
            </pre>
            <dl className="mt-4 grid grid-cols-[max-content_1fr] gap-x-6 gap-y-1.5 text-sm [&_dd]:m-0 [&_dt]:font-mono [&_dt]:text-gray-900">
              <dt>{chrome.letter}</dt>
              <dd>{pkg.name}. IMG marks every image asset.</dd>
              <dt>C</dt>
              <dd>The mark&rsquo;s ink — black or white, and nothing else yet.</dd>
              <dt>BG</dt>
              <dd>None, black or white. The ground the mark is set on.</dd>
              <dt>P</dt>
              <dd>
                Padding, as a factor of the mark&rsquo;s shorter side, so a wide logo and a square icon get the same
                breathing room. Full padding (P-2) is for an icon that needs to clear a round badge.
              </dd>
              <dt>R</dt>
              <dd>
                Corners. With full padding R-1 is the circle-on-a-square app icon; with less it stays subtle, so the
                corner never clips the mark.
              </dd>
            </dl>
          </section>

          <div className="-mx-6 lg:-mx-12">
            <Grid cols={2}>
              <LogoStudio letter={chrome.letter ?? "X"} marks={marks} />
            </Grid>
          </div>
        </>
      ) : (
        <p className="text-sm text-gray-900">
          {pkg.name} has no marks of its own — it wears Ovadev&rsquo;s.
        </p>
      )}
    </article>
  );
}
