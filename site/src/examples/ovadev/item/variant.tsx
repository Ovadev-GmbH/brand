import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@ovadev-gmbh/ui-ovadev";

const products = [
  { variant: "default", name: "TICKETOVA", detail: "Online ticketing for pools and venues" },
  { variant: "outline", name: "JANUNA", detail: "Restaurant operations, coming soon" },
  { variant: "muted", name: "Consulting", detail: "A day of reading, then a week of deleting" },
] as const;

export default function ItemVariant() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {products.map((product) => (
        <Item key={product.name} variant={product.variant}>
          <ItemContent>
            <ItemTitle>{product.name}</ItemTitle>
            <ItemDescription>{product.detail}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Open
            </Button>
          </ItemActions>
        </Item>
      ))}
    </div>
  );
}
