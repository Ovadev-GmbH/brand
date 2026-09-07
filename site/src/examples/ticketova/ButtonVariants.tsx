import { Button } from "@ovadev-gmbh/ui-ticketova";

export default function ButtonVariants() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}
