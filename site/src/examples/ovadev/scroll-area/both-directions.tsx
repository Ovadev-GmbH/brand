import { ScrollArea, ScrollBar } from "@ovadev-gmbh/ui-ovadev";

const log = [
  "09:00:04.112 INFO  gate     tuerlersee  gate-1 opened by b.frei, scanners s-01 and s-02 online",
  "09:00:31.870 INFO  scan     tuerlersee  T-2026-018231 admitted at gate-1 (day pass, adult, bought online 2026-08-14 21:12)",
  "09:00:33.204 INFO  scan     tuerlersee  T-2026-018232 admitted at gate-1 (day pass, child, same order)",
  "09:01:07.559 INFO  scan     tuerlersee  S-2026-000418 admitted at gate-2 (season pass, adult, 23rd entry this season)",
  "09:01:42.018 WARN  scan     tuerlersee  T-2026-017904 refused at gate-1: already admitted at 2026-08-14 10:22",
  "09:02:15.331 INFO  scan     tuerlersee  T-2026-018240 admitted at gate-2 (day pass, adult, bought at the till 09:01)",
  "09:03:48.902 INFO  till     tuerlersee  till-1 sold 2 × day pass adult, 1 × day pass child, CHF 20.00, TWINT",
  "09:04:02.117 INFO  scan     tuerlersee  T-2026-018241 admitted at gate-1 (day pass, adult, bought at the till 09:03)",
  "09:05:30.640 INFO  count    tuerlersee  84 inside, capacity 1200, 7% (report.ticketova.ch refreshed)",
  "09:12:11.005 INFO  scan     tuerlersee  G-2026-000091 admitted at gate-2 (group, 24 people, Schule Hausen am Albis)",
  "09:12:11.006 INFO  count    tuerlersee  131 inside, capacity 1200, 11%",
  "09:30:00.000 INFO  report   tuerlersee  half-hour summary: 147 admitted, 1 refused, CHF 612.00 sold at the till",
  "09:30:00.412 INFO  report   tuerlersee  summary sent to badi@hausen.ch and to the TICKETOVA report page",
];

export default function ScrollAreaBothDirections() {
  return (
    <ScrollArea className="h-56 w-full max-w-xl bg-surface-quaternary">
      <pre aria-label="Admission log for Badi Türlersee, 2026-08-15" className="w-max p-3 text-label-12-mono">
        {log.join("\n")}
      </pre>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
