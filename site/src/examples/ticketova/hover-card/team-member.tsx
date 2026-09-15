import { Avatar, AvatarFallback, HoverCard, HoverCardContent, HoverCardTrigger } from "@ovadev-gmbh/ui-ticketova";

export default function HoverCardTeamMember() {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-label-13">
        <HoverCard>
          <HoverCardTrigger href="#team/philip" className="text-content-brand underline-offset-4 hover:underline">
            philip@ova.dev
          </HoverCardTrigger>
          <HoverCardContent align="start" className="w-72">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarFallback>PH</AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-label-13">philip@ova.dev</span>
                <span className="text-copy-13 text-content-secondary">Billing admin, two-factor on</span>
                <span className="text-label-12-mono text-content-tertiary">Last active 2026-09-13 16:48 CEST</span>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>{" "}
        changed the plan of bergwerk-ag to Scale.
      </span>
      <span className="text-label-12-mono text-content-tertiary">2026-09-13 16:41 CEST</span>
    </div>
  );
}
