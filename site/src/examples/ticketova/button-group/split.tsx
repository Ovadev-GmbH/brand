import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-ticketova";
import { CaretDownIcon } from "@ovadev-gmbh/ui-ticketova/icons";

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button>Deploy to staging</Button>
      <ButtonGroupSeparator />
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button size="icon" aria-label="Other deploy targets" />}>
          <CaretDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Deploy to preview</DropdownMenuItem>
          <DropdownMenuItem>Deploy to production</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
