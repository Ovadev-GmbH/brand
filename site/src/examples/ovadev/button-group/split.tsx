import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-ovadev";
import { ChevronDownIcon } from "lucide-react";

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button>Publish in English</Button>
      <ButtonGroupSeparator />
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button size="icon" aria-label="Other languages" />}>
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Publish in German</DropdownMenuItem>
          <DropdownMenuItem>Publish in both</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
