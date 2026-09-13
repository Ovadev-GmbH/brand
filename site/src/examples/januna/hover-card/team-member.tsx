import { Avatar, AvatarFallback, HoverCard, HoverCardContent, HoverCardTrigger } from "@ovadev-gmbh/ui-januna";

export default function HoverCardTeamMember() {
  return (
    <p className="m-0 text-copy-14 text-content-secondary">
      Terrace 3 is served by{" "}
      <HoverCard>
        <HoverCardTrigger href="#team/jonas-meier" className="text-content-brand underline-offset-4 hover:underline">
          Jonas Meier
        </HoverCardTrigger>
        <HoverCardContent align="start">
          <div className="flex items-start gap-3">
            <Avatar>
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-heading-14 text-content-primary">Jonas Meier</span>
              <span className="text-copy-13 text-content-secondary">Server, Terrace section, T1 to T6</span>
              <span className="text-label-12 text-content-tertiary">On shift 17:30 to 23:30 · 22 covers so far</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      tonight.
    </p>
  );
}
