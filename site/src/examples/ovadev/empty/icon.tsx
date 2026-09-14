import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@ovadev-gmbh/ui-ovadev";
import { BriefcaseIcon } from "lucide-react";

export default function EmptyIcon() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BriefcaseIcon />
        </EmptyMedia>
        <EmptyTitle>No open positions</EmptyTitle>
        <EmptyDescription>Ovadev is three people and is not hiring at the moment.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Write to us anyway</Button>
      </EmptyContent>
    </Empty>
  );
}
