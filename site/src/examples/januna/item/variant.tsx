import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@ovadev-gmbh/ui-januna";

const bookings = [
  { variant: "default", guest: "Anna Rossi, party of 4", detail: "Tonight 18:30, T7" },
  { variant: "outline", guest: "Luca Brunner, party of 6", detail: "Tonight 19:00, T12" },
  { variant: "muted", guest: "Nina Weber, party of 2", detail: "Tonight 19:45, Terrace 3" },
] as const;

export default function ItemVariant() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {bookings.map((booking) => (
        <Item key={booking.guest} variant={booking.variant}>
          <ItemContent>
            <ItemTitle>{booking.guest}</ItemTitle>
            <ItemDescription>{booking.detail}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Seat
            </Button>
          </ItemActions>
        </Item>
      ))}
    </div>
  );
}
