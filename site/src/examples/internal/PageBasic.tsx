import { Page, Section } from "@ovadev-gmbh/ui-internal";

export default function PageBasic() {
  return (
    <Page eyebrow="Market · Cantons" title="Zug" lead="Seven lidos, three vendors, one price level." meta="As of 2025-08-31 · Source: lido directory">
      <Section title="Lidos" aside="7 entries" intro="Every lido in the canton, sorted by visitors.">
        <p>Section content.</p>
      </Section>
    </Page>
  );
}
