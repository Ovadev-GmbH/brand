import { Section, Button } from "@ovadev-gmbh/ui-internal";

export default function SectionAside() {
  return (
    <Section title="Kontakte" intro="Wer erreichbar ist, und über welchen Kanal." aside={<Button size="sm">Exportieren</Button>}>
      <p>Die Section trägt rechts auf der Titelzeile eine Zahl, einen Schalter oder eine Aktion.</p>
    </Section>
  );
}
