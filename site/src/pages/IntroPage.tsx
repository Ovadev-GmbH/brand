/* A design system's front door, in the shape Geist uses: its name, one line
   saying what it is, and a grid of the parts it is made of.
 *
 * Only the parts that exist say anything. A section that has not been built
 * yet is a card with an empty stage and a page behind it that says so — not a
 * card dressed up to look finished. Things get added; nothing gets faked. */

import { Link } from "react-router";
import type { Pkg } from "../types";
import { grouped, href } from "../registry";
import { CHROME } from "../brands";
import { Grid, Cell } from "../components/Grid";
import { MarkRow } from "../components/MarkRow";

/** Each door says only how much is behind it. A sentence per card would be
 *  four different sentences to keep true; a count keeps itself. */
type Section = { name: string; blurb: string; to: string; preview?: React.ReactNode };

export function IntroPage({ pkg }: { pkg: Pkg }) {
  const chrome = CHROME[pkg.id];
  const marks = chrome.marks ?? [];
  const components = grouped(pkg).reduce((n, g) => n + g.entries.length, 0);

  const sections: Section[] = [
    ...(marks.length
      ? [
          {
            name: "Brand Assets",
            blurb: `${marks.length} marks`,
            to: `${href(pkg.id)}/brand-assets`,
            preview: <MarkRow marks={marks} />,
          },
        ]
      : []),
    { name: "Colors", blurb: `${chrome.swatches.length} values`, to: `${href(pkg.id)}/colors` },
    { name: "Typeface", blurb: `${chrome.type.length} faces`, to: `${href(pkg.id)}/typography` },
    { name: "Components", blurb: `${components} components`, to: `${href(pkg.id)}/components` },
  ];

  return (
    <article>
      <header className="mb-10">
        <h1 className="font-display text-2xl leading-tight md:text-4xl">{pkg.name} Design System</h1>
      </header>

      <div className="-mx-6 lg:-mx-12">
        <Grid cols={2}>
          {sections.map((s) => (
            <Cell key={s.name}>
              <Link
                to={s.to}
                className="flex h-full flex-col gap-6 p-8 text-inherit no-underline transition-colors duration-150 hover:bg-alpha-100"
              >
                <div className="pointer-events-none flex min-h-24 select-none items-center justify-center overflow-hidden">
                  {s.preview ?? null}
                </div>
                <div className="mt-auto">
                  <p className="text-base font-semibold text-gray-1000">{s.name}</p>
                  <p className="mt-0.5 text-sm text-gray-900">{s.blurb}</p>
                </div>
              </Link>
            </Cell>
          ))}
        </Grid>
      </div>
    </article>
  );
}
