import { Button } from "@ovadev-gmbh/ui-ticketova";

export default function ButtonDisabled() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="ghost" disabled>Ghost</Button>
    </div>
  );
}
