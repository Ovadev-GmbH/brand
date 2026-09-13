import * as React from "react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  StatusDot,
} from "@ovadev-gmbh/ui-januna";

const tables = [
  { name: "T4", detail: "2 seats, set and free until 21:00", state: "ready" },
  { name: "T12", detail: "Party of 6 seated at 19:02", state: "active" },
  { name: "Terrace 3", detail: "Being cleared after the 18:00 seating", state: "pending" },
] as const;

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
              <StatusDot state={table.state} label titlePrefix={table.name} />
            </ItemActions>
          </Item>
        </React.Fragment>
      ))}
    </ItemGroup>
  );
}
