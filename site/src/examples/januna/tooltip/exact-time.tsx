import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ovadev-gmbh/ui-januna";

const waitlist = [
  { party: "Keller, party of 2", quoted: "15 min", ago: "4 min ago", at: "2026-09-13T19:54:00+02:00", exact: "Sun 13 Sep 2026, 19:54" },
  { party: "Brunner, party of 4", quoted: "25 min", ago: "12 min ago", at: "2026-09-13T19:46:00+02:00", exact: "Sun 13 Sep 2026, 19:46" },
  { party: "Haddad, party of 3", quoted: "30 min", ago: "31 min ago", at: "2026-09-13T19:27:00+02:00", exact: "Sun 13 Sep 2026, 19:27" },
];

export default function TooltipExactTime() {
  return (
    <TooltipProvider>
      <ul className="m-0 flex w-full max-w-sm list-none flex-col p-0">
        {waitlist.map((w) => (
          <li key={w.at} className="flex items-center justify-between gap-4 border-b border-divider py-2.5 last:border-b-0">
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="text-label-14">{w.party}</span>
              <span className="text-label-12 text-content-tertiary">Quoted {w.quoted}</span>
            </div>
            <Tooltip>
              <TooltipTrigger
                render={<time dateTime={w.at} tabIndex={0} />}
                className="shrink-0 rounded-small text-label-13 text-content-secondary outline-none focus-visible:ring-1 focus-visible:ring-brand-bright"
              >
                Added {w.ago}
              </TooltipTrigger>
              <TooltipContent side="left">
                <span className="text-label-12-mono">{w.exact}</span>
              </TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </TooltipProvider>
  );
}
