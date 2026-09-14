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
} from "@ovadev-gmbh/ui-ovadev";
import { ChevronsUpDownIcon } from "lucide-react";

const pages = [
  { name: "Home", detail: "ova.dev, DE and EN" },
  { name: "About us", detail: "Three people, Baar" },
  { name: "Blog", detail: "15 posts" },
];

export default function ItemDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-56 justify-between" />}>
        Home
        <ChevronsUpDownIcon data-icon="inline-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {pages.map((page) => (
          <DropdownMenuItem key={page.name}>
            <Item size="xs">
              <ItemContent>
                <ItemTitle>{page.name}</ItemTitle>
                <ItemDescription>{page.detail}</ItemDescription>
              </ItemContent>
            </Item>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
