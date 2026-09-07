import { Stats } from "@ovadev-gmbh/ui-internal";

export default function StatsRow() {
  return (
    <Stats
      items={[
        { value: "1 064", label: "Lidos", caption: "verified" },
        { value: "207 500", label: "Visitors", caption: "Summer 2025", tone: "green" },
        { value: "26", label: "Cantons", href: "/internal/stats", tone: "blue" },
        { value: "3", label: "Open", caption: "no reply yet", tone: "red" },
      ]}
    />
  );
}
