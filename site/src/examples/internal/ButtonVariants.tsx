import { Button } from "@ovadev-gmbh/ui-internal";

export default function ButtonVariants() {
  return (
    <div style={{ display: "flex", gap: "var(--ovadev-space-xs)", flexWrap: "wrap" }}>
      <Button variant="solid">Solid</Button>
      <Button>Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="md" variant="solid">Medium</Button>
      <Button disabled>Disabled</Button>
      <Button href="/internal/button">Router-Link</Button>
      <Button href="https://ova.dev" external>Extern</Button>
    </div>
  );
}
