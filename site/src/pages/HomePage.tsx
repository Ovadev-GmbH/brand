/* The chooser. Four doors and nothing else: the libraries are standalone, so
   there is no page here that lists components across them. Each card wears
   its own brand — the mark is set in that brand's face and accent — which is
   the first thing the site says about them being separate. */

import { Link } from "react-router";
import { PACKAGES, href } from "../registry";
import { CHROME } from "../brands";
import { pkgVersion } from "../props";
import { Grid, Cell } from "../components/Grid";
import { ThemeSwitcher } from "../components/theme";

export function HomePage() {
  return (
    <div className="g-home">
      <header className="g-home__head">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
          <div>
            <h1 className="g-home__title">Ovadev Brand</h1>
            <p className="g-home__lead">Four component libraries, each on its own.</p>
          </div>
          <ThemeSwitcher />
        </div>
      </header>
      <Grid cols={2}>
        {PACKAGES.map((p) => {
          const chrome = CHROME[p.id];
          return (
            <Cell key={p.id}>
              <Link className="g-card" to={href(p.id)} data-brand={p.id}>
                <div className="g-card__stage">
                  <span className="g-home__mark">{chrome.mark}</span>
                </div>
                <div className="g-card__foot">
                  <p className="g-home__pkg">
                    {p.pkg} · v{pkgVersion(p.id)}
                  </p>
                </div>
              </Link>
            </Cell>
          );
        })}
      </Grid>
      <p className="g-home__foot">
        Published on GitHub Packages from{" "}
        <a href="https://github.com/Ovadev-GmbH/brand">Ovadev-GmbH/brand</a>.
      </p>
    </div>
  );
}
