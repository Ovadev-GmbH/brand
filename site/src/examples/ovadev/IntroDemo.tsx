import { Badge, Button, Input, InputGroup, InputGroupAddon, InputGroupInput } from "@ovadev-gmbh/ui-ovadev";
import { SearchIcon, PlusIcon } from "lucide-react";

/** The introduction's Components card: a few of the parts, side by side. */
export default function IntroDemo() {
  return (
    <div className="flex max-w-96 flex-col gap-3">
      <div className="flex items-center gap-3">
        <InputGroup className="w-56">
          <InputGroupAddon>
            <SearchIcon className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search the blog" readOnly />
        </InputGroup>
        <Button>
          <PlusIcon data-icon="inline-start" />
          New post
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Input placeholder="2026-09-14" className="w-44 text-label-13-mono" readOnly />
        <Badge variant="outline">Published</Badge>
        <Badge variant="secondary">TICKETOVA</Badge>
      </div>
    </div>
  );
}
