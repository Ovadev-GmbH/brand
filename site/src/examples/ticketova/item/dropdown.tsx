import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@ovadev-gmbh/ui-ticketova";
import { CaretUpDownIcon } from "@ovadev-gmbh/ui-ticketova/icons";

const tenants = [
  { slug: "acme-logistics", detail: "Scale, ch-zrh-1" },
  { slug: "bergwerk-ag", detail: "Team, eu-central-1" },
  { slug: "helvetia-labs", detail: "Starter, ch-zrh-1" },
];

export default function ItemDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-56 justify-between" />}>
        acme-logistics
        <CaretUpDownIcon data-icon="inline-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {tenants.map((tenant) => (
          <DropdownMenuItem key={tenant.slug}>
            <Item size="xs">
              <ItemContent>
                <ItemTitle>{tenant.slug}</ItemTitle>
                <ItemDescription>{tenant.detail}</ItemDescription>
              </ItemContent>
            </Item>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
