import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@ovadev-gmbh/ui-januna";

const tables = ["T4 · 2 seats", "T9 · 6 seats", "T15 · 4 seats"];
const shifts = ["Lunch · 11:30 to 14:30", "Dinner · 18:00 to 23:00"];

export default function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Lina Brunner, party of 6</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>Open booking</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Move to table</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {tables.map((table) => (
              <DropdownMenuItem key={table}>{table}</DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Move to shift</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {shifts.map((shift) => (
              <DropdownMenuItem key={shift}>{shift}</DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
