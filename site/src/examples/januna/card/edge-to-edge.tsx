import { Button, Card, CardAction, CardContent, CardHeader, CardTitle } from "@ovadev-gmbh/ui-januna";

const waitlist = [
  { party: "Brunner, party of 2", note: "Bar seats are fine", waiting: "4 min" },
  { party: "Weber, party of 4", note: "Terrace or inside", waiting: "12 min" },
  { party: "Walk-in, party of 3", note: "One high chair", waiting: "18 min" },
];

export default function CardEdgeToEdge() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Waitlist</CardTitle>
        <CardAction>
          <Button variant="ghost" size="sm">
            View all
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="-mb-(--card-spacing) px-0">
        <ul className="m-0 list-none p-0">
          {waitlist.map((entry) => (
            <li
              key={entry.party}
              className="flex items-baseline justify-between gap-3 border-t border-divider px-(--card-spacing) py-3"
            >
              <span className="flex flex-col">
                <span className="text-label-14">{entry.party}</span>
                <span className="text-label-13 text-content-secondary">{entry.note}</span>
              </span>
              <span className="text-label-13-mono">{entry.waiting}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
