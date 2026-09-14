import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@ovadev-gmbh/ui-ovadev";
import { CircleAlertIcon, RotateCwIcon } from "lucide-react";

export default function EmptyError() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-surface-danger text-status-danger">
          <CircleAlertIcon />
        </EmptyMedia>
        <EmptyTitle>Posts did not load</EmptyTitle>
        <EmptyDescription>The blog did not answer within 10 s.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <RotateCwIcon data-icon="inline-start" />
          Reload posts
        </Button>
      </EmptyContent>
    </Empty>
  );
}
