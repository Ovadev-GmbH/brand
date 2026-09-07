import { Link } from "react-router";
import type { Entry, PkgId } from "../types";
import { href } from "../registry";
import { StatusBadge } from "./StatusBadge";

/** A card in the package's index: the entry's first example, rendered small
 *  and inert, above its name. Live rather than a screenshot, so it can not
 *  go stale. */
export function Thumb({ pkg, entry }: { pkg: PkgId; entry: Entry }) {
  const first = entry.examples[0];
  const Demo = first?.Component;
  return (
    <Link to={href(pkg, entry.slug)} className="cat-thumb">
      <div className={`cat-thumb__stage ${first?.dark ? "cat-ground--dark" : ""}`} aria-hidden="true">
        <div className="cat-thumb__inner">{Demo ? <Demo /> : null}</div>
      </div>
      <p className="cat-thumb__name">
        {entry.name} {entry.status ? <StatusBadge status={entry.status} /> : null}
      </p>
      <p className="cat-thumb__summary">{entry.summary}</p>
    </Link>
  );
}
