import { Marker, MarkerContent } from "@ovadev-gmbh/ui-januna";

const waitlist = [
  { party: "Brunner, party of 2", waiting: "4 min" },
  { party: "Weber, party of 4", waiting: "12 min" },
  { party: "Walk-in, party of 3", waiting: "18 min" },
];

export default function MarkerBorder() {
  return (
    <div className="flex w-80 flex-col gap-2">
      <Marker variant="border">
        <MarkerContent>Waitlist, 3 parties</MarkerContent>
      </Marker>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {waitlist.map((entry) => (
          <li key={entry.party} className="flex items-baseline justify-between gap-3 text-label-14">
            {entry.party}
            <span className="text-label-13-mono text-content-tertiary">{entry.waiting}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
