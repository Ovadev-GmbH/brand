import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-ovadev";

const events = [
  { what: "Rotated sk_live_4f9a…", who: "robin@ova.dev", ago: "4 min ago", at: "2026-09-13T16:44:12+02:00", exact: "2026-09-13 16:44:12 CEST" },
  { what: "Sent INV-2026-0142", who: "philip@ova.dev", ago: "2 h ago", at: "2026-09-13T14:31:05+02:00", exact: "2026-09-13 14:31:05 CEST" },
  { what: "Changed the plan to Scale", who: "system", ago: "yesterday", at: "2026-09-12T09:02:48+02:00", exact: "2026-09-12 09:02:48 CEST" },
];

export default function TooltipExactTime() {
  return (
    <TooltipProvider>
      <ul className="m-0 flex w-96 list-none flex-col p-0">
        {events.map((e) => (
          <li key={e.at} className="flex items-center justify-between gap-4 border-b border-divider py-2 last:border-b-0">
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="text-label-13">{e.what}</span>
              <span className="text-label-12 text-content-tertiary">{e.who}</span>
            </div>
            <Tooltip>
              <TooltipTrigger
                render={<time dateTime={e.at} tabIndex={0} />}
                className="shrink-0 text-label-13 text-content-secondary outline-none focus-visible:ring-1 focus-visible:ring-brand-bright"
              >
                {e.ago}
              </TooltipTrigger>
              <TooltipContent side="left">
                <span className="text-label-12-mono">{e.exact}</span>
              </TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </TooltipProvider>
  );
}
