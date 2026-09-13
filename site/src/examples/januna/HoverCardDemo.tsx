import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ovadev-gmbh/ui-januna";

export default function HoverCardDemo() {
  return (
    <p className="m-0 text-copy-14 text-content-secondary">
      Table 12 is booked for{" "}
      <HoverCard>
        <HoverCardTrigger href="#guests/nora-keller" className="text-content-brand underline-offset-4 hover:underline">
          Nora Keller
        </HoverCardTrigger>
        <HoverCardContent align="start">
          <div className="flex flex-col gap-1">
            <span className="text-heading-14 text-content-primary">Nora Keller</span>
            <span className="text-copy-13 text-content-secondary">Regular since 2023. 14 visits, never a no-show.</span>
            <span className="text-label-12 text-content-tertiary">Prefers the window · Nut allergy</span>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      at 19:30.
    </p>
  );
}
