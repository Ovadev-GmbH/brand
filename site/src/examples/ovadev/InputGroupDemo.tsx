import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@ovadev-gmbh/ui-ovadev";
import { SearchIcon } from "lucide-react";

export default function InputGroupDemo() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupInput aria-label="Search the blog" placeholder="Search the blog" />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText className="text-label-13-mono">22 posts</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
