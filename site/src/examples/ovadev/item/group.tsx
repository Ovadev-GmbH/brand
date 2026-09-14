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

const environments = [
  { name: "Production", host: "acme-logistics.ova.dev", state: "Ready", variant: "secondary" },
  { name: "Staging", host: "acme-logistics.staging.ova.dev", state: "Building", variant: "secondary" },
  { name: "Preview", host: "pr-412.acme-logistics.preview.ova.dev", state: "Failed", variant: "destructive" },
] as const;

export default function ItemGroupExample() {
  return (
    <ItemGroup aria-label="Environments of acme-logistics" className="w-full max-w-md gap-0">
      {environments.map((env, i) => (
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
