import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ovadev-gmbh/ui-ticketova";

export default function CardWithFooter() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Delete tenant</CardTitle>
        <CardDescription>bergwerk-ag and everything in it will be removed after 30 days.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="m-0 flex flex-col gap-1 pl-4 text-copy-13 text-content-secondary">
          <li>4 environments and their deployments</li>
          <li>12 API keys, revoked at once</li>
          <li>Invoices stay available to Ovadev for 10 years</li>
        </ul>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="destructive">Delete bergwerk-ag</Button>
      </CardFooter>
    </Card>
  );
}
