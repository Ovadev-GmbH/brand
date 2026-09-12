import { Badge, Button, Input, InputGroup, InputGroupAddon, InputGroupInput, StatusDot } from "@ovadev-gmbh/ui-internal";
import { MagnifyingGlassIcon, PlusIcon } from "@phosphor-icons/react";

/** The introduction's Components card: a few of the parts, side by side. */
export default function IntroDemo() {
  return (
    <div className="flex max-w-96 flex-col gap-3">
      <div className="flex items-center gap-3">
        <InputGroup className="w-56">
          <InputGroupAddon>
            <MagnifyingGlassIcon className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Find a tenant" readOnly />
        </InputGroup>
        <Button>
          <PlusIcon data-icon="inline-start" />
          New key
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Input placeholder="inv_2026_004812" className="w-44 text-label-13-mono" readOnly />
        <Badge variant="outline">
          <StatusDot state="ready" /> Live
        </Badge>
        <Badge variant="secondary">v2.14.0</Badge>
      </div>
    </div>
  );
}
