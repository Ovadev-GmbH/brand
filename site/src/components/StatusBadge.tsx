/** Draft or deprecated, next to a name. Its own element rather than the
 *  Design System's Badge, so the catalog has no dependency on it. */
export function StatusBadge({ status }: { status: "draft" | "deprecated" }) {
  return <span className={`cat-status cat-status--${status}`}>{status === "draft" ? "Draft" : "Deprecated"}</span>;
}
