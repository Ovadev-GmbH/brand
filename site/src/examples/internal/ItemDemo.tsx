import { KeyIcon, RocketIcon, TriangleAlertIcon } from "lucide-react";
import {
  Badge,
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@ovadev-gmbh/ui-internal";

export default function ItemDemo() {
  return (
    <ItemGroup className="max-w-xl">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <RocketIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            Deployment <span className="text-label-13-mono">d-8f3a21c</span>
          </ItemTitle>
          <ItemDescription>api-gateway, eu-central-1. Rolled out 4 minutes ago, 12 of 12 pods ready.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Logs
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="muted" size="sm">
        <ItemMedia variant="icon">
          <TriangleAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Incident INC-0412</ItemTitle>
          <ItemDescription>Elevated 5xx on billing-worker. Mitigated, awaiting post-mortem.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="secondary">Mitigated</Badge>
        </ItemActions>
      </Item>
      <Item size="xs">
        <ItemMedia variant="icon">
          <KeyIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            API key <span className="text-label-12-mono">ova_live_…4f9c</span>
          </ItemTitle>
          <ItemDescription>Last used 2026-09-12 08:41 from 185.12.0.7</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="destructive" size="xs">
            Revoke
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  );
}
