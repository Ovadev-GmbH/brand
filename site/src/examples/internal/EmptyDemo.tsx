import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@ovadev-gmbh/ui-internal";
import { KeyIcon, PlusIcon } from "lucide-react";

export default function EmptyDemo() {
  return (
    <Empty className="max-w-xl border border-divider">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <KeyIcon />
        </EmptyMedia>
        <EmptyTitle>No API keys</EmptyTitle>
        <EmptyDescription>
          acme-gmbh has no active keys. Create one to let their integration
          reach the billing API.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex flex-wrap justify-center gap-2">
          <Button>
            <PlusIcon data-icon="inline-start" />
            Create key
          </Button>
          <Button variant="outline">View revoked</Button>
        </div>
      </EmptyContent>
    </Empty>
  );
}
