import { Badge, HoverCard, HoverCardContent, HoverCardTrigger } from "@ovadev-gmbh/ui-ovadev";

const facts = [
  ["Author", "Robin"],
  ["Languages", "EN, DE"],
  ["Words", "1'420"],
  ["Reading time", "6 min"],
  ["Published", "2026-09-13 14:02 CEST"],
];

export default function HoverCardDeployment() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-13 text-content-secondary">Latest post</span>
      <HoverCard>
        <HoverCardTrigger
          href="#blog/tuerlersee-season"
          className="text-label-13-mono text-content-brand underline-offset-4 hover:underline"
        >
          tuerlersee-season
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-72">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-label-13-mono">tuerlersee-season</span>
              <Badge variant="secondary">Published</Badge>
            </div>
            <dl className="m-0 flex flex-col gap-1.5">
              {facts.map(([term, value]) => (
                <div key={term} className="flex items-center justify-between gap-4">
                  <dt className="text-label-13 text-content-secondary">{term}</dt>
                  <dd className="m-0 text-label-13-mono">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
