import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ovadev-gmbh/ui-januna";

export default function CardWithFooter() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Close the terrace tonight</CardTitle>
        <CardDescription>Rain from 19:00. Every terrace booking needs a table inside or a cancellation.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="m-0 flex flex-col gap-1 pl-4 text-copy-14 text-content-secondary">
          <li>8 bookings for 26 covers lose their table</li>
          <li>3 deposits of CHF 360.00 in total stay held</li>
          <li>Each guest gets an SMS once their booking is moved</li>
        </ul>
      </CardContent>
      <CardFooter className="justify-end border-t border-divider">
        <Button variant="destructive">Close terrace</Button>
      </CardFooter>
    </Card>
  );
}
