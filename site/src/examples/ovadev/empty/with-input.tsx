import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@ovadev-gmbh/ui-ovadev";
import { SearchIcon } from "lucide-react";

export default function EmptyWithInput() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyTitle>Post not found</EmptyTitle>
        <EmptyDescription>
          No post has the address <span className="text-copy-13-mono">/blog/admission-controll</span>. It may have
          been renamed or unpublished.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search posts" aria-label="Search posts" />
        </InputGroup>
      </EmptyContent>
    </Empty>
  );
}
