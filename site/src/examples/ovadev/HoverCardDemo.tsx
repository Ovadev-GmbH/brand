import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ovadev-gmbh/ui-ovadev";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger
        href="#customers/tuerlersee"
        className="text-label-13-mono text-content-brand underline-offset-4 hover:underline"
      >
        tuerlersee
      </HoverCardTrigger>
      <HoverCardContent align="start">
        <div className="flex flex-col gap-1">
          <span className="text-label-13">Strandbad Türlersee</span>
          <span className="text-copy-13 text-content-secondary">TICKETOVA shop and admission control, 3 entrances.</span>
          <span className="text-label-12-mono text-content-tertiary">Aeugst am Albis ZH · customer since 2025-03-14</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
