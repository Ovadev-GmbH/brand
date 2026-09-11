import {
  Avatar,
  AvatarFallback,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@ovadev-gmbh/ui-januna";

export default function HoverCardDemo() {
  return (
    <p className="text-sm text-muted-foreground">
      Table 12 is booked for{" "}
      <HoverCard>
        <HoverCardTrigger render={<Button variant="link" className="px-0" />}>
          Nora Keller
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-3">
            <Avatar>
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="font-medium">Nora Keller</p>
              <p className="text-muted-foreground">
                Regular guest since 2023. 14 visits, never a no-show.
              </p>
              <dl className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                <dt className="text-muted-foreground">Last visit</dt>
                <dd>12 Aug, Table 9</dd>
                <dt className="text-muted-foreground">Prefers</dt>
                <dd>Window seats</dd>
                <dt className="text-muted-foreground">Allergies</dt>
                <dd>Nuts</dd>
              </dl>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      at 19:30.
    </p>
  );
}
