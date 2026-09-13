import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "@ovadev-gmbh/ui-januna";

export default function ItemHeaderFooter() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemHeader>
        <span className="text-label-13 text-content-secondary">Dinner, T12</span>
        <span className="text-label-13-mono text-content-tertiary">19:30</span>
      </ItemHeader>
      <ItemContent>
        <ItemTitle>Anna Keller, party of 6</ItemTitle>
        <ItemDescription>Birthday. One nut allergy, a window seat if possible.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Seat party
        </Button>
      </ItemActions>
      <ItemFooter>
        <span className="text-label-13-mono text-content-secondary">JAN-4821, booked online</span>
        <span className="text-label-13-mono text-content-secondary">CHF 120.00 deposit</span>
      </ItemFooter>
    </Item>
  );
}
