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
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { UnfoldMoreIcon } from "@hugeicons/core-free-icons";

const tables = [
  { name: "T4", detail: "2 seats, free until 21:00" },
  { name: "T9", detail: "6 seats, free all evening" },
  { name: "Terrace 3", detail: "4 seats, free from 20:30" },
];

export default function ItemDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-56 justify-between" />}>
        Move to table
        <HugeiconsIcon icon={UnfoldMoreIcon} strokeWidth={2} data-icon="inline-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {tables.map((table) => (
          <DropdownMenuItem key={table.name}>
            <Item size="xs">
              <ItemContent>
                <ItemTitle>{table.name}</ItemTitle>
                <ItemDescription>{table.detail}</ItemDescription>
              </ItemContent>
            </Item>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
