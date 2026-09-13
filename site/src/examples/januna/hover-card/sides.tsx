import { HoverCard, HoverCardContent, HoverCardTrigger, buttonVariants } from "@ovadev-gmbh/ui-januna";

const sides = ["top", "right", "bottom", "left"] as const;

export default function HoverCardSides() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {sides.map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger
            href="#tables/terrace-3"
            className={buttonVariants({ variant: "outline", className: "capitalize" })}
          >
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <span className="text-heading-14">Terrace 3</span>
              <span className="text-copy-13 text-content-secondary">4 seats, heated. Booked tonight at 19:30 and 21:45.</span>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
