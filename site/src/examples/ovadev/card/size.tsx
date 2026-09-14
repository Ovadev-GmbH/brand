import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ovadev-gmbh/ui-ovadev";

export default function CardSize() {
  return (
    <Card size="sm" className="w-72">
      <CardHeader>
        <CardTitle>Hallenbad Baar</CardTitle>
        <CardDescription>TICKETOVA, Baar ZG</CardDescription>
      </CardHeader>
      <CardContent className="flex items-baseline justify-between">
        <span className="text-label-13 text-content-secondary">Gates open</span>
        <span className="text-label-13-mono">2 / 3</span>
      </CardContent>
    </Card>
  );
}
