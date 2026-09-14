import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@ovadev-gmbh/ui-ovadev";
import { RocketIcon } from "lucide-react";

const sizes = ["default", "sm", "xs"] as const;

export default function ItemSize() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {sizes.map((size) => (
        <Item key={size} variant="outline" size={size}>
          <ItemMedia variant="icon">
            <RocketIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              Deployment <span className="text-label-13-mono">d-8f3a21c</span>
            </ItemTitle>
            <ItemDescription>api-gateway to ch-zrh-1, 12 of 12 pods ready</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size={size === "xs" ? "xs" : "sm"}>
              Logs
            </Button>
          </ItemActions>
        </Item>
      ))}
    </div>
  );
}
