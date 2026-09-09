/* The chooser. Four doors and nothing else: the libraries are standalone, so
   there is no page here that lists components across them. A door is named by
   the package a consumer would install rather than by the brand's wordmark:
   the four capitalise themselves differently enough (INTERN, Ovadev,
   TICKETOVA, Januna) that a row of them reads as noise rather than as four of
   the same kind of thing. */

import { Link } from "react-router";
import { PACKAGES, href } from "../registry";
import { pkgVersion } from "../versions";
import { Grid, Cell } from "../components/Grid";
import { GitHubIcon } from "../components/icons";

export function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-shell flex-col border-x border-alpha-400 bg-bg-100">
      <header className="border-b border-alpha-400 px-6 pt-12 pb-10 md:px-12 md:pt-16">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-[28px] md:text-[44px]">Ovadev Brand</h1>
            <p className="mt-3 max-w-[60ch] text-base text-gray-900 md:text-xl">
              Design systems from{" "}
              <a
                className="underline underline-offset-2 hover:text-gray-1000"
                href="https://ova.dev"
              >
                Ovadev LLC
              </a>
              .
            </p>
          </div>
        </div>
      </header>
      <Grid cols={2}>
        {PACKAGES.map((p) => (
          <Cell key={p.id}>
            <Link
              className="flex h-full flex-col gap-6 bg-bg-100 p-8 text-inherit no-underline transition-colors duration-150 hover:bg-alpha-100"
              to={href(p.id)}
            >
              <p className="font-mono text-base break-all text-gray-1000">{p.pkg}</p>
              <p className="mt-auto font-mono text-xs text-gray-700">v{pkgVersion(p.id)}</p>
            </Link>
          </Cell>
        ))}
      </Grid>
      {/* The colophon sits on the floor of the page, not under the last card.
          The mark is outside the anchor so the rule does not run under it, and
          the pair is set as one word: a space before it, and only the gap the
          glyph needs after. */}
      <p className="mt-auto px-6 pt-8 pb-8 text-[13px] text-gray-700 md:px-12">
        Published on GitHub Packages from{" "}
        <span className="ml-1 inline-flex translate-y-[0.15em] items-center gap-1">
          <GitHubIcon size={14} />
          <a className="underline underline-offset-2 hover:text-gray-1000" href="https://github.com/Ovadev-GmbH/brand">
            Ovadev-GmbH/brand
          </a>
        </span>
        .
      </p>
    </div>
  );
}
