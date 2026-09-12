import {
  Avatar,
  AvatarFallback,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@ovadev-gmbh/ui-internal";

export default function HoverCardDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <HoverCard>
        <HoverCardTrigger render={<Button variant="link" />}>
          acme-logistics
        </HoverCardTrigger>
        <HoverCardContent align="start">
          <div className="flex items-start gap-3">
            <Avatar>
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="text-label-13">Acme Logistics AG</div>
              <div className="text-copy-13 text-content-secondary">
                Scale plan since 2025-03. 38 of 40 seats in use.
              </div>
              <div className="text-label-12-mono text-content-tertiary">
                ten_8f3a2c · eu-central-1
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
