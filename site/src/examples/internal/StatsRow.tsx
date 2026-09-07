import { Stats } from "@ovadev-gmbh/ui-internal";

export default function StatsRow() {
  return (
    <Stats
      items={[
        { value: "1 064", label: "Badis", caption: "verifiziert" },
        { value: "207 500", label: "Besucher", caption: "Sommer 2025", tone: "green" },
        { value: "26", label: "Kantone", href: "/internal/stats", tone: "blue" },
        { value: "3", label: "Offen", caption: "ohne Antwort", tone: "red" },
      ]}
    />
  );
}
