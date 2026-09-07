import { Page, Section } from "@ovadev-gmbh/ui-internal";

export default function PageBasic() {
  return (
    <Page eyebrow="Market · Kantone" title="Zug" lead="Sieben Badis, drei Anbieter, ein Preisniveau." meta="Stand 2025-08-31 · Quelle: Badi-Verzeichnis">
      <Section title="Badis" aside="7 Einträge" intro="Alle Badis im Kanton, sortiert nach Besuchern.">
        <p>Inhalt der Section.</p>
      </Section>
    </Page>
  );
}
