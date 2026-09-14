import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ovadev-gmbh/ui-ovadev";

const figures = [
  { label: "Gates", value: "2" },
  { label: "Tickets, season", value: "77'574" },
  { label: "Season ends", value: "2026-09-20" },
];

export default function CardDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Strandbad Türlersee</CardTitle>
        <CardDescription>TICKETOVA, shop and admission control, Hausen am Albis ZH</CardDescription>
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
          Open shop
        </Button>
        <Button variant="ghost" size="sm">
          Season report
        </Button>
      </CardFooter>
    </Card>
  );
}
