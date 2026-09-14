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
} from "@ovadev-gmbh/ui-ovadev";

const services = [
  { name: "Website", host: "ova.dev", state: "Up", variant: "secondary" },
  { name: "TICKETOVA shop", host: "shop.ticketova.ch", state: "Up", variant: "secondary" },
  { name: "Admission control", host: "gate.ticketova.ch", state: "Down", variant: "destructive" },
] as const;

export default function ItemGroupExample() {
  return (
    <ItemGroup aria-label="Status of ova.dev services" className="w-full max-w-md gap-0">
      {services.map((env, i) => (
        <React.Fragment key={env.name}>
          {i > 0 ? <ItemSeparator className="my-0" /> : null}
          <Item role="listitem">
            <ItemContent>
              <ItemTitle>{env.name}</ItemTitle>
              <ItemDescription className="text-label-12-mono">{env.host}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge variant={env.variant}>{env.state}</Badge>
            </ItemActions>
          </Item>
        </React.Fragment>
      ))}
    </ItemGroup>
  );
}
