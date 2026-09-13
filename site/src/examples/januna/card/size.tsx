import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ovadev-gmbh/ui-januna";

export default function CardSize() {
  return (
    <Card size="sm" className="w-72">
      <CardHeader>
        <CardTitle>Terrace 3</CardTitle>
        <CardDescription>4 seats, outside under the awning</CardDescription>
      </CardHeader>
      <CardContent className="flex items-baseline justify-between">
        <span className="text-label-13 text-content-secondary">Free until</span>
        <span className="text-label-13-mono">20:30</span>
      </CardContent>
    </Card>
  );
}
