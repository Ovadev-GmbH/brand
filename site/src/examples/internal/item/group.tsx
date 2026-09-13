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
} from "@ovadev-gmbh/ui-internal";

const environments = [
  { name: "Production", host: "acme-logistics.ova.dev", state: "ready" },
  { name: "Staging", host: "acme-logistics.staging.ova.dev", state: "active" },
  { name: "Preview", host: "pr-412.acme-logistics.preview.ova.dev", state: "error" },
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
              <StatusDot state={env.state} label titlePrefix={env.name} />
            </ItemActions>
          </Item>
        </React.Fragment>
      ))}
    </ItemGroup>
  );
}
