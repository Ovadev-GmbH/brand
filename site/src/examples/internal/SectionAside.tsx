import { Section, Button } from "@ovadev-gmbh/ui-internal";

export default function SectionAside() {
  return (
    <Section title="Contacts" intro="Who can be reached, and through which channel." aside={<Button size="sm">Export</Button>}>
      <p>The section carries a count, a switch or an action on the right of its title line.</p>
    </Section>
  );
}
