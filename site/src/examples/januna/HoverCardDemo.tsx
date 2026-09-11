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
    <p className="text-copy-14 text-content-secondary">
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
              <p className="text-label-14 font-medium">Nora Keller</p>
              <p className="text-copy-13 text-content-secondary">
                Regular guest since 2023. 14 visits, never a no-show.
              </p>
              <dl className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1 text-label-12">
                <dt className="text-content-secondary">Last visit</dt>
                <dd>12 Aug, Table 9</dd>
                <dt className="text-content-secondary">Prefers</dt>
                <dd>Window seats</dd>
                <dt className="text-content-secondary">Allergies</dt>
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
