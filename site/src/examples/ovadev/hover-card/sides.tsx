import { HoverCard, HoverCardContent, HoverCardTrigger, buttonVariants } from "@ovadev-gmbh/ui-ovadev";

const sides = ["top", "right", "bottom", "left"] as const;

export default function HoverCardSides() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {sides.map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger href="#contact" className={buttonVariants({ variant: "outline", className: "capitalize" })}>
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <span className="text-label-13-mono">6340 Baar</span>
              <span className="text-copy-13 text-content-secondary">Ovadev GmbH, canton Zug, three people.</span>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
