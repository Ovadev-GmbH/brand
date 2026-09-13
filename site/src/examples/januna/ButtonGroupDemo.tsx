import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-januna";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, ArrowDown01Icon, UserGroupIcon } from "@hugeicons/core-free-icons";

export default function ButtonGroupDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <ButtonGroup>
        <Button variant="outline">Lunch</Button>
        <Button variant="outline">Dinner</Button>
        <Button variant="outline">Late</Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText>
          <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />
          Guests
        </ButtonGroupText>
        <Button variant="outline" size="icon" aria-label="Add guest">
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Confirm booking</Button>
        <ButtonGroupSeparator />
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button size="icon" aria-label="More ways to confirm" />}>
            <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>Confirm and send SMS</DropdownMenuItem>
            <DropdownMenuItem>Confirm and seat now</DropdownMenuItem>
            <DropdownMenuItem>Confirm without notifying</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  );
}
