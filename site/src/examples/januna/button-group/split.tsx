import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button>Confirm booking</Button>
      <ButtonGroupSeparator />
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button size="icon" aria-label="Other ways to confirm" />}>
          <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-60">
          <DropdownMenuItem>Confirm and text the guest</DropdownMenuItem>
          <DropdownMenuItem>Confirm without a message</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
