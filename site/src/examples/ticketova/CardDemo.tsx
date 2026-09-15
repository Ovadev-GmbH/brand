import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ovadev-gmbh/ui-ticketova";

const figures = [
  { label: "Seats", value: "42 / 50" },
  { label: "Open balance", value: "CHF 1'240.00" },
  { label: "Next invoice", value: "2026-10-01" },
];

export default function CardDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>acme-logistics</CardTitle>
        <CardDescription>Scale plan, billed monthly, ch-zrh-1</CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-3 gap-4">
          {figures.map((figure) => (
            <div key={figure.label} className="flex min-w-0 flex-col gap-1">
              <dt className="text-label-12 text-content-secondary">{figure.label}</dt>
              <dd className="text-label-13-mono">{figure.value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm">
          Open tenant
        </Button>
        <Button variant="ghost" size="sm">
          View invoices
        </Button>
      </CardFooter>
    </Card>
  );
}
