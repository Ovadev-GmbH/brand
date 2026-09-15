/* The brand's marks, each as it is, and a download in the format you need;
 * then the social card and the favicon bundle, which are what a site of the
 * brand's actually links. */

import type { Pkg } from "../types";
import { CHROME } from "../brands";
import { AssetCard } from "../components/LogoStudio";
import { OgCard } from "../components/OgCard";
import { FaviconStudio } from "../components/FaviconStudio";
import { Grid, Cell } from "../components/Grid";
import { PageHeader, SectionHeader } from "../components/PageHeader";
import { mdHref } from "../registry";

export function BrandAssetsPage({ pkg }: { pkg: Pkg }) {
  const chrome = CHROME[pkg.id];
  const marks = chrome.marks ?? [];
  const icon = marks.find((m) => m.kind === "icon");
  return (
    <article>
      <PageHeader title="Brand Assets" md={mdHref(pkg, "brand-assets")} />

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
        <p className="mt-10 text-sm text-gray-900">{pkg.name} has no marks of its own — it wears Ovadev&rsquo;s.</p>
      )}

      <SectionHeader title="OG Image" />
      <p className="mt-2 mb-8 max-w-2xl text-sm text-gray-900">
        What a link to the brand unfurls into on Slack, LinkedIn or iMessage. One fixed drawing per brand, never generated.
      </p>
      <div className="-mx-6 lg:-mx-12">
        <Grid cols={2}>
          <Cell>
            {chrome.og ? (
              <OgCard file={chrome.og} brand={pkg.name} />
            ) : (
              <p className="p-8 text-sm text-gray-900">{pkg.name} has no OG image yet.</p>
            )}
          </Cell>
        </Grid>
      </div>

      {icon ? (
        <>
          <SectionHeader title="Favicon" />
          <p className="mt-2 mb-8 max-w-2xl text-sm text-gray-900">
            The icon as it ships, and the whole set a site needs: favicon.ico and the PNG sizes for the tab, the Apple touch icon and the PWA icons for a home screen.
          </p>
          <div className="-mx-6 lg:-mx-12">
            <Grid cols={1}>
              <Cell>
                <FaviconStudio mark={icon} brand={pkg.id} />
              </Cell>
            </Grid>
          </div>
        </>
      ) : null}
    </article>
  );
}
