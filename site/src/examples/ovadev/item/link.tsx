import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@ovadev-gmbh/ui-ovadev";
import { BriefcaseIcon, ChevronRightIcon } from "lucide-react";

export default function ItemLink() {
  return (
    <Item variant="outline" className="w-full max-w-md" render={<a href="#jobs-engineer" />}>
      <ItemMedia variant="icon">
        <BriefcaseIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Software engineer</ItemTitle>
        <ItemDescription>Baar ZG, 80 to 100 percent, from 2027-01-01</ItemDescription>
      </ItemContent>
      <ItemActions>
        <ChevronRightIcon className="size-4 text-content-tertiary" />
      </ItemActions>
    </Item>
  );
}
