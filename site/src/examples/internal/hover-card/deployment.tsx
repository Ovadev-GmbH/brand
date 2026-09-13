import { HoverCard, HoverCardContent, HoverCardTrigger, StatusDot } from "@ovadev-gmbh/ui-internal";

const facts = [
  ["Commit", "8e1b3d7"],
  ["Branch", "main"],
  ["Region", "ch-zrh-1"],
  ["Build", "1m 42s"],
  ["Finished", "2026-09-13 14:02 CEST"],
];

export default function HoverCardDeployment() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-label-13 text-content-secondary">Serving production</span>
      <HoverCard>
        <HoverCardTrigger
          href="#deployments/dpl_4f2c91"
          className="text-label-13-mono text-content-brand underline-offset-4 hover:underline"
        >
          dpl_4f2c91
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-72">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-label-13-mono">dpl_4f2c91</span>
              <StatusDot state="ready" label titlePrefix="This deployment" />
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
