import { Snippet } from "@ovadev-gmbh/ui-januna";

export default function SnippetMultipleLines() {
  return (
    <div className="w-full max-w-xl">
      <Snippet
        text={[
          "bunx januna login",
          "bunx januna restaurants use zum-hirschen",
          "bunx januna bookings export --shift dinner --date 2026-09-13",
        ]}
      />
    </div>
  );
}
