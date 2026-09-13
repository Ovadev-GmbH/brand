import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@ovadev-gmbh/ui-internal";
import { RocketIcon } from "lucide-react";

export default function EmptyIcon() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <RocketIcon />
        </EmptyMedia>
        <EmptyTitle>No deployments in eu-central-1</EmptyTitle>
        <EmptyDescription>api-gateway has only been deployed to ch-zrh-1 so far.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Create deployment</Button>
      </EmptyContent>
    </Empty>
  );
}
