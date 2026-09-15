import { HoverCard, HoverCardContent, HoverCardTrigger, buttonVariants } from "@ovadev-gmbh/ui-ticketova";

const sides = ["top", "right", "bottom", "left"] as const;

export default function HoverCardSides() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {sides.map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger href="#regions/ch-zrh-1" className={buttonVariants({ variant: "outline", className: "capitalize" })}>
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <span className="text-label-13-mono">ch-zrh-1</span>
              <span className="text-copy-13 text-content-secondary">Zurich, 3 availability zones, 214 tenants.</span>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
