import * as React from "react";
import {
  Badge,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@ovadev-gmbh/ui-januna";

const tables = [
  { name: "T4", detail: "2 seats, set and free until 21:00", state: "Free" },
  { name: "T12", detail: "Party of 6 seated at 19:02", state: "Seated" },
  { name: "Terrace 3", detail: "Being cleared after the 18:00 seating", state: "Clearing" },
];

export default function ItemGroupExample() {
  return (
    <ItemGroup aria-label="Tables in the main room" className="w-full max-w-md gap-0">
      {tables.map((table, i) => (
        <React.Fragment key={table.name}>
          {i > 0 ? <ItemSeparator className="my-0" /> : null}
          <Item role="listitem">
            <ItemContent>
              <ItemTitle>{table.name}</ItemTitle>
              <ItemDescription>{table.detail}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge variant="secondary">{table.state}</Badge>
            </ItemActions>
          </Item>
        </React.Fragment>
      ))}
    </ItemGroup>
  );
}
