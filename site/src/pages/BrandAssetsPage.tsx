/* The brand's marks, each as it is, and a download in the format you need;
 * then the social card and the favicon bundle, which are what a site of the
 * brand's actually links. */

import type { Pkg } from "../types";
import { CHROME } from "../brands";
import { AssetCard } from "../components/LogoStudio";
import { OgCard, LANGS } from "../components/OgCard";
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

      <section>
        <SectionHeader title="OG Image" />
        <div className="mt-6 -mx-6 lg:-mx-12">
          {chrome.og ? (
            <Grid cols={2} top>
              {LANGS.map((lang) => (
                <Cell key={lang}>
                  <OgCard file={chrome.og![lang]} lang={lang} brand={pkg.name} />
                </Cell>
              ))}
            </Grid>
          ) : (
            <Grid cols={1} top>
              <Cell>
                <p className="p-8 text-sm text-gray-900">{pkg.name} has no OG image yet.</p>
              </Cell>
            </Grid>
          )}
        </div>
      </section>

      {icon ? (
        <section>
          <SectionHeader title="Favicon" />
          <div className="mt-6 -mx-6 lg:-mx-12">
            <FaviconStudio mark={icon} brand={pkg.id} />
          </div>
        </section>
      ) : null}
    </article>
  );
}
