import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@ovadev-gmbh/ui-ticketova";

const tenants = [
  { variant: "default", slug: "acme-logistics", detail: "Scale plan, ch-zrh-1" },
  { variant: "outline", slug: "bergwerk-ag", detail: "Team plan, eu-central-1" },
  { variant: "muted", slug: "helvetia-labs", detail: "Starter plan, ch-zrh-1" },
] as const;

export default function ItemVariant() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {tenants.map((tenant) => (
        <Item key={tenant.slug} variant={tenant.variant}>
          <ItemContent>
            <ItemTitle>{tenant.slug}</ItemTitle>
            <ItemDescription>{tenant.detail}</ItemDescription>
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
