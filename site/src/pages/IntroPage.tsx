/* A design system's front door, in the shape Geist uses: its name, one line
 * saying what it is, and a grid of its foundations — each a card with a
 * small picture of the thing, its name and one sentence. The components are
 * not a door here: they are the sidebar, one page each.
 *
 * Only the parts that exist say anything. A brand without a foundation has
 * no card for it; nothing is faked. */

import { Link } from "react-router";
import type { Pkg } from "../types";
import { href } from "../registry";
import { CHROME } from "../brands";
import { Grid, Cell } from "../components/Grid";
import { PageHeader } from "../components/PageHeader";
import { MarkRow } from "../components/MarkRow";
import { SwatchRow } from "../components/SwatchRow";
import { DemoFrame } from "../components/DemoFrame";
import { IconGrid, TypePanel, MaterialStack, GridPreview } from "../components/previews";

type Door = { name: string; line: string; to: string; preview?: React.ReactNode };

export function IntroPage({ pkg }: { pkg: Pkg }) {
  const chrome = CHROME[pkg.id];
  const marks = chrome.marks ?? [];
  const at = (slug: string) => `${href(pkg.id)}/${slug}`;

  const doors: Door[] = [
    ...(marks.length ? [{ name: "Brand Assets", line: "The marks, and how to place them.", to: at("brand-assets"), preview: <MarkRow marks={marks} /> }] : []),
    ...(chrome.icons ? [{ name: "Icons", line: chrome.lines?.icons ?? `${chrome.icons.library}, as the components draw it.`, to: at("icons"), preview: <IconGrid icons={chrome.icons} /> }] : []),
    ...(pkg.frame
      ? [{ name: "Components", line: chrome.lines?.components ?? `${pkg.entries.length} building blocks on Base UI.`, to: href(pkg.id, pkg.entries[0]?.slug), preview: <DemoFrame pkg={pkg.id} slug="intro" index={0} thumb /> }]
      : []),
    {
      name: "Colors",
      line: chrome.lines?.colors ?? "The brand's palette.",
      to: at("colors"),
      preview: <SwatchRow swatches={chrome.swatches} />,
    },
    {
      name: "Typography",
      line: chrome.lines?.typography ?? "The brand's faces.",
      to: at("typography"),
      preview: chrome.typography ? <TypePanel type={chrome.typography} /> : undefined,
    },
    ...(chrome.materials ? [{ name: "Materials", line: "Radius, stroke and shadow, by elevation.", to: at("materials"), preview: <MaterialStack materials={chrome.materials} /> }] : []),
    ...(chrome.layout ? [{ name: "Layout", line: "Spacing, corners and motion.", to: at("layout"), preview: <GridPreview layout={chrome.layout} /> }] : []),
  ];

  return (
    <article>
      <PageHeader title={`${pkg.name} Design System`} />

      <div className="-mx-6 lg:-mx-12">
        <Grid cols={2}>
          {doors.map((d, i) => (
            <Cell key={d.name} tone={(i + Math.floor(i / 2)) % 2 ? "200" : "100"}>
              <Link
                to={d.to}
                className="flex h-full flex-col gap-8 p-8 text-inherit no-underline transition-colors duration-150 hover:bg-alpha-100 lg:p-10"
              >
                <div className="pointer-events-none flex min-h-32 select-none items-center justify-center">
                  {d.preview ?? null}
                </div>
                <div className="mt-auto">
                  <p className="m-0 text-base font-semibold text-gray-1000">{d.name}</p>
                  <p className="mt-0.5 mb-0 text-sm text-gray-900">{d.line}</p>
                </div>
              </Link>
            </Cell>
          ))}
        </Grid>
      </div>
    </article>
  );
}
