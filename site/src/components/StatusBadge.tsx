/** Draft or deprecated, next to a name. Its own element rather than the
 *  Design System's Badge, so the catalog has no dependency on it. */
export function StatusBadge({ status }: { status: "draft" | "deprecated" }) {
  const tone = status === "deprecated" ? "bg-red-100 text-red-700" : "bg-alpha-100 text-gray-900";
  return (
    <span className={`inline-block rounded-full px-2 align-middle text-[11px] leading-[18px] font-normal tracking-normal normal-case ${tone}`}>
      {status === "draft" ? "Draft" : "Deprecated"}
    </span>
  );
}
