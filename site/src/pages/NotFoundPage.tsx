/* The page that is not here.
 *
 * It is a real page rather than a redirect on purpose: switching brands keeps
 * you on the page you were on, and not every brand has every page — Internal
 * has no Brand Assets. Landing on 404 says that plainly, where being bounced
 * to an introduction would just look like the click went wrong. */

import { Link } from "react-router";
import type { Pkg } from "../types";
import { href } from "../registry";

export function NotFoundPage({ pkg }: { pkg?: Pkg }) {
  return (
    <article>
      <header className="mb-10">
        <h1 className="font-display text-2xl leading-tight md:text-4xl">Not found</h1>
        <p className="mt-3 max-w-[62ch] text-base leading-normal text-gray-900 md:text-xl">
          {pkg ? `${pkg.name} has no such page.` : "There is no such page."}
        </p>
      </header>
      <p className="text-sm">
        <Link className="text-accent underline underline-offset-2" to={pkg ? href(pkg.id) : "/"}>
          {pkg ? `Back to ${pkg.name}` : "Back to the libraries"}
        </Link>
      </p>
    </article>
  );
}
