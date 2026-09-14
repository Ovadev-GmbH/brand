import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger
        href="#tenants/acme-logistics"
        className="text-label-13-mono text-content-brand underline-offset-4 hover:underline"
      >
        acme-logistics
      </HoverCardTrigger>
      <HoverCardContent align="start">
        <div className="flex flex-col gap-1">
          <span className="text-label-13">Acme Logistics AG</span>
          <span className="text-copy-13 text-content-secondary">Scale plan, 38 of 40 seats in use.</span>
          <span className="text-label-12-mono text-content-tertiary">ch-zrh-1 · customer since 2025-03-14</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
