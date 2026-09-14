import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@ovadev-gmbh/ui-ovadev";
import { PlusIcon } from "lucide-react";

export default function EmptyOutline() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyTitle>No press downloads</EmptyTitle>
        <EmptyDescription>The press kit is empty. Add the logo files and a company description for journalists.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <PlusIcon data-icon="inline-start" />
          Add file
        </Button>
      </EmptyContent>
    </Empty>
  );
}
