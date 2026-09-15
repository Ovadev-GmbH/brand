import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ovadev-gmbh/ui-ticketova";

export default function CardSize() {
  return (
    <Card size="sm" className="w-72">
      <CardHeader>
        <CardTitle>helvetia-labs</CardTitle>
        <CardDescription>Starter plan, ch-zrh-1</CardDescription>
      </CardHeader>
      <CardContent className="flex items-baseline justify-between">
        <span className="text-label-13 text-content-secondary">Seats</span>
        <span className="text-label-13-mono">3 / 5</span>
      </CardContent>
    </Card>
  );
}
